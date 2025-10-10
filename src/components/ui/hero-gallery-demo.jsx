import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const BUSINESS_IMAGES = [
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633419463015-9b4b4438f3d4?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {BUSINESS_IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-black">
          Transform Your Business
        </h1>
        <p className="my-6 max-w-xl text-sm text-gray-600 md:text-base">
          Accelerate growth with our proven methodologies and strategic consulting services. 
          We help businesses scale efficiently and achieve sustainable success.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-red-500 px-4 py-2 font-medium hover:bg-red-600">
            Get Started
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-gray-700"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

const HeroDemo2 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {BUSINESS_IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1
          className="max-w-xl text-5xl font-bold tracking-tighter text-black"
        >
          Strategic Business Growth
        </h1>
        <p className="my-6 max-w-xl text-sm text-gray-600 md:text-base">
          Partner with us to unlock your business potential through data-driven strategies 
          and innovative solutions that deliver measurable results.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-red-500 px-4 py-2 font-medium hover:bg-red-600">
            Get Started
          </Button>
          <Button
            variant={"link"}
            className="bg-transparent px-4 py-2 font-medium text-gray-700"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

const HeroDemo3 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-gray-900 text-white">
      <BentoGrid
        variant={"threeCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {BUSINESS_IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
          Business Excellence
        </h1>
        <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
          Elevate your business to new heights with our comprehensive consulting services 
          and proven frameworks for sustainable growth and operational excellence.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-red-500 px-4 py-2 font-medium hover:bg-red-600">
            Get Started
          </Button>
          <Button
            variant={"link"}
            className="bg-transparent px-4 py-2 font-medium text-white"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export { HeroDemo1, HeroDemo2, HeroDemo3 }
