import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import profileImg from '@/assets/profile.jpeg';

const Hero = () => {
  const techStack = ['React', 'Laravel', 'Node.js', 'TypeScript', 'MongoDB', 'MySQL', 'Next.js'];

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border border-primary/10" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border border-primary/5" />
        </motion.div>

        {/* Glowing orb */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen pt-24 pb-12">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge - Glowing "Available for hire" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10"
            >
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.2)",
                    "0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)",
                    "0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.2)"
                  ],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-primary/20"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary relative z-10" />
              </motion.div>
              <span className="text-sm font-medium text-primary relative z-10">Available for hire</span>
              {/* Pulsing dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500 relative z-10"
              />
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9]"
              >
                <span className="block">Creative</span>
                <span className="block text-gradient">Developer</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              I'm <span className="text-foreground font-semibold">Yassir Hallaji</span>, a Full-Stack developer 
              crafting exceptional digital experiences. I build scalable web applications 
              that combine beautiful design with robust functionality.
            </motion.p>

            {/* Tech stack marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="tag"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-12 pt-4"
            >
              <div>
                <span className="block text-4xl md:text-5xl font-display font-bold text-gradient">3+</span>
                <span className="text-sm text-muted-foreground">Years Exp.</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="block text-4xl md:text-5xl font-display font-bold text-gradient">50+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="block text-4xl md:text-5xl font-display font-bold text-gradient">30+</span>
                <span className="text-sm text-muted-foreground">Clients</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projets"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-warm text-primary-foreground font-semibold hover:glow-warm transition-all"
              >
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-border font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96 lg:w-full lg:h-[500px]">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-warm opacity-20 blur-3xl" />
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden border-2 border-primary/20">
                <img
                  src={profileImg}
                  alt="Yassir Hallaji"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-6 py-4 rounded-xl glass-dark border border-primary/20 glow-warm"
              >
                <p className="text-xs text-muted-foreground mb-1">Based in</p>
                <p className="font-display font-semibold">Marrakech, Morocco 🇲🇦</p>
              </motion.div>

              {/* Code snippet decoration */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-3 rounded-xl glass-dark border border-primary/20 font-mono text-xs"
              >
                <span className="text-primary">const</span> dev = <span className="text-accent">"passionate"</span>;
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
