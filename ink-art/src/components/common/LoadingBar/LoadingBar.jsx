import React from 'react';
import { Progress, Indicator } from '@radix-ui/react-progress';
import './LoadingBar.css';

import KnightRider from "./types/knight-rider/knight-rider";

function LoadingBar({ value, maxValue, onProgressComplete, indeterminate, type = 'normal' }) {
  const isIndeterminate = indeterminate || value === undefined || type === 'infinite';
  const progressValue = isIndeterminate ? undefined : (value / maxValue) * 100;

  if (!isIndeterminate && progressValue >= 100) {
    onProgressComplete();
  }

  if (type === 'infinite') {
    return (
      <div style={{ textAlign: 'center' }}>Not implemented yet</div>
    );
  } else if (type === 'knight-rider') {
    return (
      <KnightRider />
    );
  } else { // Domyślnie renderuj jako 'normal'
    return (
      <div style={{ textAlign: 'center' }}>Not implemented yet</div>
    );
  }
}

export default LoadingBar;
