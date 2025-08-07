import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout/Layout';

const blogs = [
  {
    title: "Why Empathy Matters in Care",
    date: "2024-07-01",
    author: "Empathy Care Team",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
    summary: "Empathy is at the heart of quality care. Discover how our approach transforms lives and builds trust.",
    content: `
Empathy is at the heart of quality care. At Empathy Care Company Ltd, we believe that understanding and sharing the feelings of our service users leads to better outcomes and a more supportive environment.

Our caregivers are trained to listen, communicate, and respond with compassion. This approach not only improves the well-being of those we care for but also builds trust and lasting relationships.

We are proud to have a diverse team that can communicate in English, Bengali, Hindi, and Urdu, ensuring that every service user feels heard and understood in their own language.

Thank you for trusting us with your care.
    `,
    tags: ["Empathy", "Caregiving", "Diversity"],
    readingTime: "4 min read",
    link: "#"
  },
  {
    title: "Celebrating Diversity in Our Care Team",
    date: "2024-06-20",
    author: "Diversity & Inclusion Team",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000",
    summary: "Our team's cultural and linguistic diversity helps us connect with every service user on a personal level.",
    content: `
At Empathy Care, we celebrate the unique backgrounds and languages of our caregivers. Our team speaks English, Bengali, Hindi, and Urdu, allowing us to provide culturally sensitive care to a wide range of service users.

We believe that understanding cultural traditions and values is essential to delivering person-centered care. Our caregivers regularly participate in training sessions to deepen their cultural competence and ensure that every individual feels respected and valued.

Diversity is not just a value—it's a strength that enriches our community and enhances the quality of care we provide.
    `,
    tags: ["Diversity", "Inclusion", "Community"],
    readingTime: "3 min read",
    link: "#"
  },
  {
    title: "Continuous Training: Our Commitment to Excellence",
    date: "2024-06-05",
    author: "Training & Development",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000",
    summary: "Ongoing training ensures our caregivers are always prepared to deliver the highest standard of care.",
    content: `
Quality care is built on a foundation of knowledge and skill. At Empathy Care, we invest in continuous training for all our caregivers, covering topics such as safeguarding, medication management, and person-centered support.

Our training programs are designed to keep our team up-to-date with the latest best practices and regulatory standards. We also encourage professional development through workshops and certifications.

By prioritizing education, we empower our caregivers to adapt to changing needs and deliver exceptional care every day.
    `,
    tags: ["Training", "Quality", "Professional Development"],
    readingTime: "5 min read",
    link: "#"
  },
  {
    title: "Empathy in Dementia Care: Why It Matters and How to Strengthen It",
    date: "2024-01-01",
    author: "Pam Brandon / Ageucate",
    image: "https://www.alliancehomecare.com/wp-content/uploads/2023/03/Alliance-Blog-Images-February.jpeg",
    summary: "As dementia rises, care providers must foster deep human connections through empathy to improve well‑being.",
    content: `
Dementia care is more than just providing physical support—it’s about fostering deep human connections through empathy. Understanding a person's history, personality, and emotional needs allows caregivers to truly meet them where they are.

At Empathy Care, we incorporate empathy training in all our dementia care modules. This creates a foundation of trust and respect between caregiver and client, which is especially important for individuals experiencing memory loss or cognitive decline.
    `,
    tags: ["Empathy", "Dementia", "Caregiving"],
    readingTime: "5 min read",
    link: "#"
  },
  {
    title: "Walking in Their Shoes: Empathy, the Key to Better Dementia Caregiving",
    date: "2023-12-01",
    author: "Ageucate Blog",
    image: "https://carehop.ca/wp-content/uploads/young-woman-talking-to-elderly-woman-in-a-wheelcha-2023-11-27-05-25-08-utc-e1717190675138.jpg",
    summary: "Discover how empathy can bridge emotional gaps and revolutionize dementia training and care.",
    content: `
Empathy helps caregivers better understand and respond to the emotional needs of people living with dementia. At Empathy Care, we simulate real-life challenges that clients face so that caregivers can literally “walk in their shoes.”

This immersive training not only improves emotional intelligence but also equips our staff to offer more compassionate, person-centered support.
    `,
    tags: ["Empathy", "Training", "Dementia"],
    readingTime: "4 min read",
    link: "#"
  },
  {
    title: "Caring for Dementia: Patience & Empathy",
    date: "2024-02-24",
    author: "Peter Abraham, Compassion Crossing",
    image: "https://rothkofflaw.com/wp-content/uploads/2024/05/AdobeStock_272282775-scaled.jpeg",
    summary: "Strategies highlighting patience, compassion and empathy to improve quality of life for people with dementia.",
    content: `
Providing dementia care requires immense patience. By blending structured routines with flexibility and empathy, caregivers can help maintain a sense of dignity and control for the individual.

Our caregivers at Empathy Care receive ongoing education in managing behaviors compassionately, using non-verbal cues, and understanding unmet needs.
    `,
    tags: ["Dementia", "Compassion", "Empathy"],
    readingTime: "6 min read",
    link: "#"
  },
  {
    title: "How Live‑In Care Improves Quality of Life for Seniors",
    date: "2024-10-01",
    author: "Dee Bustos / Care Indeed",
    image: "https://g5-assets-cld-res.cloudinary.com/image/upload/x_0,y_376,h_3313,w_5876,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1634141346/g5/g5-c-5ih92icfu-meridian-senior-living-single-domain/g5-cl-1jj0am3u1u-corporate/services/iStock-1138223885_dkagyk.jpg",
    summary: "Live‑in care offers personalized support, companionship and independence to seniors at home.",
    content: `
Live-in care allows seniors to remain in the comfort of their own homes while receiving 24/7 personalized assistance. It promotes independence, ensures safety, and provides companionship.

At Empathy Care, our live-in services are tailored to each individual, offering a seamless blend of support and freedom that fosters well-being and peace of mind.
    `,
    tags: ["Live‑in Care", "Independence", "Companionship"],
    readingTime: "7 min read",
    link: "#"
  },
  {
    title: "Understanding Live‑In Care: What It Is and How It Works",
    date: "2023-06-01",
    author: "Caring Home Care",
    image: "https://assurancehomecare.ca/wp-content/uploads/2025/04/Live-In-Care-vs.-Hourly-Care-Which-Fits-Your-Familys-Needs-1.jpg.webp",
    summary: "A comprehensive overview of live‑in care services and how they differ from hourly care options.",
    content: `
Live-in care provides full-time support to individuals who need assistance throughout the day and night. It’s especially beneficial for those living alone or with complex care needs.

At Empathy Care, we match clients with dedicated caregivers to ensure consistency, trust, and a personalized approach to daily living.
    `,
    tags: ["Live‑in Care", "Guide", "Support"],
    readingTime: "5 min read",
    link: "#"
  },
  {
    title: "The Role of Compassion in Dementia Care: Connecting with Empathy",
    date: "2023-04-01",
    author: "IOA Dementia Team",
    image: "https://www.dementia.org.au/_next/image?url=https%3A%2F%2Fwww.dementia.org.au%2Fsites%2Fdefault%2Ffiles%2F2024-02%2FLIQ25%2520-%2520a%2520group%2520hug.png&w=3840&q=75",
    summary: "Explores the emotional side of dementia care and the importance of treating people with compassion.",
    content: `
Emotional connection is essential in dementia care. When caregivers lead with compassion and empathy, they can make meaningful connections that reduce anxiety and confusion.

Empathy Care embraces this principle by offering caregivers emotional intelligence training and communication workshops that prioritize the human experience behind the condition.
    `,
    tags: ["Compassion", "Dementia", "Empathy"],
    readingTime: "3 min read",
    link: "#"
  }
];


const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3 }
  },
};

const Blog = () => {
  const navigate = useNavigate();
  const handleReadMore = (blog) => {
    localStorage.setItem("blog", JSON.stringify(blog));
    navigate("/singleblog");
  };

  return (
    <Layout title={'Blog'} description={'Read our latest insights on caregiving and healthcare'} keywords={'blog, caregiving, healthcare insights'} author={'Angel Carers'}>
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
              Our Blog & Insights
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert insights, caregiving tips, and stories from our community. Stay informed about the latest in healthcare and caregiving.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-gray-500">{blogs[0].date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{blogs[0].readingTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogs[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{blogs[0].summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogs[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleReadMore(blogs[0])}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 self-start"
                  >
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {blog.readingTime}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{blog.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleReadMore(blog)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest insights and tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;