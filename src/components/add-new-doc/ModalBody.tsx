import { useState, ChangeEvent } from "react"
import { Button } from "../../components/atoms/button"
import { Label } from "@radix-ui/react-dropdown-menu"
import Input from "../../components/atoms/Input"
import ModalSelect from "./ModalSelect"
import ModalUploader from "./ModalUploader"
import { supabase } from "../../lib/client"
import { toast } from "react-toastify"
import { modalAtom } from "./state"
import { useAtom } from "jotai"

interface Props {
  closeModal: () => void
}

const ModalBody = ({ closeModal }: Props) => {
	const [isOpen, setIsOpen] = useAtom(modalAtom)
	const [file, setFile] = useState<File | null>(null)
	const [status, setStatus] = useState<string>("Relevant")
	const [title, setTitle] = useState<string>("")

	async function handleFileUpload(file: File | null) {
		if (file == null) {
			toast.error("Error: Add some pdf files", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
			return
		}

		const { data: uploadData, error: uploadError } = await supabase.storage
			.from("documents")
			.upload(file.name, file)

		if (uploadData) {
			toast.success(`Success: File named ${uploadData.path} has been uploaded!`, {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
		} else {
			toast.error("Error: Resources already exists", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
		}

		const { data: publicUrl } = supabase.storage.from("documents").getPublicUrl(`${file.name}`)

		const { data, error } = await supabase
			.from("documents")
			.insert({ title: title, status: status, file_url: publicUrl.publicUrl })

		if (error) {
			toast.error("Error: Something went wrong", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
		}

		// const { data: downloadData, error } = await supabase
		//   .storage
		//   .from('documents')
		//   .download(file.name)

		setFile(null)
		setTitle("")
		setIsOpen({ isOpen: false })
	}

	return (
		<div className='mt-6'>
			<div className='text-sm text-gray-500'>
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
			</div>
		</div>
	)
}

export default ModalBody
