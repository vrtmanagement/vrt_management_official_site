"use client"
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const EGA_IMAGES = [
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633419463015-9b4b4438f3d4?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function EGAHeroGallery({ 
  title = "EGA™ Mentorship Program",
  subtitle = "Join the Entrepreneur Growth Alliance™ and unlock your business potential with our comprehensive mentorship program. Get personalized guidance, strategic insights, and proven frameworks for sustainable growth.",
  primaryButtonText = "Join EGA™",
  secondaryButtonText = "Learn More",
  variant = "default"
}) {
  return (
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
  )
}
