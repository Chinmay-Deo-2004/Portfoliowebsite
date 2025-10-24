import { Button } from "./ui/button";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block mb-8 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <p className="text-cyan-400">Electronics & Communication Engineering</p>
          </div>
          
          <h1 className="mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent text-7xl md:text-8xl" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: '800', letterSpacing: '-0.03em' }}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hi, I'm Chinmay.</span>
          </h1>
          
          <h2 className="text-gray-300 mb-8 max-w-3xl mx-auto text-2xl md:text-3xl" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: '300', letterSpacing: '-0.01em' }}>
            Turning raw signals into intelligence — one equation at a time.
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            onClick={() => window.location.href = 'mailto:chinmaydeo2004@gmail.com'}
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50 transition-all"
            onClick={() => window.open('https://drive.google.com/file/d/1yPefm60Pp-wU61D-jxGAkJk-za_4htMK/view', '_blank')}
          >
            <FileText className="w-4 h-4" />
            View Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://github.com/Chinmay-Deo-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/chinmay-deo-81880b24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href="mailto:chinmaydeo2004@gmail.com"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
