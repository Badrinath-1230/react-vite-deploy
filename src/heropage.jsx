import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroPage = () => {
  const fullText =
    "From brand kit to launch-ready content, websites & apps — powered by AI.";

  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  // Looping typing animation
  useEffect(() => {
    if (startTyping) {
      let index = -1;
      const interval = setInterval(() => {
        if (index >= fullText.length) {
          clearInterval(interval);
          setTypingComplete(true);
          setStartTyping(false); // Stop current typing cycle

          // Restart after a delay
          setTimeout(() => {
            setTypedText("");
            setTypingComplete(false);
            setStartTyping(true);
          }, 3000); // delay before restart
        } else {
          setTypedText((prev) => prev + fullText.charAt(index));
          index++;
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [startTyping]);

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center text-white font-['Inter'] overflow-hidden px-4">

      {/* === Background Blobs === */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#e30613] via-pink-500 to-indigo-500 blur-3xl opacity-30 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ top: "-150px", left: "-150px" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-bl from-indigo-500 via-pink-500 to-[#e30613] blur-3xl opacity-30 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{ top: "-120px", right: "-100px" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-pink-500 via-[#e30613] to-indigo-500 blur-3xl opacity-30 rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity }}
        style={{ bottom: "-120px", left: "-100px" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-gradient-to-tl from-[#e30613] via-indigo-500 to-pink-500 blur-3xl opacity-30 rounded-full"
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6.5, repeat: Infinity }}
        style={{ bottom: "-140px", right: "-140px" }}
      />

      {/* === Hero Content === */}
      <motion.div
        className="text-center z-10 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Design Made{" "}
          <motion.span
            className="text-[#e30613] inline-block"
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              type: "spring",
              stiffness: 60,
            }}
          >
            Intelligent
          </motion.span>
        </motion.h1>

        {/* Typing Paragraph */}
        <p className="text-gray-300 text-lg md:text-xl mt-4 h-[3.5rem] whitespace-pre-wrap">
          {typedText}
          {!typingComplete && <span className="animate-pulse">|</span>}
        </p>

        {/* Buttons shown only after typing complete */}
        {typingComplete && (
          <motion.div
            className="mt-8 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold py-3 px-6 rounded-xl transition-colors hover:bg-[#e30613] hover:text-white"
            >
              Try the Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold py-3 px-6 rounded-xl transition-colors hover:border-[#e30613] hover:text-[#e30613]"
            >
              Join Waitlist
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroPage;

