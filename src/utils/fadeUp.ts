export const fadeUp = (
  x: number = 0,
  y: number = -100,
  delay: number = 0.2,
  inView: boolean = false
) => {
  const baseObj = {
    initial: { x, y, opacity: 0 },
    transition: { duration: 0.6, delay },
  };
  return inView
    ? { ...baseObj, whileInView: { x: 0, y: 0, opacity: 1 } }
    : { ...baseObj, animate: { x: 0, y: 0, opacity: 1 } };
};
