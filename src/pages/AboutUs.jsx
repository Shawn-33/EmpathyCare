import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaUserCircle } from "react-icons/fa";

const teamMembers = [
  {
    name: "MD Monirul Islam Bhuiyan",
    title: "CQC Registered Care Manager",
    description:
      "Many years of experience in care industry and CQC qualified registered care manager. Responsible for overseeing the day-to-day management and quality of care provided in Empathy Care Company Ltd. Leading the team with experience and expertise.",
    img: "/profile-placeholder.png",
    email: "",
    phone: "",
  },
  {
    name: "Raju Rahman",
    title: "CEO",
    description:
      "Many years of experience in the healthcare sector. Responsible for making major corporate decisions, managing overall operations, and driving the organization's strategic direction.",
    img: "/profile-placeholder.png",
    email: "",
    phone: "",
  },
  {
    name: "Abdul Hannan",
    title: "Business Director",
    description:
      "Experienced Business Director with over 12 years experience in directing operations, leading staff, and developing strategies. Highly organised, results-driven and passionate about exceeding goals.",
    img: "/profile-placeholder.png",
    email: "",
    phone: "",
  },
  {
    name: "MD Monirul Islam Bhuiyan",
    title: "Managing Director",
    description:
      "Responsible for the day-to-day operations, strategic direction, and overall success of the company. Responsible for managing and motivating the company's employees, including hiring, training, and performance management.",
    img: "/profile-placeholder.png",
    email: "",
    phone: "",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: { scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" },
};

const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-blue-700 mb-3 text-center"
      >
        Meet the Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl text-blue-600 mb-2 text-center font-semibold"
      >
        Dedicated. Experienced. Compassionate.
      </motion.p>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        <span className="font-semibold">Our team</span> <br />
        We have a wonderful and experienced team at Empathy Care Company Ltd. All our care workers are experienced and qualified, ensuring that all our service users receive excellent care. Our care giver team receives regular training to ensure that all our service users receive care of national standards. Most of our care givers can communicate to our service users in their own language. Our care givers can speak English, Bengali, Hindi, and Urdu.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="whileHover"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center border-t-8 border-blue-400 hover:border-blue-600 transition-all duration-300"
          >
            <div className="relative mb-4">
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-lg"
                />
              ) : (
                <FaUserCircle className="w-24 h-24 text-blue-200" />
              )}
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full px-2 py-1 text-xs font-bold shadow">
                Team
              </span>
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mb-1">{member.name}</h2>
            <h3 className="text-blue-500 font-semibold mb-2">{member.title}</h3>
            <p className="text-gray-700 text-center mb-4">{member.description}</p>
            <div className="flex gap-4">
              <a
                href={member.email ? `mailto:${member.email}` : "#"}
                className={`transition-colors ${member.email ? "text-blue-600 hover:text-blue-800" : "text-gray-300 cursor-not-allowed"}`}
                title={member.email ? "Email" : "Email not available"}
                tabIndex={-1}
              >
                <FaEnvelope size={22} />
              </a>
              <a
                href={member.phone ? `tel:${member.phone}` : "#"}
                className={`transition-colors ${member.phone ? "text-blue-600 hover:text-blue-800" : "text-gray-300 cursor-not-allowed"}`}
                title={member.phone ? "Call" : "Phone not available"}
                tabIndex={-1}
              >
                <FaPhone size={22} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutUs;