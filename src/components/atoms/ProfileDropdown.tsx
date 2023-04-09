import { useAuth } from "../../hooks/useAuth"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown"

const ProfileDropdown = ({ children }: any) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{children}
				{!children && (
					<div className='flex flex-col h-6 w-4 text-white'>
						<IoIosArrowUp />
						<IoIosArrowDown />
					</div>
				)}
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Log Out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ProfileDropdown
