import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icons from "../../public/picture/icon.png"


const Navbar = () => {
  return (
    <div>
         <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">Photo Gallery</h1>
          <div className="ml-auto flex items-center space-x-4">
          <Avatar>
  <AvatarImage src="https://icons8.com/illustrations/illustration/willowy-icon-picture" />
  <AvatarFallback>SQ</AvatarFallback>
</Avatar>

          </div>
            </div>
            </div>
    </div>
  )
}

export default Navbar