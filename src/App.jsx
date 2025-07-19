import { Routes, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import { Navbar2 } from './components/Layout/Navbar2'
import Footer from './components/Layout/Footer'
import OneServices from './pages/OneServices'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import EventPage from './pages/EventPage'
import SingleEventPage from './pages/SingleEventPage'
import SingleBlogPage from './pages/SingleBlogPage'
import ReviewPage from './pages/ReviewPage'
import { DraggableCardDemo } from './pages/ReviewforHome'

function App() {

  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/service" element={<OneServices/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/events" element={<EventPage/>} />
        <Route path="/singleEvent" element={<SingleEventPage></SingleEventPage>}/>
        <Route path="/singleBlog" element={<SingleBlogPage></SingleBlogPage>}/>
        <Route path="/review" element={<ReviewPage></ReviewPage>}/>
        <Route path="/text" element={<DraggableCardDemo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
