import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./Components/About";
import TeamSection from "./Components/Team";
import How from "./Components/How";
import Customer from "./Components/Customers";
import Partners from "./Components/Partners";
import Contact from "./Components/Contact";
import Privacy from "./Pages/Privacy";
import Conduct from "./Pages/Conduct";

export default function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={
               <>
                  <Navbar/>
                  <Hero/>
                  <Services/>
                  <Projects/>
                  <About/>
                  <TeamSection/>
                  <How/>
                  <Customer/>
                  <Partners/>
                  <Contact/>
               </>
            } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/conduct" element={<Conduct />} />
         </Routes>
      </Router>
   );
}
