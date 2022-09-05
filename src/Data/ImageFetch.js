import { useEffect, useState } from "react";

const imageUrl =
  "http://localhost:4000/file-bucket/1583694115775lower-abs1.jpg";

const ImageFetch = () => {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };


  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="flex justify-center">
      <img src={img} className="rounded-3xl h-full w-[90%] object-cover" />
    </div>
  );
};

export default ImageFetch;
