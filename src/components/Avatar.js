import RightMenu from "@/components/RightMenu";
import Link from "next/link";
import { cookies } from 'next/headers'

export default function Avatar() {
  const cookieStore = cookies()
  const username = cookieStore.get('username')
  console.log('Avatar username', username)
  return (
    <>
      { username ? 
        <RightMenu username={username}></RightMenu> : 
        <div className="cursor-pointer flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-auto"><Link href="/login">Login</Link></div>
      }
    </>
  );
}