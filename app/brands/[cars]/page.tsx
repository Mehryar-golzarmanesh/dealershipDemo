import CarCard from "@/components/carCard";
import { CarWithBrand } from "@/db/schema";
import { getCarWithBrandBySlug } from "@/lib/db/queries";

interface Props {
  params: Promise<{ cars: string }>;
}

const page = async ({ params }: Props) => {
  const { cars } = await params;
  const carsWithBrands = await getCarWithBrandBySlug(cars);

  return (
    <div className="pt-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 xl:grid-cols-3 xl:mx-0 gap-5 pt-5">
        {carsWithBrands.map((car) => (
          <div key={car.id}>
            <CarCard car={car as CarWithBrand} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
