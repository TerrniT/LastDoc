import React from "react";

interface Props {
  icon: React.ElementType
  indicator: boolean
  outline: boolean
}
const IconButton = (props: Props) => {
	return (
		<button
			className={`bg-transparent ${
				props.outline && "border border-slate-300"
			} hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 w-11 h-11 rounded flex items-center justify-center relative`}
		>
			<props.icon className='text-neutral-900 h-5 w-5' />
			{props.indicator && (
				<span className='w-4 h-4 absolute -top-2 -right-2 bg-blue-600 rounded-full'>
					<p className='text-xs text-white'>2</p>
				</span>
			)}
		</button>
	);
};

export default IconButton;
