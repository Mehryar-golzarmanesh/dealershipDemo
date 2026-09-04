export function toPersianNumbers(text: string | number): string {
  const persianDigits: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  const str = String(text);
  return str.replace(/\d/g, (digit) => persianDigits[digit] || digit);
}

export function formatPersianPrice(amount: number | string): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(num)) return "۰";

  const withCommas = num.toLocaleString("en-US");
  return toPersianNumbers(withCommas);
}
