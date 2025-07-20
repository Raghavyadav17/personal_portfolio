import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Hi, I’m Raghav. I build smart systems, wrangle data, and sometimes horses.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-2xl"
      >
        GSoC contributor @ Intel OpenVINO · Full-stack dev · AI researcher · Quantum ML explorer
      </motion.p>
    </section>
  );
}
