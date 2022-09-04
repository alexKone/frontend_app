export const getAgeByDate = (date: string|null|undefined) => {
  if (date === undefined || date === null)  {
    date = '1986-12-28';
  }
  const birthdate = new Date(date);
  const now = new Date();
  let age = now.getFullYear() - birthdate.getFullYear();

  if (birthdate.getMonth() > now.getMonth()) {
    age--;
  }
  return `${age} ans.`;
}
