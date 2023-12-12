import React from 'react';

//TODO Make a list of frameworks/languages that doesn't have a icon and set a default icon for each one

export default function Tech({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center gap-2 p-2 rounded-md w-fit bg-text">
      <img
        src={
          name === 'ReactNative'
            ? `https://cdn.simpleicons.org/react/white`
            : `https://cdn.simpleicons.org/${name.toLowerCase()}/white`
        }
        alt="Tech icon"
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
