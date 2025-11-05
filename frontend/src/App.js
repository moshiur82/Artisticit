import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaBrush, FaCode, FaServer, FaDatabase, FaRocket } from 'react-icons/fa';  // Cool icons for timeline

const stripePromise = loadStripe('pk_test_mock_key');

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
    <header className="text-center mb-16">
      {/* Hero Section with Top-Aligned Title and Photo */}
      <div className="flex flex-col md:flex-row items-start mb-8">  {/* items-start for top alignment */}
        <img src="https://www.artisticit.com/img/sections/slider/founder_of_ArtisticIT.png" alt="Moshiur Rahman" className="w-[466px] h-[600px] max-w-full rounded-0 mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8 shadow-xl" />
        <div className="ml-0 md:ml-8 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Your One-Man Army — From Idea to Launch</h1>
          <p className="text-xl text-gray-900 mb-6">Hello, I’m Moshiur — a seasoned professional with 20+ years of experience in design, development, and end-to-end digital project execution.</p>
          <p className="text-lg text-gray-600 mb-8">I help small business owners turn ideas into complete, polished digital products through:</p>
     {/* Modern Timeline UI – Fixed Center Line, Center Numbers, Hover */}
<div className="relative pl-8 space-y-8 mb-8">
  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#C1272D]" />  {/* Center line */}
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">1</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaUser className="mr-2 text-[#C1272D]" />
        Logo & Brand Identity Design
      </h4>
      <p className="text-gray-600 text-sm">Creating unique visual identity for your brand.</p>
    </div>
  </div>
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">2</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaBrush className="mr-2 text-[#C1272D]" />
        UI/UX Design & Prototyping (Figma)
      </h4>
      <p className="text-gray-600 text-sm">User-centered wireframes and interactive prototypes.</p>
    </div>
  </div>
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">3</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaCode className="mr-2 text-[#C1272D]" />
        Front-End Development: HTML, CSS, JavaScript, React
      </h4>
      <p className="text-gray-600 text-sm">Responsive and interactive user interfaces.</p>
    </div>
  </div>
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">4</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaServer className="mr-2 text-[#C1272D]" />
        Back-End & Full-Stack: Python/Flask, Node.js
      </h4>
      <p className="text-gray-600 text-sm">Robust server-side logic and API development.</p>
    </div>
  </div>
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">5</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaBrush className="mr-2 text-[#C1272D]" />
        Creative Tools: Adobe Illustrator
      </h4>
      <p className="text-gray-600 text-sm">Vector graphics and design tools for precision.</p>
    </div>
  </div>
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">6</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaDatabase className="mr-2 text-[#C1272D]" />
        Database & Version Control: MongoDB, GitHub
      </h4>
      <p className="text-gray-600 text-sm">Secure data management and collaborative development.</p>
    </div>
  </div>
  <div className="flex items-center space-x-4 relative">
    <div className="w-8 h-8 bg-[#C1272D] rounded-full flex items-center justify-center text-white text-sm font-bold z-10">7</div>
    <div className="hover:bg-gray-50 p-4 rounded-0 transition flex-1">
      <h4 className="font-bold text-gray-800 flex items-center mb-1">
        <FaRocket className="mr-2 text-[#C1272D]" />
        Final Deployment & Delivery: Complete Project Ready to Launch
      </h4>
      <p className="text-gray-600 text-sm">Deployment, testing, and handover for immediate use.</p>
    </div>
  </div>
</div>
          <button className="bg-[#C1272D] text-white px-10 py-4 rounded-0 hover:bg-[#a11f26] text-lg font-bold transition">
            <Link to="/order">Get Started</Link>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        <div className="text-center p-6 bg-white rounded-0 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Web Development</h3>
          <p className="text-gray-600">Full-stack solutions from concept to deployment.</p>
          <Link to="/services" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
        <div className="text-center p-6 bg-white rounded-0 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Logo Creation</h3>
          <p className="text-gray-600">Unique logos tailored to your brand.</p>
          <Link to="/services" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
        <div className="text-center p-6 bg-white rounded-0 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
          <p className="text-gray-600">User-centered designs for engaging experiences.</p>
          <Link to="/services" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-600 text-lg">Ready to bring your vision to life? <Link to="/order" className="text-[#C1272D] font-bold">Order Now</Link></p>
      </div>
    </header>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-100 p-4 md:p-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h1>
      <p className="text-xl text-gray-600">A passionate UI/UX designer and developer with a decade of experience.</p>
    </header>
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <img src="https://www.artisticit.com/img/sections/slider/founder_of_ArtisticIT.png" alt="About Moshiur Rahman" className="rounded-0 shadow-xl w-full h-[600px] object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 mb-4">Founded Artistic IT to blend creativity with technology, helping businesses grow through stunning digital solutions. Specializing in web development, logo design, and UI/UX, I've completed over 50 projects for clients worldwide.</p>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>HTML/CSS, JavaScript, React</li>
            <li>Python/Flask, Node.js</li>
            <li>Figma, Adobe Illustrator</li>
            <li>MongoDB, AWS Deployment</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-[#C1272D]">10+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#C1272D]">50+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#C1272D]">100%</h3>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gray-100 p-4 md:p-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Services</h1>
      <p className="text-xl text-gray-600">Tailored digital solutions for your business.</p>
    </header>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white p-6 rounded-0 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Web Development</h2>
        <p className="text-gray-600 mb-4">Custom websites and web apps with modern tech stack.</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Responsive Design</li>
          <li>Full-Stack Development</li>
          <li>Deployment & Maintenance</li>
        </ul>
        <button className="bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">
          <Link to="/order">Get Quote</Link>
        </button>
      </div>
      <div className="bg-white p-6 rounded-0 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Logo Creation</h2>
        <p className="text-gray-600 mb-4">Unique logos that capture your brand identity.</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Concept & Sketching</li>
          <li>Vector Design</li>
          <li>Brand Guidelines</li>
        </ul>
        <button className="bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">
          <Link to="/order">Get Quote</Link>
        </button>
      </div>
      <div className="bg-white p-6 rounded-0 shadow-md">
        <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
        <p className="text-gray-600 mb-4">User-focused designs for seamless experiences.</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>User Research</li>
          <li>Wireframing & Prototyping</li>
          <li>Visual Design</li>
        </ul>
        <button className="bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">
          <Link to="/order">Get Quote</Link>
        </button>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="min-h-screen bg-gray-100 p-4 md:p-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Portfolio</h1>
      <p className="text-xl text-gray-600">Selected projects showcasing our work.</p>
    </header>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-0 shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/400x250?text=Web+App" alt="Web App" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">Finance App</h3>
          <p className="text-gray-600 mb-4">Mobile app for financial management.</p>
          <a href="#" className="text-blue-500 hover:underline">View Details</a>
        </div>
      </div>
      <div className="bg-white rounded-0 shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/400x250?text=Logo" alt="Logo" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">Brand Logo</h3>
          <p className="text-gray-600 mb-4">Custom logo for tech startup.</p>
          <a href="#" className="text-blue-500 hover:underline">View Details</a>
        </div>
      </div>
      <div className="bg-white rounded-0 shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/400x250?text=Ecommerce" alt="Ecommerce" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">Ecommerce Site</h3>
          <p className="text-gray-600 mb-4">Full-stack e-commerce platform.</p>
          <a href="#" className="text-blue-500 hover:underline">View Details</a>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gray-100 p-4 md:p-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact</h1>
      <p className="text-xl text-gray-600">Let's discuss your next project.</p>
    </header>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-0 focus:outline-none focus:ring-2 focus:ring-[#C1272D]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-0 focus:outline-none focus:ring-2 focus:ring-[#C1272D]"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-0 focus:outline-none focus:ring-2 focus:ring-[#C1272D]"
            required
          />
          <button type="submit" className="w-full bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">
            Send Message
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="space-y-4">
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            Block C/ House No #3/3, South Chhyabithy, Gazipur 1700, Bangladesh
          </p>
          <p className="flex items-center text-gray-600">
            <FaPhone className="mr-2" />
            +880 1716 942 391
          </p>
          <p className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" />
            info@artisticit.com
          </p>
          <p className="flex items-center text-gray-600">
            <FaWhatsapp className="mr-2" />
            +880 1716 942 391
          </p>
        </div>
      </div>
    </div>
  </div>
);

const OrderPage = () => {
  const [formData, setFormData] = useState({ client_name: '', project_details: '', type: 'web_dev' });
  const [projectId, setProjectId] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/projects', formData);
      setProjectId(res.data.id);
      setPaymentSuccess(false);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handlePayment = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/payment', {
        project_id: projectId,
        amount: 50
      });
      setPaymentSuccess(true);
      alert(res.data.message);
    } catch (err) {
      alert('Payment Error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Order Your Project</h1>
        <p className="text-xl text-gray-600">Fill out the form to get started. Delivery in 7-15 days.</p>
      </header>
      <div className="max-w-md mx-auto bg-white p-6 rounded-0 shadow-md md:max-w-lg">
        {!projectId ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.client_name}
              onChange={(e) => setFormData({...formData, client_name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-0 focus:outline-none focus:ring-2 focus:ring-[#C1272D]"
              required
            />
            <textarea
              placeholder="Project Details (Web Dev or Logo Description)"
              value={formData.project_details}
              onChange={(e) => setFormData({...formData, project_details: e.target.value})}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-0 focus:outline-none focus:ring-2 focus:ring-[#C1272D]"
              required
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-0 focus:outline-none focus:ring-2 focus:ring-[#C1272D]"
            >
              <option value="web_dev">Web Development (Backend + Frontend + Deploy)</option>
              <option value="logo">Logo Creation</option>
            </select>
            <button type="submit" className="w-full bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">Submit Project</button>
          </form>
        ) : !paymentSuccess ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Project ID: {projectId}</h2>
            <p className="text-gray-600">Project created. Now make payment (Example $50).</p>
            <div className="p-3 bg-gray-50 rounded-0">
              <CardElement className="p-3 border rounded-0 bg-white" />
            </div>
            <button onClick={handlePayment} className="w-full bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">Make Payment</button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-green-600">Success! Payment Completed.</h2>
            <p className="text-gray-600">You will receive your work in 7-15 days. Thank you!</p>
            <button onClick={() => window.location.reload()} className="w-full bg-[#C1272D] text-white p-3 rounded-0 hover:bg-[#a11f26] transition">Start New Project</button>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <nav className="bg-[#C1272D] text-white p-4 sticky top-0 z-50">  {/* Red Nav Background */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Your SVG Logo – White, Left of Text */}
          <svg width="32" height="26" viewBox="0 0 56.2 47.9" xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon fill="#FFFFFF" points="32.1,45.6 22.4,45.6 22.4,0 0,0 0,47.9 2.2,47.9 2.2,2.2 20.2,2.2 20.2,47.8 34.3,47.8 34.3,19.4 32.1,19.4 "/>
              <circle fill="#FFFFFF" cx="33.2" cy="13.5" r="2.9"/>
              <rect fill="#FFFFFF" x="6.3" y="27.3" width="9.8" height="2.2"/>
              <polygon fill="#FFFFFF" points="33.9,0 33.9,2.2 44,2.2 44,47.9 46.3,47.9 46.3,2.2 56.2,2.2 56.2,0 "/>
            </g>
          </svg>
          <h1 className="text-xl font-bold">
            <Link to="/" className="hover:text-white">Artistic IT</Link>
          </h1>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          <li><Link to="/order" className="bg-white text-[#C1272D] px-4 py-2 rounded-0 hover:bg-gray-100 transition">Order Now</Link></li>
        </ul>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>

    <footer className="bg-[#C1272D] text-white p-4 text-center">  {/* Red Footer */}
      <p>&copy; 2025 Artistic IT. All rights reserved.</p>
      <p className="mt-2">Block C/ House No #3/3, South Chhyabithy, Gazipur 1700, Bangladesh | +880 1716 942 391 | info@artisticit.com</p>
    </footer>
  </Router>
);

export default App;