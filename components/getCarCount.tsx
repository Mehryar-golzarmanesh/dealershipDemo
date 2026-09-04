import { db } from "@/db";
import { cars } from "@/db/schema";
import { count, eq } from "drizzle-orm";

export async function GetCarCountForBrand(brandId: number) {
  const result = await db
    .select({ count: count() })
    .from(cars)
    .where(eq(cars.brandId, brandId));

  return result[0]?.count || 0;
}
