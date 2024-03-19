'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const navLinks = [
  { id: 1, link: '#home', text: 'Home' },
  { id: 2, link: '#features', text: 'Features' },
  { id: 3, link: '#highlights', text: 'Highlights' },
  { id: 4, link: '#pricing', text: 'Pricing' },
];

const LandingNavbar = () => {
  return (
    <div className="relative mx-0 flex items-center justify-between px-4 py-6 md:mx-6 lg:static lg:mx-20 lg:px-20">
      <Link href="/" className="mr-8 flex w-[145px] items-center">
        <Image
          src={`/layout/images/logo-dark.svg`}
          alt="Sakai Logo"
          height={50}
          width={65}
          className="mr-0 lg:mr-2"
        />
        <span className="text-xl font-medium leading-6">SAKAI</span>
      </Link>

      <div className="absolute left-0 z-20 hidden w-full flex-grow items-center justify-between px-6 lg:static lg:flex lg:px-0">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <Link href={nav.link}>
                  <Button
                    className="rounded-full border-none leading-3"
                    variant="ghost"
                  >
                    {nav.text}
                  </Button>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="surface-border mt-3 flex justify-between border-t py-3 lg:mt-0 lg:block lg:border-t-0 lg:py-0">
          <Link href="#login">
            <Button
              className="rounded-full border-none font-bold leading-3 text-blue-500"
              variant="ghost"
            >
              Login
            </Button>
          </Link>

          <Link href="#register">
            <Button className="ml-5 rounded-full border-none bg-blue-500 font-bold leading-3 text-white">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
