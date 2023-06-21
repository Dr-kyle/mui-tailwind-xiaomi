
import Link from "next/link";


import Avatar from "@/components/Avatar";
 
export default async function Header() {
  
  return (
    <div className="mt-2 p-2 rounded-none shadow-sm">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Link className="mr-4 ml-2 cursor-pointer py-1.5 font-misans-demibold" href="/">GPT</Link>
        <Avatar />
      </div>
    </div>
  );
}
