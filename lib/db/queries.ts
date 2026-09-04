// lib/db/queries.ts
import { db } from "@/db";

export async function getCarsWithBrand() {
  return await db.query.cars.findMany({
    with: {
      brand: true,
    },
  });
}
