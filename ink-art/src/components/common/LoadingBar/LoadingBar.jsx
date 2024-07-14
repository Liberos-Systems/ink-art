import React from 'react';
import styles from './LoadingBar.module.css';

import KnightRider from "./types/knight-rider/knight-rider";

function LoadingBar({ value, maxValue, onProgressComplete, indeterminate, type = 'normal' }) {
  const isIndeterminate = indeterminate || value === undefined || type === 'infinite';
  const progressValue = isIndeterminate ? undefined : (value / maxValue) * 100;

  if (!isIndeterminate && progressValue >= 100) {
    onProgressComplete();
  }

  if (type === 'infinite') {
    return (
      <div className={styles.indeterminate}>Not implemented yet</div>
    );
  } else if (type === 'knight-rider') {
    return (
      <KnightRider />
    );
  } else { // Domyślnie renderuj jako 'normal'
    return (
      <div className={styles.progress}>
        <div className={styles.indicator} style={{ width: `${progressValue}%` }}></div>
      </div>
    );
  }
}

export default LoadingBar;
