import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@/components/mui";

import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

import Layout from "@/components/Layout";
import { cookies } from 'next/headers'
import Dashboard from "@/components/Dashboard";
import { getAppList } from "@/service/backendService";


export default async function Home() {

  const cookieStore = cookies()

  const appList = await getAppList()

  return (
    <Layout>
      <div className="flex flex-col items-center justify-between p-24">
        <div>
          <p className=''>小米字体</p>
          <p className=''>小米字体</p>
          <p className='font-misans-demibold'>正常字体</p>
        </div>
        <div>
        <Menu>
        <MenuHandler>
          <Avatar
            variant="circular"
            alt="candice wu"
            className="cursor-pointer"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center gap-2">
            <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              Edit Profile
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              Inbox
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              Help
            </Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 ">
            <PowerIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
        </div>
      </div>
      <div>
        {cookieStore.getAll().map((cookie) => (
          <div key={cookie.name}>
            <p>Name: {cookie.name}</p>
            <p>Value: {cookie.value}</p>
          </div>
        ))}
      </div>
      <div>
        {appList.data.map(i => (
          <div key={i}>
            <p>Name: {i}</p>
          </div>
        ))}
      </div>
      <div>
        <Dashboard></Dashboard>
      </div>
    </Layout>
  )
}
