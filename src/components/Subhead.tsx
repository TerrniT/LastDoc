import { Button } from "./atoms/button";
import Options from "./Options";
import { useState } from "react";

const Subhead = () => {
	// mock auth payload
	const [auth, setAuth] = useState<boolean>(false);

	return (
		<div className='flex items-center mt-5 px-4'>
			<Options />
			{auth && (
				<Button size='default' variant='default' className='ml-6 px-6 gap-2 h-12 bg-blue-600'>
					<p>Add New</p>
				</Button>
			)}
		</div>
	);
};

export default Subhead;
