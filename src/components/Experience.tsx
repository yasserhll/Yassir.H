import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: "Back-End Developer Intern",
    company: "Cnexia",
    duration: "6 months",
    year: "2023",
    description: "Contributed to the evolution and corrective maintenance of the company's main software platform, optimizing performance and developing new back-end functionalities.",
    skills: ["Node.js", "Laravel", "MySQL", "MongoDB", "Git"]
  },
  {
    title: "Full-Stack Developer Intern",
    company: "AdSpace",
    duration: "4 months",
    year: "2022",
    description: "Developed a complete schedule management system and created dynamic platforms using modern web technologies.",
    skills: ["React.js", "Next.js", "REST API", "MongoDB", "Node.js", "Express.js"]
  },
  {
    title: "Web Developer Intern",
    company: "OCP Group",
    duration: "2 months",
    year: "2021",
    description: "Developed a web application to simplify the management of the bunkering department.",
    skills: ["React.js", "Laravel", "MySQL"]
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    duration: "Ongoing",
    year: "2020+",
    description: "Created custom e-commerce sites and fluid user interfaces for various clients.",
    skills: ["React.js", "Express.js", "Laravel", "Postman" , "Next.js" ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="parcours" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background number */}
      <div className="absolute top-0 left-0 number-huge opacity-50 select-none pointer-events-none">
        02
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm">CAREER PATH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover-lift">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-muted group-hover:bg-gradient-warm transition-all">
                      <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-muted">{exp.duration}</span>
                    <span className="font-mono">{exp.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.linkedin.com/in/yassir-hallaji-1954b6327/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View full experience on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
