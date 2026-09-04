// db/seed.ts
import { db } from "./index";
import { brands, cars, type NewBrand, type NewCar } from "./schema";

// ============================================
// 1. SEED BRANDS
// ============================================

const brandData: NewBrand[] = [
  {
    name: "ایران خودرو",
    slug: "iran-khodro",
    country: "ایران",
    logo: "/brands/iran-khodro.png",
    website: "https://www.ikco.ir",
    description: "بزرگترین خودروساز ایران با بیش از ۵۰ سال سابقه",
    isActive: true,
  },
  {
    name: "سایپا",
    slug: "saipa",
    country: "ایران",
    logo: "/brands/saipa.png",
    website: "https://www.saipa.com",
    description: "دومین خودروساز بزرگ ایران با تولید خودروهای اقتصادی",
    isActive: true,
  },
  {
    name: "تویوتا",
    slug: "toyota",
    country: "ژاپن",
    logo: "/brands/toyota.png",
    website: "https://www.toyota.com",
    description: "بزرگترین خودروساز جهان با کیفیت و دوام بی‌نظیر",
    isActive: true,
  },
  {
    name: "بی‌ام‌و",
    slug: "bmw",
    country: "آلمان",
    logo: "/brands/bmw.png",
    website: "https://www.bmw.com",
    description: "خودروساز لوکس آلمانی با تمرکز بر عملکرد و طراحی",
    isActive: true,
  },
  {
    name: "مرسدس بنز",
    slug: "mercedes-benz",
    country: "آلمان",
    logo: "/brands/mercedes.png",
    website: "https://www.mercedes-benz.com",
    description: "نماد لوکس و کیفیت در صنعت خودروسازی جهان",
    isActive: true,
  },
  {
    name: "پورشه",
    slug: "porsche",
    country: "آلمان",
    logo: "/brands/porsche.png",
    website: "https://www.porsche.com",
    description: "خودروساز اسپرت آلمانی با طراحی‌های منحصر‌به‌فرد",
    isActive: true,
  },
  {
    name: "هیوندای",
    slug: "hyundai",
    country: "کره جنوبی",
    logo: "/brands/hyundai.png",
    website: "https://www.hyundai.com",
    description: "خودروساز پیشرو کرهای با طراحی‌های مدرن",
    isActive: true,
  },
  {
    name: "کیا",
    slug: "kia",
    country: "کره جنوبی",
    logo: "/brands/kia.png",
    website: "https://www.kia.com",
    description: "خودروساز کرهای با طراحی‌های جسورانه و اقتصادی",
    isActive: true,
  },
  {
    name: "لکسوس",
    slug: "lexus",
    country: "ژاپن",
    logo: "/brands/lexus.png",
    website: "https://www.lexus.com",
    description: "برند لوکس تویوتا با کیفیت و خدمات استثنایی",
    isActive: true,
  },
  {
    name: "تسلا",
    slug: "tesla",
    country: "آمریکا",
    logo: "/brands/tesla.png",
    website: "https://www.tesla.com",
    description: "پیشرو در خودروهای برقی و فناوری‌های آینده",
    isActive: true,
  },
];

// ============================================
// 2. SEED CARS (with explicit model slugs)
// ============================================

// Helper to generate a clean URL slug from brand slug, model slug, and year
function generateSlug(
  brandSlug: string,
  modelSlug: string,
  year: number,
): string {
  return `${brandSlug}-${modelSlug}-${year}`;
}

// Helper to get brand ID by name
async function getBrandId(name: string): Promise<number> {
  const result = await db.query.brands.findFirst({
    where: (brands, { eq }) => eq(brands.name, name),
  });
  if (!result) throw new Error(`Brand "${name}" not found`);
  return result.id;
}

// Car data with explicit model slugs (for Persian names)
const carSeedData = [
  // ===== IRANIAN CARS =====
  {
    brandName: "ایران خودرو",
    model: "دنا پلاس",
    modelSlug: "dena-plus",
    year: 1402,
    price: 780000000,
    mileage: 0,
    transmission: "دنده‌ای",
    fuelType: "بنزین",
    color: "سفید",
    description:
      "دنا پلاس، کامل‌ترین گزینه برای خانواده‌های ایرانی. با موتور قدرتمند EF7، امکانات کامل ایمنی و رفاهی، و طراحی مدرن. انتخابی ایده‌آل برای سفرهای شهری و جاده‌ای.",
    images: [
      "/cars/dena-plus/1.jpg",
      "/cars/dena-plus/2.jpg",
      "/cars/dena-plus/3.jpg",
    ],
    isFeatured: true,
    vin: "IKDPLUS1402A001",
  },
  {
    brandName: "ایران خودرو",
    model: "ریرا",
    modelSlug: "rira",
    year: 1401,
    price: 620000000,
    mileage: 12000,
    transmission: "دنده‌ای",
    fuelType: "بنزین",
    color: "مشکی",
    description:
      "ریرا، خودروی اسپرت و جوان‌پسند ایران خودرو. با طراحی کوپه‌گونه، موتور ۱.۷ لیتری و مصرف بهینه سوخت. مناسب برای رانندگی‌های شهری با ظاهری خاص و جذاب.",
    images: ["/cars/rira/1.jpg", "/cars/rira/2.jpg"],
    isFeatured: false,
    vin: "IKDRIRA1401B002",
  },
  {
    brandName: "سایپا",
    model: "شاهین",
    modelSlug: "shahin",
    year: 1402,
    price: 550000000,
    mileage: 0,
    transmission: "دنده‌ای",
    fuelType: "بنزین",
    color: "نقره‌ای",
    description:
      "شاهین، پرچمدار جدید سایپا. با طراحی مدرن و اسپرت، موتور توربو، و امکانات پیشرفته مانند نمایشگر لمسی و دوربین عقب. ترکیبی از زیبایی و عملکرد عالی.",
    images: ["/cars/shahin/1.jpg", "/cars/shahin/2.jpg", "/cars/shahin/3.jpg"],
    isFeatured: true,
    vin: "SAPSHAHIN1402C003",
  },
  {
    brandName: "سایپا",
    model: "کوییک",
    modelSlug: "quick",
    year: 1401,
    price: 480000000,
    mileage: 25000,
    transmission: "دنده‌ای",
    fuelType: "بنزین",
    color: "آبی",
    description:
      "سایپا کوییک، خودروی اقتصادی و کم‌مصرف برای شهرهای شلوغ. با موتور ۱.۵ لیتری، طراحی هاچ‌بک و فضای مناسب برای یک خانواده جوان. بهترین گزینه برای شروع.",
    images: ["/cars/quick/1.jpg"],
    isFeatured: false,
    vin: "SAPQUICK1401D004",
  },
  {
    brandName: "ایران خودرو",
    model: "تارا",
    modelSlug: "tara",
    year: 1402,
    price: 680000000,
    mileage: 0,
    transmission: "دنده‌ای",
    fuelType: "بنزین",
    color: "سفید",
    description:
      "تارا، سدان جدید ایران خودرو با طراحی اروپایی و همکاری با شرکت‌های معتبر جهانی. کیفیت ساخت بالا، کابین جادار و امکانات ایمنی کامل. انتخابی شیک و مطمئن.",
    images: ["/cars/tara/1.jpg", "/cars/tara/2.jpg"],
    isFeatured: true,
    vin: "IKDTARA1402E005",
  },
  {
    brandName: "سایپا",
    model: "ساینا",
    modelSlug: "saina",
    year: 1400,
    price: 350000000,
    mileage: 45000,
    transmission: "دنده‌ای",
    fuelType: "بنزین",
    color: "قرمز",
    description:
      "ساینا، هاچ‌بک جمع‌وجور و اقتصادی سایپا. با مصرف سوخت بهینه، هزینه نگهداری پایین و طراحی جذاب. مناسب برای تردد در شهر و پارکینگ‌های کوچک.",
    images: ["/cars/saina/1.jpg", "/cars/saina/2.jpg"],
    isFeatured: false,
    vin: "SAPSAINA1400F006",
  },

  // ===== INTERNATIONAL CARS =====
  {
    brandName: "تویوتا",
    model: "کمری",
    modelSlug: "camry",
    year: 2024,
    price: 3500000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "مشکی",
    description:
      "تویوتا کمری ۲۰۲۴، سدان لوکس و محبوب ژاپنی. با طراحی جدید، موتور هیبریدی با مصرف سوخت فوق‌العاده، کابین آرام و کیفیت ساخت بی‌نظیر. مناسب برای مدیران و خانواده‌های بزرگ.",
    images: ["/cars/camry/1.jpg", "/cars/camry/2.jpg", "/cars/camry/3.jpg"],
    isFeatured: true,
    vin: "TOYCAM2024G007",
  },
  {
    brandName: "بی‌ام‌و",
    model: "ایکس‌۵",
    modelSlug: "x5",
    year: 2023,
    price: 4800000000,
    mileage: 15000,
    transmission: "اتوماتیک",
    fuelType: "دیزل",
    color: "سفید",
    description:
      "بی‌ام‌و ایکس‌۵ ۲۰۲۳، شاسی‌بلند لوکس آلمانی. با موتور ۳.۰ لیتری توربو، سیستم چهارچرخ محرک xDrive، سقف پانوراما و فضای داخلی فوق‌لوکس. تجربه‌ای بی‌نظیر از رانندگی.",
    images: [
      "/cars/x5/1.jpg",
      "/cars/x5/2.jpg",
      "/cars/x5/3.jpg",
      "/cars/x5/4.jpg",
    ],
    isFeatured: true,
    vin: "BMWX52023H008",
  },
  {
    brandName: "مرسدس بنز",
    model: "اس-کلاس",
    modelSlug: "s-class",
    year: 2024,
    price: 6200000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "نقره‌ای",
    description:
      "مرسدس بنز اس-کلاس ۲۰۲۴، اوج لوکس‌گرایی در صنعت خودروسازی. با کابین دیجیتال کامل، سیستم صوتی بورمس، چراغ‌های دیجیتال و موتور فوق‌قدرتمند. سلطان جاده‌ها.",
    images: ["/cars/s-class/1.jpg", "/cars/s-class/2.jpg"],
    isFeatured: true,
    vin: "MBSC2024I009",
  },
  {
    brandName: "پورشه",
    model: "کاین",
    modelSlug: "cayenne",
    year: 2023,
    price: 5500000000,
    mileage: 8000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "آبی",
    description:
      "پورشه کاین ۲۰۲۳، شاسی‌بلند اسپرت آلمانی. با موتور ۶ سیلندر، سیستم تعلیق هوشمند، طراحی اسپرت و هندلینگ فوق‌العاده. مناسب برای کسانی که عاشق رانندگی هستند.",
    images: [
      "/cars/cayenne/1.jpg",
      "/cars/cayenne/2.jpg",
      "/cars/cayenne/3.jpg",
    ],
    isFeatured: false,
    vin: "PORCAY2023J010",
  },
  {
    brandName: "هیوندای",
    model: "سوناتا",
    modelSlug: "sonata",
    year: 2023,
    price: 2800000000,
    mileage: 22000,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "قرمز",
    description:
      "هیوندای سوناتا ۲۰۲۳، سدان زیبا و مدرن کرهای. با طراحی خطوط شارپ، موتور کم‌مصرف، کابین جادار و امکانات فناورانه مانند نمایشگر دوگانه. گزینه‌ای عالی برای خانواده.",
    images: ["/cars/sonata/1.jpg", "/cars/sonata/2.jpg"],
    isFeatured: false,
    vin: "HYUSON2023K011",
  },
  {
    brandName: "کیا",
    model: "تلوراید",
    modelSlug: "telluride",
    year: 2024,
    price: 3000000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "بنزین",
    color: "مشکی",
    description:
      "کیا تلوراید ۲۰۲۴، شاسی‌بلند خانوادگی ۷ نفره با طراحی خشن و عضلانی. با موتور ۳.۸ لیتری، کابین جادار و لاکچری، و کامل‌ترین امکانات ایمنی. بهترین همراه برای سفرهای طولانی.",
    images: [
      "/cars/telluride/1.jpg",
      "/cars/telluride/2.jpg",
      "/cars/telluride/3.jpg",
    ],
    isFeatured: true,
    vin: "KIATEL2024L012",
  },
  {
    brandName: "لکسوس",
    model: "آرایکس",
    modelSlug: "rx",
    year: 2023,
    price: 4200000000,
    mileage: 10000,
    transmission: "اتوماتیک",
    fuelType: "هیبرید",
    color: "نقره‌ای",
    description:
      "لکسوس آرایکس ۲۰۲۳، شاسی‌بلند هیبرید ژاپنی با کیفیت ساخت بی‌نظیر. با موتور هیبریدی کم‌مصرف، کابین فوق‌آرام، و سیستم ایمنی کامل لکسوس. لوکس بودن را دوباره تعریف می‌کند.",
    images: ["/cars/rx/1.jpg", "/cars/rx/2.jpg"],
    isFeatured: false,
    vin: "LEXRX2023M013",
  },
  {
    brandName: "تویوتا",
    model: "لندکروزر",
    modelSlug: "land-cruiser",
    year: 2024,
    price: 6800000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "دیزل",
    color: "سفید",
    description:
      "تویوتا لندکروزر ۲۰۲۴، افسانه‌ای‌ترین شاسی‌بلند جهان. با قابلیت‌های بی‌نظیر آفرود، موتور ۶ سیلندر دیزل، کابین لاکچری و دوام افسانه‌ای. پادشاه جاده‌های صعب‌العبور.",
    images: [
      "/cars/land-cruiser/1.jpg",
      "/cars/land-cruiser/2.jpg",
      "/cars/land-cruiser/3.jpg",
    ],
    isFeatured: true,
    vin: "TOYLC2024N014",
  },
  {
    brandName: "تسلا",
    model: "مدل اس",
    modelSlug: "model-s",
    year: 2024,
    price: 5200000000,
    mileage: 0,
    transmission: "اتوماتیک",
    fuelType: "برقی",
    color: "خاکستری",
    description:
      "تسلا مدل اس ۲۰۲۴، پیشروترین سدان برقی جهان. با شتاب ۰ تا ۱۰۰ در ۲ ثانیه، اتوپایلوت کامل، صفحه‌نمایش ۱۷ اینچی و محدوده حرکت ۶۰۰ کیلومتر. آینده خودروسازی امروز اینجاست.",
    images: [
      "/cars/model-s/1.jpg",
      "/cars/model-s/2.jpg",
      "/cars/model-s/3.jpg",
    ],
    isFeatured: true,
    vin: "TESMS2024O015",
  },
];

// ============================================
// SEED FUNCTION
// ============================================

async function seed() {
  console.log("🌱 شروع فرآیند دیتابیس...");

  try {
    // Clear existing data
    console.log("🧹 پاک کردن اطلاعات قبلی...");
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

    // Build car data with brand IDs
    const carData: NewCar[] = [];
    for (const car of carSeedData) {
      const brand = await db.query.brands.findFirst({
        where: (brands, { eq }) => eq(brands.name, car.brandName),
      });
      if (!brand) throw new Error(`Brand "${car.brandName}" not found`);

      const slug = generateSlug(brand.slug, car.modelSlug, car.year);

      carData.push({
        brandId: brand.id,
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

    // Summary
    console.log("\n📊 خلاصه:");
    console.log(`   تعداد برندها: ${insertedBrands.length}`);
    console.log(`   تعداد خودروها: ${insertedCars.length}`);

    // Show example
    if (insertedCars.length > 0) {
      const firstCar = insertedCars[0];
      const brand = await db.query.brands.findFirst({
        where: (brands, { eq }) => eq(brands.id, firstCar.brandId),
      });
      console.log("\n📝 نمونه خودرو:");
      console.log(`   ${brand?.name} ${firstCar.model} (${firstCar.year})`);
      console.log(`   قیمت: ${firstCar.price} تومان`);
      console.log(`   آدرس: /cars/${firstCar.slug}`);
    }
  } catch (error) {
    console.error("❌ خطا در فرآیند دیتابیس:", error);
    process.exit(1);
  }

  process.exit(0);
}

seed();
