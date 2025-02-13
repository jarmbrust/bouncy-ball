

export const oppositeDirection = (
  ball: { x: number; y: number, vectorX: number; vectorY: number },
  frameMin: { x: number; y: number },
  frameMax: { x: number; y: number }
) => {
  const { x, y, vectorX, vectorY } = ball;

  if ((x < frameMin.x && y < frameMax.y && vectorX < 0 && vectorY < 0)
    || (x > frameMax.x && y < frameMax.y && vectorX > 0 && vectorY < 0) 
    || (x < frameMin.x && y < frameMax.y && vectorX < 0 && vectorY > 0)
    || (x > frameMax.x && y < frameMax.y && vectorX > 0 && vectorY > 0)) {
    return { vectorX: -vectorX, vectorY };
  }
  if ((x < frameMax.x && y < frameMin.y && vectorX < 0 && vectorY < 0) 
    || (x < frameMax.x && y < frameMin.y  && vectorX > 0 && vectorY < 0) 
    || (x < frameMax.x && y > frameMax.y && vectorX < 0 && vectorY > 0) 
    || (x < frameMax.x && y > frameMax.y && vectorX > 0 && vectorY > 0)) {
    return { vectorX, vectorY: -vectorY };
  }
  return { vectorX, vectorY };
};

export const randomStartingDirection = () => {
  const directions = [
    { vectorX: 2, vectorY: 2 },
    { vectorX: -2, vectorY: 2 },
    { vectorX: 2, vectorY: -2 },
    { vectorX: -2, vectorY: -2 },
  ];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
};
