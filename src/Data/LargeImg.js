import { useEffect, useState } from "react";

const LargeUrl =
  "http://localhost:4000/file-bucket/1583694115775lower-abs1.jpg";

const LargeImg = () => {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(LargeUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };


  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="flex justify-center">
      <img src={img} className="h-[120%] w-[100%] object-cover" />
    </div>
  );
};

export default LargeImg;
