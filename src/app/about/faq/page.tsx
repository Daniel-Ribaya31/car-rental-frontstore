import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function FAQ() {
    return (
        <>
            <header className="relative w-full h-[70vh] sm:h-[600px]">
                <Image
                    src="/images/toyota-vios-background-2.jpg"
                    alt="Toyota Vios"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />

                {/* Hero Text + CTA */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <p className="text-base sm:text-xl font-light tracking-wide text-gray-200 mb-4 uppercase">
                        Support & Information
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
                        Frequently Asked <span className="text-[#F28C28]">Questions</span>
                    </h1>

                    <p className="text-base sm:text-lg max-w-2xl text-gray-200 mb-8 leading-relaxed">
                        Find answers to common questions about bookings, payments, insurance, 
                        policies, vehicle usage, damages, breakdowns, and more.
                    </p>
                </div>
            </header>

            <main>

                {/* FAQ Sections */}
                <section className="max-w-5xl mx-auto px-6 py-16 -mb-12">

                    {/* BOOKING & RESERVATIONS */}
                    <FAQAccordion
                        title="Booking & Reservations"
                        faqs={[
                            {
                                question: "How do I book a vehicle?",
                                answer:
                                "You can book directly through our website, through our hotline, or by messaging our official channels. A reservation confirmation will be sent once your booking is verified.",
                            },
                            {
                                question: "Can I modify or cancel my booking?",
                                answer:
                                "Yes. Modifications and cancellations are allowed, but must be made at least 24 hours before your scheduled pickup. Fees may apply depending on the situation.",
                            },
                            {
                                question: "Do you require a security deposit?",
                                answer:
                                "Yes. A refundable security deposit is required before vehicle release. The amount depends on the vehicle category.",
                            },
                        ]}
                    />

                    {/* PAYMENTS & FEES */}
                    <FAQAccordion
                        title="Payments & Fees"
                        faqs={[
                            {
                                question: "What payment methods do you accept?",
                                answer:
                                "We accept GCash, bank transfer, credit/debit cards, and cash payments depending on your preferred arrangement.",
                            },
                            {
                                question: "When do I need to pay?",
                                answer:
                                "Full payment and security deposit must be completed before the vehicle is released to the renter.",
                            },
                            {
                                question: "Are there additional delivery or pickup fees?",
                                answer:
                                "Yes. Delivery and collection fees apply depending on the distance from our head office in GT Tower, Makati.",
                            },
                        ]}
                    />

                    {/* VEHICLE USAGE & POLICIES */}
                    <FAQAccordion
                        title="Vehicle Usage & Policies"
                        faqs={[
                            {
                                question: "What is your fuel policy?",
                                answer:
                                "Vehicles must be returned with the same fuel level as when released. Any shortage will be charged based on current pump prices.",
                            },
                            {
                                question: "Can I smoke inside the vehicle?",
                                answer:
                                "No. Smoking and vaping inside the vehicle are strictly prohibited. Cleaning fees will apply if traces of smoking are found.",
                            },
                            {
                                question: "Are pets allowed?",
                                answer:
                                "Pets are allowed as long as they are secure and the vehicle is returned clean. Extra cleaning fees will apply for excessive dirt, hair, or odor.",
                            },
                        ]}
                    />

                    {/* DAMAGES, BREAKDOWNS & ACCIDENTS */}
                    <FAQAccordion
                        title="Damages, Breakdowns & Accidents"
                        faqs={[
                            {
                                question: "What should I do if the vehicle breaks down?",
                                answer:
                                "Contact our support hotline immediately. We will assist with roadside help or vehicle replacement depending on availability.",
                            },
                            {
                                question: "What happens if I get into an accident?",
                                answer:
                                "Prioritize safety. Then notify us immediately so we can coordinate insurance procedures. A police report is required for all incidents.",
                            },
                            {
                                question: "Will I be charged for damages?",
                                answer:
                                "Damages caused by negligence or misuse will be charged. Covered damages under your insurance plan will follow the policy terms and deductible.",
                            },
                        ]}
                    />

                    {/* REQUIREMENTS */}
                    <FAQAccordion
                        title="Requirements"
                        faqs={[
                        {
                            question: "What documents do I need to rent a vehicle?",
                            answer:
                            "A valid driver’s license, one government-issued ID, and the required security deposit. Additional documents may be required for companies.",
                        },
                        {
                            question: "Do you allow non-Filipino drivers?",
                            answer:
                            "Yes. Foreign renters must present their passport and an international or foreign driver’s license that is valid in the Philippines.",
                        },
                        ]}
                    />

                    {/* EXTENSIONS & RETURNS */}
                    <FAQAccordion
                        title="Extensions & Returns"
                        faqs={[
                        {
                            question: "Can I extend my rental duration?",
                            answer:
                            "Yes, as long as the vehicle is available. Please notify us at least 24 hours before your original return time.",
                        },
                        {
                            question: "What happens if I return the vehicle late?",
                            answer:
                            "Late returns may incur hourly or daily extension charges depending on how long the delay is.",
                        },
                        ]}
                    />
                </section>

                {/* CONTACT CUSTOMER SUPPORT */}
                <section className="p-8 text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                        Still Have Questions?
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-[20%] h-1 bg-[#F28C28]"></div>
                    </div>
                    <p className="text-lg sm:text-base text-gray-600 mb-6 max-w-4xl mx-auto">
                        If you have any specific questions, concerns, or special requests regarding your rental, our Customer Support team is here to assist you. Whether it's about vehicle availability, rental terms, insurance coverage, or anything else, don’t hesitate to get in touch. We aim to provide prompt and helpful responses to make your Toyota RentαCar experience smooth and enjoyable.
                        <br /><br />
                        For faster assistance, please have your booking reference or vehicle details ready when you contact us.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <div className="inline-block bg-[#F28C28] text-white font-semibold px-8 py-3 rounded-full shadow-lg">
                            Call Us: (+63) 915 592 5202 or (+63) 917 149 0139
                        </div>
                        <div className="inline-block bg-gray-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg">
                            Email: rentacar@toyota-mobilitysolutions.ph
                        </div>
                    </div>
                </section>              
            </main>
        </>
    )
}