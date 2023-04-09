import React from "react"

interface Props {
  text: string
}
const Title = (props: Props) => {
	return (
		<div className='w-full px-4 py-6'>
			<h1 className='text-3xl font-bold'>{props.text}</h1>
		</div>
	)
}

export default Title
