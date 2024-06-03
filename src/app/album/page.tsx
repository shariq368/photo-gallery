import cloudinary from "cloudinary"
import FloderList from "./FloderList"

export interface FolderType{
    name:string
    path:string
}

const Page = async () => {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders: FolderType[];
    };

    return (
        <div>
            <div className='py-4 px-5'>
                <h2 className=" text-3xl font-semibold tracking-tight">
                    Picture Albums
                </h2>

            </div>
            {/* data folders */}
            <div className="px-5 py-4 grid grid-cols-3 gap-4">
                {folders.map((item,i)=>{
                    return(
                        <div key={i}>
                    <FloderList folder={item}/>
                        </div>
                    );
                   

                })}
                

            </div>
        </div>
    )
}

export default Page