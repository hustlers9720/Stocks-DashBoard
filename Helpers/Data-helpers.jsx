export const convertDateToUnixTime = (date) => {
    return Math.floor(date.getTime() / 1000);
  };
  
  export const convertUnixTimeStameToDate = (unixTimeStamp) => {
    const milliseconds = unixTimeStamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
  };
  
  export const createDate = (date, days = 0, weeks = 0, months = 0, years = 0) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  };
  