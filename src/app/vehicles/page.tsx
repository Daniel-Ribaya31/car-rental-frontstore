import Image from 'next/image';

export default function Vehicles() {
    const cars = [
        {
            name: 'Vios',
            img: '/images/vehicles/toyota-vios.png',
            selfDrive: {
                twelveHours: '₱2,000',
                perDay: '₱3,000',
                perWeek: '₱18,000',
            },
            chauffeur: {
                tenHours: '₱3,800',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Innova',
            img: '/images/vehicles/toyota-innova.png',
            selfDrive: {
                twelveHours: '₱2,800',
                perDay: '₱4,000',
                perWeek: '₱24,000',
            },
            chauffeur: {
                tenHours: '₱4,600',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Fortuner',
            img: '/images/vehicles/toyota-fortuner.png',
            selfDrive: {
                twelveHours: '₱3,000',
                perDay: '₱4,6000',
                perWeek: '₱26,000',
            },
            chauffeur: {
                tenHours: '₱5,000',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Corolla Cross',
            img: '/images/vehicles/toyota-corolla-cross.png',
            selfDrive: {
                twelveHours: '₱2,900',
                perDay: '₱4,200',
                perWeek: '₱25,000',
            },
            chauffeur: {
                tenHours: '₱4,700',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Hiace Commuter',
            img: '/images/vehicles/toyota-hiace-commuter.png',
            selfDrive: {
                twelveHours: '₱2,300',
                perDay: '₱3,300',
                perWeek: '₱20,000',
            },
            chauffeur: {
                tenHours: '₱4,300',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Hiace GL Grandia',
            img: '/images/vehicles/toyota-hiace-gl-grandia.png',
            selfDrive: {
                twelveHours: '₱4,000',
                perDay: '₱5,500',
                perWeek: '₱33,000',
            },
            chauffeur: {
                tenHours: '₱6,000',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Hiace Super Grandia Elite',
            img: '/images/vehicles/toyota-hiace-super-grandia.png',
            selfDrive: {
                twelveHours: '₱4,760',
                perDay: '₱6,800',
                perWeek: '₱40,800',
            },
            chauffeur: {
                tenHours: '₱6,600',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Camry',
            img: '/images/vehicles/toyota-camry.png',
            selfDrive: {
                twelveHours: '₱4,900',
                perDay: '₱7,100',
                perWeek: '₱42,000',
            },
            chauffeur: {
                tenHours: '₱6,900',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Yaris Cross',
            img: '/images/vehicles/toyota-yaris-cross.png',
            selfDrive: {
                twelveHours: '₱2,800',
                perDay: '₱4,200',
                perWeek: '₱25,000',
            },
            chauffeur: {
                tenHours: '₱4,600',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Zenix',
            img: '/images/vehicles/toyota-zenix.png',
            selfDrive: {
                twelveHours: '₱3,500',
                perDay: '₱5,000',
                perWeek: '₱30,000',
            },
            chauffeur: {
                tenHours: '₱5,500',
                extensionHourly: '₱500',
            }
        },
        {
            name: 'Alphard',
            img: '/images/vehicles/toyota-alphard.png',
            comingSoon: true,
        },
    ];

    return (
        <>
            <header className="relative w-full h-[70vh] sm:h-[600px]">
                <Image
                    src="/images/car-rental-vehicles.png"
                    alt="Toyota Fleet"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />

                {/* Hero Text + CTA */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <p className="text-base sm:text-xl font-light tracking-wide text-gray-200 mb-4 uppercase">
                        Discover the Perfect Toyota for Every Journey
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span>
                    </h1>
                    <p className="text-md sm:text-lg max-w-2xl text-gray-200 mb-8 leading-relaxed">
                        Explore our wide selection of Toyota vehicles available for rent — from compact sedans like the Vios, to family SUVs like the Fortuner and Innova, and premium models like the Alphard and Zenix. Each car is maintained to Toyota’s world-class standards for safety, comfort, and performance.
                    </p>
                    <a
                        href="/"
                        className="bg-[#F28C28] hover:bg-orange-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        Book Now
                    </a>
                </div>
            </header>

            <main className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 text-center">
                        Our Available Vehicles
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-[40%] h-1 bg-[#F28C28]"></div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-2xl mx-auto text-center">
                        Choose from our wide range of Toyota vehicles designed to match your needs — 
                        from compact city drives to luxury travel experiences. Each vehicle comes with 
                        detailed specifications, comfort features, and performance highlights.
                    </p>

                    <div className="space-y-12">
                        {cars.map((car) => (
                            <div
                                key={car.name}
                                className="bg-white p-4 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border border-gray-100"
                            >
                                {/* Left: Vehicle Image */}
                                <div className="w-full md:w-1/2 flex justify-center items-center md:py-6">
                                    <div className="relative w-[90%] sm:w-[85%] md:w-full h-40 sm:h-56 md:h-72">
                                        <Image
                                            src={car.img}
                                            alt={car.name}
                                            width={800}
                                            height={500}
                                            className="rounded-2xl object-contain transform transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                {/* Right: Vehicle Info */}
                                <div className="w-full md:w-1/2 flex flex-col space-y-6 mt-8 md:mt-0 md:pl-10">
  
                                    {/* Car Name + Coming Soon Badge */}
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-3xl font-bold text-gray-900">{car.name}</h3>

                                        {car.comingSoon && (
                                        <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-semibold text-sm">
                                            Rates Coming Soon
                                        </span>
                                        )}
                                    </div>

                                    {/* Optional description */}
                                    {car.comingSoon && (
                                        <p className="text-gray-600 text-base">
                                        This vehicle will be available soon. Stay tuned for our rates and availability!
                                        </p>
                                    )}

                                    {/* Self-drive and chauffeur only if not coming soon */}
                                    {!car.comingSoon && (
                                        <>
                                        {/* Self-drive card */}
                                        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
                                            <div className="flex justify-between items-start">
                                            <h4 className="font-semibold text-lg text-gray-900">Self-Drive Rates</h4>
                                            <p className="text-xs text-gray-500">Flexible packages</p>
                                            </div>

                                            <div className="mt-4 space-y-3 text-gray-700 text-sm">
                                            <div className="flex justify-between">
                                                <span className="font-semibold">12 Hours</span>
                                                <span className="font-semibold">{car.selfDrive?.twelveHours}</span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="font-semibold">Per Day</span>
                                                <span className="font-semibold">{car.selfDrive?.perDay}</span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="font-semibold">Per Week</span>
                                                <span className="font-semibold">{car.selfDrive?.perWeek}</span>
                                            </div>
                                            </div>
                                        </div>

                                        {/* Chauffeur service */}
                                        <div className="bg-[#F28C28] text-white rounded-2xl p-6 shadow-sm">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                            <div>
                                                <p className="font-semibold text-lg">Chauffeur Service</p>
                                                <p className="text-sm opacity-90">Professional driver included</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xl font-bold">
                                                {car.chauffeur?.tenHours}{" "}
                                                <span className="text-sm font-medium opacity-90">/ 10 hrs</span>
                                                </p>
                                                <p className="text-sm opacity-90">
                                                Extension: {car.chauffeur?.extensionHourly} / hr
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}