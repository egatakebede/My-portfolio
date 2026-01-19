import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="mb-4 text-white">EGATA KEBEDE</h3>
              <p className="text-slate-400">
                Fullstack Developer specializing in building exceptional digital experiences.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 text-white">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/egatakebede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/egatakebede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:egatakebede7@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="flex items-center justify-center gap-2 text-slate-400">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by EGATA KEBEDE
            </p>
            <p className="text-slate-500 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
