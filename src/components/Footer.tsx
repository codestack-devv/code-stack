import { Link } from "react-router-dom";
import { Mail, Facebook, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">CodeStack</h3>
            <p className="text-sm text-muted-foreground">
              Where Business meets Code
            </p>
            <p className="text-sm text-muted-foreground">
              Based in Texas, serving clients worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/portfolio" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Blog
              </Link>
              <Link to="/games" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Games
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">Web Development</span>
              <span className="text-sm text-muted-foreground">App Development</span>
              <span className="text-sm text-muted-foreground">Digital Solutions</span>
              <span className="text-sm text-muted-foreground">Digital Strategy</span>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:codestack11@gmail.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span>codestack11@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/share/1FbwYbufEF/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <Facebook size={16} className="group-hover:scale-110 transition-transform" />
                <span>Facebook Page</span>
              </a>
              <a
                href="https://www.instagram.com/code.stack1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.threads.com/@code.stack1?xmt=AQF0nQLV1kZHs0Yrr2_8kWGyLcRkahnKb7TRYADb_9XeAWw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                <span>Threads</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Texas, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
