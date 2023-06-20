"use client";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";

import React from "react";

import Cookies from "js-cookie";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    href: "/profile",
  },
];

export default function RightMenu({username}) {
  // client Components
  const router = useRouter();

  // const [name, setName] = React.useState(username)

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = (href) => {
    setIsMenuOpen(false);
    // setCookie(null, 'username', 'kyle-c', {
    //   maxAge: 30 * 24 * 60 * 60,
    //   path: '/',
    // })
    router.push(href);
  };

  const loginOut = () => {
    // destroyC ookie(null, 'username')
    Cookies.remove('username')
    router.refresh();
  };

  // React.useEffect(() => {
  //   setName(username)
  // }, [username]);

  return (
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
          {username?.value}
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
          const isLastItem = key === profileMenuItems.length + 1;
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
        <MenuItem
          onClick={() => loginOut()}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <PowerIcon
            className="h-4 w-4 text-red-500"
            strokeWidth={2}
          ></PowerIcon>
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="inherit"
          >
            退出登录
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
