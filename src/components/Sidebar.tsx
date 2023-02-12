import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { User } from "lucide-react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import SidebarOption from "./atoms/SidebarOption";

const options = [
	{
		title: "Dashboard",
		icon: AiOutlineHome,
		active: true,
	},
	{
		title: "Popular",
	},
	{
		title: "Most Upvoted",
	},
	{
		title: "Best Discussions",
	},
	{
		title: "Search",
	},
];

const footerOptions = [
	{
		title: "Docs",
	},
	{
		title: "Changelog",
	},
	{
		title: "Feedback",
	},
	{
		title: "Invite people",
	},
];

const Sidebar = () => {
	const [active, setActive] = useState(false);
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
			transition: { delay: 0.3 },
		});
		controlTitleText.start({
			opacity: 1,
			transition: { delay: 0.3 },
		});

		setActive(true);
	};

	const showLess = () => {
		controls.start({
			width: "110px",
			transition: { duration: 0.001 },
		});

		controlText.start({
			opacity: 0,
			display: "none",
		});

		controlTitleText.start({
			opacity: 0,
		});

		setActive(false);
	};

	useEffect(() => {
		showMore();
	}, []);

	return (
		<div className='flex min-h-screen bg-[#111727]/90'>
			<motion.div
				animate={controls}
				className='max-w-[316px] animate duration-300 border-r-2 border-gray-800 relative flex flex-col min-h-screen group'
			>
				{active ? (
					<div className='p-5 flex items-center justify-between h-24 w-full'>
						<div className='flex items-center gap-2'>
							<svg
								className='w-8 h-8 fill-current text-white'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
							</svg>
							<p className='font-bold text-xl text-white'>LastDoc</p>
						</div>

						<BsArrowRight
							className='text-2xl text-white cursor-pointer w-8 h-8 group-hover:block rotate-180 '
							onClick={showLess}
						/>
					</div>
				) : (
					<div className='p-6 flex  items-center justify-between h-24 w-full'>
						<div className='flex items-center justify-center cursor-pointer' onClick={showMore}>
							<svg
								className='w-8 h-8 fill-current text-white'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
							</svg>
						</div>
					</div>
				)}
				<div className='w-full px-2'>
					<div className='flex flex-col w-full mt-2'>
						{options.map((link, index) => (
							<div key={index}>
								<SidebarOption animate={controlText} link={link} />
							</div>
						))}
					</div>

					<div className='flex flex-col w-full mt-2'>
						{footerOptions.map((link, index) => (
							<div key={index}>
								<SidebarOption animate={controlText} link={link} />
							</div>
						))}
					</div>

					<div className='flex gap-2'>
						<div className='border border-gray-600 rounded-full w-10 h-10 flex items-center justify-center'>
							<img src='/vite.svg' alt='profile picture' width={30} height={30} />
						</div>
						<div>
							<motion.h1 animate={controlText} className='text-sm font-bold'>
                Gleb Kotovsky
							</motion.h1>
							<motion.p
								animate={controlText}
								className='text-xs text-zinc-700 font-medium transition-all duration-150'
							>
                UI/UX Designer
							</motion.p>
						</div>
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
