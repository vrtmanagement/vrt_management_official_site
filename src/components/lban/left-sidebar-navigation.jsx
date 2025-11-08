'use client';

import { useState, useEffect, useRef } from 'react';

// Define navigation items based on sections rendered on the page
const navItems = [
  { id: 'overview', label: 'Workshop Overview' },
  { id: 'key-takeaways', label: 'Key Takeaways' },
  { id: 'ebook', label: 'E-Book' },
  { id: 'masterclass', label: 'Masterclass' },
  { id: 'sog', label: 'Stages of Growth' },
  { id: 'trimetrix', label: 'TriMetrix HD' },
  { id: 'faculty', label: 'Your Mentor' },
];

const LeftSidebarNavigation = () => {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-100px 0px -80% 0px',
    };

    observer.current = new IntersectionObserver(handleIntersect, observerOptions);

    const sectionElements = navItems.map(({ id }) => document.getElementById(id));
    sectionElements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Navigation - Only visible on large screens */}
      <nav className="block">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`
                  block px-1 py-2 text-[13px] font-normal border-l-[2px] transition-all duration-200
                  hover:text-[#1a1a1a] hover:border-l-[#DC143C]/40
                  ${
                    activeId === item.id
                      ? 'font-medium text-[#1a1a1a] border-[#DC143C]'
                      : 'text-[#666666] border-transparent'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebarNavigation;