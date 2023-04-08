import { SearchIcon } from "lucide-react"
import { IoFilter } from "react-icons/io5"
import { Checkbox } from "./atoms/checkbox"
import IconButton from "./atoms/IconButton"
import Input from "./atoms/Input"

const Options = () => {
  return (
    <div className='flex-1 flex  mx-auto justify-between max-w-full'>
      <Input icon={SearchIcon} placeholder='Search' type='text' />
      <div className='pl-6'>
        <IconButton icon={IoFilter} indicator outline={true} />
      </div>
    </div>
  )
}

export default Options

const CheckOption = () => {
  return (
    <div className='flex justify-center items-center gap-2 w-[155px]'>
      <Checkbox className='text-white rounded' />
      <p className='whitespace-nowrap text-base'>Hide rejected</p>
    </div>
  )
}
