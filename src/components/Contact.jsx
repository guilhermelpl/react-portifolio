import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({ translate }) => {
  return (
    <div className="border-b border-neutral-900 pb-2">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {translate ? "Contact Me" : "Contato"}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-3">{CONTACT.address}</p>
        <p className="my-3">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
