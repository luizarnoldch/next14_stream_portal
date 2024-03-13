"use client";
import dynamic from 'next/dynamic'
import 'aws-amplify/auth/enable-oauth-listener';
import Image from "next/image";
import { Navbar, Avatar, Button } from "keep-react";
import { SignOut } from "phosphor-react";
import { signOut  } from "aws-amplify/auth";
import { Skeleton } from "keep-react";

import useAuth from '@/lib/auth-store';

const AuthName = dynamic(() => import('./AuthName'), { 
  ssr: false,
  loading: () => (
    <Skeleton className='w-48'>
      <Skeleton.Line height="h-5 my-2" />
    </Skeleton>),
},)

const NavbarComponent = () => {
  const user = useAuth((state) => state.user)

  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image
              src="/images/keep.svg"
              alt="keep"
              width="100"
              height="40"
              priority
            />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-4 justify-center items-center">
          <AuthName
            name={user?.name ?? ''}
          />
          <Avatar shape="circle" />
          <Button size="sm" type="primary" onClick={() => signOut()}>
            <SignOut size={24} />
          </Button>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavbarComponent