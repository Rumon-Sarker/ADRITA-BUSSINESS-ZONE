import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CEO from "../assets/teams/CEO.jpg";
import COO from "../assets/teams/COO.jpg";
import CFO from "../assets/teams/CFO.jpg";

const teamMembers = [
  {
    id: 1,
    name: "JOY PROKASH DAS",
    position: "Proprietor & CEO",
    contact: "+88018-98805081",
    email: "adritabusinesszone@gmail.com",
    address:
      "Shapla Housing,H # 202 (3rd Floor), West Agargaon, Dhaka-1207, Bangladesh.",
    image: CEO,
    desc: "An experienced leader driving innovation and excellence in business operations, ensuring top-tier service and strategic growth for Adrita Business Zone with a commitment to quality and customer satisfaction.",
  },
  {
    id: 2,
    name: "IMRAN HOSSAIN",
    position: "CFO",
    contact: "+8801-788777848",
    email: "adritabusinesszone@gmail.com",
    address:
      "Shapla Housing,H # 202 (3rd Floor), West Agargaon, Dhaka-1207, Bangladesh.",
    image: CFO,
    desc: "A financial strategist overseeing budgeting, investment, and financial planning, ensuring sustainable growth and operational efficiency for Adrita Business Zone through smart financial management and innovative economic solutions.",
  },

  {
    id: 3,
    name: "HIMEL TAJ",
    position: "COO",
    contact: "+88018-98805081",
    email: "adritabusinesszone@gmail.com",
    address:
      "Shapla Housing,H # 202 (3rd Floor), West Agargaon, Dhaka-1207, Bangladesh.",
    image: COO,
    desc: "An operational expert ensuring seamless business processes, optimizing efficiency, and driving strategic initiatives to enhance productivity and company growth at Adrita Business Zone with a focus on innovation and excellence.",
  },
];

const TeamSection = () => {
  return (
    <div className="container mx-auto px-6 xl:py-16 lg:py-12 py-8">
      <h1 className="xl:text-5xl lg:text-4xl text-3xl font-extrabold text-gray-800 mb-10 text-center">
        Meet Our Team
      </h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto text-center">
        Our leadership team is dedicated to excellence and innovation, ensuring
        the best strategies and execution for success.
      </p>
      <div className="space-y-16">
        {teamMembers.map((member, index) => (
          <section
            key={member.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-72 h-72 object-cover rounded-full shadow-slate-300 shadow-2xl"
            />
            <div className="text-left space-y-2 max-w-lg">
              <h3 className="text-3xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-xl font-medium text-blue-600">
                {member.position}
              </p>
              <p className="text-gray-700 mt-3">📞 {member.contact}</p>
              <p className="text-gray-700">✉️ {member.email}</p>
              <p className="text-gray-700">📍 {member.address}</p>
              <p className="text-xl font-medium text-blue-600">{member.desc}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
