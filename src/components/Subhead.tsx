import { Button } from "./atoms/button";
import Options from "./Options";

const Subhead = () => {
	return (
		<div className='flex items-center  px-4'>
			<Options />
			<Button size='default' variant='default' className='px-6 gap-2 h-12 bg-blue-600'>
				<p>Add New</p>
			</Button>
		</div>
	);
};

export default Subhead;
