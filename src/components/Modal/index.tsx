import { Fragment, ReactNode } from "react"
import { Dialog, Transition } from "@headlessui/react"

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-200 overflow-y-auto"
      onClose={onClose}
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="relative inline-block transform overflow-visible rounded-lg h-[488px] bg-white p-8 text-left align-bottom shadow-xl transition-all sm:align-middle">
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
)

export default Modal
