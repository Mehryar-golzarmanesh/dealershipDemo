import HeroSection from "@/components/hero";
import HeroBottom from "@/components/heroBottom";
import HeroMiddle from "@/components/heroMiddle";

{
  /* 
  1 - Change the 184 cars to a dynamic number coming from the database. ✔
  2 - Change it so we send the brands from our database instead of constants.ts
  3 - Create a layout.tsx for suburls so we can change the padding top on the root layout.tsx
  */
}

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col bg-[#14161a] pb-20 px-4 sm:px-5 lg:px-0">
      <HeroSection />
      <HeroMiddle />
      <HeroBottom />
    </div>
  );
}
