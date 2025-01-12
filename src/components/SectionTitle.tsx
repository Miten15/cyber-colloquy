// src/components/SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
    preTitle?: string;
    title: string;
    children?: React.ReactNode;
}

 const SectionTitle: React.FC<SectionTitleProps> = ({
     preTitle,
     title,
     children,
  }) => {
  return (
     <>
       {preTitle && <p className="text-indigo-600 font-bold text-lg">{preTitle}</p>}
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl dark:text-white">
             {title}
        </h2>
         {children && <div className="max-w-2xl py-4">{children}</div>}
      </>
   );
};

export { SectionTitle };