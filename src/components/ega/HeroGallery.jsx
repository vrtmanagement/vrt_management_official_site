"use client"
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const EGA_IMAGES = [
  "https://vrt9.net/ega/pc1.webp",
  "https://vrt9.net/ega/pc4.webp",
  "https://vrt9.net/ega/pc2.webp",
  "https://vrt9.net/ega/pc2.webp",
  "https://vrt9.net/ega/pc3.webp",
]

export default function EGAHeroGallery({ 
  title = "EGA™ Mentorship Program",
  subtitle = "Join the Entrepreneur Growth Alliance™ and unlock your business potential with our comprehensive mentorship program. Get personalized guidance, strategic insights, and proven frameworks for sustainable growth.",
  primaryButtonText = "Join EGA™",
  secondaryButtonText = "Learn More",
  variant = "default"
}) {
  return (
    <div className="relative isolate">
      <ContainerScroll className="h-[350vh]">
        <BentoGrid 
          variant={variant}
          className="sticky left-0 top-0 z-0 h-screen w-full p-4"
        >
          {EGA_IMAGES.map((imageUrl, index) => (
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
            {title}
          </h1>
          <p className="my-6 max-w-xl text-sm text-gray-600 md:text-base">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-red-500 px-4 py-2 font-medium hover:bg-red-600">
              {primaryButtonText}
            </Button>
            <Button
              variant="link"
              className="bg-transparent px-4 py-2 font-medium text-gray-700"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </ContainerScale>
      </ContainerScroll>
    </div>
  )
}
