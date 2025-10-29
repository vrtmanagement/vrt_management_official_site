import React from 'react';

const TwoColumnLayout = ({ sidebarContent, children }) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex flex-col lg:flex-row">
        <aside className="hidden lg:block sticky top-[88px] z-40 w-[200px] flex-shrink-0 border-r border-border bg-background h-[calc(100vh-88px)] overflow-y-auto scroll-smooth pt-8">
          {sidebarContent}
        </aside>
        <main className="w-full bg-background p-6 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TwoColumnLayout;