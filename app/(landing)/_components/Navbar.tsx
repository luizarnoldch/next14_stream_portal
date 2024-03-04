"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Button } from "keep-react";


const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="!py-5 absolute w-full">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <Image src="/images/keep.svg" alt="keep" width="100" height="40" />
        </Navbar.Brand>
        <Navbar.Container className="flex gap-1">
          <Button size="sm" type="primary">
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavbarComponent;
