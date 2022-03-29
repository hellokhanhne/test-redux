export const getRandomId = () => {
  return Math.floor(Math.random() * 26) + 97 + Date.now();
};
