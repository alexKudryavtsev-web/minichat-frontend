export default function formatDate(timestamp) {
  const date = new Date(timestamp);

  const hour = date.getHours();
  const min = date.getMinutes();
  return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min);
}
