import React, { FC } from 'react';

import Logo from '@/components/Logo/Logo';
import Navbar from "@/components/Navbar/Navbar";
import {Button} from "@/components/ui/button";

interface IProps {}

const Sidebar: FC<IProps> = () => {
  return (
    <div className={'w-[100px] py-10 px-2 bg-primary-foreground flex flex-col items-center gap-24'}>
      <Logo />

      <div className={'flex-1'}><Navbar/></div>

      <Button>Logout</Button>
    </div>
  );
};

export default Sidebar;
