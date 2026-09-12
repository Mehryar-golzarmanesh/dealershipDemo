import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import SmallSlash from "./ui/slash";

interface Props {
  img: string[];
  make: string;
  model: string;
  year: number;
  mileage: number;
  fuel_type: string;
  price: string;
  slug: string;
  brandSlug: string;
}

const CarCard = ({
  img,
  make,
  model,
  year,
  mileage,
  fuel_type,
  price,
  slug,
}: Props) => {
  return (
    <div className="flex w-full flex-col bg-[#1b1e23] gap-1">
      <div>
        <Image
          src={img[0]}
          alt={`عکس ماشین ${make} ${model}`}
          width={1920}
          height={780}
          className="w-full object-cover h-54"
        />
      </div>
      <div className="flex flex-col gap-3 text-[#b9b5ac] p-5">
        <p className="text-xs text-[#d9b37e]">{make}</p>
        <Link href={`/cars/${slug}`}>
          <p className="text-xl text-white">{model}</p>
        </Link>
        <div className="flex gap-5 text-xs">
          {year} <SmallSlash /> {mileage} کیلومتر <SmallSlash /> {fuel_type}
        </div>
        <Separator className="bg-[#383b3e]" />
        <div className="flex justify-between gap-3">
          <p className="text-xs sm:text-lg">{price} میلیون تومان</p>
          <Link
            href={`/cars/${slug}`}
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
