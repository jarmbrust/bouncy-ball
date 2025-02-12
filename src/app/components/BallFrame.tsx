'use client';

import { useState, useEffect, MouseEvent } from 'react';
import BouncyBall from '@/app/components/BouncyBall';
import { oppositeDirection } from '@/app/utilities';

const BallFrame = () => {
  const [ballArray, setBallArray] = useState<{ x: number; y: number, vectorX: number, vectorY: number  }[]>([]);
  const [frameMax, ] = useState<{ x: number; y: number }>({ x: 320, y: 345 });
  const [frameMin, ] = useState<{ x: number; y: number }>({ x: 15, y: 38 });

  const handleBallPlace = (event: MouseEvent) => {
    setBallArray(prevBalls => [...prevBalls, { x: event.clientX, y: event.clientY, vectorX: 2, vectorY: 2 }]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBallArray(prevBalls => {
        return prevBalls.map((ball) => {
          if (ball.x > frameMax.x || ball.x < frameMin.x || ball.y > frameMax.y || ball.y < frameMin.y) {
            return { 
              vectorX: oppositeDirection(ball, frameMin, frameMax).vectorX,
              vectorY: oppositeDirection(ball, frameMin, frameMax).vectorY,
              x: ball.x + ball.vectorX, 
              y: ball.y + ball.vectorY, 
            };
          } else {
            return {
              vectorX: ball.vectorX, 
              vectorY: ball.vectorY,
              x: ball.x + ball.vectorX, 
              y: ball.y + ball.vectorY, 
            };
          }
        });
      });
    }, 10);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [frameMax, frameMin]); 

  return (
    <>
      <div 
        className="bg-slate-500 border-2 border-gray-50"
        style={{ width: frameMax.x+5+'px', height: frameMax.y-17+'px' }}
        onClick={ handleBallPlace }
      />
      {ballArray.map((ball, index) => (
        <div
          key={index}
        >
          <BouncyBall x={ball.x} y={ball.y} />
        </div>
      ))}
    </>
  );
};

export default BallFrame;
