export default function Footer() {
    return (
        <footer className="bg-black text-white py-12" itemScope itemType="https://schema.org/WPFooter">
            <div className="container mx-auto px-8 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <section>
                        <header className="mb-6">
                        <h6 className="text-lg font-semibold mb-2">TOYOTA Mobility</h6>
                        </header>
                        <ul className="space-y-2">
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph" target="_blank">Toyota Mobility Solutions Philippines</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/mobility-for-people" target="_blank">Mobility for People</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/mobility-for-goods" target="_blank">Mobility for Goods</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/newsroom" target="_blank">Newsroom</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/about-us" target="_blank">About Us</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/careers" target="_blank">Careers</a>
                        </li>
                        </ul>
                    </section>

                    <section>
                        <header className="mb-6">
                        <h6 className="text-lg font-semibold mb-2">Mobility Services</h6>
                        </header>
                        <ul className="space-y-2">
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/my-toyota-shuttle" target="_blank">myTOYOTA Shuttle PH</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/fleet360" target="_blank">Fleet360</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/fleet-management-services" target="_blank">Fleet Management Services</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyota-mobilitysolutions.ph/kinto-one" target="_blank">KINTO One</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://toyotalogistics.com.ph" target="_blank">Toyota Logistics Matching Services</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="/" target="_self">Toyota Rent&#x3B1;Car</a>
                        </li>
                        </ul>
                    </section>

                    <section>
                        <header className="mb-6">
                        <h6 className="text-lg font-semibold mb-2">Other Links</h6>
                        </header>
                        <ul className="space-y-2">
                        <li className="mb-4">
                            <a className="hover:underline" href="https://toyota.com.ph/" target="_blank">Toyota Motor Philippines</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.lexus.com.ph/" target="_blank">Lexus Philippines</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyotafinancial.ph/" target="_blank">Toyota Financial Services PH</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://www.toyotafinancial.ph/mytoyotawallet" target="_blank">myTOYOTA Wallet</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline" href="https://toyota.com.ph/mytoyota" target="_blank">myTOYOTA App</a>
                        </li>
                        </ul>
                    </section>
                </div>

                <section className="mb-8">
                <header className="mb-6">
                    <h6 className="text-lg font-semibold mb-2">Contact Us</h6>
                </header>
                <div className="mb-3">
                    Toyota Mobility Solutions Philippines, Inc.
                    <br />
                    28/F GT Tower International Ayala Ave. cor. H.V. Dela Costa St. Salcedo Village Bel-Air, Makati City 1227
                </div>
                <div className="mb-3">
                    <p>
                    Mobile: <strong><a className="hover:underline" href="tel:+639155925202">(+63) 915 592 5202</a></strong>
                    </p>
                    <p>
                    Landline: <strong><a className="hover:underline" href="tel:+63288588200">(632) 8858 8200</a></strong> loc 8989
                    </p>
                </div>
                </section>

                <div className="w-full pt-0 sm:pt-6">
                <div className="flex flex-col-reverse flex-wrap sm:flex sm:flex-row sm:border-white sm:border-t justify-between gap-2">
                    <div className="pt-4 sm:pt-3 mb-6 flex border-white border-t sm:border-0">
                        <span className="uppercase">&copy; 2023 - {new Date().getFullYear()} <a href="https://toyota-mobilitysolutions.ph">Toyota Mobility Solutions Philippines, Inc. All rights reserved.</a></span>
                    </div>

                    <nav className="pt-4 sm:pt-3 flex flex-1 flex-col flex-start justify-end sm:flex-row gap-4 mb-6"/>
                    <header className="block sm:hidden">
                        <h6 className="text-lg font-semibold mb-2">Legal</h6>
                    </header>

                    <a href="#">Privacy Policy</a>
                    <div className="hidden sm:dlock border-t sm:border-t-0 sm:border-s border-white"></div>
                    <a href="#">Terms and Conditions</a>
                    <div className="hidden sm:dlock border-t sm:border-t-0 sm:border-s border-white"></div>
                    <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}