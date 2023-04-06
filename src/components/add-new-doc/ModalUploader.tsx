import { useRef } from "react";

const ModalUploader = () => {
	const fileSelect = useRef(null);

	const handleFile = (file: any) => {
		console.log(file);
	};

	return (
		<>
			<div className='grid grid-cols-1 space-y-2'>
				<label className='text-sm font-bold text-gray-500 tracking-wide'>Attach Document</label>
				<div className='flex items-center justify-center w-full'>
					<label className='flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center'>
						<div className='h-full w-full text-center flex flex-col items-center justify-center '>
							<div className='flex flex-auto max-h-48 w-2/5 mx-auto -mt-10'>
								<img
									className='has-mask h-36 object-center'
									src='https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg'
									alt='freepik image'
								/>
							</div>
							<p className='pointer-none text-gray-500 '>
								<span className='text-sm'>Drag and drop</span> files here <br /> or{" "}
								<a href='' id='' className='text-blue-600 hover:underline'>
                  select a file
								</a>{" "}
                from your computer
							</p>
						</div>
						<input
							ref={fileSelect}
							onChange={(e) => handleFile(e.target.files)}
							accept='application/pdf, application/docx, application/doc'
							type='file'
							className='hidden'
						/>
					</label>
				</div>
			</div>
			<p className='text-sm text-gray-300'>
				<span>File type: doc,pdf,types of images</span>
			</p>
		</>
	);
};

export default ModalUploader;
