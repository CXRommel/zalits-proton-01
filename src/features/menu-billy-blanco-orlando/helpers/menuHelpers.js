// Se obtiene el texto segun el idioma
export const getText = (textObj, language) => {
  return textObj[language] || textObj.es;
};

// Se obtiene el precio según idioma
export const getPrice = (priceObj, language) => {
  const currency = language === "en" ? "usd" : "mxn";
  const symbol = "$";
  const price = priceObj[currency];
  return `${symbol}${price}`;
};
