import { formatPersianPrice } from "@/lib/number-formatter";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

interface Props {
  img: string;
  make: string;
  country: string;
  slug: string;
  count: Promise<number>;
}

const BrandCard = ({ img, make, country, slug, count }: Props) => {
  return (
    <div className="bg-[#1b1e23] p-5 flex flex-col gap-3 items-center border border-[#383b3e] rounded-sm hover:border-[#d9b37e] hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col items-center">
        <Image
          src={img}
          className="text-yellow-500"
          width={70}
          height={70}
          alt={`عکس لوگوی ماشین ${make}`}
        />
        <h3 className="font-semibold py-2 text-[#d9b37e]">{make}</h3>
        <p className="text-xs">{country}</p>
      </div>
      <Separator className="bg-[#383b3e]" />
      <div className="flex flex-col gap-2 text-sm w-full">
        <div className="flex justify-between">
          <p>خودرو موجود</p>
          <p>{count}</p>
        </div>
        <div className="flex justify-between">
          <p>شروع قیمت</p>
          <p>{formatPersianPrice(500000000)}</p>
        </div>
        <Link
          href={`/brands/${slug}`}
          className="flex items-center gap-2 text-xs text-[#d9b37e] mt-10 mx-auto border border-[#d9b37e] p-2 rounded-sm hover:bg-[#d9b37e] hover:text-black transition duration-300"
        >
          مشاهده خودروها <MoveLeft size={10} />
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
