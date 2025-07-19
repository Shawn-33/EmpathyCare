import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaCertificate, FaUtensils } from "react-icons/fa";

// Timeline Component
const Timeline = ({ data }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
      
      {data.map((item, index) => (
        <div key={item.id} className="relative flex items-start mb-8 last:mb-0">
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"
          />
          
          {/* Content */}
          <div className="ml-12 w-full">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// RevealText Component
const RevealText = ({ text, className = "", speed = "normal", splitBy = "word" }) => {
  const words = text.split(' ');
  
  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: index * (speed === "slow" ? 0.05 : 0.02),
            duration: 0.3 
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Example event data (replace with real data or fetch by ID)
const event = {
  title: "Annual Caregiver Training",
  date: "2025-08-15",
  time: "10:00 AM - 4:00 PM",
  location: "Empathy Care Company Ltd, Main Hall",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  description:
    "Join us for the Annual Caregiver Training, a comprehensive, full-day event designed to empower caregivers with the latest knowledge, practical skills, and professional connections. This immersive training brings together industry-leading experts, experienced caregivers, and healthcare professionals to foster a collaborative environment focused on excellence in care. Attendees will participate in interactive lectures covering the latest advancements in patient care, safety protocols, and emotional well-being. The event features hands-on workshops where participants can practice essential caregiving techniques, learn about new assistive technologies, and engage in scenario-based group activities that simulate real-world challenges. Networking sessions provide opportunities to share experiences, discuss best practices, and build lasting professional relationships. All attendees will enjoy complimentary lunch and refreshments throughout the day, and will receive a certificate of participation recognizing their commitment to ongoing professional development. Whether you are a seasoned caregiver or new to the field, this event is tailored to enhance your skills, boost your confidence, and ensure you deliver the highest standards of compassionate care.",
  details: [
    "Keynote presentations by renowned experts in the care industry, offering insights into emerging trends, regulatory updates, and innovative care models. Attendees will gain a deeper understanding of the evolving landscape of caregiving and how to adapt to new challenges.",
    "Interactive knowledge-sharing sessions where caregivers can discuss real-life experiences, exchange practical tips, and collaborate on problem-solving strategies. These sessions are designed to foster a supportive community and encourage peer learning.",
    "Hands-on workshops covering essential caregiving skills such as safe patient handling, medication management, effective communication with clients and families, and the use of modern assistive devices. Participants will engage in group activities that reinforce teamwork and critical thinking.",
    "A nutritious lunch and refreshments will be provided, offering a chance to relax, recharge, and network with fellow attendees in a welcoming atmosphere.",
    "All participants will receive a certificate of participation, acknowledging their dedication to professional growth and their commitment to delivering exceptional care."
  ],
};

const SingleEventPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
  >
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -5, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-200 to-indigo-200 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-2xl"
      />
    </div>

    <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="max-w-7xl w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 p-8 sm:p-10 lg:p-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <img
                src={event.image}
                alt={event.title}
                className="relative w-full h-80 object-cover rounded-2xl shadow-xl border-2 border-white/50 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight"
              >
                {event.title}
              </motion.h1>
              
              <div className="space-y-4 text-gray-700">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/30"
                >
                  <FaCalendarAlt className="text-blue-500 mr-3 text-xl" />
                  <span className="font-medium text-lg">{event.date}</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/30"
                >
                  <FaClock className="text-purple-500 mr-3 text-xl" />
                  <span className="font-medium text-lg">{event.time}</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/30"
                >
                  <FaMapMarkerAlt className="text-pink-500 mr-3 text-xl" />
                  <span className="font-medium text-lg">{event.location}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Event Description
            </h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
              <RevealText
                text={event.description}
                className="text-gray-700 text-lg leading-relaxed"
                speed="slow"
              />
            </div>
          </motion.div>

          {/* Event Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FaUsers, title: "Expert Speakers", color: "from-blue-500 to-cyan-500" },
                { icon: FaCertificate, title: "Certification", color: "from-purple-500 to-pink-500" },
                { icon: FaUtensils, title: "Complimentary Lunch", color: "from-green-500 to-emerald-500" },
                { icon: FaClock, title: "Full Day Event", color: "from-orange-500 to-red-500" },
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 text-center group cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{highlight.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Event Walkthrough
            </h2>
            <Timeline
              data={event.details.map((detail, index) => ({
                id: index,
                content: (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-shadow duration-300"
                  >
                    <RevealText
                      text={detail}
                      className="text-gray-700 text-lg leading-relaxed"
                      speed="slow"
                      splitBy="line"
                    />
                  </motion.div>
                ),
              }))}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="relative z-10 ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default SingleEventPage;

