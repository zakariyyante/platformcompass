import { brands } from "./data/brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import ComplianceBar from "./components/ComplianceBar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MobileModal from "./components/MobileModal";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const gclid = typeof searchParams.gclid === "string" ? searchParams.gclid : undefined;
  
  const mobileBrands = brands.filter(b => b.isMobile);
  const sortedBrands = [...brands].sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="brands" className="py-20 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  index={index} 
                  gclid={gclid} 
                />
              ))}
            </div>
          </div>
        </section>

        <ComplianceBar />
        <AboutSection />
      </main>

      <Footer />

      {/* Mobile Popup Modal */}
      <MobileModal brands={mobileBrands} gclid={gclid} />
    </>
  );
}
