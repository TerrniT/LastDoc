import { IconType } from "react-icons/lib"

interface Props {
  icon: IconType
  placeholder: string
  width?: string
}

const Input = (props: Props) => {
  return (
    <div
      className={`relative flex items-center justify-center ${
        props.width ? props.width : "w-full"
      } w-full`}
    >
      <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
        {props.icon && <props.icon className='text-gray-400 w-4 h-4' />}
      </div>
      <input
        type='text'
        id='email-address-icon'
        className={
          "bg-white border  w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-11 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input
