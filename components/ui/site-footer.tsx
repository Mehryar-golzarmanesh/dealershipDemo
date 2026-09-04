import { footer_link } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#14161a] pt-10 pb-10 border-t border-[#323337] px-5">
      <div className="max-w-6xl grid grid-cols-2 md:grid-cols-4 mx-auto w-full gap-30 border-b border-gray-500 pb-10">
        <div className="flex flex-col flex-1 text-sm gap-5">
          <div className="flex items-center">
            <Image
              src="/footer-logo-enhanced.svg"
              alt="لوگوی ارم خودروی عرفان"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-wrap text-xs lg:text-md">
            خودروهای نو و کارکرده گارانتی‌شده، با یک استاندارد بازرسی، عرضه
            می‌شوند.
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 text-sm text-[#b9b082]">
          <p className="text-xs text-[#8b8883]">نمایشگاه</p>
          <ul className="flex gap-3 flex-col">
            {footer_link.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-5 text-sm">
          <p className="text-xs text-[#8b8883]">بازدید</p>
          <div className="flex flex-col gap-3">
            <p className="text-[#8b8883]">هر روز، ساعت ۹ صبح تا ۷ عصر</p>
            <Link href="/location/" className="text-[#b9b082] text-sm">
              مسیر
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-sm text-[#b9b082]">
          <p className="text-xs text-[#8b8883]">تماس</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/test-drive">تست درایو</Link>
            </li>
            <li>
              <Link href="requests">ارسال درخواست</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between max-w-6xl mx-auto w-full text-xs mt-5 text-[#8b8883]">
        <div>© مهریار گلزارمنش</div>
        <div>نمونه طراحی — صرفاً جهت ارائه</div>
      </div>
    </footer>
  );
};

export default Footer;
