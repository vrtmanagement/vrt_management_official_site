import React from 'react';

const TwoColumnLayout = ({ sidebarContent, children }) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex flex-col md:flex-row">
        <aside className="sticky top-16 z-[100] w-full border-b border-border bg-background p-4 md:relative md:top-auto md:w-[250px] md:flex-shrink-0 md:border-r md:border-b-0 md:p-0 lg:sticky lg:top-[160px] lg:w-[300px] lg:h-[calc(100vh-160px)] lg:overflow-y-auto lg:scroll-smooth">
          {sidebarContent}
        </aside>
        <main className="w-full bg-background p-6 md:flex-1 md:p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TwoColumnLayout;