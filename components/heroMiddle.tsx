import { getCarsWithBrand } from "@/lib/db/queries";
import { formatPersianPrice } from "@/lib/number-formatter";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import CarCard from "./carCard";
import Line from "./ui/line";

const HeroMiddle = async () => {
  const featured = await getCarsWithBrand(3);
  return (
    <div className="bg-[#14161a] pb-20 px-5 lg:px-0">
      <div className=" border-b border-t border-[#333436]">
        <div className="grid grid-cols-1 lg:grid-cols-4 text-sm text-[#adaaa1] py-5 mx-auto max-w-6xl gap-5">
          <p className="flex items-center justify-center gap-1">
            <span className="text-[#d9b37e] font-semibold">۱۸۴</span> خودرو
            موجود در نمایشگاه
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-[#d9b37e] font-semibold">۶۲٪</span> نو /{" "}
            <span className="text-[#d9b37e] font-semibold">۳۸٪</span> کارکرده
            گارانتی‌شده
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-[#d9b37e] font-semibold">به‌روزرسانی</span>{" "}
            روزانه موجودی
          </p>
          <p className="flex items-center justify-center gap-1">
            بازرسی{" "}
            <span className="text-[#d9b37e] font-semibold">۱۵۲ مرحله‌ای</span>{" "}
            برای هر خودرو
          </p>
        </div>
      </div>
      {/* ----------------------------------------------- */}
      <div className="flex flex-col gap-5 max-w-6xl mx-auto pt-20">
        <div className="flex text-xs items-center gap-2 text-[#d9b37e] font-semibold">
          <Line needsHide={false} />
          <p>برگزیده های این هفته</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <h3 className="font-semibold text-3xl">
            سه خودرو از نمایشگاه، شایسته نگاهی دقیق‌تر.
          </h3>

          <Link
            href="/brands"
            className=" text-sm flex gap-2 items-center text-[#adaaa1]"
          >
            <span className="border-b border-[#adaaa1] pb-1">
              {" "}
              مشاهده موجودی کامل
            </span>

            <MoveLeft className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 xl:grid-cols-3 xl:mx-0 gap-5 pt-5">
          {featured.map((featuredCar) => (
            <CarCard
              fuel_type={featuredCar.fuelType}
              img={featuredCar.images}
              make={featuredCar.brand.name}
              mileage={featuredCar.mileage}
              model={featuredCar.model}
              price={formatPersianPrice(featuredCar.price)}
              slug={featuredCar.slug}
              year={featuredCar.year}
              key={featuredCar.id}
              brandSlug={featuredCar.brand.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMiddle;
