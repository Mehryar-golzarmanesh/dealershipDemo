// lib/db/queries.ts
import { db } from "@/db";
import { cars, brands } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCarsWithBrand(limit?: number) {
  return await db.query.cars.findMany({
    with: {
      brand: true,
    },
    limit: limit,
  });
}

export async function getCarWithBrandBySlug(slug: string) {
  const result = await db
    .select({
      // Car fields
      id: cars.id,
      slug: cars.slug,
      model: cars.model,
      year: cars.year,
      price: cars.price,
      mileage: cars.mileage,
      transmission: cars.transmission,
      fuelType: cars.fuelType,
      color: cars.color,
      description: cars.description,
      images: cars.images,
      isFeatured: cars.isFeatured,
      isAvailable: cars.isAvailable,
      createdAt: cars.createdAt,
      updatedAt: cars.updatedAt,
      brandName: cars.brandName,
      // Brand fields
      brand: {
        id: brands.id,
        name: brands.name,
        slug: brands.slug,
        logo: brands.logo,
        country: brands.country,
      },
    })
    .from(cars)
    .leftJoin(brands, eq(cars.brandId, brands.id))
    .where(eq(cars.brandName, slug));

  return result || null;
}
