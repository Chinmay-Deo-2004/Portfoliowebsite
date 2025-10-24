import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About</h2>
        </div>
        
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg text-center">
              Research engineer building intelligent sensing systems at the intersection of signal processing, 
              machine learning, and RF engineering.
            </p>
          </div>
        </div>

        {/* Research Highlights */}
        <div className="grid md:grid-cols-1 gap-6">
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-white">Research Interests</h3>
                <div className="grid md:grid-cols-2 gap-3 text-gray-300 text-lg">
                  <p>• Wireless Systems Engineering</p>
                  <p>• Signal Processing</p>
                  <p>• Radio Frequency Engineering</p>
                  <p>• Communications Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
