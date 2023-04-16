import Link from "next/link"
import React from "react"
import Layout from "src/components/Layout"
import Image from "next/image"
import Button from "src/components/Button"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export default function Product() {
  return (
    <Layout>
      <div className="max-w-7xl m-auto">
        <Link href={"/"} className="mt-20" passHref>
          Go back
        </Link>

        <section className="mt-14 flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[370px] lg:w-[540px] flex justify-center items-center bg-gray-100 md:h-[380px] lg:h-[560px] w-4/5">
            <Image
              width={350}
              height={350}
              src={"/images/phone.svg"}
              alt={"product.name"}
            />
          </div>

          <div className={`text-center lg:text-left`}>
            <p
              className={`${"text-orange-100"} text-sm opacity-50 tracking-[10px]`}
            >
              NEW PRODUCT
            </p>
            <h1
              className={`${"text-black"} font-bold text-4xl md:text-6xl my-6 max-w-[396px]`}
            >
              XX99 Mark II Headphones
            </h1>
            <p
              className={`${"text-black"} font-medium opacity-75 max-w-sm m-auto lg:m-0 !mb-10`}
            >
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <p className="font-bold text-xl mb-12">$ 2,999</p>

            <div className="flex items-center lg:justify-start justify-center gap-4">
              <div className="flex w-[120px] h-12 justify-around items-center bg-gray-100">
                <AiOutlinePlus />
                <span>1</span>
                <AiOutlineMinus />
              </div>
              <Button className="!w-40" variant="PRIMARY">
                ADD TO CART{" "}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
