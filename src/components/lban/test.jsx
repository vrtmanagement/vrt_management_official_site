import { Search } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Announcement Bar */}
      {/* <div className="bg-[#4A7C94] text-white py-3 px-4 text-center ">
        <p className="text-sm md:text-base">
          Now accepting applications for Cohort #3, beginning February 2026.{' '}
          <a href="#" className="text-white underline font-medium">
            Get Started
          </a>
        </p>
      </div> */}

   
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B3A57] via-[#234261] to-[#2A4E6C] overflow-hidden">
        {/* Decorative Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute top-40 left-32 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 border border-white rounded-full"></div>
          <div className="absolute top-32 right-40 w-40 h-40 border border-white rounded-full"></div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          

          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            {/* Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-5xl  leading-tight tracking-tight font-heading"
            style={{ fontFamily: 'Merriweather, serif' }}
              >
                The Berkeley Transformative CHRO Leadership Program co-led by Laszlo Bock
              </h1>

              <p className="text-xl md:text-xl text-white/90 "
              style={{ fontFamily: 'Lato, serif' }}
              >
              Entrepreneurs Growth Alliance (EGA) empowers SMB leaders to scale their business through strategic systems, leadership alignment, and performance-driven growth frameworks for sustainable success.
              </p>

    
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Leadership team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
