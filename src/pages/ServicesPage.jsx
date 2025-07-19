import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.03, boxShadow: "0 8px 32px 0 rgba(34, 139, 230, 0.15)" },
};

function ServicesPage() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Live-in Care",
      description: `For people who would rather live freely in their own homes, live-in care is an option.

While many people find that care homes meet their needs, not everyone is a good fit for the set routine. Simple things like eating what you want, sleeping when you want, watching the TV you enjoy, and spending time with your cherished pet are all made possible by live-in care.

Angel Carers provides you with customized, on-demand, one-on-one support help in your home. We give you the care you need to keep your independence and uniqueness.   

The benefits to the elderly's mental health are invaluable, and constancy and familiarity are especially crucial for dementia patients.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
      moreDescription: [
        {
          title: "Individualized one-on-one care",
          description: `The individualized care you receive with live-in care is unmatched, even if the cost is close to that of care homes.

We at Angel Carers provide live-in care around-the-clock in the safety of the family home. Our skilled employees live in the house and are available to assist with all daily duties, giving the family peace of mind and confidence around-the-clock.


Our comprehensive evaluation and care plans guarantee that our services are precisely customized to meet your needs—always with a smile.`,
          image: "https://plus.unsplash.com/premium_photo-1661274147223-116687829d26?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxkZXJseSUyMGNhcmV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
        },
      ]
    },
    {
  title: "Overnight Care",
  description: `For individuals who require support and reassurance during the night, overnight care is an ideal solution. Whether it's assistance with medication, help getting in and out of bed, or simply the peace of mind of having someone nearby, overnight care ensures comfort and safety throughout the night.

Angel Carers provides attentive and compassionate overnight care tailored to your unique needs. Our caregivers are trained to handle night-time routines with discretion and care, allowing you and your loved ones to rest easy.

This service is particularly beneficial for those recovering from illness, living with dementia, or prone to nighttime anxiety or wandering.`,
  image: "https://www.homechoices.org/wp-content/uploads/2023/09/overnight-caregiver-adjusting-patients-pillow-before-bed-for-a-good-nights-sleep.jpg",
  moreDescription: [
    {
      title: "Peace of Mind Through the Night",
      description: `One of the greatest concerns for families is ensuring their loved ones are safe during the night. With overnight care from Angel Carers, a trained professional is always present to respond to any need—whether it's an emergency or just a reassuring presence. This constant support not only enhances safety but also allows family members to get a good night’s sleep, knowing someone trustworthy is watching over their loved one.`,
      image: "https://grannynannies.com/assets/img/Services/Overnight-Assistance.jpg"
    },
    {
      title: "Support for Night-Time Needs",
      description: `As we age or recover from an illness, night-time routines can become more challenging. Tasks like getting to the bathroom, taking scheduled medication, or shifting positions in bed may require assistance. Our caregivers are trained to handle all these tasks calmly and professionally, helping reduce risks like falls or medication errors. With this level of care, our clients enjoy better comfort and uninterrupted rest through the night.`,
      image: "https://assistinghands.com/5/wp-content/uploads/sites/27/2020/04/Overnight-Caregiver-1536x1024.jpg"
    },
  ]
}
,
   {
  title: "Dementia Care",
  description: `Dementia is a progressive condition that affects memory, thinking, and behavior—making everyday life increasingly challenging. At Angel Carers, we provide compassionate and specialized dementia care that focuses on maintaining dignity, independence, and quality of life for as long as possible.

Our trained caregivers understand the complexities of dementia and offer consistent, one-on-one support tailored to the unique needs of each individual. From helping with daily tasks to providing emotional reassurance, we create a structured and familiar environment that promotes comfort and security.

Whether it’s early-stage memory loss or more advanced cognitive decline, we’re here to help individuals and their families navigate the journey with respect and empathy.`,
  image: "https://www.helpguide.org/wp-content/uploads/2023/02/Alzheimers-Behavior-Management-1536x1023.jpeg",
  moreDescription: [
    {
      title: "Trained and Compassionate Dementia Specialists",
      description: `Our caregivers receive dedicated training in dementia care, equipping them to handle both the practical and emotional challenges that may arise. We focus not only on physical assistance, but also on understanding behavioral changes, communication needs, and emotional well-being. Each caregiver builds a trusting relationship with the person they support, helping to reduce confusion, anxiety, and frustration—common symptoms for those living with dementia.`,
      image: "https://images.unsplash.com/photo-1588776814576-57ec4c56077f?q=80&w=1000"
    },
    {
      title: "Consistency and Familiarity at Home",
      description: `People with dementia often thrive best in a stable and familiar environment. That’s why our dementia care is provided directly in the comfort of the client's home, preserving their routines and surroundings. By avoiding the disruption of moving to a care facility, we help reduce stress and allow individuals to continue engaging with their personal belongings, cherished pets, and favorite spaces—keeping their identity and independence intact.`,
      image: "https://images.unsplash.com/photo-1597452486112-42a82357d8d7?q=80&w=1000"
    },
    {
      title: "Daily Structure and Gentle Encouragement",
      description: `A consistent daily routine can bring comfort and clarity to someone living with dementia. Our caregivers support individuals with structured activities such as meal preparation, light exercise, personal hygiene, and memory games—while offering gentle encouragement and praise. This supportive rhythm helps reduce agitation and gives clients a greater sense of purpose and accomplishment each day.`,
      image: "https://images.unsplash.com/photo-1629724056644-193faabeb0b3?q=80&w=1000"
    },
    {
      title: "Family Support and Peace of Mind",
      description: `Dementia affects not just the individual but the entire family. We work closely with families to ensure they feel informed, supported, and confident in the care their loved one receives. Our team regularly updates families, offers guidance, and provides emotional support—easing the caregiving burden and allowing loved ones to focus on quality time together, rather than managing complex care needs alone.`,
      image: "https://images.unsplash.com/photo-1559589689-577aabd1e47f?q=80&w=1000"
    }
  ]
}
,
    {
  title: "Stroke Care",
  description: `Recovering from a stroke is a deeply personal journey that requires patience, specialized support, and encouragement. At Angel Carers, we offer dedicated stroke care services designed to assist individuals in regaining their independence and confidence after a stroke.

Whether the stroke has caused mobility issues, speech difficulties, or cognitive changes, our experienced caregivers are trained to provide practical support, emotional reassurance, and therapeutic assistance—all from the comfort and familiarity of home.

Our stroke care plans are tailored to the individual's condition, recovery goals, and lifestyle preferences, ensuring a compassionate and goal-oriented approach to rehabilitation.`,
  image: "https://astarcareservices.co.uk/wp-content/uploads/2024/11/stroke-care-patient-and-carer.jpg",
  moreDescription: [
    {
      title: "Specialized Post-Stroke Support at Home",
      description: `The home environment plays a vital role in stroke recovery. Our caregivers provide personalized support with daily tasks such as bathing, dressing, grooming, and meal preparation—while ensuring the home remains safe and accessible. With encouragement and gentle assistance, we help individuals rebuild routines and maintain as much independence as possible during their rehabilitation journey.`,
      image: "https://c-care.ca/wp-content/webp-express/webp-images/uploads/2023/09/Stroke-Nursing-Support-Care.jpg.webp"
    },
    {
      title: "Mobility and Rehabilitation Assistance",
      description: `Regaining mobility after a stroke often requires physical therapy and consistent encouragement. Our carers assist with exercise routines, guided movements, and coordination activities recommended by physiotherapists. Whether using a walker, wheelchair, or simply learning to walk again, we are there every step of the way—providing support with balance, strength, and confidence.`,
      image: "https://sukinohealthcare.com/wp-content/uploads/2024/02/Stroke-Rehabilitation-Exercises-for-a-Quickly-Recovery.png"
    },
    {
      title: "Speech and Cognitive Support",
      description: `Strokes can impact speech, memory, and thinking. Our caregivers are trained to engage individuals in simple communication exercises and mental stimulation tasks to support their cognitive and language recovery. We create a calm, positive environment that promotes progress at a comfortable pace—always respecting the individual’s dignity and emotional state.`,
      image: "https://origamicare.com.au/wp-content/uploads/2023/09/1-LowSize.jpg"
    },
  ]
}
,
   
   {
  title: "Companionship Care",
  description: `Loneliness and isolation can have a serious impact on a person's mental and physical health, especially in later life. Companionship care focuses on building meaningful relationships and ensuring that individuals feel valued, heard, and connected to the world around them.

At Angel Carers, we understand that sometimes, what someone needs most is a friendly face, a listening ear, and a helping hand. Our companionship care services are tailored to provide emotional support and light assistance with everyday activities—encouraging joyful living, social interaction, and overall well-being.`,
  image: "https://i.cbc.ca/1.5575385.1706896778!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_1180/loneliness-despression.jpeg?im=Resize%3D780",
  moreDescription: [
    {
      title: "Meaningful Social Interaction",
      description: `Our caregivers are not just there to assist with tasks—they are there to build genuine relationships. From sharing meals and conversations to reminiscing over photo albums, companionship care is about bringing warmth, laughter, and social stimulation into the client’s daily life. This kind of interaction plays a vital role in reducing feelings of loneliness, depression, and isolation, especially for those living alone.`,
      image: "https://images.livemint.com/img/2022/09/02/original/Being_a_caregiver_istockphoto_1662129610689.jpg"
    },
  ]
}
,
{
  title: "Parkinson’s Care",
  description: `Parkinson’s disease is a progressive neurological condition that affects movement, coordination, and in some cases, cognitive ability. As the condition advances, individuals often require increasing levels of support to manage both motor symptoms and everyday activities.

At Angel Carers, we provide dedicated, compassionate Parkinson’s care that is tailored to each stage of the condition. Our caregivers are specially trained to assist with the physical, emotional, and practical challenges associated with Parkinson’s—helping clients maintain their independence, dignity, and quality of life at home.`,
  image: "https://healthmanagement.co.uk/wp-content/uploads/2022/01/Parkinsons-disease-insight.png",
  moreDescription: [
    {
      title: "Specialist Care for Motor Symptoms",
      description: `Parkinson’s can cause tremors, muscle stiffness, slow movement, and difficulty with balance. Our caregivers are trained to assist with mobility challenges in a safe and respectful manner. Whether it’s helping with walking, transferring, or using mobility aids, we ensure our clients move with confidence and reduce the risk of falls—always encouraging independence where possible.`,
      image: "https://media.istockphoto.com/id/525586469/photo/male-physical-therapist.jpg?s=2048x2048&w=is&k=20&c=JxRyFJQzIXSCgGQzfe6fY5HyW96Nkyq1dO-dYJWSSh0="
    },
    {
      title: "Medication and Routine Management",
      description: `Parkinson’s treatment often involves strict medication schedules that must be followed closely. Our carers ensure medications are taken at the right time and in the correct dosage, which is essential for managing symptoms effectively. We also help establish and maintain a structured daily routine to minimize stress and support physical and cognitive function.`,
      image: "https://media.istockphoto.com/id/1140881598/photo/man-taking-daily-supplements-from-plastic-pill-organizer-box.jpg?s=2048x2048&w=is&k=20&c=o4MSfaiQqQFem4AUulpt3ngaFrjn0_ooNLVFTGWHbfQ="
    },
    {
      title: "Support with Daily Living and Nutrition",
      description: `Everyday tasks like eating, dressing, or bathing can become difficult due to tremors and muscle rigidity. Our caregivers provide sensitive support with these activities, ensuring safety while encouraging involvement and self-care. We also assist with meal planning and preparation, focusing on balanced nutrition to support overall health and energy levels.`,
      image: "https://media.istockphoto.com/id/905476864/photo/volunteer-and-senior-eating-lunch.jpg?s=2048x2048&w=is&k=20&c=obpJsq9Sre5idBH0krs_nNK-KOJE4a5qMtTTfED_R_U="
    },
  ]
}
,
{
  title: "Disability Care",
  description: `Living with a disability can present unique daily challenges, but with the right support, individuals can lead rich, independent, and fulfilling lives. At Angel Carers, we are committed to providing personalized disability care that promotes dignity, autonomy, and inclusion.

Whether the disability is physical, sensory, intellectual, or developmental, our compassionate caregivers work closely with each individual and their families to understand specific needs and deliver support that makes everyday life more manageable and empowering—all in the comfort of home.`,
  image: "https://media.istockphoto.com/id/1053564580/photo/couple-hands-during-sunset.jpg?s=2048x2048&w=is&k=20&c=bHgc-8TjLt_ifBYkYkBxjNMpz9EEibI6bt0Lx9E7cEo=",
  moreDescription: [
    {
      title: "Tailored Daily Living Support",
      description: `No two people experience disability in the same way. Our care is completely personalized—from help with dressing, bathing, and eating to managing medication and mobility aids. We respect each individual's routines, preferences, and pace, encouraging maximum independence while offering help where needed. It’s about enabling, not taking over.`,
      image: "https://media.istockphoto.com/id/2200526317/photo/woman-helping-her-partner-tie-his-apron-preparing-to-clean-their-living-room.jpg?s=2048x2048&w=is&k=20&c=J9PnPN9Cl2sMneuMzggxFf8awB-DB2Pg1Op7Xj8zQLQ="
    },
    
    {
      title: "Accessible Home and Community Living",
      description: `Getting out and about shouldn’t be a barrier. We help clients stay connected to the world around them by assisting with transport, appointments, shopping, social visits, or hobbies. We also ensure the home environment is safe, accessible, and well-organized to support independent living—reducing stress and improving comfort for both clients and families.`,
      image: "https://media.istockphoto.com/id/1427750314/photo/caring-mother-and-daughter-with-down-syndrome.jpg?s=2048x2048&w=is&k=20&c=2ZaCPZ-qbwBtZNEbJfX3-aKFtUaerC_rW-n1jKLCbA0="
    },
    
  ]
}

  ];

  const handleClick = (index) => {
    const service = services[index];
    localStorage.setItem('serviceDetails', JSON.stringify(service));
    navigate('/service');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className='items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200  gap-5'
    >

      <div className="relative h-[400px] w-full pb-10">
          <img
            src="https://media.istockphoto.com/id/1387432270/photo/senior-couple-at-home-with-man-talking-to-female-nurse-or-care-worker-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=6WC4GhohyOnM9OHINT0BsflH3EUyIFie0xdn6cPPsGE="
            alt="Elderly Care"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Discover our range of compassionate, professional care services designed to support you and your loved ones at every stage.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg
              text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1" onClick={() => {
              const element = document.getElementById("services-grid");
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Find out more
            </button>
          </div>
        </div>

      {/* <div className="text-center mb-10 ">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our range of compassionate, professional care services designed to support you and your loved ones at every stage.
        </p>
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
        <img
          src="https://i0.wp.com/www.angelcarers.com/wp-content/uploads/2024/05/angel-carers-service-live-in-care.jpg?resize=1200%2C900&ssl=1"
          alt="Elderly care at home"
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Exceptional care in the comfort of your own home
          </h2>
          <p className="text-gray-700 mb-4">
            At Angel Carers, we provide exceptional 24-hour Live-in Care and Domiciliary Care, ensuring comfort and security in your own home. Our comprehensive care services include bespoke 24-hour care, personalised Home Help for the elderly, and flexible Hourly Care starting from just 30 minutes per visit. Additionally, we offer Day and Night Sitting Services and Respite Care, tailored to meet your specific needs with the highest level of compassion and professionalism.
          </p>
          <p className="text-gray-700 mb-4">
            Our <span className="font-semibold">Live-in Care Service</span> is available throughout the South of England, extending up to a 200-mile radius from our Head Office in Bridport, located in the Heart of Dorset. We also provide <span className="font-semibold">Hourly Visits</span> in Bridport, Lyme Regis, Charmouth, Beaminster including Burton Bradstock and surrounding villages.
          </p>
          {/* <button
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-full shadow transition-colors"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            More about us
          </button> */}
        </div>
      </div>
      <motion.div
        id='services-grid'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-8 pt-16 pb-24 pl-5 pr-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <h4 className="text-lg text-gray-600 mb-3">Flexible Support</h4>
              <p className="text-gray-600 mb-4 flex-1" style={{ whiteSpace: "pre-line" }}>
                {
                  service.description
                    .split(' ')
                    .slice(0, 12)
                    .join(' ')
                }
                {service.description.split(' ').length > 12 ? '...' : ''}
              </p>
              <button
                className="text-[#3d195b] font-semibold hover:text-blue-700 transition-colors cursor-pointer mt-auto"
                onClick={e => { e.stopPropagation(); handleClick(index); }}
              >
                LEARN MORE →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ServicesPage;