import React, { ReactNode } from "react"
import { OptionType } from "../types"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./dropdown"

interface SubmenuProps {
  children: ReactNode
  submenu?: OptionType[]
  open: boolean
}

const SubmenuDropdown = ({ children, submenu, open }: SubmenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{children}</DropdownMenuTrigger>

			{submenu && open && (
				<DropdownMenuContent>
					{submenu.map((item, index) => (
						<DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	)
}

export default SubmenuDropdown
