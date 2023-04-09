import React, { useState } from "react"
import { motion } from "framer-motion"
import { OptionType } from "../types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

interface OptionProps {
  animate: any
  link: OptionType
  active: boolean
}

const SidebarOption = ({ link, animate, active }: OptionProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div
			className={`flex flex-col w-full  h-full mt-2 rounded ${
				link.active ? "bg-slate-600 text-white" : "bg-transparent text-gray-500"
			} ${
				!link.active && "hover:bg-slate-600"
			}  hover:text-gray-300 cursor-pointer justify-between `}
		>
			<div
				className={`flex justify-center px-3 py-4 my-2 ${
					link.active ? "text-gray-200" : ""
				} items-center h-10 ${active && "justify-between"}`}
			>
				<div className='flex items-center justify-center '>
					{link.icon && (
						<link.icon
							className={`text-lg ${
								link.active ? "text-inherit" : "hover:text-gray-500"
							} h-5 w-5 mx-auto `}
						/>
					)}
					<motion.span animate={animate} className='ml-2 text-sm font-bold'>
						{link.title}
					</motion.span>
				</div>

				{link.rightIcon && active && <IoIosArrowDown onClick={() => setIsOpen(!isOpen)} />}
			</div>

			{link.submenu && isOpen && (
				<ul className='w-full bg-[#282E3C] '>
					{link.submenu.map((item) => (
						<li
							key={item.title}
							className={`flex p-5 text-sm flex-col items-start w-full h-14 mt-2 rounded ${
								link.active ? " text-white" : " text-gray-200"
							}hover:bg-slate-600 hover:text-gray-800 cursor-pointer justify-between`}
						>
							{item.title}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SidebarOption
