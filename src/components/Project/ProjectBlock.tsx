import React from 'react';
import LinkInfo from './LinkInfo';
import Tech from './Tech';
import { ReadmeType } from '.';
import { FaGlobe } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

type ProjectBlockTypes = {
  projectInfo: ReadmeType;
  inverted: boolean;
};

export default function ProjectBlock({
  projectInfo,
  inverted,
}: ProjectBlockTypes) {
  return (
    <div
      className={`flex flex-col items-center gap-6 md:grid ${
        projectInfo.image
          ? `md:grid-cols-[1fr_1fr]`
          : `md:grid-cols-[1fr_0.5fr]`
      }  xxl:w-[80%] md:gap-32 border-[#00050] border-b-[1px] my-6 pb-6 md:my-12 md:pb-12`}
    >
      {projectInfo.image ? (
        <img
          className={` ${inverted ? `md:order-1` : ``}`}
          src={projectInfo.image}
          loading="lazy"
        />
      ) : (
        <div
          className={`${
            inverted ? `md:order-1` : ``
          } order-1 flex flex-wrap justify-center gap-4 md:justify-start`}
        >
          {projectInfo.techs.map((tech) => (
            <Tech key={tech} name={tech} />
          ))}
        </div>
      )}
      <div className="flex flex-col items-center self-start gap-10 md:items-start">
        <h2 className="text-4xl text-center tall:text-5xl md:text-left text-primary xxl:text-6xl">
          {projectInfo.name}
        </h2>
        <h2 className="text-xl text-center md:text-2xl md:text-left text-text">
          {projectInfo.description}
        </h2>

        <div className="flex gap-12">
          <LinkInfo
            Icon={FaGithub}
            title="Código"
            href={projectInfo.repoLink}
          />
          {projectInfo.site ? (
            <LinkInfo Icon={FaGlobe} title="Site" href={projectInfo.site} />
          ) : null}
        </div>

        {projectInfo.image ? (
          <div className="flex flex-wrap justify-center gap-4 xxl:max-w-[80%] md:justify-start">
            {projectInfo.techs.map((tech) => (
              <Tech key={tech} name={tech} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
