'use client';

import { useRef, PropsWithChildren } from 'react';

import Menu from '../Menu/Menu';

import './styles.scss';

const ScrollProvider = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="scroll-container">
      <Menu scrollRef={containerRef} />
      <main>{children}</main>
    </div>
  );
};

export default ScrollProvider;
