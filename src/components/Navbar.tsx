import { motion } from "framer-motion";

import { HelpCircleIcon, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./atoms/button";

type Role = "user" | "admin"

interface Props {
  role: Role
}

const Navbar = ({ role }: Props) => {
	const { logout } = useAuth();

	return (
		<motion.div
			className={`animate duration-300 px-5 flex-1 ${
				role == "admin" ? "justify-end" : "justify-between "
			}  bg-white/80 flex h-14 border-b-[1px] border-gray-400`}
		>
			{role == "user" ? (
				<div className='flex items-center gap-2'>
					<img alt='lastdoc logo' src='/logo.png' />
					<p className='font-bold text-xl text-black'>LastDoc</p>
				</div>
			) : null}
			<div className='flex self-center '>
				<Button size={"sm"} variant='link' className='py-2 px-4 gap-2'>
					<HelpCircleIcon />
					<p>Help</p>
				</Button>
				{role == "user" ? (
					<Button size={"sm"} variant='default' className='px-6 gap-2 bg-blue-600'>
						<Link to='/login'>Login</Link>
					</Button>
				) : (
					<Button onClick={logout} size={"sm"} variant='outline' className='py-2 px-4 gap-2'>
						<p>Logout</p>
					</Button>
				)}
			</div>
		</motion.div>
	);
};

export default Navbar;
