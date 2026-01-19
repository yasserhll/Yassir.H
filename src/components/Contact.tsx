import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, ArrowUpRight, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send to WhatsApp
    const whatsappMessage = `*Nouveau message de ${formData.name}*%0A%0A*Email:* ${formData.email}%0A*Sujet:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/212622401017?text=${whatsappMessage}`, '_blank');
  };

  const handleEmailSubmit = () => {
    const mailtoLink = `mailto:hallajiyassir@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+212 622 401 017",
      href: "https://wa.me/212622401017",
      primary: true
    },
    {
      icon: Mail,
      title: "Email",
      value: "hallajiyassir@gmail.com",
      href: "mailto:hallajiyassir@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "06 22 40 10 17",
      href: "tel:+212622401017",
      primary: false
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/yassir-hallaji-1954b6327/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/yasserhll", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/yasser_hll4/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/yassir.hallaji.5", label: "Facebook" }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm">GET IN TOUCH</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Looking for a developer? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Primary contact methods - WhatsApp & Email */}
            <div className="space-y-4 mb-6">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact principal</p>
              {contactMethods.filter(m => m.primary).map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary/10 transition-all group hover-lift"
                >
                  <div className="p-3 rounded-xl bg-gradient-warm">
                    <method.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">{method.title}</p>
                    <p className="font-semibold text-primary">{method.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              ))}
            </div>

            {/* Phone */}
            {contactMethods.filter(m => !m.primary).map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-muted group-hover:bg-gradient-warm transition-all">
                  <method.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">{method.title}</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">{method.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Réseaux sociaux</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:text-primary transition-all hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-muted">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Marrakech, Morocco 🇲🇦</p>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="p-6 rounded-xl border border-primary/30 bg-primary/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
                <span className="font-semibold text-primary">Disponible maintenant</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Ouvert aux projets freelance, CDI et collaborations.
                Temps de réponse: moins de 24h.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl border border-border bg-card space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Envoyer via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary/30 hover:border-primary text-primary font-semibold transition-all hover:bg-primary/5"
              >
                <Mail className="w-5 h-5" />
                Email
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
