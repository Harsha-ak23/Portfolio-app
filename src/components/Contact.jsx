import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true); // disable button

    const serviceId = "service_0w82858";
    const publicKey = "ghee87Yi90u9xOZ1Y";
    const templateId = "template_511mwa3";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Ashish Kasaudhan",
        message: message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

      setName("");
      setEmail("");
      setMessage("");

      // Show message for 3 seconds
      setIsSubmit(true);
      setTimeout(() => setIsSubmit(false), 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // re-enable button
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple"> Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's Talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleForm} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  className="w-full h-25 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer
                  ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-purple hover:bg-purple-700"
                  }
                `}
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {/* Success Message */}
              {isSubmit && (
                <p className="text-green-400 mt-2 text-center">
                  Your response submitted successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Address */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Noida, Sector-58</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">kasaudhanak97@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 9918314813</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Harsha-ak23"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-gray-900 hover:text-white transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kasaudhanak"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition"
                >
                  <FaLinkedin />
                </a>
                <a className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition">
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/its_harshh10"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-pink hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
