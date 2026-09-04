import BrandCard from "@/components/brandCard";
import { GetCarCountForBrand } from "@/components/getCarCount";
import { db } from "@/db";
import { brands } from "@/db/schema";

const BrandsListings = async () => {
  const allBrands = await db.select().from(brands);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 py-15 px-5">
      {allBrands.map((brand) => {
        const count = GetCarCountForBrand(brand.id);
        return (
          <BrandCard
            key={brand.name}
            count={count}
            country={brand.country!}
            img={brand.logo!}
            make={brand.name}
            slug={brand.slug}
          />
        );
      })}
    </div>
  );
};

export default BrandsListings;
