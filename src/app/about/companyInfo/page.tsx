import Image from "next/image";

export default function CompanyInfo() {
  return (
    <>
      {/* HERO SECTION */}
      <header className="relative w-full h-[70vh] sm:h-[600px]">
        <Image
          src="/images/car-rental-team.jpg"
          alt="Toyota RentαCar Fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed">
            Discover how Toyota Mobility Solutions brings you reliable, safe, and
            convenient mobility solutions through our RentαCar service.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* COMPANY OVERVIEW */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <Image
              src="/images/toyota-mobilitysolutions.jpg"
              alt="Toyota Mobility Solutions"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Toyota Mobility Solutions
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Toyota Mobility Solutions Philippines is dedicated to providing
              innovative, reliable, and safe mobility solutions to meet the evolving
              needs of Filipino commuters, businesses, and travelers. As part of the
              global Toyota network, we uphold world-class standards in safety,
              quality, and customer satisfaction.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our services span vehicle leasing, fleet management, and specialized
              mobility solutions that make transportation seamless and accessible.
              By combining technology, expertise, and a strong commitment to our
              customers, Toyota Mobility Solutions ensures every journey is
              convenient, efficient, and enjoyable.
            </p>
          </div>
        </section>

        {/* RENTACAR FOCUS */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Toyota RentαCar offers a wide selection of vehicles for every need,
              from compact city sedans to SUVs for family adventures, and premium
              cars for business or luxury travel. Each vehicle is meticulously
              maintained to meet Toyota’s world-class standards for safety,
              comfort, and reliability.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Our service provides flexibility to match your lifestyle. Customers
              can choose self-drive options or enjoy professional chauffeur
              services. We also offer convenient delivery and pickup services
              within Metro Manila, allowing you to focus on your journey rather than
              logistics.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              With Toyota RentαCar, every trip is backed by our commitment to
              quality, customer satisfaction, and seamless mobility solutions. Whether
              for business, leisure, or special occasions, RentαCar ensures that you
              can travel with confidence, comfort, and peace of mind.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/images/car-rental-team-2.jpg"
              alt="Toyota RentαCar Team"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </section>
      </main>
    </>
  );
}