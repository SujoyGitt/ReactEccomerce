
export const Formatprice = ({price}) => {
  return Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    minimumFractionDigits:2,
  }).format(price/100);
}
