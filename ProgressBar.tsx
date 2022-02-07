import React, { useEffect, useRef } from 'react';

interface Props {
  color1?: string;
  color2?: string;
  height?: string;
  position?: React.CSSProperties['position'];
}

export function ProgressBar({
  color1 = 'gray',
  color2 = 'gold',
  position = 'fixed',
  height = '4px',
}: Props) {
  const progressBar_ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const page = document.documentElement; //element HTML
    let totalHeight = page.scrollHeight; //Height Total of page
    let visibleHeight = page.clientHeight; //Height visible
    let scrolling = page.scrollTop; //size of scroll
    let max = totalHeight - visibleHeight;
    progressBar_ref.current!.style.width =
      Math.floor((scrolling / max) * 100) + '%'; //width in %
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      position,
      height,
      backgroundColor: color1,
      zIndex: '999',
      width: '100%',
      top: '0',
      left: '0',
    },

    progressBar: {
      backgroundColor: color2,
      transition: 'all 0.5s ease-out',
      width: '0%',
      height: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.progressBar} ref={progressBar_ref}></div>
    </div>
  );
}
