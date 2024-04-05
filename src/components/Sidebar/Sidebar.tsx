'use client'

import React, { FC } from 'react';

import Logo from '@/components/Logo/Logo';
import Navbar from "@/components/Navbar/Navbar";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";

interface IProps {}

const Sidebar: FC<IProps> = () => {
  const logout = () => {
    console.log('Logout!')
  };

  return (
    <div className={'w-[100px] py-10 px-2 bg-primary-foreground flex flex-col items-center gap-24 text-white/50'}>
      <Logo />

      <div className={'flex-1'}><Navbar/></div>

      <Button variant="customGhost" size="icon" onClick={logout}>
        <LogOut />
      </Button>
    </div>
  );
};

export default Sidebar;
