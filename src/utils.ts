export const stripSpecialChars = (input: string) => {
  return input.replace(/[^0-9a-zA-Z.()-]/g, " ");
};

export const yesterday = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const month = today.getMonth() + 1;
  const monthFormatted = month >= 10 ? String(month) : `0${month}`;
  const day = today.getDate();
  const dayFormatted = day >= 10 ? String(day) : `0${day}`;
  const year = String(today.getFullYear());

  return { year, month: monthFormatted, day: dayFormatted };
};

export const dateRange = (year: string | number, month: string | number) => {
  const lastDayOfMonth = new Date(Number(year), Number(month), 0).getDate();

  return { 
    startingDate: `${year}${month}0100`,
    endingDate: `${year}${month}${lastDayOfMonth}00`,
  }
};
