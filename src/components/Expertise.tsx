import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Wrench, Zap, Globe } from 'lucide-react';

const skills = {
  frontend: {
    icon: Code2,
    title: "Front-end",
    description: "Building beautiful, responsive interfaces",
    items: ["React.js", "Redux", "Next.js", "Tailwind CSS", "JavaScript ES6", "TypeScript","Next.js"]
  },
  backend: {
    icon: Server,
    title: "Back-end",
    description: "Scalable server-side solutions",
    items: ["Laravel", "Node.js", "Express.js", "PHP", "Python", "REST APIs"]
  },
  database: {
    icon: Database,
    title: "Database",
    description: "Efficient data management",
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  tools: {
    icon: Wrench,
    title: "DevOps & Tools",
    description: "Modern development workflow",
    items: ["Git", "Docker", "Linux", "AWS", "Agile", "CI/CD"]
  }
};

const languages = [
  { name: "Arabic", level: "Native", icon: "🇲🇦" },
  { name: "French", level: "Fluent", icon: "🇫🇷" },
  { name: "English", level: "Advanced", icon: "🇬🇧" },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background number */}
      <div className="absolute top-0 right-0 number-huge opacity-50 select-none pointer-events-none">
        01
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
            <span className="text-primary font-mono text-sm">WHAT I DO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Specialized in modern web technologies with a passion for creating 
            seamless user experiences and robust backend systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {Object.entries(skills).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover-lift"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-warm">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="tag-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Extras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Languages */}
          <div className="md:col-span-2 p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-display font-semibold">Languages</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <span className="text-2xl">{lang.icon}</span>
                  <div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-display font-semibold">Quick Facts</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Clean code advocate
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Agile methodology
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Fast learner
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Team player
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
