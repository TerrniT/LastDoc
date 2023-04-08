import { Button } from "./atoms/button"
import Options from "./Options"
import { useAuth } from "../hooks/useAuth"
import { modalAtom } from "./add-new-doc/state"
import { useAtom } from "jotai"

const Subhead = () => {
  const { user } = useAuth()
  const [modalState, setModalState] = useAtom(modalAtom)

  const handleToggleModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }))
  }

  return (
    <div className='flex items-center mt-5 px-4'>
      <Options />
      {user && (
        <Button
          size='default'
          onClick={handleToggleModal}
          variant='default'
          className='ml-6 px-6 gap-2 h-12 bg-blue-600'
        >
          <p>Add New</p>
        </Button>
      )}
    </div>
  )
}

export default Subhead
