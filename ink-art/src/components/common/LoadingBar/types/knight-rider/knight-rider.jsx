import React, { useState, useEffect } from 'react';
import styles from './knight-rider.module.css';

const KnightRider = ({ divisions = 15 }) => { // Domyślna liczba lampek to 15
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 dla prawo, -1 dla lewo

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        let nextIndex = prev + direction;
        if (nextIndex >= divisions || nextIndex < 0) {
          setDirection(-direction);
          nextIndex = prev; // Pozostaje na tym samym indeksie, zmienia tylko kierunek
        }
        return nextIndex;
      });
    }, 100); // Aktualizuje co 100ms

    return () => clearInterval(interval);
  }, [direction, divisions]);

  return (
    <div className={styles.indeterminate}>
      <div
        className={`${styles.indicator} ${styles.active}`}
        style={{ width: `${100 / divisions}%`, left: `${(100 / divisions) * activeIndex}%` }}
      ></div>
    </div>
  );
};

export default KnightRider;