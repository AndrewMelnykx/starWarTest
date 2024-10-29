const handleIncrement = (page: number) => {
  return page + 1;
};
const handleDecrement = (page: number) => {
  return page - 1;
};
const getStarshipIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export { handleDecrement, handleIncrement, getStarshipIdFromUrl, delay };
