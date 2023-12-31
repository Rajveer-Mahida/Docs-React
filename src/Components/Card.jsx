/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, cardRef }) => {
  return (
    <motion.div
      drag
      dragConstraints={cardRef}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
      className='relative w-52 h-60  rounded-[25px] bg-zinc-800/90 text-teal-100 m-4 px-3 py-5 overflow-hidden'
    >
      <FaRegFileAlt />
      <p className='leading-tight text-sm mt-3 font-semibold text-teal-100'>{data.desc}</p>
      <div className='footer absolute w-full left-0 bottom-0 '>
        <div className='flex align-center justify-between mx-2 my-3   p-2 rounded-md'>
          <h5 className='text-sm'> {data.fileSize ? data.fileSize : "Fetching The Size..."}</h5>
          <span
            className={`bg-zinc-200 w-6 h-6 rounded-full flex items-center justify-center ${
              data.fileSize == null ? "cursor-wait" : "cursor-pointer"
            }  `}
          >
            {data.close ? <IoMdClose color='#000' /> : <HiOutlineDocumentDownload color='#000' />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`w-full py-3 ${
              data.tag.tagColor == "green" ? "bg-green-500" : "bg-blue-500"
            } flex items-center justify-center font-semibold text-md cursor-pointer select-none`}
          >
            {data.tag.tagTitle}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
