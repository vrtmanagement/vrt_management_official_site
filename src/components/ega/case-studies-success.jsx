import Image from 'next/image';

const CaseStudiesSuccess = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32 my-10">
      {/* Decorative images for large screens */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-[1440px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cc572f1-3fea-429c-9bea-6afe4deaedd8-mindvalley-com/assets/images/mvcom_hp_stories_left-26.jpg"
            alt="Collage of Mindvalley member portraits on the left"
            width={385}
            height={568}
            className="absolute left-0 top-1/2 -translate-y-1/2"
            quality={100}
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cc572f1-3fea-429c-9bea-6afe4deaedd8-mindvalley-com/assets/images/mvcom_hp_stories_right-27.jpg"
            alt="Collage of Mindvalley member portraits on the right"
            width={385}
            height={568}
            className="absolute right-0 top-1/2 -translate-y-1/2"
            quality={100}
          />
        </div>
      </div>

      <div className="container relative text-center">
        {/* Mobile image */}
        <div className="lg:hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cc572f1-3fea-429c-9bea-6afe4deaedd8-mindvalley-com/assets/images/mvcom_hp_stories_mobile-25.jpg"
            alt="Collage of diverse Mindvalley members"
            width={343}
            height={259}
            className="mx-auto rounded-lg"
          />
        </div>

        <div className="relative mx-auto mt-8 max-w-lg lg:mt-0"
        
        style={{ fontFamily: 'Inter, serif' }}
        >
          <p className="font-display text-[56px] font-extrabold leading-none -tracking-tight text-primary">
            14573+
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
          Leaders and Executives trained and mentored to success
          </h2>
          <p className="mt-4 text-base text-secondary-foreground sm:text-lg">
          At VRT Management Group, we help businesses overcome their toughest challenges by transforming their People, Processes, and Strategies to achieve scalable growth and leadership excellence.
          </p>
          {/* <div className="mt-8">
            <a
              href="https://stories.mindvalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-8 py-[14px] text-base font-medium text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5"
            >
              Read our stories
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSuccess;