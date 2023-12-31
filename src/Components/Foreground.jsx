import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const cardRef = useRef(null);

  const data = [
    {
      key: 1,
      desc: "Top Interview Questions Of ReactJS",
      textColor: "#e9c31a",
      fileSize: "0.8 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      key: 2,
      desc: "Question Bank Of Javascript",
      fileSize: null,
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Fetching The Size...",
        tagColor: "green",
      },
    },
    {
      key: 3,
      desc: "Question Bank Of HTML",
      fileSize: "1 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      key: 4,
      desc: "Unknown File",
      fileSize: "1000 TB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download With Fast Server",
        tagColor: "green",
      },
    },
  ];

  return (
    <div ref={cardRef} className='w-full h-screen fixed top-0 left-0 flex flex-wrap gap-0  '>
      {data.map((item, index) => (
        <Card data={item} key={index} cardRef={cardRef} />
      ))}
    </div>
  );
};

export default Foreground;
