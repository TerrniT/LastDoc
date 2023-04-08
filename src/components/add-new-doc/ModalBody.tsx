import { useState, ChangeEvent } from "react";
import { Button } from "../../components/atoms/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import Input from "../../components/atoms/Input";
import ModalSelect from "./ModalSelect";
import ModalUploader from "./ModalUploader";
import { supabase } from "../../lib/client";

interface Props {
  closeModal: () => void
}

const ModalBody = ({ closeModal }: Props) => {
	const [file, setFile] = useState<File | null>(null);
	const [status, setStatus] = useState<string>("Relevant");
	const [title, setTitle] = useState<string>("");

	console.log({
		title,
		status,
		file,
	});

	async function handleFileUpload(file: File | null) {
		if (file == null) return;

		const { data, error } = await supabase.storage.from("documents").upload(file.name, file);

		if (error) {
			console.log(error);
			return;
		}

		const { data: pdfData, error: pdfError } = await supabase
			.from("documents")
			.insert([{ title: "Title", status: "Pending", url: data.path }])
			.single();

		if (pdfError) {
			console.log(pdfError);
			return;
		}

		console.log(`PDF file uploaded: ${pdfData}`);
	}

	return (
		<div className='mt-6'>
			<p className='text-sm text-gray-500'>
				<div className='mb-3'>
					<Label className='text-black font-medium pb-2'>Title</Label>
					<Input
						placeholder='Search'
						type='text'
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				</div>

				<div className='mb-3'>
					<Label className='text-black font-medium pb-2'>Status</Label>
					<ModalSelect setStatus={setStatus} />
				</div>

				<div className='mb-3'>
					<Label className='text-black font-medium pb-2'>Upload</Label>
					<ModalUploader setFile={setFile} file={file} />
				</div>

				<div className='mt-4 flex justify-between gap-2'>
					<Button onClick={closeModal} variant='outline' className='w-full'>
            Close
					</Button>
					<Button className='w-full' onClick={() => handleFileUpload(file)}>
            Submit
					</Button>
				</div>
			</p>
		</div>
	);
};

export default ModalBody;
