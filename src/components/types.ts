import { IconType } from "react-icons/lib"

export type OptionType = {
  title: string
  icon?: IconType
  navigate?: string
  active?: boolean
  rightIcon?: boolean
  submenu?: OptionType[]
}
