export default function dateFormated(date: Date | string): string {
  const parseDate = new Date(date);
  return `Postado em ${parseDate.getDate()}/${parseDate.getMonth()}/${parseDate.getFullYear()}`;
}
