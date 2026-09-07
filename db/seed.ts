// db/seed.ts
import { db } from "./index";
import {
  brands,
  cars,
  inquiries,
  type NewBrand,
  type NewCar,
  type NewInquiry,
} from "./schema";

// ============================================
// 1. SEED BRANDS
// ============================================

const brandData: NewBrand[] = [
  {
    name: "بی‌ام‌و",
    slug: "bmw",
    country: "آلمان",
    logo: "/brands/bmw.png",
    website: "https://www.bmw.com",
    description:
      "خودروساز لوکس آلمانی با تمرکز بر عملکرد، طراحی و فناوری پیشرفته",
    isActive: true,
  },
  {
    name: "هوندا",
    slug: "honda",
    country: "ژاپن",
    logo: "/brands/honda.png",
    website: "https://www.honda.com",
    description: "خودروساز ژاپنی با موتورهای قابل اعتماد و طراحی‌های کاربردی",
    isActive: true,
  },
  {
    name: "لمبورگینی",
    slug: "lamborghini",
    country: "ایتالیا",
    logo: "/brands/lamborghini.png",
    website: "https://www.lamborghini.com",
    description:
      "نماد خودروهای اسپرت ایتالیایی با طراحی خشن و موتورهای قدرتمند",
    isActive: true,
  },
  {
    name: "مزدا",
    slug: "mazda",
    country: "ژاپن",
    logo: "/brands/mazda.png",
    website: "https://www.mazda.com",
    description: "خودروساز ژاپنی با طراحی‌های زیبا و فناوری Skyactiv",
    isActive: true,
  },
  {
    name: "نیسان",
    slug: "nissan",
    country: "ژاپن",
    logo: "/brands/nissan.png",
    website: "https://www.nissan.com",
    description: "خودروساز ژاپنی با تنوع بالا و فناوری الکتریکی پیشرو",
    isActive: true,
  },
  {
    name: "پژو",
    slug: "peugeot",
    country: "فرانسه",
    logo: "/brands/peugeot.png",
    website: "https://www.peugeot.com",
    description: "خودروساز فرانسوی با طراحی‌های جذاب و موتورهای کم‌مصرف",
    isActive: true,
  },
  {
    name: "فولکس‌واگن",
    slug: "volkswagen",
    country: "آلمان",
    logo: "/brands/volkswagen.png",
    website: "https://www.vw.com",
    description: "خودروساز آلمانی با تولید خودروهای باکیفیت و محبوب جهانی",
    isActive: true,
  },
];

// ============================================
// 2. SEED CARS (Related to Brands)
// ============================================

// Helper to generate a clean URL slug
function generateSlug(
  brandSlug: string,
  modelSlug: string,
  year: number,
): string {
  return `${brandSlug}-${modelSlug}-${year}`;
}

// Helper to get brand ID by slug
async function getBrandIdBySlug(slug: string): Promise<number> {
  const result = await db.query.brands.findFirst({
    where: (brands, { eq }) => eq(brands.slug, slug),
  });
  if (!result) throw new Error(`Brand with slug "${slug}" not found`);
  return result.id;
}

// Car data
const carSeedData = [
  // ===== BMW =====
  {
    brandSlug: "bmw",
    model: "ایکس‌۵",
    modelSlug: "x5",
    year: 2024,
    price: 4800000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "دیزل",
    color: "سفید",
    description:
      "بی‌ام‌و ایکس‌۵ ۲۰۲۴، شاسی‌بلند لوکس آلمانی. با موتور ۳.۰ لیتری توربو، سیستم چهارچرخ محرک xDrive، سقف پانوراما و فضای داخلی فوق‌لوکس. تجربه‌ای بی‌نظیر از رانندگی.",
    images: ["/cars/bmw-x5/1.jpg", "/cars/bmw-x5/2.jpg", "/cars/bmw-x5/3.jpg"],
    isFeatured: true,
    vin: "BMWX52024A001",
  },
  {
    brandSlug: "bmw",
    model: "سری ۳",
    modelSlug: "3-series",
    year: 2023,
    price: 3200000000,
    mileage: 12000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "مشکی",
    description:
      "بی‌ام‌و سری ۳ ۲۰۲۳، سدان اسپرت آلمانی. با موتور ۲.۰ لیتری توربو، طراحی اسپرت و هندلینگ عالی. مناسب برای رانندگی‌های شهری و جاده‌ای.",
    images: ["/cars/bmw-3-series/1.jpg", "/cars/bmw-3-series/2.jpg"],
    isFeatured: false,
    vin: "BMW3S2023B002",
  },
  {
    brandSlug: "bmw",
    model: "ایکس‌۷",
    modelSlug: "x7",
    year: 2024,
    price: 7200000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "نقره‌ای",
    description:
      "بی‌ام‌و ایکس‌۷ ۲۰۲۴، شاسی‌بلند ۷ نفره لوکس. با موتور ۴.۴ لیتری V8، کابین فوق‌لوکس و امکانات پیشرفته. پادشاه جاده‌ها.",
    images: ["/cars/bmw-x7/1.jpg", "/cars/bmw-x7/2.jpg", "/cars/bmw-x7/3.jpg"],
    isFeatured: true,
    vin: "BMWX72024C003",
  },

  // ===== HONDA =====
  {
    brandSlug: "honda",
    model: "سیویک",
    modelSlug: "civic",
    year: 2024,
    price: 2500000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "آبی",
    description:
      "هوندا سیویک ۲۰۲۴، سدان جمع‌وجور و محبوب ژاپنی. با موتور کم‌مصرف، طراحی مدرن و کیفیت ساخت بالا. انتخابی عالی برای خانواده‌های جوان.",
    images: ["/cars/honda-civic/1.jpg", "/cars/honda-civic/2.jpg"],
    isFeatured: true,
    vin: "HONCIV2024D004",
  },
  {
    brandSlug: "honda",
    model: "سی‌آر-وی",
    modelSlug: "cr-v",
    year: 2023,
    price: 3200000000,
    mileage: 15000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "سفید",
    description:
      "هوندا سی‌آر-وی ۲۰۲۳، شاسی‌بلند خانوادگی ژاپنی. با فضای داخلی جادار، مصرف سوخت بهینه و قابلیت اطمینان بالا. بهترین همراه برای سفرهای خانوادگی.",
    images: [
      "/cars/honda-cr-v/1.jpg",
      "/cars/honda-cr-v/2.jpg",
      "/cars/honda-cr-v/3.jpg",
    ],
    isFeatured: false,
    vin: "HONCRV2023E005",
  },

  // ===== LAMBORGHINI =====
  {
    brandSlug: "lamborghini",
    model: "اوروس",
    modelSlug: "urus",
    year: 2024,
    price: 9200000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "زرد",
    description:
      "لمبورگینی اوروس ۲۰۲۴، شاسی‌بلند اسپرت ایتالیایی. با موتور V8 توربو، طراحی خشن و سرعت بی‌نظیر. ترکیبی از لوکس و عملکرد اسپرت.",
    images: [
      "/cars/lamborghini-urus/1.jpg",
      "/cars/lamborghini-urus/2.jpg",
      "/cars/lamborghini-urus/3.jpg",
    ],
    isFeatured: true,
    vin: "LAMURU2024F006",
  },
  {
    brandSlug: "lamborghini",
    model: "هوراکان",
    modelSlug: "huracan",
    year: 2023,
    price: 8200000000,
    mileage: 5000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "سبز",
    description:
      "لمبورگینی هوراکان ۲۰۲۳، سوپراسپرت ایتالیایی. با موتور V10، طراحی افسانه‌ای و صدای منحصر‌به‌فرد. رویای هر راننده‌ای.",
    images: [
      "/cars/lamborghini-huracan/1.jpg",
      "/cars/lamborghini-huracan/2.jpg",
    ],
    isFeatured: true,
    vin: "LAMHUR2023G007",
  },

  // ===== MAZDA =====
  {
    brandSlug: "mazda",
    model: "مزدا ۳",
    modelSlug: "mazda3",
    year: 2024,
    price: 1800000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "قرمز",
    description:
      "مزدا ۳ ۲۰۲۴، هاچ‌بک اسپرت ژاپنی. با طراحی زیبا، موتور کم‌مصرف و هندلینگ عالی. انتخابی شیک و اقتصادی.",
    images: ["/cars/mazda3/1.jpg", "/cars/mazda3/2.jpg"],
    isFeatured: false,
    vin: "MAZ3S2024H008",
  },
  {
    brandSlug: "mazda",
    model: "سی‌ایکس-۵",
    modelSlug: "cx-5",
    year: 2023,
    price: 2800000000,
    mileage: 18000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "نقره‌ای",
    description:
      "مزدا سی‌ایکس-۵ ۲۰۲۳، شاسی‌بلند اسپرت ژاپنی. با طراحی کورو، کابین باکیفیت و عملکرد عالی. بهترین در کلاس خود.",
    images: [
      "/cars/mazda-cx5/1.jpg",
      "/cars/mazda-cx5/2.jpg",
      "/cars/mazda-cx5/3.jpg",
    ],
    isFeatured: false,
    vin: "MAZCX52023I009",
  },

  // ===== NISSAN =====
  {
    brandSlug: "nissan",
    model: "پاترول",
    modelSlug: "patrol",
    year: 2024,
    price: 5800000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "دیزل",
    color: "سفید",
    description:
      "نیسان پاترول ۲۰۲۴، شاسی‌بلند قدرتمند ژاپنی. با موتور V8، قابلیت‌های آفرود بی‌نظیر و کابین لوکس. پادشاه بیابان‌ها.",
    images: [
      "/cars/nissan-patrol/1.jpg",
      "/cars/nissan-patrol/2.jpg",
      "/cars/nissan-patrol/3.jpg",
    ],
    isFeatured: true,
    vin: "NISPAT2024J010",
  },
  {
    brandSlug: "nissan",
    model: "قشقایی",
    modelSlug: "qashqai",
    year: 2023,
    price: 2200000000,
    mileage: 20000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "مشکی",
    description:
      "نیسان قشقایی ۲۰۲۳، شاسی‌بلند جمع‌وجور ژاپنی. با طراحی مدرن، مصرف سوخت بهینه و فضای مناسب برای خانواده. محبوب در سراسر جهان.",
    images: ["/cars/nissan-qashqai/1.jpg", "/cars/nissan-qashqai/2.jpg"],
    isFeatured: false,
    vin: "NISQAS2023K011",
  },

  // ===== PEUGEOT =====
  {
    brandSlug: "peugeot",
    model: "۲۰۰۸",
    modelSlug: "2008",
    year: 2024,
    price: 2100000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "آبی",
    description:
      "پژو ۲۰۰۸ ۲۰۲۴، کراس‌اوور فرانسوی. با طراحی جسورانه، کابین i-Cockpit و مصرف سوخت بهینه. انتخابی شیک و مدرن.",
    images: ["/cars/peugeot-2008/1.jpg", "/cars/peugeot-2008/2.jpg"],
    isFeatured: false,
    vin: "PEU20082024L012",
  },
  {
    brandSlug: "peugeot",
    model: "۵۰۸",
    modelSlug: "508",
    year: 2023,
    price: 3500000000,
    mileage: 10000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "نقره‌ای",
    description:
      "پژو ۵۰۸ ۲۰۲۳، سدان لوکس فرانسوی. با طراحی خیره‌کننده، کابین پیشرفته و امکانات کامل. ترکیبی از ظرافت و عملکرد.",
    images: [
      "/cars/peugeot-508/1.jpg",
      "/cars/peugeot-508/2.jpg",
      "/cars/peugeot-508/3.jpg",
    ],
    isFeatured: true,
    vin: "PEU5082023M013",
  },

  // ===== VOLKSWAGEN =====
  {
    brandSlug: "volkswagen",
    model: "گلف",
    modelSlug: "golf",
    year: 2024,
    price: 2600000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "سفید",
    description:
      "فولکس‌واگن گلف ۲۰۲۴، هاچ‌بک محبوب آلمانی. با طراحی کلاسیک، موتور کم‌مصرف و کیفیت ساخت بالا. بهترین هاچ‌بک تاریخ.",
    images: ["/cars/volkswagen-golf/1.jpg", "/cars/volkswagen-golf/2.jpg"],
    isFeatured: true,
    vin: "VWGLF2024N014",
  },
  {
    brandSlug: "volkswagen",
    model: "توارگ",
    modelSlug: "touareg",
    year: 2023,
    price: 4500000000,
    mileage: 8000,
    transmission: "اتوماتیک",
    fuelType: "دیزل",
    color: "مشکی",
    description:
      "فولکس‌واگن توارگ ۲۰۲۳، شاسی‌بلند لوکس آلمانی. با موتور V6 دیزل، کابین جادار و امکانات پیشرفته. ترکیبی از لوکس و عملکرد.",
    images: [
      "/cars/volkswagen-touareg/1.jpg",
      "/cars/volkswagen-touareg/2.jpg",
      "/cars/volkswagen-touareg/3.jpg",
    ],
    isFeatured: false,
    vin: "VWTUR2023O015",
  },
];

// ============================================
// 3. SEED INQUIRIES (Optional - For Testing)
// ============================================

const inquiryData: Omit<NewInquiry, "id" | "createdAt">[] = [
  {
    carId: null, // Contact page inquiry
    type: "contact",
    name: "احمد محمدی",
    email: "ahmad@example.com",
    phone: "۰۹۱۲۱۲۳۴۵۶۷",
    preferredDate: null,
    message: "سلام، من به خرید خودرو علاقه دارم. لطفاً من را راهنمایی کنید.",
    status: "new",
  },
  {
    carId: null,
    type: "contact",
    name: "سارا حسینی",
    email: "sara@example.com",
    phone: "۰۹۱۲۱۲۳۴۵۶۸",
    preferredDate: null,
    message: "اطلاعات بیشتری درباره قسط‌بندی می‌خواهم.",
    status: "new",
  },
];

// ============================================
// 4. SEED FUNCTION
// ============================================

async function seed() {
  console.log("🌱 شروع فرآیند دیتابیس...");

  try {
    // Clear existing data
    console.log("🧹 پاک کردن اطلاعات قبلی...");
    await db.delete(inquiries);
    await db.delete(cars);
    await db.delete(brands);
    console.log("✅ اطلاعات قبلی پاک شد");

    // Insert brands
    console.log("📦 درج برندها...");
    const insertedBrands = await db
      .insert(brands)
      .values(brandData)
      .returning();
    console.log(`✅ ${insertedBrands.length} برند با موفقیت ثبت شد`);

    // Insert cars
    console.log("🚗 درج خودروها...");

    const carData: NewCar[] = [];
    for (const car of carSeedData) {
      const brandId = await getBrandIdBySlug(car.brandSlug);
      const slug = generateSlug(car.brandSlug, car.modelSlug, car.year);

      carData.push({
        brandId,
        slug,
        model: car.model,
        year: car.year,
        price: car.price.toString(),
        mileage: car.mileage,
        transmission: car.transmission,
        fuelType: car.fuelType,
        color: car.color,
        vin: car.vin,
        description: car.description,
        images: car.images,
        isFeatured: car.isFeatured,
        isAvailable: true,
      });
    }

    const insertedCars = await db.insert(cars).values(carData).returning();
    console.log(`✅ ${insertedCars.length} خودرو با موفقیت ثبت شد!`);

    // Insert inquiries (optional)
    console.log("📝 درج پیام‌های نمونه...");
    await db.insert(inquiries).values(inquiryData);
    console.log(`✅ ${inquiryData.length} پیام نمونه ثبت شد`);

    // Summary
    console.log("\n📊 خلاصه:");
    console.log(`   تعداد برندها: ${insertedBrands.length}`);
    console.log(`   تعداد خودروها: ${insertedCars.length}`);
    console.log(`   پیام‌ها: ${inquiryData.length}`);
    console.log("\n🎉 عملیات با موفقیت انجام شد!");

    // Show example
    if (insertedCars.length > 0) {
      const firstCar = insertedCars[0];
      const brand = await db.query.brands.findFirst({
        where: (brands, { eq }) => eq(brands.id, firstCar.brandId),
      });
      console.log("\n📝 نمونه خودرو:");
      console.log(`   ${brand?.name} ${firstCar.model} (${firstCar.year})`);
      console.log(`   قیمت: ${firstCar.price} تومان`);
      console.log(`   آدرس: /cars/${brand?.slug}/${firstCar.slug}`);
    }
  } catch (error) {
    console.error("❌ خطا در فرآیند دیتابیس:", error);
    process.exit(1);
  }

  process.exit(0);
}

seed();
