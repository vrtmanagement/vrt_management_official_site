import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';

// Example usage component showing how to integrate Cards Stack into your existing pages
export const CardsStackExample = () => {
  const exampleData = [
    {
      id: "example-1",
      title: "Step 1: Discovery",
      description: "We start by understanding your business goals and target audience to create a solid foundation for your project.",
    },
    {
      id: "example-2", 
      title: "Step 2: Design",
      description: "Our design team creates beautiful, user-friendly interfaces that align with your brand identity.",
    },
    {
      id: "example-3",
      title: "Step 3: Development",
      description: "We bring your designs to life with clean, efficient code and modern development practices.",
    },
  ];

  return (
    <div className="min-h-[300vh] bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple Cards Stack Example</h2>
          <p className="text-gray-600">Scroll down to see the sticky card effect in action</p>
        </div>
        
        <ContainerScroll className="space-y-8">
          {exampleData.map((item, index) => (
            <CardSticky
              key={item.id}
              index={index + 1}
              className="rounded-xl border bg-white p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <span className="text-2xl font-bold text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
};

export default CardsStackExample;
