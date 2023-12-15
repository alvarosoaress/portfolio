import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectBlock from './ProjectBlock';
import Section from '../Section';
import { useLanguage } from '../Text/LanguageProvider';

type GithubEventType = {
  id: string;
  type: string;
  repo: {
    id: number;
    name: string;
    url: string;
  };
  public: boolean;
  created_at: string;
};

type RepositoryType = {
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  created_at: string;
  default_branch: string;
  description: string;
  disabled: boolean;
  full_name: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string;
  hooks_url: string;
  html_url: string;
  id: number;
  language: string;
  license?: string;
  name: string;
  node_id: string;
  open_issues: number;
  open_issues_count: number;
  private: boolean;
  pushed_at: string;
  size: number;
  topics?: string[];
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
};

export type ReadmeType = {
  repoLink: string;
  name: string;
  lines?: string[];
  available?: string | null;
  description: string;
  image?: string;
  techs: string[];
  site?: string;
  priority?: string;
};

export default function Project() {
  const { translated } = useLanguage();

  const [projects, setProjects] = useState<ReadmeType[]>([]);
  const [manyProjects, setManyProjects] = useState<number>(0);

  const githubApi = axios.create({
    baseURL: 'https://api.github.com/users/alvarosoaress',
  });

  useEffect(() => {
    async function hasUpdate(): Promise<boolean | undefined> {
      try {
        const { data } = await githubApi.get<GithubEventType[]>('/events');

        const lastUpdate = localStorage.getItem('update');
        const currentUpdate = data.find((value) => value.type === 'PushEvent')
          ?.created_at;

        if (!currentUpdate) {
          console.error('GitHub response is missing "updated_at" field.');
          return undefined;
        }

        if (!lastUpdate || new Date(lastUpdate) < new Date(currentUpdate)) {
          localStorage.setItem('update', currentUpdate);
          return true;
        }

        return false;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error checking for updates:', error.message);
          throw error;
        }
      }
    }

    function organizeReadme(
      readme: ReadmeType,
      readmeData: string | null,
      repoName: string,
    ) {
      readme.lines = readmeData?.split('\n').slice(-9, -2);

      readme.available = readme.lines?.[readme.lines?.length - 1];

      if (readme.lines && readme.available === 'available') {
        readme.description = readme.lines?.[readme.lines?.length - 2];

        readme.image = readme.lines?.[readme.lines?.length - 3];

        readme.techs = readme.lines?.[readme.lines?.length - 4].split(';');

        readme.site = readme.lines?.[readme.lines?.length - 5];

        readme.priority = readme.lines?.[readme.lines?.length - 6];

        readme.name = readme.lines?.[readme.lines?.length - 7];

        readme.repoLink = `https://github.com/alvarosoaress/${repoName
          .replace(' ', '-')
          .toLocaleLowerCase()}/`;

        if (readme.available !== null) {
          setProjects((prev) =>
            [...prev, readme].sort(
              (a, b) => Number(a.priority) - Number(b.priority),
            ),
          );

          return readme;
        }
      }
    }

    async function getRepoReadme(repo: RepositoryType) {
      const readme: ReadmeType = {
        repoLink: '',
        name: '',
        lines: [],
        available: null,
        description: '',
        image: '',
        techs: [''],
        site: '',
        priority: '',
      };

      const readmeLinkBR = `https://raw.githubusercontent.com/alvarosoaress/${repo.name}/${repo.default_branch}/README.md`;
      const readmeLinkUS = `https://raw.githubusercontent.com/alvarosoaress/${repo.name}/${repo.default_branch}/README-EN.md`;

      try {
        const { data: readmeData } = await axios.get<string | null>(
          readmeLinkBR,
        );

        return organizeReadme(readme, readmeData, repo.name);
      } catch (error) {
        try {
          if (error instanceof Error) {
            console.info(
              `${repo.name} does not have BR README.md`,
              error.message,
            );
          }

          const { data: readmeData } = await axios.get<string | null>(
            readmeLinkUS,
          );

          return organizeReadme(readme, readmeData, repo.name);
        } catch (error) {
          if (error instanceof Error) {
            console.info(
              `${repo.name} does not have EN README.md`,
              error.message,
            );
          }

          return null;
        }
      }
    }

    async function getReadmeInfo() {
      const fetchUpdates = await hasUpdate();

      if (fetchUpdates) {
        try {
          const { data: repos } =
            await githubApi.get<RepositoryType[]>('/repos');

          const readmes = await Promise.all(
            repos.map((repo) => getRepoReadme(repo)),
          );
          const filteredReadmes = readmes
            .filter(Boolean)
            .sort(
              (a, b) => Number(a?.priority) - Number(b?.priority),
            ) as ReadmeType[];

          localStorage.setItem('projects', JSON.stringify(filteredReadmes));
          setProjects(filteredReadmes);
          setManyProjects(Math.min(filteredReadmes.length, 3));
        } catch (error) {
          if (error instanceof Error) {
            console.error('Error fetching data:', error.message);
            throw error;
          }
        }
      } else {
        const localProjects = JSON.parse(
          localStorage.getItem('projects') || '[]',
        );
        setProjects(localProjects);
        setManyProjects(Math.min(localProjects.length, 3));
      }
    }

    getReadmeInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section sectionName={'projects'} className="!snap-none !snap-align-none">
      <h1 className="mx-5 my-10 text-5xl text-center md:my-20 text-primary md:text-left md:text-5xl xxl:text-6xl">
        {translated.projectTitle}
      </h1>

      {projects.slice(0, manyProjects).map((project, index) => (
        <ProjectBlock
          key={project.name}
          projectInfo={project}
          inverted={!!(index % 2)}
        />
      ))}

      {manyProjects ? (
        <div>
          <button
            className={`p-4 text-2xl border-2  md:p-5 md:text-3xl rounded-xl text-primary border-primary
            hover:bg-primary hover:text-background hover:scale-10`}
            onClick={() =>
              manyProjects === 3
                ? setManyProjects(projects.length)
                : setManyProjects(3)
            }
          >
            {manyProjects === 3
              ? translated.moreProjects
              : translated.lessProjects}
          </button>
        </div>
      ) : null}
    </Section>
  );
}
