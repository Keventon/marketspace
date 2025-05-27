export const numberToCurrancy = (value: number) => {
  const formatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  });

  return formatted;
};
