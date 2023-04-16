import React from "react";
import { motion } from "framer-motion";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-900 text-white">
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4 text-sm"
      >
        <h5 className="font-bold text-gray-400">ABOUT</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
      </motion.div>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4 text-sm"
      >
        <h5 className="font-bold text-gray-400">SUPPORT</h5>
        <p>Help Center</p>
        <p>AirCover</p>
        <p>Cancellation options</p>
        <p>Safety information</p>
        <p>Report a neighborhood concern</p>
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4 text-sm"
      >
        <h5 className="font-bold text-gray-400">COMMUNITY</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </motion.div>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4 text-sm"
      >
        <h5 className="font-bold text-gray-400">HOSTING</h5>
        <p>Try hosting</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>How to host responsibly</p>

       
      </motion.div>
      <div> 
          <p style={{marginLeft:"1000px"}}> © SlumberLand 2023</p>
      </div>
    </div>
    
  );
};
export default Footer;
