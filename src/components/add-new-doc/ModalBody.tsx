import { Label } from "@radix-ui/react-dropdown-menu";
import Input from "../../components/atoms/Input";
import ModalSelect from "./ModalSelect";
import ModalUploader from "./ModalUploader";

const ModalBody = () => {
	return (
		<div className='mt-6'>
			<p className='text-sm text-gray-500'>
				<div className='mb-3'>
					<Label className='text-black font-medium pb-2'>Title</Label>
					<Input placeholder='Search' />
				</div>

				<div className='mb-3'>
					<Label className='text-black font-medium pb-2'>Status</Label>
					<ModalSelect />
				</div>

				<div className='mb-3'>
					<Label className='text-black font-medium pb-2'>Upload</Label>
					<ModalUploader />
				</div>
			</p>
		</div>
	);
};

export default ModalBody;
