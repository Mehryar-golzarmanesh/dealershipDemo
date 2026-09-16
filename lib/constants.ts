import { toPersianNumbers } from "./number-formatter";

export const nav_links = [
  { label: "برندها", href: "/brands" },
  { label: "گواهی و کارکردها", href: "/certificates" },
  { label: "تماس با ما", href: "/contact-us" },
];

export const footer_link = [
  { label: "موجودی کامل", href: "/brands" },
  { label: "تامین مالی", href: "/finance" },
  { label: "ارزیابی خودرو", href: "/test-drive" },
];

export const prices = [
  {
    label: `${toPersianNumbers(300)}م تا ${toPersianNumbers(500)}م`,
    value: "300to500",
  },
  {
    label: `${toPersianNumbers(500)}م تا ${toPersianNumbers(1)}ت`,
    value: "500to1t",
  },
  { label: `+${toPersianNumbers(1)}ت`, value: "1t+" },
];

export const years = [
  {
    label: `${toPersianNumbers(2024)} تا ${toPersianNumbers(2026)}`,
    value: "2024to2026",
  },
  {
    label: `${toPersianNumbers(2022)} تا ${toPersianNumbers(2024)}`,
    value: "2022to2024",
  },
  {
    label: `${toPersianNumbers(2020)} تا ${toPersianNumbers(2022)}`,
    value: "2020to2022",
  },
  { label: `${toPersianNumbers(2018)} و پیش تر`, value: "2018-" },
];
