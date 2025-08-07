import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { DraggableCardDemo } from './ReviewforHome';
import over1 from '../assets/over1.jpg';
import over2 from '../assets/over2.jpg';
import over3 from '../assets/over3.jpg';
import deme1 from '../assets/deme1.webp';
import deme2 from '../assets/deme2.jpg';
import deme3 from '../assets/deme3.jpg';
import deme4 from '../assets/deme4.jpg';
import deme5 from '../assets/deme5.jpg';
import strock1 from '../assets/strock1.jpg'
import strock2 from '../assets/strock2.jpg';
import strock3 from '../assets/strock3.jpg';
import strock4 from '../assets/strock4.jpg';
import com from '../assets/com.avif';
import chom from '../assets/chom.jpg';
import par1 from '../assets/par1.png';
import par2 from '../assets/par2.jpg';
import par3 from '../assets/par3.jpg';
import par4 from '../assets/par4.jpg';
import dis1 from '../assets/dis1.jpg';
import dis2 from '../assets/dis2.jpg';
import dis3 from '../assets/dis3.jpg';
import liv1 from '../assets/liv1.jpg';
import liv2 from '../assets/liv2.jpg';

import { DraggableCardContainer, DraggableCardBody} from '../components/ui/DragAbleCard';

// Import your hero image and logos here

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

function HomePage() {
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
const services = [
  {
    title: "Live-in Care",
    description: `For people who would rather live freely in their own homes, live-in care is an option.

While many people find that care homes meet their needs, not everyone is a good fit for the set routine. Simple things like eating what you want, sleeping when you want, watching the TV you enjoy, and spending time with your cherished pet are all made possible by live-in care.

Angel Carers provides you with customized, on-demand, one-on-one support help in your home. We give you the care you need to keep your independence and uniqueness.   

The benefits to the elderly's mental health are invaluable, and constancy and familiarity are especially crucial for dementia patients.`,
    image: liv1,
    moreDescription: [
      {
        title: "Individualized one-on-one care",
        description: `The individualized care you receive with live-in care is unmatched, even if the cost is close to that of care homes.

We at Angel Carers provide live-in care around-the-clock in the safety of the family home. Our skilled employees live in the house and are available to assist with all daily duties, giving the family peace of mind and confidence around-the-clock.


Our comprehensive evaluation and care plans guarantee that our services are precisely customized to meet your needs—always with a smile.`,
        image: liv2
      },
    ]
  },
  {
title: "Overnight Care",
description: `For individuals who require support and reassurance during the night, overnight care is an ideal solution. Whether it's assistance with medication, help getting in and out of bed, or simply the peace of mind of having someone nearby, overnight care ensures comfort and safety throughout the night.

Angel Carers provides attentive and compassionate overnight care tailored to your unique needs. Our caregivers are trained to handle night-time routines with discretion and care, allowing you and your loved ones to rest easy.

This service is particularly beneficial for those recovering from illness, living with dementia, or prone to nighttime anxiety or wandering.`,
image: over1,
moreDescription: [
  {
    title: "Peace of Mind Through the Night",
    description: `One of the greatest concerns for families is ensuring their loved ones are safe during the night. With overnight care from Angel Carers, a trained professional is always present to respond to any need—whether it's an emergency or just a reassuring presence. This constant support not only enhances safety but also allows family members to get a good night’s sleep, knowing someone trustworthy is watching over their loved one.`,
    image: over2
  },
  {
    title: "Support for Night-Time Needs",
    description: `As we age or recover from an illness, night-time routines can become more challenging. Tasks like getting to the bathroom, taking scheduled medication, or shifting positions in bed may require assistance. Our caregivers are trained to handle all these tasks calmly and professionally, helping reduce risks like falls or medication errors. With this level of care, our clients enjoy better comfort and uninterrupted rest through the night.`,
    image: over3
  }
]
}
,
 {
title: "Dementia Care",
description: `Dementia is a progressive condition that affects memory, thinking, and behavior—making everyday life increasingly challenging. At Angel Carers, we provide compassionate and specialized dementia care that focuses on maintaining dignity, independence, and quality of life for as long as possible.

Our trained caregivers understand the complexities of dementia and offer consistent, one-on-one support tailored to the unique needs of each individual. From helping with daily tasks to providing emotional reassurance, we create a structured and familiar environment that promotes comfort and security.

Whether it’s early-stage memory loss or more advanced cognitive decline, we’re here to help individuals and their families navigate the journey with respect and empathy.`,
image: deme1,
moreDescription: [
  {
    title: "Trained and Compassionate Dementia Specialists",
    description: `Our caregivers receive dedicated training in dementia care, equipping them to handle both the practical and emotional challenges that may arise. We focus not only on physical assistance, but also on understanding behavioral changes, communication needs, and emotional well-being. Each caregiver builds a trusting relationship with the person they support, helping to reduce confusion, anxiety, and frustration—common symptoms for those living with dementia.`,
    image: deme2
    //jjkjk
  },
  {
    title: "Consistency and Familiarity at Home",
    description: `People with dementia often thrive best in a stable and familiar environment. That’s why our dementia care is provided directly in the comfort of the client's home, preserving their routines and surroundings. By avoiding the disruption of moving to a care facility, we help reduce stress and allow individuals to continue engaging with their personal belongings, cherished pets, and favorite spaces—keeping their identity and independence intact.`,
    image: deme3
  },
  {
    title: "Daily Structure and Gentle Encouragement",
    description: `A consistent daily routine can bring comfort and clarity to someone living with dementia. Our caregivers support individuals with structured activities such as meal preparation, light exercise, personal hygiene, and memory games—while offering gentle encouragement and praise. This supportive rhythm helps reduce agitation and gives clients a greater sense of purpose and accomplishment each day.`,
    image: deme4
  },
  {
    title: "Family Support and Peace of Mind",
    description: `Dementia affects not just the individual but the entire family. We work closely with families to ensure they feel informed, supported, and confident in the care their loved one receives. Our team regularly updates families, offers guidance, and provides emotional support—easing the caregiving burden and allowing loved ones to focus on quality time together, rather than managing complex care needs alone.`,
    image: deme5
  }
]
}
,
  {
title: "Stroke Care",
description: `Recovering from a stroke is a deeply personal journey that requires patience, specialized support, and encouragement. At Angel Carers, we offer dedicated stroke care services designed to assist individuals in regaining their independence and confidence after a stroke.

Whether the stroke has caused mobility issues, speech difficulties, or cognitive changes, our experienced caregivers are trained to provide practical support, emotional reassurance, and therapeutic assistance—all from the comfort and familiarity of home.

Our stroke care plans are tailored to the individual's condition, recovery goals, and lifestyle preferences, ensuring a compassionate and goal-oriented approach to rehabilitation.`,
image: strock1,
moreDescription: [
  {
    title: "Specialized Post-Stroke Support at Home",
    description: `The home environment plays a vital role in stroke recovery. Our caregivers provide personalized support with daily tasks such as bathing, dressing, grooming, and meal preparation—while ensuring the home remains safe and accessible. With encouragement and gentle assistance, we help individuals rebuild routines and maintain as much independence as possible during their rehabilitation journey.`,
    image: strock2
  },
  {
    title: "Mobility and Rehabilitation Assistance",
    description: `Regaining mobility after a stroke often requires physical therapy and consistent encouragement. Our carers assist with exercise routines, guided movements, and coordination activities recommended by physiotherapists. Whether using a walker, wheelchair, or simply learning to walk again, we are there every step of the way—providing support with balance, strength, and confidence.`,
    image: strock4
  },
  {
    title: "Speech and Cognitive Support",
    description: `Strokes can impact speech, memory, and thinking. Our caregivers are trained to engage individuals in simple communication exercises and mental stimulation tasks to support their cognitive and language recovery. We create a calm, positive environment that promotes progress at a comfortable pace—always respecting the individual’s dignity and emotional state.`,
    image: strock3
  },
]
}
,
 
 {
title: "Companionship Care",
description: `Loneliness and isolation can have a serious impact on a person's mental and physical health, especially in later life. Companionship care focuses on building meaningful relationships and ensuring that individuals feel valued, heard, and connected to the world around them.

At Angel Carers, we understand that sometimes, what someone needs most is a friendly face, a listening ear, and a helping hand. Our companionship care services are tailored to provide emotional support and light assistance with everyday activities—encouraging joyful living, social interaction, and overall well-being.`,
image: com,
moreDescription: [
  {
    title: "Meaningful Social Interaction",
    description: `Our caregivers are not just there to assist with tasks—they are there to build genuine relationships. From sharing meals and conversations to reminiscing over photo albums, companionship care is about bringing warmth, laughter, and social stimulation into the client’s daily life. This kind of interaction plays a vital role in reducing feelings of loneliness, depression, and isolation, especially for those living alone.`,
    image: chom
  },
]
}
,
{
title: "Parkinson’s Care",
description: `Parkinson’s disease is a progressive neurological condition that affects movement, coordination, and in some cases, cognitive ability. As the condition advances, individuals often require increasing levels of support to manage both motor symptoms and everyday activities.

At Angel Carers, we provide dedicated, compassionate Parkinson’s care that is tailored to each stage of the condition. Our caregivers are specially trained to assist with the physical, emotional, and practical challenges associated with Parkinson’s—helping clients maintain their independence, dignity, and quality of life at home.`,
image: par1,
moreDescription: [
  {
    title: "Specialist Care for Motor Symptoms",
    description: `Parkinson’s can cause tremors, muscle stiffness, slow movement, and difficulty with balance. Our caregivers are trained to assist with mobility challenges in a safe and respectful manner. Whether it’s helping with walking, transferring, or using mobility aids, we ensure our clients move with confidence and reduce the risk of falls—always encouraging independence where possible.`,
    image: par2
  },
  {
    title: "Medication and Routine Management",
    description: `Parkinson’s treatment often involves strict medication schedules that must be followed closely. Our carers ensure medications are taken at the right time and in the correct dosage, which is essential for managing symptoms effectively. We also help establish and maintain a structured daily routine to minimize stress and support physical and cognitive function.`,
    image: par3
  },
  {
    title: "Support with Daily Living and Nutrition",
    description: `Everyday tasks like eating, dressing, or bathing can become difficult due to tremors and muscle rigidity. Our caregivers provide sensitive support with these activities, ensuring safety while encouraging involvement and self-care. We also assist with meal planning and preparation, focusing on balanced nutrition to support overall health and energy levels.`,
    image: par4
  },
]
}
,
{
title: "Disability Care",
description: `Living with a disability can present unique daily challenges, but with the right support, individuals can lead rich, independent, and fulfilling lives. At Angel Carers, we are committed to providing personalized disability care that promotes dignity, autonomy, and inclusion.

Whether the disability is physical, sensory, intellectual, or developmental, our compassionate caregivers work closely with each individual and their families to understand specific needs and deliver support that makes everyday life more manageable and empowering—all in the comfort of home.`,
image: dis2,
moreDescription: [
  {
    title: "Tailored Daily Living Support",
    description: `No two people experience disability in the same way. Our care is completely personalized—from help with dressing, bathing, and eating to managing medication and mobility aids. We respect each individual's routines, preferences, and pace, encouraging maximum independence while offering help where needed. It’s about enabling, not taking over.`,
    image: dis1
  },
  
  {
    title: "Accessible Home and Community Living",
    description: `Getting out and about shouldn’t be a barrier. We help clients stay connected to the world around them by assisting with transport, appointments, shopping, social visits, or hobbies. We also ensure the home environment is safe, accessible, and well-organized to support independent living—reducing stress and improving comfort for both clients and families.`,
    image: dis3
  },
  
]
}
]


  
  const navigate = useNavigate();

  const handleClick = (index) => {
    const service = services[index];
    localStorage.setItem('serviceDetails', JSON.stringify(service));
    navigate('/service');
  };
  

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout title={'Home Page'} description={'Home Page'} keywords={'Home Page'} author={'Home Page'}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section with Enhanced Design */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen "
        >
          {/* Left Grid - Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-700 to-blue-400 px-8 py-16 lg:px-16 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full"></div>
            </div>
            
            <div className="relative z-10 w-full max-w-xl lg:ml-auto lg:mr-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-blue-200 text-blue-900 text-sm font-semibold rounded-full mb-4">
                  Professional Care Services
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Helping you to enjoy<br />
                <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  the moments that matter
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-blue-100 text-lg mb-8 leading-relaxed"
              >
                Experience compassionate, professional care that puts your needs first. 
                Our dedicated team is here to support you and your loved ones with dignity and respect.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-blue-400 to-blue-200 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started Today
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Grid - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] lg:min-h-screen"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-transparent z-10"></div>
            <img
              src="https://media.istockphoto.com/id/1047536650/photo/senior-woman-sitting-in-chair-and-laughing-with-nurse-in-retirement-home.jpg?s=612x612&w=0&k=20&c=uTS7-u-EdQrIknRcXVJWZPIBX2QUNtOZT7loCuhjiJM="
              alt="Professional Care"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Services Journey Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                How to begin your care journey
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                Your journey to better care starts with three simple steps. We're here to guide you every step of the way.
              </p>
            </motion.div>

            <div className="relative">
              {/* Enhanced Connecting Lines */}
              <div className="absolute top-16 left-[15%] right-[15%] h-1 bg-gradient-to-r from-blue-400 to-blue-600 hidden lg:block rounded-full"></div>

              {/* Enhanced Icons and Content Grid */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                {/* Phone Section */}
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">1. Speak to our team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call our team of experts on{" "}
                    <a href="tel:02088048773" className="font-semibold text-blue-700">
                      02088048773
                    </a>{" "}
                    to talk through your options and any questions you may have regarding your care.
                  </p>

                </motion.div>

                {/* Home Section */}
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">2. A free home care assessment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your local Helping Hands manager will visit you to discuss your requirements and learn about the type of care you're after.
                  </p>
                </motion.div>

                {/* Notes Section */}
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">3. Create a bespoke care package</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll ensure you have the right care and support in place that fits around your needs and preferences.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Carousel Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Enhanced Heading */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  Our Services
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Comprehensive care solutions tailored to your unique needs and preferences
                </p>
              </motion.div>

              {/* Enhanced Carousel */}
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                  {services.map((service, index) => (
                    <CarouselItem key={index} className="p-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        whileHover="whileHover"
                        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                        onClick={() => handleClick(index)}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#3d195b] transition-colors">
                            {service.title}
                          </h3>
                          <button
                            className="text-[#3d195b] font-semibold hover:text-orange-500 transition-colors cursor-pointer mt-auto flex items-center group"
                            onClick={e => { e.stopPropagation(); handleClick(index); }}
                          >
                            LEARN MORE 
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white shadow-lg hover:bg-gray-50" />
                <CarouselNext className="bg-white shadow-lg hover:bg-gray-50" />
              </Carousel>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Response Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center justify-between gap-8"
              >
                {/* Enhanced Logo and Text */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Quick Response</h3>
                    <p className="text-blue-100 text-lg">Available 24/7</p>
                  </div>
                </div>

                {/* Enhanced Middle Paragraph */}
                <div className="max-w-xl text-center lg:text-left">
                  <p className="text-lg text-blue-100 leading-relaxed">
                    We understand that care needs can arise at any time. Our dedicated team is ready to provide immediate assistance and support when you need it most.
                  </p>
                </div>

                {/* Enhanced Button */}
                <div>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Two Grid Sections */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Grid - Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose Our Care Services?</h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mb-8 rounded-full"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg mb-6 leading-relaxed"
              >
                With over many years of experience in providing home care, we understand that everyone's needs are different. That's why we offer personalized care plans tailored to your specific requirements.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Our team of professional carers is thoroughly vetted, trained, and dedicated to providing the highest standard of care. We're regulated by the Care Quality Commission and are proud to maintain exceptional standards.
              </motion.p>
            </motion.div>

            {/* Right Grid - Enhanced Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000"
                alt="Care Services"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Second Two Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Grid - Enhanced Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000"
                alt="Care Services"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
            
            {/* Right Grid - Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Join Our Caring Community</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mb-8 rounded-full"
              ></motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg mb-6 leading-relaxed"
              >
                At Empathy Care, we are more than just a care provider; we are a community dedicated to improving the lives of those we serve. Our team is passionate about making a difference and providing the highest quality of care.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Whether you need live-in care, visiting support, or specialized services, we are here to help. Contact us today to learn more about how we can support you or your loved ones in living a fulfilling and independent life.
              </motion.p>
            </motion.div> 
          </div>
        </motion.div>

        {/* Enhanced Testimonials Section */}

        <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  Reviews
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Hear from our clients and their families about the positive impact our care services have made in their lives.
                </p>
              </motion.div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
          <DraggableCardDemo />
        </div>

        
        {/* <div className="relative h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d195b]/80 to-[#5a2a7f]/80 z-10"></div>
          <img
            src="https://media.istockphoto.com/id/1387432270/photo/senior-couple-at-home-with-man-talking-to-female-nurse-or-care-worker-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=6WC4GhohyOnM9OHINT0BsflH3EUyIFie0xdn6cPPsGE="
            alt="Elderly Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Why choose Helping Hands?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed"
            >
              We are committed to providing compassionate care and support to help our clients live their best lives at home.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-lg
                text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Find out more
            </motion.button>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default HomePage;