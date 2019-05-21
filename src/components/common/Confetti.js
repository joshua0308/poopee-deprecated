import React from 'react';
// import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default props => {
  // const { width, height } = useWindowSize();
  return <Confetti gravity={0.3} numberOfPieces={500} recycle={false} />;
};
