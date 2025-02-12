'use client';

const BouncyBall = ({ x, y }: { x: number; y: number }) => {
  return (
    <div 
      className="absolute w-3 h-3 bg-red-500 border-1 border-black rounded-full "
      style={{ left: x, top: y }}
    />
  );
};

export default BouncyBall; 