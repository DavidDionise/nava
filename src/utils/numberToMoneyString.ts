/**
 * @description Used to shorten large numbers
 * @param amount The number amount to be formatted
 * @returns A string representation of the number. eg, 1,243,000 -> 1.24M
 */
export default function numberToMoneyString(amount: number): string {
  if (amount < 1000) {
    return amount.toString();
  }

  switch (true) {
    case amount < 1000000:
      return (amount / 1000).toFixed(2).toString() + "K";
    case amount < 1000000000:
      return (amount / 1000000).toFixed(2).toString() + "M";
    default:
      console.warn("No handling for amount: ", amount);
      return amount.toString();
  }
}
