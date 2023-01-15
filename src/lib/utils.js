export function formatCurrency(value) {
  return value
    ? value.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
      })
    : value;
}
