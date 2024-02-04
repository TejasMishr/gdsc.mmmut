import React from "react";
import Hero from "./Hero/Hero";
import { Footer, Navbar } from "../common";import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Event from "./Event/Event";
import Notfound from "./Error/Error";
export const Home = () => {
  return (
    <Router>
    <div>
      <AnimatedCursor
        trailingSpeed={2}
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid #ea4235",
        }}
      />
      <AnimatedCursor
        trailingSpeed={4}
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid #4286f5",
        }}
      />
      <AnimatedCursor
        trailingSpeed={6}
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid #109d58",
        }}
      />
      <AnimatedCursor
        trailingSpeed={10}
        innerSize={8}
        outerSize={60}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid #fabd03",
        }}
      />
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/event" element={<Event/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
     

    

      <Footer />
    </div>
    </Router>
  );
};
