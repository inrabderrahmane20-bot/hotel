import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

const getVariants = (direction: Direction, distance: number) => ({
  hidden: {
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    opacity: 0,
  },
  visible: { x: 0, y: 0, opacity: 1 },
});

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className,
  distance = 60,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      variants={getVariants(direction, distance)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
