

// export default function Header() {
//   return (
//     <div> header</div>
//   )
// }
import {
  Navbar,
  Typography
} from "@/components/mui";
// import {
//   Navbar,
//   Typography
// } from "@material-tailwind/react"


import Avatar from "@/components/Avatar";
 
export default async function Header() {
  
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
        <Avatar />
      </div>
    </Navbar>
  );
}
