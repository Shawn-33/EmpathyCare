import React from "react";
import { motion } from "framer-motion";
import Layout from '../components/Layout/Layout';
import { FaUser } from 'react-icons/fa';

const reviews = [
  {
    name: "Hafiz",
    text: "The service has been professional from the beginning. The team consistently provides care for my mother, who has dementia, and usually assigns the same caregiver for continuity.",
    rating: 5,
    service: "Dementia Care",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lima",
    text: "The caregiver is friendly, informative, and punctual. I would recommend Empathy Care based on my experience. From Jane.",
    rating: 5,
    service: "Live-in Care",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Debbie",
    text: "The company is reliable and efficient in all aspects of my brother's care.",
    rating: 5,
    service: "Visiting Care",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Tina",
    text: "The manager at Empathy Care maintains a person-centred approach, which I have not often observed with other providers.",
    rating: 5,
    service: "Specialist Care",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jalal",
    text: "I have found the carers to be attentive and punctual. They understand my needs and act professionally.",
    rating: 5,
    service: "Overnight Care",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Layla",
    text: "The carers are reliable, timely, competent, and caring.",
    rating: 5,
    service: "Companionship Care",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michelle",
    text: "The management responds when my needs change and conducts itself professionally. The team regularly cares for my mother, who has dementia, and they aim to provide consistent caregivers.",
    rating: 5,
    service: "Dementia Care",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3 }
  },
};

const ReviewPage = () => (
  <Layout title={'Client Reviews'} description={'Read what our clients say about our care services'} keywords={'reviews, testimonials, client feedback'} author={'Angel Carers'}>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why families trust us with their loved ones' care. Read authentic testimonials from our satisfied clients.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                {/* <img
                  src={FaUser}
                  alt={FaUser}
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div className="flex-shrink-0">
                  <FaUser className="w-12 h-12 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                  <div className="flex items-center space-x-2 mb-1">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-500">({review.rating}.0)</span>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <svg
                  className="absolute -top-2 -left-2 w-8 h-8 text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed pl-6">{review.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Care?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of families who trust us with their loved ones' care
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div> */}
      </div>
    </div>
  </Layout>
);

export default ReviewPage;