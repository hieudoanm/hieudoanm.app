import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

const icons: Record<string, any> = {
  facebook: <FacebookIcon fontSize="medium" className="text-[#1877f2]" />,
  twitter: <TwitterIcon fontSize="medium" className="text-[#1da1f2]" />,
  github: <GitHubIcon fontSize="medium" className="text-[#333333]" />,
};

export const Member: React.FC<{
  avatar: StaticImageData;
  name?: string;
  role?: string;
  socialLinks?: any[];
}> = ({ avatar, name = '', role = '', socialLinks = [] }) => {
  return (
    <div>
      <Image src={avatar} alt={name} className="rounded-xl border" />
      <div className="text-center">
        <h2 className="mt-4 text-lg font-medium md:text-2xl">{name}</h2>
        <p className="mt-2 text-sm text-gray-500 md:text-lg">{role}</p>
      </div>
      {socialLinks.length > 0 ? (
        <div className="mt-2 flex gap-2">
          {socialLinks.map((socialLink: any) => {
            return (
              <Link key={socialLink.name} href={socialLink.link}>
                {icons[socialLink.name]}
              </Link>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Member;
