import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function Home() {
  return (
    <div>
      <header className="relative w-full h-screen sm:h-[900px]">
        {/* Background Image */}
        <Image
          src="/images/silver-camry-night.jpg"
          alt="Toyota Camry at Night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-start text-white text-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Rent Your Dream Toyota Today
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4 max-w-xl">
            Affordable. Reliable. Available anytime, anywhere.
          </p>
          <div className="w-full max-w-7xl px-4 sm:px-0">
            <BookingForm />
          </div>
        </div>
      </header>

      <main>
        {/* Choose Your Ride Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
              Explore Our Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span> Fleet
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-[60%] h-1 bg-[#F28C28]"></div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
              Find the perfect Toyota for your next trip — from compact city cars
              to spacious family vans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {[
                { name: "Toyota Vios", img: "/images/vehicles/toyota-vios.png", desc: "A compact sedan that’s practical and easy to drive — ideal for daily commutes, errands, and quick city trips." },
                { name: "Toyota Fortuner", img: "/images/vehicles/toyota-fortuner.png", desc: "A powerful and elegant SUV built for smooth, reliable performance on long drives and out-of-town adventures." },
                { name: "Toyota Hiace Commuter", img: "/images/vehicles/toyota-hiace-commuter.png", desc: "A spacious and dependable, great for transporting larger groups or corporate teams on trips and events." },
                { name: "Toyota Camry", img: "/images/vehicles/toyota-camry.png", desc: "A comfortable and stylish sedan with a spacious interior and a smooth driving experience." },
                { name: "Toyota Zenix", img: "/images/vehicles/toyota-zenix.png", desc: "A premium hybrid MPV offering refined comfort and performance — ideal for business trips or VIP transport." },
                { name: "Toyota Corolla Cross", img: "/images/vehicles/toyota-corolla-cross.png", desc: "A stylish hybrid SUV that blends fuel efficiency and comfort — perfect for modern city drives." },
              ].map((car) => (
                <div
                  key={car.name}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={car.img}
                      alt={car.name}
                      width={400}
                      height={250}
                      className="w-full h-56 sm:h-60 md:h-64 object-contain bg-gray-100 p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-5 text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-[#F28C28] transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {car.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/vehicles"
              className="inline-block bg-[#F28C28] hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 mt-8"
            >
              View More
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              About Our Business
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-[45%] h-1 bg-[#F28C28]"></div>
            </div>
            <div className="relative w-full h-32 sm:h-40 md:h-72 mb-8 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/car-rental-team.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                At <span className="font-semibold">Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span></span>, 
                we’re more than just a rental service — we’re your trusted travel partner. 
                Our mission is to provide safe, clean, and reliable vehicles for every journey, 
                whether it’s for business, leisure, or a family adventure.
              </p>
              <p className="mb-6">
                Our dedicated team of professionals ensures a smooth rental experience from 
                start to finish. With our customer-first approach and passion for quality 
                service, we’ve built long-lasting relationships with clients across the region.
              </p>
              <p>
                Experience the freedom to go anywhere — with <span className="font-semibold">Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span></span>, 
                you’re always in good hands.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              What Our Customers Say
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-[45%] h-1 bg-[#F28C28]"></div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
              Hear from our satisfied customers who’ve experienced the comfort, reliability, 
              and service excellence of Toyota Rent a Car.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Lopez",
                  role: "Business Traveler",
                  feedback:
                    "Toyota Rent a Car made my trip stress-free! The car was spotless and the staff were incredibly helpful. Will definitely rent again.",
                },
                {
                  name: "James Tan",
                  role: "Family Vacationer",
                  feedback:
                    "We rented a Fortuner for our family getaway — smooth ride, easy pickup, and great customer support. Highly recommended!",
                },
                {
                  name: "Ella Santos",
                  role: "Regular Renter",
                  feedback:
                    "Booking online was super convenient. The team helped me choose the right car and the entire process was quick and seamless.",
                },
              ].map((customer) => (
                <div
                  key={customer.name}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left"
                >
                  {/* Star Rating */}
                  <div className="flex mb-3 text-[#F28C28]">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12 2.25l2.31 6.96h7.32l-5.91 4.29 2.31 6.96L12 16.44l-5.91 4.02 2.31-6.96L2.49 9.21h7.32L12 2.25z" />
                        </svg>
                      ))}
                  </div>

                  <p className="text-gray-700 italic mb-4 text-sm sm:text-base">
                    “{customer.feedback}”
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800">{customer.name}</h3>
                  <p className="text-[#F28C28] text-sm font-medium">{customer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 📰 Newsroom Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              Latest News & Updates
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-[45%] h-1 bg-[#F28C28]"></div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
              Stay updated with the latest announcements, promotions, and stories 
              from Toyota Rent a Car.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Toyota Launches New Hybrid Fleet for 2025",
                  date: "November 5, 2025",
                  img: "/images/news/toyota-zenix-wallpaper.png",
                  excerpt: "Our newest hybrid lineup offers sustainable performance for both city and highway drives.",
                },
                {
                  title: "Holiday Rental Promo: Drive More, Save More!",
                  date: "October 28, 2025",
                  img: "/images/news/toyota-promo.png",
                  excerpt: "Enjoy special holiday rates and exclusive deals when you rent any Toyota model this season.",
                },
                {
                  title: "Toyota Rent a Car Launches Weekend Special Deals",
                  date: "September 20, 2025",
                  img: "/images/news/toyota-fortuner-promo.jpg",
                  excerpt: "Take advantage of our weekend rental promotions — get discounted rates on all Toyota vehicles for short-term rentals.",
                },
              ].map((article) => (
                <div
                  key={article.title}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 sm:h-56">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 text-left">
                    <p className="text-[#F28C28] text-xs font-medium mb-1">
                      {article.date}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 hover:text-[#F28C28] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/newsroom"
              className="inline-block bg-[#F28C28] hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 mt-8"
            >
              View All News
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-2">
              Frequently Asked Questions
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-[60%] h-1 bg-[#F28C28]"></div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-12 text-center max-w-2xl mx-auto">
              Find answers to the most common questions about renting a Toyota with us.
            </p>
            <FAQAccordion 
              faqs={[
                {
                  question: "What are the requirements to rent a vehicle?",
                  answer:
                    "You will need a valid driver’s license, one government-issued ID, and the required security deposit. Additional requirements may apply for long-term rentals.",
                },
                {
                  question: "Do you offer delivery and pickup?",
                  answer:
                    "Yes, we offer delivery and pickup depending on your location. Additional fees may apply. You may arrange this during booking or contact our support team.",
                },
                {
                  question: "Is there a mileage limit?",
                  answer:
                    "Most rentals come with unlimited mileage unless specified otherwise. Please check your rental details for any mileage restrictions.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept cash, GCash, bank transfer, and major credit/debit cards. Payments must be completed before the vehicle is released.",
                },
                {
                  question: "Can I extend my rental period?",
                  answer:
                    "Yes, extensions are allowed based on vehicle availability. Just contact us at least 24 hours before your return schedule.",
                },

              ]}
            />
            <div className="mt-8 text-center">
              <a
                href="/faq"
                className="inline-block bg-[#F28C28] hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
              >
                See More FAQs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
