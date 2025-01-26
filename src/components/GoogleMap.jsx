import React from "react";

const GoogleMap = () => {
  return (
    <div className="container mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Location</h1>
      <p className="text-gray-600 text-lg mb-8">
        Find us easily on Google Maps. Visit us at our store or get directions.
      </p>
      <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Google Maps Location"
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Shapla%20Housing,H%20%23%20202%20(3rd%20Floor),%20West%20Agargaon,%20Dhaka-1207,%20Bangladesh.&t=&z=17&ie=UTF8&iwloc=&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
