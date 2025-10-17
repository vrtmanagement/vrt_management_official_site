import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "https://vrt9.net/ega/pc1.webp",
  "https://vrt9.net/ega/pc2.webp",
  "https://vrt9.net/ega/pc4.webp",
  "https://vrt9.net/ega/pc3.webp",
  "https://vrt9.net/ega/pc1.webp",
  ,
]

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[200vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4 overflow-x-hidden">
        {IMAGES.map((imageUrl, index) => (
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
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 ">
        Our EGA™ Experience
        </h1>
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-red-500 px-4 py-2 font-medium hover:bg-indigo-400">
            Get Started
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium"
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
    <ContainerScroll className="h-[200vh]">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
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
          className="max-w-xl text-5xl font-bold tracking-tighter"
        >
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm text-stone-500 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-indigo-700 px-4 py-2 font-medium   hover:bg-indigo-200">
            Get Started
          </Button>
          <Button
            variant={"link"}
            className="bg-transparent px-4 py-2 font-medium  "
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
    <ContainerScroll className="h-[200vh] bg-slate-900 text-slate-100">
      <BentoGrid
        variant={"threeCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
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
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter ">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-indigo-700 px-4 py-2 font-medium   hover:bg-indigo-400">
            Get Started
          </Button>
          <Button
            variant={"link"}
            className="bg-transparent px-4 py-2 font-medium text-white  "
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export { HeroDemo1, HeroDemo2, HeroDemo3 }
