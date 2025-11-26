    import Image from "next/image";

    export default function Services() {
        return (
            <>
                <header className="relative w-full h-[70vh] sm:h-[600px]">
                    <Image
                        src="/images/services/toyota-rentacar-services.png"
                        alt="Toyota Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12">
                        <p className="text-base sm:text-xl font-light tracking-wide text-gray-200 mb-4 uppercase">
                            Choose Your Ideal Travel Experience
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
                            Our <span className="text-[#F28C28]">Services</span>
                        </h1>
                        <p className="text-base sm:text-lg max-w-2xl text-gray-200 mb-8 leading-relaxed">
                            Experience the freedom of self-drive or the convenience of a professional chauffeur. 
                            At Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span>, we provide safe, reliable, and comfortable vehicles for every journey.
                        </p>
                        <a
                            href="/"
                            className="bg-[#F28C28] hover:bg-orange-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            Book Now
                        </a>
                    </div>
                </header>

                <main className="bg-gray-50">
                    {/* Services Comparison Section */}
                    <section className="py-16 sm:py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            
                            {/* Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Self-Drive Card */}
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Image Banner */}
                                    <div className="relative w-full h-56 sm:h-64">
                                    <Image
                                        src="/images/services/toyota-rentacar-self-drive.jpg" 
                                        alt="Self-Drive Service"
                                        fill
                                        className="object-cover"
                                    />
                                    </div>

                                    <div className="p-6 sm:p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Self-Drive</h3>
                                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                                        Enjoy the freedom to explore with our reliable self-drive rentals.
                                    </p>

                                    <p className="text-gray-700 mb-4">
                                        Enjoy the freedom to travel at your own pace with our Self-Drive service—ideal for individuals, families, or groups looking for convenience and flexibility.
                                    </p>

                                    <ul className="space-y-2 text-gray-700 mb-4">
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Wide selection of Toyota vehicles
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> 12-hour, daily, or weekly packages
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Regular safety & performance checks
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Easy online booking & pick-up
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Optional GPS, child seats & insurance
                                        </li>
                                    </ul>

                                    <p className="text-gray-600 italic">
                                        Perfect for weekend trips, daily commutes, and business travels.
                                    </p>
                                    </div>
                                </div>

                                {/* Chauffeur Card */}
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Image Banner */}
                                    <div className="relative w-full h-56 sm:h-64">
                                    <Image
                                        src="/images/services/toyota-rentacar-corporate.jpg" // replace with your actual image
                                        alt="Chauffeur Service"
                                        fill
                                        className="object-cover"
                                    />
                                    </div>

                                    <div className="p-6 sm:p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Chauffeur Service</h3>
                                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                                        Enjoy a worry-free journey with our premium chauffeur services.
                                    </p>

                                    <p className="text-gray-700 mb-4">
                                        Enjoy a stress-free travel experience with our Chauffeur Service—perfect for comfort, convenience, and premium transportation.
                                    </p>

                                    <ul className="space-y-2 text-gray-700 mb-4">
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Professional & courteous drivers
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Premium Toyota vehicles available
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Hourly or full-day rental options
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Sanitized & comfortable interiors
                                        </li>
                                        <li className="flex gap-2">
                                        <span className="text-[#F28C28] font-bold">•</span> Hassle-free travel for business or leisure
                                        </li>
                                    </ul>

                                    <p className="text-gray-600 italic">
                                        Perfect for corporate events, VIP transfers, and special occasions.
                                    </p>
                                    </div>
                                </div>
                            </div>

                            {/* Car Delivery & Collection */}
                            <div className="mt-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 sm:p-10">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                                    Car Delivery & Collection
                                </h3>
                                <p className="text-gray-500 text-sm uppercase tracking-wide mb-10 text-center">
                                    Skip the Trip — We’ll Bring the Car to You
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                                    {/* Left Column — Text */}
                                    <div>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Enjoy the convenience of having your <span className="font-semibold">Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span></span> delivered or 
                                            collected right at your preferred location within Metro Manila.
                                            Skip the trip—our team will bring your vehicle straight to you.
                                        </p>

                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Delivery and collection fees are calculated based on the distance from our 
                                            main office located at the 
                                            <strong> 28/F GT Tower International, Ayala Ave. cor. H.V. Dela Costa St., Salcedo Village, Bel-Air, Makati City 1227</strong>.
                                            This fee is added on top of your Rental Fee and Security Deposit.
                                        </p>

                                        <p className="text-gray-700 italic">
                                            Perfect for customers seeking maximum convenience—no need to visit our Makati station; 
                                            we’ll bring your rental vehicle right to your doorstep.
                                        </p>
                                    </div>

                                    {/* Right Column — Table */}
                                    <div className="overflow-x-auto border border-gray-300 rounded-xl">
                                        <table className="w-full rounded-xl overflow-hidden text-sm shadow-sm">
                                            <thead>
                                                <tr className="bg-[#F28C28] text-white text-left">
                                                    <th className="py-3 px-4 border border-orange-400">Distance</th>
                                                    <th className="py-3 px-4 border border-orange-400">Delivery Fee (1-way)</th>
                                                </tr>
                                            </thead>

                                            <tbody className="text-gray-700">
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-300">0 – 10 km</td>
                                                    <td className="py-3 px-4 border border-gray-300 font-semibold">₱500</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-300">11 – 20 km</td>
                                                    <td className="py-3 px-4 border border-gray-300 font-semibold">₱800</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-300">21 – 30 km</td>
                                                    <td className="py-3 px-4 border border-gray-300 font-semibold">₱1,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-300">31 – 40 km</td>
                                                    <td className="py-3 px-4 border border-gray-300 font-semibold">₱1,200</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-300">&gt; 40 km</td>
                                                    <td className="py-3 px-4 border border-gray-300 font-semibold">₱1,500</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Section */}
                    <section className="py-15 bg-white border-t border-gray-200">
                        <div className="max-w-6xl mx-auto px-6 text-center">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                            Why Choose Toyota <span className="text-orange-500">RentαCar</span>
                            </h2>
                            <div className="flex justify-center mb-8">
                                <div className="w-[50%] h-1 bg-[#F28C28]"></div>
                            </div>
                            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                            Discover why thousands of customers in Manila trust Toyota RentαCar for their travel and business.
                            </p>

                            <div className="grid md:grid-cols-3 gap-10 text-center">

                            {/* Card 1 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center">
                                <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 mb-4 stroke-orange-500"
                                >
                                <path
                                    d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Pickup & Drop-off Anywhere
                                </h3>

                                <p className="text-gray-600 text-center">
                                Choose the most convenient delivery option for your rental — we make pick-ups and returns fast, easy, and flexible to fit your schedule.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                                <div className="flex justify-center mb-4">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 stroke-orange-500"
                                >
                                    <path
                                    d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Professional Drivers
                                </h3>

                                <p className="text-gray-600">
                                Enjoy a premium travel experience with our courteous and highly trained professional drivers.  
                                Our chauffeurs ensure safety, comfort, and reliability every step of the way.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center">
                                <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 mb-4 stroke-orange-500"
                                >
                                <path
                                    d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Trusted Toyota Quality
                                </h3>

                                <p className="text-gray-600">
                                Drive with peace of mind knowing that every car upholds Toyota’s world-class standards for safety, reliability, and comfort.
                                </p>
                            </div>

                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-gray-50 border-t border-gray-200">
                        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                            
                            {/* Image */}
                            <div className="order-1 md:order-1">
                                <Image
                                    src="/images/services/driving-toyota.jpg"
                                    alt="Driving Toyota in Manila"
                                    width={800}              
                                    height={500}             
                                    className="rounded-2xl shadow-md w-full h-auto object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="order-2 md:order-2 text-left">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                                    Experience Hassle-Free Car Rental
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Renting a car in Manila has never been easier. With 
                                    <strong> Toyota <span className="text-orange-500">RentαCar</span></strong>, 
                                    you can enjoy a stress-free rental process, flexible booking options, 
                                    and premium service backed by Toyota’s world-class reliability.  
                                    Whether you're traveling for business or leisure, we make every ride smooth and worry-free.
                                </p>

                                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                                    <li>Modern Toyota vehicles equipped with safety features</li>
                                    <li>Accessible pickup points across Metro Manila</li>
                                    <li>Fast and secure online booking process</li>
                                    <li>Regularly maintained and sanitized vehicles</li>
                                </ul>

                                <div className="mt-8">
                                    <a
                                        href="/booking/form?location=manila"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
                                    >
                                        Rent a Toyota Today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }