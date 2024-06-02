import cloudinary from "cloudinary"
const Page = async () => {
    const folders = await cloudinary.v2.api.root_folders()
    return (
        <div>
            <div className='py-4 px-5'>
                <h2 className=" text-3xl font-semibold tracking-tight">
                    Picture Albums
                </h2>

            </div>
        </div>
    )
}

export default Page