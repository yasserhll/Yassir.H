import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
const projects = [{
  title: "Bunkering Management System",
  company: "OCP Group",
  type: "Full-Stack",
  description: "Complete web application for optimized management of bunkering operations with real-time tracking and reporting.",
  skills: ["React.js", "Laravel", "MySQL"],
  color: "from-orange-500 to-amber-500"
}, {
  title: "Schedule Management App",
  company: "AdSpace",
  type: "Internal Tool",
  description: "Internal tool for planning and managing employee schedules with drag-and-drop interface and notifications.",
  skills: ["React.js", "Express.js", "Node.js", "MongoDB"],
  color: "from-blue-500 to-cyan-500"
}, {
  title: "Platform Optimization",
  company: "Cnexia",
  type: "Evolution",
  description: "Major maintenance and evolution of the company's main platform, improving performance by 40%.",
  skills: ["Node.js", "Laravel", "MySQL", "REST API"],
  color: "from-purple-500 to-pink-500"
}, {
  title: "Football Organization System",
  company: "Freelance",
  type: "Web App",
  description: "Web application for organizing and managing football events, tournaments, and team management.",
  skills: ["React.js", "Express.js", "MongoDB"],
  color: "from-green-500 to-emerald-500"
}];
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="projets" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background number */}
      <div className="absolute top-0 right-0 number-huge opacity-50 select-none pointer-events-none">
        03
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of my most significant projects, showcasing my expertise 
            in building scalable and user-friendly web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.15
        }} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" style={{
            backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
          }} />
              
              <div className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover-lift h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <span className="text-primary font-medium">{project.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{project.type}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => <span key={skill} className="tag-muted text-xs">
                      {skill}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* More projects link */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="mt-12 text-center">
          <a href="https://github.com/yasserhll" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border font-semibold hover:border-primary hover:text-primary transition-all">
            View More on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Projects;