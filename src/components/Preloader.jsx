import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/preloader.css';

export default function Preloader({ onDone, onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame;
    let start = null;
    const duration = 1600;

    const animate = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setDone(true);
          const callback = onDone || onComplete;
          if (callback) setTimeout(callback, 400);
        }, 150);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onDone, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="preloader-inner">
            <motion.div className="preloader-name">
              <span className="preloader-name-white">ADARSH</span>
              <span className="preloader-name-glow">SONI</span>
            </motion.div>
            <div className="preloader-bar-wrap">
              <motion.div
                className="preloader-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="preloader-count">{count}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
