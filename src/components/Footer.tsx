import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Chinmay Deo
            </h3>
            <p className="text-gray-400">
              Building intelligent sensing systems at the intersection of signal processing, 
              machine learning, and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-cyan-400 transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-cyan-400 transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-cyan-400 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-white">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/Chinmay-Deo-2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/chinmay-deo-81880b24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="mailto:chinmaydeo2004@gmail.com"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to research collaborations and interesting projects
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Chinmay Deo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
