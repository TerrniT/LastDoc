import { Dialog, Transition } from "@headlessui/react"
import { useAtom } from "jotai/react"
import { Fragment } from "react"
import { modalAtom } from "./state"
import ModalBody from "./ModalBody"

const AddNewDocModal = () => {
  const [isOpen, setIsOpen] = useAtom(modalAtom)

  function closeModal() {
    setIsOpen({ isOpen: false })
  }

  return (
    <>
      <Transition appear show={isOpen.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-40' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white py-8 px-10 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-lg font-bold leading-6 text-gray-900'>
                    Add new document
                  </Dialog.Title>
                  <ModalBody closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddNewDocModal
