export const formatDate = (endDate) => {
  const date = new Date(endDate);

  const weekday = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${weekday}, ${month} ${day} - ${year}`;
};
