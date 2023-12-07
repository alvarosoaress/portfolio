import React from 'react';
import IconOpenNewTab from '../../assets/IconOpenNewTab';

type LinkInfoTypes = {
  title: string;
  href: string;
  Icon: React.FC<Partial<HTMLDivElement>>;
};

export default function LinkInfo({ title, Icon, href }: LinkInfoTypes) {
  return (
    <a
      aria-label="Project external link"
      href={href}
      target="_blank"
      className="flex items-center justify-center p-[2px] px-[4px] border-2 rounded-xl w-fit border-primary hover:bg-primary group hover:scale-105"
      rel="noreferrer"
    >
      <div className="relative">
        <Icon className="mr-1 text-2xl transition-all duration-75 ease-in-out text-primary group-hover:fill-white" />
      </div>

      <span className="p-2 text-xl md:text-2xl text-text group-hover:text-white">
        {title}
      </span>
      <IconOpenNewTab
        width="20"
        height="20"
        color="#B9723C"
        className="mr-1 transition-all duration-75 ease-in-out group-hover:fill-white"
      />
    </a>
  );
}
