

import './App.css'
import About from './compontents/About'
import Footer from './compontents/Footer'
import Home from './compontents/Home'
// import { FcContacts } from 'react-icons/fc'
import Navbar from './compontents/Navbar'
import Skills from './compontents/Skills'
import Contact from './compontents/Contact'
import Portfolio from './compontents/Portfolio'
import Experience from './compontents/Experience'

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     {/* <Experience/> */}
     <Skills/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
// App.js
// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './compontents/Home';
// import About from './compontents/About';
// import Contact from './compontents/Contact';
// import Experience from './compontents/Experience';
// import Skills from './compontents/Skills';
// import Portfolio from './compontents/Portfolio';
// import Footer from './compontents/Footer';
// import Navbar from './compontents/Navbar';


// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;