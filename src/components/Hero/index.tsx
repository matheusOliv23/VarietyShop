import Image from "next/image"
import Button from "../Button"

export default function Hero() {
  return (
    <section className="bg-dark-150 lg:px-10 w-full lg:bg-right bg-no-repeat">
      <div className="max-w-7xl items-center lg:flex-row m-auto flex justify-between">
        <div className="text-white absolute lg:relative text-center lg:text-left">
          <p className="text-sm opacity-50 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="font-bold text-6xl my-6">XX99 Mark II HeadphoneS</h1>
          <p className="font-medium opacity-75 max-w-sm m-auto lg:m-0 !mb-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className=" !w-40" variant="PRIMARY">
            SEE PRODUCT{" "}
          </Button>
        </div>

        <div>
          <Image
            className="lg:rounded-full lg:relative w-full md:w-[768px] lg:w-[500px] lg:opacity-80"
            width={500}
            height={500}
            src={"/images/phone.svg"}
            alt="Phone image"
          />
        </div>
      </div>
    </section>
  )
}
