import BrandsBottom from "./brandsBottom";
import BrandsHero from "./brandsHero";
import BrandsListings from "./brandsListings";

const Brands = () => {
  return (
    <div className="bg-[#14161a] pb-20">
      <BrandsHero />
      <BrandsListings />
      <BrandsBottom />
    </div>
  );
};

export default Brands;
