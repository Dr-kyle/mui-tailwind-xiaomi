"use client";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";


import { useRouter } from 'next/navigation'

import React from "react";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    href: '/profile'
  },
  // {
  //   label: "Edit Profile",
  //   icon: Cog6ToothIcon,
  //   href: '/',
  // },
  // {
  //   label: "Inbox",
  //   icon: InboxArrowDownIcon,
  //   href: '/',
  // },
  // {
  //   label: "Help",
  //   icon: LifebuoyIcon,
  //   href: '/',
  // },
  {
    label: "Sign Out",
    icon: PowerIcon,
    href: '/',
  },
];
 
export default function ProfileMenu({res}) {

  const router = useRouter()

  const [test, setTest] = React.useState(true)

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = (href) => {
    setIsMenuOpen(false)
    router.push(href)
  }

  React.useEffect(() => {
    console.log('res', res)
  }, [])
 
  return (

    <>
    {res.index % 2 == 0 ? 

    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
          <div className="cursor-pointer flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-auto">
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </div>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, href }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => closeMenu(href)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu> : <div className="cursor-pointer flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-auto">Login</div>}
        
    </>
  );
}