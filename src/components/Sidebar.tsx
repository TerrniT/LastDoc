import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { User } from "lucide-react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings, FiHelpCircle, FiSearch } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import ProfileDropdown from "./atoms/ProfileDropdown";
import { OptionType } from "./types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SubmenuDropdown from "./atoms/SubmenuDropdown";

const options: OptionType[] = [
	{
		title: "Manage",
		icon: HiOutlineDocumentText,
		rightIcon: true,
		active: true,
		submenu: [
			{ title: "Add", icon: AiOutlineHome },
			{ title: "De", icon: AiOutlineHome },
			{ title: "Add", icon: AiOutlineHome },
		],
	},
	{
		title: "Dashboard",
		icon: AiOutlineHome,
	},
	{
		title: "Search",
		icon: FiSearch,
	},
];

const footerOptions = [
	{
		title: "Help",
		icon: FiHelpCircle,
	},
	{
		title: "Settings",
		icon: FiSettings,
	},
];

const Sidebar = () => {
	const [open, setOpen] = useState<boolean>(true);
	const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
	const controls = useAnimation();
	const controlText = useAnimation();
	const controlTitleText = useAnimation();

	console.log("rerender");

	const showMore = () => {
		controls.start({
			width: "316px",
			transition: { duration: 0.003 },
		});
		controlText.start({
			opacity: 1,
			display: "block",
			transition: { duration: 0.8 },
		});
		controlTitleText.start({
			opacity: 1,
			display: "block",
			transition: { duration: 0.8 },
		});

		setOpen(false);
	};

	const showLess = () => {
		controls.start({
			width: "110px",
			transition: { duration: 0.004 },
		});

		controlText.start({
			opacity: 0,
			display: "none",
		});

		controlTitleText.start({
			opacity: 0,
		});

		setOpen(true);
	};

	useEffect(() => {
		showMore();
	}, []);

	return (
		<div className='flex min-h-screen bg-[#111727]/90'>
			<motion.div
				animate={controls}
				className='max-w-[316px] duration-300 flex flex-col w-full group'
			>
				{!open ? (
					<div className='p-5 flex items-center justify-between h-24 w-full'>
						<div className='flex items-center gap-2'>
							<img alt='lastdoc logo' src='/logo.png' />
							<p className='font-bold text-xl text-white'>LastDoc</p>
						</div>

						<BsArrowRight
							className='text-2xl text-white cursor-pointer w-6 h-6 group-hover:block rotate-180 '
							onClick={showLess}
						/>
					</div>
				) : (
					<div className='flex items-center justify-between h-24 w-full'>
						<div
							className='flex items-center justify-center cursor-pointer mx-auto'
							onClick={showMore}
						>
							<img alt='lastdoc logo' src='/logo.png' />
						</div>
					</div>
				)}

				<div className='w-full flex flex-col justify-between h-full px-1'>
					<ul className='pt-2 px-4'>
						{options.map((menu, index) => (
							<>
								<li
									key={index}
									className={`text-gray-100 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer p-3 my-1 hover:bg-slate-600 rounded-md ${
										open && "rounded-xl"
									} ${menu.active && "bg-slate-600 text-white"}`}
								>
									{menu.icon && (
										<SubmenuDropdown submenu={menu.submenu} open={open}>
											<span className='text-2xl block float-left'>
												<menu.icon />
											</span>
										</SubmenuDropdown>
									)}
									<span className={`text-base font-medium flex-1 duration-200 ${open && "hidden"}`}>
										{menu.title}
									</span>
									{menu.submenu && (
										<IoIosArrowDown
											className={`${
												submenuOpen && "rotate-180 "
											} transition-all duration-100 ease-in-out`}
											onClick={() => setSubmenuOpen(!submenuOpen)}
										/>
									)}
								</li>

								{!open && menu.submenu && submenuOpen && (
									<ul className='pt-2'>
										{menu.submenu.map((subItem, index) => (
											<li
												key={index}
												className='text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-600 rounded-md'
											>
												{subItem.title}
											</li>
										))}
									</ul>
								)}
							</>
						))}
					</ul>
					<div
						className={`flex h-20 mb-4 px-3 transition-all ${
							!open && "bg-slate-600 "
						}  rounded-2xl bg-transparent `}
					>
						{!open ? (
							<>
								<div className='flex px-3 w-full items-center'>
									<div className='flex gap-2 '>
										<img
											src='/profile.png'
											alt='profile picture'
											className={`rounded-full  h-10 w-10 ${!open && "mx-auto"} ${
												!open && "hover:ring-2 hover:ring-indigo-400 hover:cursor-pointer"
											} `}
										/>
										<div className='flex flex-col items-center justify-center'>
											<motion.h1
												animate={controlText}
												className='text-sm bold  text-white transition-all duration-150 whitespace-nowrap'
											>
                        Gleb Kotovsky
											</motion.h1>
											<motion.span
												animate={controlText}
												className='text-xs font-medium w-full transition-all duration-150 text-sky-400 whitespace-nowrap'
											>
                        Admin
											</motion.span>
										</div>
									</div>
									<div className='w-10 flex items-center mx-auto justify-center '>
										<ProfileDropdown />
									</div>
								</div>
							</>
						) : (
							<div className='w-10 flex items-center mx-auto justify-center '>
								<ProfileDropdown>
									<img
										src='/profile.png'
										alt='profile picture'
										className={`rounded-full hover:ring-2 h-10 w-10 self-center ${
											!open && "mx-auto"
										} hover:ring-indigo-400 hover:cursor-pointer `}
									/>
								</ProfileDropdown>
							</div>
						)}
					</div>
				</div>
			</motion.div>

			<motion.div className='animate duration-300 flex-1 flex-col bg-zinc-900  min-h-screen '>
				<motion.div className='animate duration-300 flex-1 border-b-2 border-zinc-900 bg-black flex flex-col h-24'>
					<button
						title='Add link'
						className='flex items-center justify-center self-end my-auto w-auto px-3 py-2 mr-6 font-bold text-black bg-green-400 rounded-lg'
					>
						<User className='text-2xl' />
					</button>
				</motion.div>

				<motion.div className='animate duration-300 flex-1  bg-zinc-900 '></motion.div>
			</motion.div>
		</div>
	);
};

export default Sidebar;
