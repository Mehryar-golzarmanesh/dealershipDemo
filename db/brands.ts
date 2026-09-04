import { db } from "./index";
import { brands } from "./schema";

const brandData = [
  { name: "ایران خودرو", slug: "iran-khodro", country: "ایران" },
  { name: "سایپا", slug: "saipa", country: "ایران" },
  { name: "تویوتا", slug: "toyota", country: "ژاپن" },
  { name: "بی‌ام‌و", slug: "bmw", country: "آلمان" },
  { name: "مرسدس بنز", slug: "mercedes-benz", country: "آلمان" },
  { name: "پورشه", slug: "porsche", country: "آلمان" },
  { name: "هیوندای", slug: "hyundai", country: "کره جنوبی" },
  { name: "کیا", slug: "kia", country: "کره جنوبی" },
  { name: "لکسوس", slug: "lexus", country: "ژاپن" },
  { name: "تسلا", slug: "tesla", country: "آمریکا" },
];

await db.insert(brands).values(brandData);
