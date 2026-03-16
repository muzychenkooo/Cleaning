import * as React from 'react';

/**
 * Ensures that only one <video> element plays at a time on the page.
 * When the attached video starts playing, all other <video> elements are paused.
 */
export function useExclusiveVideoPlayback(
  videoRef: React.RefObject<HTMLVideoElement>,
) {
  React.useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const handlePlay = () => {
      const videos = document.querySelectorAll<HTMLVideoElement>('video');
      videos.forEach((video) => {
        if (video !== node && !video.paused && !video.ended) {
          video.pause();
        }
      });
    };

    node.addEventListener('play', handlePlay);
    return () => {
      node.removeEventListener('play', handlePlay);
    };
  }, [videoRef]);
}

