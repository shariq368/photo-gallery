import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "../../public/picture/logo-p.png"


const Navbar = () => {
  return (
    <div>
         <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <Image src={Logo} width={300} height={300} alt="logo"
            className="w-[7rem]"/>
          
          <div className="ml-auto flex items-center space-x-4">
          <Avatar>
  <AvatarImage src="https://www.flaticon.com/free-icon/man_2202112?term=avatar&page=1&position=1&origin=tag&related_id=2202112" />
  <AvatarFallback>SQ</AvatarFallback>
</Avatar>

          </div>
            </div>
            </div>
    </div>
  )
}

export default Navbar



{/* <h1 className="text-3xl font-bold tracking-tight">Photo Gallery</h1> */}