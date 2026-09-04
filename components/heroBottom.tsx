import Link from "next/link";
import { Button } from "./ui/button";

const HeroBottom = () => {
  return (
    <div className="flex justify-between items-center bg-[#55212c]  max-w-5xl w-full mx-auto p-16 rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mx-auto">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="text-3xl ">
            پیش از تصمیم‌گیری، <br />
            پشت فرمان بنشینید.
          </h2>
          <p className="text-sm text-[#bfaeab]">
            برای هر خودروی روی نمایشگاه — نو یا کارکرده گارانتی‌شده — یک
            تست‌درایو <br className="hidden lg:block" />
            رزرو کنید. خودرو از قبل برای شما آماده و جلوی درب منتظر خواهد بود.
          </p>
        </div>

        <Link href="/test-drive" className="flex items-center justify-center">
          <Button className="bg-white text-black rounded-sm p-5">
            رزرو تست درایو
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBottom;
