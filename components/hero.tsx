import { Button } from "@/components/ui/button";
import { prices, years } from "@/lib/constants";
import { SelectAlignItem } from "./selectOne";
import Line from "./ui/line";
import { brands, cars } from "@/db/schema";
import { db } from "@/db";
import { count } from "drizzle-orm";

interface item {
  label: string;
  value: string | null;
}

const HeroSection = async () => {
  const carCount = await db.select({ count: count() }).from(cars);
  const totalCars = carCount[0]?.count || 0;
  const brands_lists_array: item[] = [];
  const brands_lists = await db.select().from(brands);

  brands_lists.map((brand) =>
    brands_lists_array.push({ label: brand.name, value: brand.slug }),
  );
  return (
    <div className="hero-gradient sheen-overlay relative w-full px-5 pb-32">
      <div className="relative z-10 flex h-full text-white flex-col max-w-4xl mx-auto pt-30 gap-7">
        <div className="flex gap-1 items-center">
          <Line needsHide={false} />
          <p className="text-sm text-[#d9b37e]">
            خودروهای نو و کارکرده گارانتی‌شده، همه زیر یک سقف
          </p>
        </div>
        <div>
          <h1 className="text-5xl leading-25 sm:max-w-130 text-[#ede9e1] sm:text-[48px] md:text-6xl md:max-w-170 lg:max-w-180 lg:text-[68px]">
            خودروهایی که مثل یک{" "}
            <span className="text-[#d9b37e] font-semibold">کلکسیونر</span>{" "}
            انتخاب می‌شوند.
          </h1>
        </div>
        <div>
          <p className="max-w-120 text-[#a5a29a]">
            هر خودروی این نمایشگاه — چه نو و چه کارکرده — پیش از عرضه، از یک
            بازرسی ۱۵۲ مرحله‌ای عبور می‌کند. مجموعه کامل را در پایین جست‌وجو
            کنید.
          </p>
        </div>
        <div className="bg-[#14161a] border border-[#383b3e]  rounded-lg px-7 pt-10 pb-15 flex flex-col gap-10">
          <div className="flex justify-between text-xs">
            <p className="text-[#a5a29b] font-semibold">جست و جوی در مجموعه</p>
            <p className="text-[#d7b17d] font-semibold">
              {totalCars} خودرو موجود
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4">
            <SelectAlignItem
              items={brands_lists_array}
              placeholder="هر برندی"
            />
            <SelectAlignItem items={prices} placeholder="300to500" />
            <SelectAlignItem items={years} placeholder="2024to2026" />
            <Button className="rounded-xs p-5 max-w-55">
              جست‌وجوی خودروها
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
