"use client"
import Image from "next/image";
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from "react";

interface uploadImage {
  event: "success";
  info: { public_id: string };
}

export default function Home() {
  const [imageId, setImageId] = useState('cld-sample-3')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="yvkqb6xf" onUpload={(result) => {
        let res = result as uploadImage
        setImageId(res.info.public_id);
      }} />
      {/* view image */}
      <CldImage
        width="400"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />


    </main>
  );
}
