export const formatDt = (dt) => {
  const opt = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateTimeFormat = new Intl.DateTimeFormat('en-GB', opt);
  return dateTimeFormat.format(new Date(dt));
}