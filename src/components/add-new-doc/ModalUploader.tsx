import { ChangeEvent, MouseEvent } from "react"
import { FiX } from "react-icons/fi"
import { HiDocumentText } from "react-icons/hi"

interface Props {
  setFile: (item: File | null) => void
  file: File | null
}

const ModalUploader = ({ file, setFile }: Props) => {
  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target
    console.log(fileInput.files)

    if (!fileInput.files) {
      alert("No file was chosen")
      return
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty")
      return
    }

    const file = fileInput.files[0]

    /** Setting file state */
    setFile(file)
    // we will use the file state, to send it later to the server

    /** Reset file input */
    e.currentTarget.type = "text"
    e.currentTarget.type = "file"
  }

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFile(null)
  }

  return (
    <div className='h-[230px]'>
      {file ? (
        <div className='bg-white border w-full relative border-gray-100 text-start  text-sm rounded-lg flex items-center  px-1'>
          <span className='w-7 h-6 rounded-md flex items-center justify-center bg-[#1F67F2]/20'>
            <HiDocumentText color='#1F67F2' className='text-lg' />
          </span>
          <div className='flex flex-col pl-2 text-[12px] w-full'>
            <span className='text-black font-bold'>{file.name}</span>
            <span className=''>{file.type.slice(-3).toUpperCase()}</span>
          </div>
          <button
            onClick={onCancelFile}
            className='w-7 h-6 text-sm font-medium border border-transparent hover:border-gray-500  transition-colors duration-150 items-center justify-center flex  rounded-full  hover:bg-gray-100'
          >
            <FiX color='black' />
          </button>
        </div>
      ) : (
        <form
          className='w-full p-3 border border-gray-300 rounded-lg border-dashed'
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='flex flex-col md:flex-row gap-1.5 md:py-4'>
            <div className='flex-grow'>
              <label className='flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-14 h-14 text-gray-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
                  />
                </svg>
                <strong className='text-sm font-medium'>Select an image</strong>
                <input
                  className='block w-0 h-0'
                  name='file'
                  type='file'
                  accept='application/pdf'
                  onChange={onFileUploadChange}
                />
              </label>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default ModalUploader
