"use client";

import { useState } from "react";

export default function BookingForm() {
  const [serviceType, setServiceType] = useState<
    "self-drive" | "self-drive-delivery" | "chauffeur"
  >("self-drive");

  const [sameAsPickup, setSameAsPickup] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleSameAsPickup = (checked: boolean) => {
    setSameAsPickup(checked);
    if (checked) setDropoffLocation(pickupLocation);
    else setDropoffLocation("");
  };

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat flex justify-center items-start md:items-center py-8 sm:py-12 text-gray-800"
      style={{
        backgroundImage: "url('https://cdn.tmsph.app/toyota-header-bg.jpg')",
      }}
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden z-10">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row w-full">
          {[
            { id: "self-drive", label: "Self-Drive" },
            { id: "self-drive-delivery", label: "Self-Drive w/ Delivery" },
            { id: "chauffeur", label: "Chauffeur" },
          ].map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setServiceType(tab.id as typeof serviceType)}
              className={`flex-1 py-3 text-center font-semibold text-sm sm:text-base transition-colors duration-300 border-b-2
                ${i === 0 ? "sm:rounded-tl-2xl" : i === 2 ? "sm:rounded-tr-2xl" : ""}
                ${
                  serviceType === tab.id
                    ? "bg-[#F28C28] text-white border-[#F28C28]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Blue Alert Section */}
        {(serviceType === "self-drive" || serviceType === "self-drive-delivery") && (
          <div className="p-1.5 bg-blue-100 border-l-4 border-blue-500 text-blue-800 text-sm sm:text-base mt-2">
            Car pick-up and return services are unavailable on Sundays.
            For special requests regarding vehicle reservations on Sundays or holidays, kindly contact our helpdesk at 
            <a className="underline ml-1" href="tel:+639155925202"><strong>(+63) 915 592 5202</strong></a> or 
            <a className="underline ml-1" href="tel:+639171490139"><strong>(+63) 917 149 0139</strong></a>, or email us at 
            <a className="underline ml-1" href="mailto:rentacar@toyota-mobilitysolutions.ph"><strong>rentacar@toyota-mobilitysolutions.ph</strong></a>.
          </div>
        )}

        {(serviceType === "chauffeur") && (
          <div className="p-1.5 bg-blue-100 border-l-4 border-blue-500 text-blue-800 text-sm sm:text-base mt-2">
            Chauffeur service allows up to 12 hours of driving per day (7:00 AM – 7:00 PM).
            For multi-day rentals, feel free to reach out at 
            <a className="underline ml-1" href="tel:+639155925202"><strong>(+63) 915 592 5202</strong></a> or 
            <a className="underline ml-1" href="tel:+639171490139"><strong>(+63) 917 149 0139</strong></a>, or email us at 
            <a className="underline ml-1" href="mailto:rentacar@toyota-mobilitysolutions.ph"><strong>rentacar@toyota-mobilitysolutions.ph</strong></a>.
            for personalized arrangement.
          </div>
        )}

        {/* Yellow Warning Section */}
        {serviceType === "self-drive-delivery" && (
          <div className="p-1.5 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-sm sm:text-base mt-2">
            Car collection and delivery services are available exclusively within Metro Manila.
          </div>
        )}

        {serviceType === "chauffeur" && (
          <div className="p-1.5 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-sm sm:text-base mt-2">
            Chauffeur-driven services are available anywhere in Luzon; however, the first and last pick-up points of the client shall be within the Metro Manila area only.
          </div>
        )}

        {/* Booking Form */}
        <form className="w-full p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg space-y-6 transition-all duration-300">
          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {serviceType === "self-drive" ? (
              <div className="relative md:col-span-2">
                <select
                  id="location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                >
                  <option value="">Select Location</option>
                  <option value="manila">Manila</option>
                  <option value="quezon">Quezon City</option>
                  <option value="makati">Makati</option>
                  <option value="taguig">Taguig</option>
                </select>
                <label
                  htmlFor="location"
                  className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                >
                  Pick-up & Drop-off Location
                </label>
              </div>
            ) : (
              <>
                <div className="relative">
                  <input
                    type="text"
                    id="pickup-location"
                    value={pickupLocation}
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                      if (sameAsPickup) setDropoffLocation(e.target.value);
                    }}
                    placeholder=" "
                    className="peer w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                  />
                  <label
                    htmlFor="pickup-location"
                    className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                  >
                    Pick-up Location
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="dropoff-location"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    disabled={serviceType === "self-drive-delivery" && sameAsPickup}
                    placeholder=" "
                    className={`peer w-full p-4 border border-gray-300 rounded-xl text-sm sm:text-base transition-all ${
                      sameAsPickup
                        ? "bg-gray-100 cursor-not-allowed text-gray-500"
                        : "bg-white text-gray-800 focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                    }`}
                  />
                  <label
                    htmlFor="dropoff-location"
                    className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                  >
                    Drop-off Location
                  </label>

                  {serviceType === "self-drive-delivery" && (
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id="same-as-pickup"
                        checked={sameAsPickup}
                        onChange={(e) => handleSameAsPickup(e.target.checked)}
                        className="h-4 w-4 text-gray-800 focus:ring-[#F28C28] border-gray-300 rounded"
                      />
                      <label
                        htmlFor="same-as-pickup"
                        className="ml-2 text-gray-700 text-sm"
                      >
                        Same as pick-up location
                      </label>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Date & Time Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Pick-up */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative sm:w-1/2">
                <input
                  type="date"
                  id="pickup-date"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                />
                <label
                  htmlFor="pickup-date"
                  className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                >
                  Pick-up Date
                </label>
              </div>
              <div className="relative sm:w-1/2">
                <input
                  type="time"
                  id="pickup-time"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                />
                <label
                  htmlFor="pickup-time"
                  className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                >
                  Pick-up Time
                </label>
              </div>
            </div>

            {/* Return */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative sm:w-1/2">
                <input
                  type="date"
                  id="return-date"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                />
                <label
                  htmlFor="return-date"
                  className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                >
                  Return Date
                </label>
              </div>
              <div className="relative sm:w-1/2">
                <input
                  type="time"
                  id="return-time"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:border-[#F28C28] focus:ring-2 focus:ring-[#F28C28]"
                />
                <label
                  htmlFor="return-time"
                  className="absolute left-4 -top-2 text-sm text-gray-800 bg-white px-2"
                >
                  Return Time
                </label>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#F28C28] hover:bg-orange-500 text-white font-semibold py-4 rounded-xl shadow-md text-sm sm:text-base transition-transform duration-300 hover:-translate-y-0.5"
            >
              Search Vehicles
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
