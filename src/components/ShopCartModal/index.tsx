import Image from "next/image"
import Button from "../Button"
import Modal from "../Modal"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

interface ShopCardModalProps {
  open: boolean
  onClose: () => void
}

export default function ShopCartModal({ open, onClose }: ShopCardModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="md:w-[377px] w-[327px]">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl uppercase">cart (3)</p>
          <span className="font-medium cursor-pointer hover:text-orange-50 opacity-50">
            Remove all
          </span>
        </div>
        <div className="max-h-[260px] mt-8 mb-5 space-y-6 overflow-auto">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-100 w-16 flex justify-center items-center h-16 rounded-lg">
                  <Image
                    width={40}
                    height={40}
                    src={"/images/ear_small.svg"}
                    alt="Image"
                  />
                </div>
                <div>
                  <p>XX99 MK II</p>
                  <p>$ 2,999</p>
                </div>
              </div>

              <div className="flex w-24 h-8 justify-around items-center bg-gray-100">
                <AiOutlinePlus />
                <span>1</span>
                <AiOutlineMinus />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="opacity-50 font-medium uppercase">Total</p>
          <span className="font-bold text-xl">$5.396</span>
        </div>

        <Button variant="PRIMARY">Checkout</Button>
      </div>
    </Modal>
  )
}
