export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] text-green-400 font-mono py-20 px-6 min-h-screen"
    >
      <div className="max-w-4xl mx-auto space-y-6 text-lg">
        <p><span className="text-white">$</span> whoami</p>
        <p className="ml-4">&gt; Machine Learning Engineer, Full-Stack Dev, Quantum Explorer</p>

        <p><span className="text-white">$</span> cat bio.txt</p>
        <p className="ml-4 text-green-300 leading-relaxed">
          &gt; I build intelligent systems, simulate fluids, and break in colts for fun.<br />
          &gt; Currently GSoC @ Intel, Stealth Startup Hacker, UofT Engineer.<br />
          &gt; Passionate about building real-world AI products with speed and polish.
        </p>
      </div>
    </section>
  );
}
