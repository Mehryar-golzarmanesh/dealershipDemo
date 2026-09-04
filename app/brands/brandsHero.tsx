import { Breadcrumbs } from "@/components/breadcrumbs";
import Line from "@/components/ui/line";
import { formatPersianPrice, toPersianNumbers } from "@/lib/number-formatter";
import Image from "next/image";
import React from "react";

const BrandsHero = () => {
  return (
    <div className="pt-20 relative">
      <Image
        src="/car-bg.webp"
        alt="عکس بکپراند برند ها"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="mx-auto max-w-6xl relative z-10">
        <Breadcrumbs />
      </div>
      <div className="pt-15 flex gap-2 items-center text-sm max-w-5xl mx-auto text-[#d9b37e] relative z-10 px-5">
        <Line needsHide={true} />
        ۱۰ برند بین‌المللی، زیر یک سقف
      </div>
      <div className="pt-5 flex flex-col gap-5 relative z-10">
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-4 px-5">
          <h1 className="text-4xl md:text-5xl leading-18 text-[#ede9e1] text-center md:text-right">
            برندهایی که در نمایشگاه ما جای
            <br className="hidden md:block" /> می‌گیرند.
          </h1>
          <p className="text-sm md:text-md text-[#b9b5ac] text-center md:text-right">
            از سدان‌های آلمانی گرفته تا کوپه‌های ایتالیایی — هر برند در این
            فهرست با همان استاندارد <br />
            بازرسی ۱۵۲ مرحله‌ای پذیرفته می‌شود، چه خودرو نو باشد و چه کارکرده
            گارانتی‌شده.
          </p>
        </div>
        <div className=" border-b border-t border-[#333436] mt-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 text-xs text-[#adaaa1] py-5 mx-auto max-w-6xl gap-5">
            <p className="flex items-center justify-center gap-1">
              <span className="text-[#d9b37e] font-semibold">
                {toPersianNumbers(10)}
              </span>
              برند بین المللی
            </p>
            <p className="flex items-center justify-center gap-1">
              بیش از{" "}
              <span className="text-[#d9b37e] font-semibold">
                {toPersianNumbers(180)}
              </span>{" "}
              خودرو موجود
            </p>
            <p className="flex items-center justify-center gap-1">
              از
              <span className="text-[#d9b37e] font-semibold">
                {formatPersianPrice(350000000)}
              </span>{" "}
              میلیون تومان
            </p>
            <p className="flex items-center justify-center gap-1">
              به‌روزرسانی{" "}
              <span className="text-[#d9b37e] font-semibold">روزانه</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsHero;
