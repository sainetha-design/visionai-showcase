import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold gradient-text">VisionAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses with smarter AI solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">About</a>
                </li>
                <li>
                  <a href="#product" className="hover:text-foreground transition-colors">Product</a>
                </li>
                <li>
                  <a href="#investors" className="hover:text-foreground transition-colors">Investors</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@visionai.tech</li>
                <li>123 Innovation Drive</li>
                <li>San Francisco, CA 94102</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {currentYear} VisionAI. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all group"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all group"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
