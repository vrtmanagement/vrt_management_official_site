'use client';

import { useEffect, useState } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const sampleMediaContent = {
  video: {
    src: 'https://videos.pexels.com/video-files/856531/856531-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1280&auto=format&fit=crop',
    background: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
    title: 'Immersive Video Experience',
    date: 'Cosmic Journey',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.',
      conclusion:
        'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    title: 'Dynamic Image Showcase',
    date: 'Underwater Adventure',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.',
      conclusion:
        'The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.',
    },
  },
};

function MediaContent({ mediaType }) {
  const currentMedia = sampleMediaContent[mediaType];
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">About This Component</h2>
      <p className="text-lg mb-8 text-black dark:text-white">{currentMedia.about.overview}</p>
      <p className="text-lg mb-8 text-black dark:text-white">{currentMedia.about.conclusion}</p>
    </div>
  );
}

export function VideoExpansionTextBlend() {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
}

export function ImageExpansionTextBlend() {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
}

export default function ScrollExpansionDemo() {
  const [mediaType, setMediaType] = useState('video');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>
        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Image
        </button>
      </div>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
}


