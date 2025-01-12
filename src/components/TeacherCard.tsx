// components/TeacherCard.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeacherCardProps {
    teacher: {
        name: string;
        role: string;
        image: string;
        bio: string;
        link?: string;
    };
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const cardStyle = `relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-cover bg-center h-[350px]`;
  const textOverlayStyle = `absolute inset-0 flex items-end p-4 text-white bg-gradient-to-t from-black to-transparent`;

  if (teacher.link) {
      return (
         <Link href={teacher.link} className="block">
             <div
                 className={cardStyle}
                 style={{ backgroundImage: `url(${teacher.image})` }}
             >
                 <div className={textOverlayStyle}>
                    <div>
                       <h3 className="text-base font-semibold mb-1">{teacher.name}</h3>
                       <p className="text-sm mb-1">{teacher.role}</p>
                       <p className="text-xs">{teacher.bio}</p>
                   </div>
                 </div>
             </div>
         </Link>
      );
    }
    return (
      <div
          className={cardStyle}
            style={{ backgroundImage: `url(${teacher.image})` }}
      >
          <div className={textOverlayStyle}>
             <div>
                <h3 className="text-base font-semibold mb-1">{teacher.name}</h3>
               <p className="text-sm mb-1">{teacher.role}</p>
              <p className="text-xs">{teacher.bio}</p>
            </div>
         </div>
       </div>
      );
};

export { TeacherCard };