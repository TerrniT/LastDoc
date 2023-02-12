import React from "react";
import { motion } from "framer-motion";
import { OptionType } from "../types";

interface OptionProps {
  animate: any
  link: OptionType
}

const SidebarOption = ({ link, animate }: OptionProps) => {
	return (
		<div
			className={`flex items-center w-full h-12 px-6 mt-2 rounded ${
				link.active ? "bg-gray-700 text-white" : "bg-transparent text-gray-400"
			} hover:bg-gray-700 hover:text-gray-300 cursor-pointer`}
		>
			{link.icon && (
				<link.icon className={`text-lg ${link.active ? "text-gray-50" : "text-white"} `} />
			)}
			<motion.span animate={animate} className='ml-4 text-sm font-bold'>
				{link.title}
			</motion.span>
		</div>
	);
};

export default SidebarOption;
