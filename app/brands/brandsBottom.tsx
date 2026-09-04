import { Button } from "@/components/ui/button";
import Link from "next/link";

const BrandsBottom = () => {
  return (
    <div className="flex justify-between items-center bg-[#55212c]  max-w-5xl xl:w-full lg:mx-auto mx-5 p-16 rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mx-auto">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="text-3xl text-center lg:text-right">
            دنبال برندی هستید که در فهرست نیست؟
          </h2>
          <p className="text-sm text-[#bfaeab] text-center lg:text-right">
            تیم تدارکات ما می‌تواند مدل مورد نظر شما را از حراجی‌های معتبر
            بین‌المللی پیدا کند و پس از بازرسی کامل، تحویل دهد.
          </p>
        </div>

        <Link href="/test-drive" className="flex items-center justify-center">
          <Button className="bg-white text-black rounded-sm p-5">
            درخواست تدارک خودرو
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BrandsBottom;
