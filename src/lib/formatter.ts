export function formatDate(dateString: string) {
  const date: Date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate: string = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
