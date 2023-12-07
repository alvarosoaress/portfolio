import React from 'react';

export default function Tech({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center gap-2 p-2 rounded-md w-fit bg-text">
      <img
        src={`https://cdn.simpleicons.org/${name.toLowerCase()}/white`}
        // src={`https://deviconapi.vercel.app/${name.toLowerCase()}?size=22&color=white`}
        width={22}
        height={22}
        className="object-contain"
      />

      <span className="font-sans text-sm font-semibold text-background md:text-md">
        {name}
      </span>
    </div>
  );
}
