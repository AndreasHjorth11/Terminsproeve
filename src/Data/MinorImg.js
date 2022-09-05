import { useEffect, useState } from "react";

const imageUrl = "http://localhost:4000/file-bucket/1583694085563weights1.jpg";
const image1Url = "http://localhost:4000/file-bucket/1583694079221aerobics1.jpg";
const image2Url = "http://localhost:4000/file-bucket/1583694089577spinning1.jpg";

const MinorImg = () => {
  const [img, setImg] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  const fetchImage1 = async () => {
    const res = await fetch(image1Url);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg1(imageObjectUrl);
  };

  const fetchImage2 = async () => {
    const res = await fetch(image2Url);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg2(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
    fetchImage1();
    fetchImage2();
  }, []);

  return (
    <div className="flex justify-center ml-[100px] mr-[-100px]">
      <img src={img} className="rounded-3xl h-full w-[50%] object-cover" />
      <img src={img1} className="rounded-3xl h-[170px] w-[50%] ml-[5%] object-cover" />
      <img src={img2} className="rounded-3xl h-[170px] w-[50%] ml-[5%] object-cover" />
    </div>
  );
};

export default MinorImg;
