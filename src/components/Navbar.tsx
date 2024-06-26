import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "../../public/picture/logo-p.png"
import Img from "../../public/picture/image.png"



const Navbar = () => {
  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <Image src={Logo} width={300} height={300} alt="logo"
            className="w-[7rem]" />

          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <Image src={Img} width={500} height={500} alt="image" 
              />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar




