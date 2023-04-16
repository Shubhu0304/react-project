import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type InfoCardProps = {
  img: any;
  location: any;
  description: any;
  title: any;
  star: number;
  price: any;
  total: any;
};

const InfoCard: React.FC<InfoCardProps> = ({
  img,
  location,
  description,
  title,
  star,
  price,
  total,
}) => {
  return (
    <motion.div
      initial={{
        y: -50,
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="flex flex-col md:flex-row md:items-center py-5 px-2 pr-4 border-b border-gray-800 hover:bg-gray-900 hover:bg-opacity-90 cursor-pointer transition duration-200 ease-in-out"
    >
      <div className="relative w-full h-52 md:w-80 md:h-64 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl md:rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow pt-4 md:pl-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-gray-400">{location}</p>
          <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500" />
        </div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <div className="border-b w-8 border-gray-400 mb-2" />
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-sm text-gray-400">
            <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
            <span>{star}</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-white pb-1 lg:text-2xl">
              ${price} / night
            </p>
            <p className="text-right text-gray-400 text-xs">
              Total: ${total}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
