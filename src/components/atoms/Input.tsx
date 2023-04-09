import { IconType } from "react-icons/lib"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
  placeholder: string
  width?: string
  type: string
}

const Input = ({ width, placeholder, value, onChange, ...rest }: Props) => {
	return (
		<div>
			<div
				className={`relative flex items-center justify-center ${width ? width : "w-full"} w-full`}
			>
				{rest.icon && (
					<div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
						{rest.icon && <rest.icon className='text-gray-400 w-4 h-4' />}
					</div>
				)}
				<input
					value={value}
					onChange={onChange}
					type='text'
					id='email-address-icon'
					className={`bg-white border ring-1 w-full ring-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block  h-11 ${
						rest.icon && "pl-10"
					} p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 `}
					placeholder={placeholder}
				/>
			</div>
		</div>
	)
}

export default Input
