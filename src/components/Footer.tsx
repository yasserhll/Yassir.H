import { Github, Linkedin, Mail, Instagram, Facebook, MessageCircle, PhoneCall } from 'lucide-react';

const socialLinks = [
  { icon: PhoneCall, href: 'https://wa.me/212622401017', label: 'WhatsApp' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yassir-hallaji-1954b6327/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/yasserhll', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/yasser_hll4/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/yassir.hallaji.5', label: 'Facebook' },
  { icon: Mail, href: 'mailto:hallajiyassir@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright - Left */}
          <p className="text-muted-foreground text-sm order-2 md:order-1">
            © 2026 Yassir Hallaji. Développer par <span className="text-primary font-medium">Yassir.H</span>
          </p>

          {/* Social Links - Right */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;