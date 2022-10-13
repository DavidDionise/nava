import numberToMoneyString from "./numberToMoneyString";

test("Thousands number to string", () => {
  const n1 = 12900;
  const expectedValue1 = "12.90K";
  const actualValue1 = numberToMoneyString(n1);

  expect(actualValue1).toBe(expectedValue1);

  const n2 = 135894;
  const expectedValue2 = "135.89K";
  const actualValue2 = numberToMoneyString(n2);

  expect(actualValue2).toBe(expectedValue2);
});

test("Millions number to string", () => {
  const n1 = 1210000;
  const expectedValue1 = "1.21M";
  const actualValue1 = numberToMoneyString(n1);

  expect(actualValue1).toBe(expectedValue1);

  const n2 = 184589945;
  const expectedValue2 = "184.59M";
  const actualValue2 = numberToMoneyString(n2);

  expect(actualValue2).toBe(expectedValue2);
});
