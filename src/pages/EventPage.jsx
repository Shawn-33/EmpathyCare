import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


const events = [
  {
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
    ]
  },
  {
    title: "Community Health Awareness Day",
    date: "2025-09-10",
    time: "11:00 AM - 3:00 PM",
    location: "Local Community Center",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description:
      "Join us for a day of health talks, free check-ups, and community engagement. Open to all service users and their families. This event will feature local health professionals, wellness workshops, and opportunities to connect with others in the community.",
    details: [
      "Free health screenings and consultations with medical professionals.",
      "Wellness workshops on nutrition, exercise, and mental health.",
      "Interactive booths and activities for all ages.",
      "Opportunities to meet and network with local health organizations.",
      "Healthy snacks and refreshments provided throughout the event."
    ]
  },
  {
    title: "Multilingual Family Support Workshop",
    date: "2025-10-05",
    time: "2:00 PM - 5:00 PM",
    location: "Empathy Care Company Ltd, Conference Room",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description:
      "A workshop for families, with sessions in English, Bengali, Hindi, and Urdu. Learn how to support your loved ones and connect with our team. This event is designed to break language barriers and provide culturally sensitive support.",
    details: [
      "Sessions in multiple languages: English, Bengali, Hindi, and Urdu.",
      "Guidance on supporting family members with care needs.",
      "Q&A with our multilingual care team.",
      "Resource packs and take-home materials for all attendees.",
      "Light refreshments and networking opportunities."
    ]
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 8px 32px 0 rgba(34, 139, 230, 0.18)",
  },
};

const EventPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8 flex flex-col items-center"
  >
    <div className="max-w-3xl w-full">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Upcoming Events
      </h1>
      <div className="space-y-8">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 flex flex-col border border-blue-200 relative overflow-hidden"
          >
            
            <div className="flex flex-row gap-2">
                <div className="border-r-2 border-blue-300 pr-4">
                    <img src={event.image} alt="" />

                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                        {event.title}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-1">
                        <FaCalendarAlt className="mr-2" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{event.location}</span>
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                    <div className="align-self-end mt-4">
                        <div>
                            <button>
                                <a
                                    href="#"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Register Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default EventPage;