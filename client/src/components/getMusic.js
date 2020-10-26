const { Console } = require("winston/lib/winston/transports");

export const getMusicData = async () => {
  const response = await fetch('/music');
  const data = await response.json();
  console.log(data);
  return data;
};