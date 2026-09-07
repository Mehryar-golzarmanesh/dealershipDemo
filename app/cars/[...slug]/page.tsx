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
    <div className="py-20 bg-[#14161a]">
      {Breadcrumbs(slug)}
      <CarDetail car={car} />
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

export default CarDetailPage;
