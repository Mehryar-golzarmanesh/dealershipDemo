import { CarWithBrand } from "@/db/schema";
import { formatPersianPrice } from "@/lib/number-formatter";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface Props {
  car: CarWithBrand;
}

const CarDetail = ({ car }: Props) => {
  return (
    <div className="max-w-6xl mx-auto h-full w-full flex flex-col rounded-2xl relative px-2 lg:px-0">
      <div className="rounded-2xl border border-[#323436] relative overflow-hidden pt-80 rounded-b-none">
        <Image
          src={car.images[0]}
          alt={`عکس ماشین ${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          loading="eager"
          className="object-cover rounded-xl rounded-b-none"
        />
        <div className="absolute inset-0 bg-black/60 rounded-xl rounded-b-none " />
        <div className="relative z-10 flex gap-3 text-sm p-5">
          <p className="px-3 py-1 rounded-full border border-[#b8935f] text-[#eec58c] bg-[#16171b]">
            {car.mileage ? "کارکرده و گارانتی شده" : "نو و گارانتی شده"}
          </p>
          <p className="px-3 py-1 rounded-full border border-[#323436] text-[#b9b5ac] bg-[#16171b]">
            {car.brand.name}
          </p>
          <p className="px-3 py-1 rounded-full border border-[#323436] text-[#b9b5ac] bg-[#16171b]">
            مدل {car.year}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10 p-5 gap-7">
          <div className="text-4xl">
            {car.brand.name}{" "}
            <span className="text-[#d9b37e] font-semibold">{car.model}</span>
          </div>
          <div className="flex flex-col gap-3 bg-[#16171b] p-2 rounded-full w-fit px-10 py-5">
            <h2 className="text-3xl font-bold">
              <span className="text-[#d9b37e]">
                {formatPersianPrice(car.price)}
              </span>{" "}
              میلیون تومان
            </h2>
            <div className="text-xs text-white lg:text-center font-semibold">
              شامل بازرسی ۱۵۲ مرحله‌ای و گارانتی نمایشگاه
            </div>
          </div>
        </div>
        <div className="z-10 relative px-5 pb-10 flex gap-5">
          <Link href="/test-drive">
            <Button className="bg-[#b8935f] text-black rounded-none p-5 hover:bg-[#d9b37e] hover:text-black">
              رزرو تست درایو
            </Button>
          </Link>
          <Button className="rounded-none border-[#323436] text-white p-5 hover:border-[#b8935f] hover:text-[#b8935f] hover:bg-[#14161a]">
            دانلود گزارش بازرسی
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <div className="bg-[#1b1e23] border-[#323436] border border-t-0 p-5 flex flex-col gap-3">
          <div className="text-xs text-[#b9b5ac]">سال تولید</div>
          <Separator className="bg-[#b9b5ac]" />
          <div className="font-semibold">{car.year}</div>
        </div>
        <div className="bg-[#1b1e23] border-[#323436] border border-t-0 p-5 flex flex-col gap-3">
          <div className="text-xs text-[#b9b5ac]">کارکرد</div>
          <Separator className="bg-[#b9b5ac]" />
          <div className="font-semibold">
            {formatPersianPrice(car.mileage)} کیلومتر
          </div>
        </div>
        <div className="bg-[#1b1e23] border-[#323436] border border-t-0 p-5 flex flex-col gap-3">
          <div className="text-xs text-[#b9b5ac]">سوخت</div>
          <Separator className="bg-[#b9b5ac]" />
          <div className="font-semibold">{car.fuelType}</div>
        </div>
        <div className="bg-[#1b1e23] border-[#323436] border border-t-0 p-5 flex flex-col gap-3">
          <div className="text-xs text-[#b9b5ac]">گیربکس</div>
          <Separator className="bg-[#b9b5ac]" />
          <div className="font-semibold">{car.transmission}</div>
        </div>
        <div className="bg-[#1b1e23] border-[#323436] border border-t-0 p-5 flex flex-col gap-3">
          <div className="text-xs text-[#b9b5ac]">رنگ بدنه</div>
          <Separator className="bg-[#b9b5ac] col-span-2 lg:col-span-1" />
          <div className="font-semibold">{car.color}</div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
