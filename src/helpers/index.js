export function formatCurrency(precio) {
  const intl = new Intl.NumberFormat("ES-es", {
    style: "currency",
    currency: "EUR",
  });

  return intl.format(precio);
}
