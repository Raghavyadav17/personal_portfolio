import { motion } from "framer-motion";

const projects = [
  {
    name: "🧠 AI Resume Analyzer",
    description: "Open-source resume parser powered by transformers. Auto-ranks resumes and provides smart feedback.",
    tech: "FastAPI, PyTorch, OpenAI, React",
    link: "https://github.com/yourusername/ai-resume-analyzer",
  },
  {
    name: "🌊 SimFlowAI",
    description: "2D fluid simulation with AI and physics-based solvers. Web-based and interactive.",
    tech: "React, Flask, WASM, TensorFlow",
    link: "https://github.com/yourusername/simflow-ai",
  },
  {
    name: "🤖 RL Robotic Arm",
    description: "Trained robotic arm using Deep Q-Learning in simulation to solve real-world tasks.",
    tech: "Python, PyBullet, OpenAI Gym",
    link: "https://github.com/yourusername/rl-robot-arm",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0d0d0d] text-green-400 font-mono py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <p className="text-white mb-8">$ ls projects</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="block border border-green-400 p-5 rounded-lg hover:bg-green-900/10 transition"
            >
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="mt-2 text-green-300">&gt; {project.description}</p>
              <p className="mt-2 text-sm text-green-500">[ tech: {project.tech} ]</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
