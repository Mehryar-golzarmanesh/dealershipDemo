import CarDetail from "@/components/carDetailspage";
import { db } from "@/db";
import { notFound } from "next/navigation";
import { CarWithBrand } from "@/db/schema";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Line from "@/components/ui/line";
import { CarGallery } from "@/components/carGallery";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import { ContactForm } from "@/components/form/form";

interface Props {
  params: Promise<{ slug: string }>;
}

const CarDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const car: CarWithBrand | undefined = await db.query.cars.findFirst({
    where: (cars, { eq }) => eq(cars.slug, slug),
    with: {
      brand: true,
    },
  });
  if (!car) {
    notFound();
  }

  return (
    <div className="py-15 bg-[#14161a]">
      <div className="max-w-6xl mx-auto">
        {Breadcrumbs(slug)}
        <CarDetail car={car} />
        <div className="px-5 xl:px-0">
          <div className="pt-15 ">
            <div className="text-[#b8935f] flex gap-2 items-center">
              <Line needsHide={false} />
              <p className="text-xs font-semibold">گالری تصاویر</p>
            </div>
            <p className="text-3xl py-5">این خودرو را از هر زاویه ببینید.</p>
            <CarGallery
              images={car.images}
              alt={`تصاویر ماشین ${car.brand.name} ${car.model}`}
            />
          </div>
          {Info(car)}
          {Form()}
        </div>
        <div></div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="flex flex-col gap-5 pt-15">
      <div className="flex gap-1 items-center text-[#b8935f] text-sm">
        <Line needsHide={false} />
        رزرو تست‌درایو
      </div>

      <ContactForm />
    </div>
  );
};

function Breadcrumbs(slug: string) {
  return (
    <Breadcrumb className="max-w-7xl mx-auto pb-5">
      <BreadcrumbList className="text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/brands">خودروها</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const Info = (car: CarWithBrand) => {
  return (
    <div className="pt-15 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <div className="flex flex-col gap-3">
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">موتور</p>
            <p className="font-semibold">{car.motor}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">سیستم انتقال قدرت</p>
            <p>{car.powerDirection}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">نوع سوخت</p>
            <p>{car.fuelType}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">کارکرد</p>
            <p>{car.mileage}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">رنگ بدنه</p>
            <p>{car.color}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">رنگ داخل</p>
            <p>{car.insideColor}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">تعداد سرنشین</p>
            <p>{car.space}</p>
          </div>
          <Separator className="bg-[#323436]" />
          <div className="flex justify-between text-sm">
            <p className="text-[#b9b5ac]">شماره شاسی (VIN)</p>
            <p>{car.vin}</p>
          </div>
          <Separator className="bg-[#323436]" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-[#b8935f] text-sm">
          <Line needsHide={false} />
          درباره این خودرو
        </div>
        <p className="text-sm">
          {car.description}
          <br /> <br /> خودرو با گارانتی نمایشگاه ارائه می‌شود و امکان بازدید
          حضوری و آزمایش رانندگی پیش از خرید فراهم است.
        </p>
        <div className="flex gap-2 items-center text-[#b8935f] text-sm">
          <Line needsHide={false} />
          امکانات ویژه
        </div>
        <Separator className="bg-[#323436]" />
        <p className="flex items-center text-sm">
          <Dot size={30} className="text-[#b8935f]" />
          صندلی چرم دوکاره، مجهز به گرم‌کن و خنک‌کن
        </p>
        <Separator className="bg-[#323436]" />

        <p className="flex items-center text-sm">
          <Dot size={30} className="text-[#b8935f]" />
          دوربین ۳۶۰ درجه و کمک‌پارک هوشمند
        </p>
        <Separator className="bg-[#323436]" />
        <p className="flex items-center text-sm">
          {" "}
          <Dot size={30} className="text-[#b8935f]" />
          سانروف پانورامیک
        </p>
        <Separator className="bg-[#323436]" />
        <p className="flex items-center text-sm">
          {" "}
          <Dot size={30} className="text-[#b8935f]" />
          سیستم صوتی هارمن‌کاردن
        </p>
        <Separator className="bg-[#323436]" />
        <p className="flex items-center text-sm">
          {" "}
          <Dot size={30} className="text-[#b8935f]" />
          کروز کنترل تطبیقی و دستیار خط‌ویژه
        </p>
        <Separator className="bg-[#323436]" />
        <p className="flex items-center text-sm">
          {" "}
          <Dot size={30} className="text-[#b8935f]" />
          ناوبری آنلاین و کارپلی/اندروید‌اتو
        </p>
        <Separator className="bg-[#323436]" />
      </div>
    </div>
  );
};

export default CarDetailPage;
