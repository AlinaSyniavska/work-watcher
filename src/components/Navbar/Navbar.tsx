import React, { FC } from 'react';
import Link from 'next/link';
import { ClipboardList, Clock, LayoutDashboard, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {routes} from "@/constants";

interface IProps {}

const Navbar: FC<IProps> = () => {
  const currentPath = usePathname();

  return (
    <section>
      <div className={'flex flex-col items-center justify-center gap-y-3'}>
        <Link href={routes.home} className={`${currentPath === routes.home ? 'text-white' : ''}`}>
          <div className={'p-3 hover:rounded-full hover:bg-white/25 hover:text-white'}>
            <LayoutDashboard className={'h-5 w-5'} />
          </div>
        </Link>

        <Link href={routes.efforts} className={`block ${currentPath === routes.efforts ? 'text-white' : ''}`}>
          <div className={'p-3 hover:rounded-full hover:bg-white/25 hover:text-white'}>
            <Clock className={'h-5 w-5'} />
          </div>
        </Link>

        <Link href={routes.tasks} className={`${currentPath === routes.tasks ? 'text-white' : ''}`}>
          <div className={'p-3 hover:rounded-full hover:bg-white/25 hover:text-white'}>
            <ClipboardList className={'h-5 w-5'} />
          </div>
        </Link>

        <Link href={routes.settings} className={`${currentPath === routes.settings ? 'text-white' : ''}`}>
          <div className={'p-3 hover:rounded-full hover:bg-white/25 hover:text-white'}>
            <Settings className={'h-5 w-5'} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
