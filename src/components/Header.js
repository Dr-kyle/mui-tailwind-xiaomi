

// export default function Header() {
//   return (
//     <div> header</div>
//   )
// }



import {
  Navbar,
  Typography
} from "@/components/mui";

import { getUserInfo } from '@/service'


import ProfileMenu from "./Avatar";
 
export default async function Header() {

  const res = await getUserInfo()
  // React.useEffect(() => {
  //   console.log('header init')
  // }, [])
  
  return (
    <Navbar className="mt-2 p-2 rounded-none shadow-sm">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-misans-demibold"
        >
          GPT
        </Typography>
        <ProfileMenu res={res}/>
      </div>
    </Navbar>
  );
}
