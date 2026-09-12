import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import SmallSlash from "./ui/slash";
import { CarWithBrand } from "@/db/schema";
import { formatPersianPrice } from "@/lib/number-formatter";

interface Props {
  car: CarWithBrand;
}

const CarCard = ({ car }: Props) => {
  return (
    <div className="flex w-full flex-col bg-[#1b1e23] gap-1">
      <div>
        <Image
          src={car.images[0]}
          alt={`عکس ماشین ${car.brand.name} ${car.model}`}
          width={1920}
          height={780}
          className="w-full object-cover h-54"
        />
      </div>
      <div className="flex flex-col gap-3 text-[#b9b5ac] p-5">
        <p className="text-xs text-[#d9b37e]">{car.brand.name}</p>
        <Link href={`/cars/${car.slug}`}>
          <p className="text-xl text-white">{car.model}</p>
        </Link>
        <div className="flex gap-5 text-xs">
          {car.year} <SmallSlash /> {car.mileage} کیلومتر <SmallSlash />{" "}
          {car.fuelType}
        </div>
        <Separator className="bg-[#383b3e]" />
        <div className="flex justify-between gap-3">
          <p className="text-xs sm:text-lg">
            {formatPersianPrice(car.price)} میلیون تومان
          </p>
          <Link
            href={`/cars/${car.slug}`}
            className="flex gap-1 text-xs items-center text-[#d9b37e]"
          >
            جزئیات <MoveLeft className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
