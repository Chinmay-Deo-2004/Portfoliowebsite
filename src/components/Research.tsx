import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Calendar, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import vehicleImage from "figma:asset/d5c20a058fab9a0e86a664f4a15685d22d7c7c1f.png";
import laptopImage from "figma:asset/84a12200cf50cbc6def50f08af1424fd963ed23c.png";

const experiences = [
  {
    title: "Distributed MIMO Radar with Integrated Machine Learning Techniqus",
    organization: "IISc Bangalore - SPWICOM Research Group",
    mentor: "Prof. Sudhan Majhi",
    period: "Aug 2025 - Present",
    description: "Multi-target localization involving velocity, distance, and angle estimation. Deep learning integration for signal enhancement under low SNR conditions.",
    image: "https://images.unsplash.com/photo-1760483087733-1dc9555a20f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRhciUyMHNpZ25hbCUyMGFudGVubmF8ZW58MXx8fHwxNzYxMjQzNjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["MIMO Radar", "Deep Learning", "Signal Processing"],
    status: "Ongoing",
  },
  {
    title: "Developed and Deployed FFT-based Real Beam-space MUSIC algorithm",
    organization: "IIT Madras - TelWise Research Group",
    mentor: "Prof. K. Giridhar (w/ Data Patterns)",
    period: "Jun 2025 - Aug 2025",
    description: " Designed and implemented an FFT-accelerated beam-space MUSIC algorithm for DoA estimation, achieving an 8× speedup over the existing method. Leveraged explicit Forward-Backward Averaging to increase performance. Developed a mode-space spatial smoothing algorithm to improve resolution and robustness in coherent multipath wireless environments.",
    image: vehicleImage,
    tags: ["DoA Estimation", "FFT Optimization", "Array Processing"],
    status: "Completed",
  },
  {
    title: "GNSS Signal Decoding Framework",
    organization: "Indian Army - Corps of Signals",
    mentor: "Dr. Sukwinder Singh",
    period: "Aug 2024 - Aug 2025",
    description: "MATLAB-based software-defined GPS receiver Acquisition phase verification using RTL-SDR and Real-time GNSS signal decoding with GNSS-SDR.",
    image: laptopImage,
    tags: ["GNSS", "SDR", "Real-time Processing"],
    status: "Completed",
  },
];

export function Research() {
  return (
    <section id="research" className="py-20 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Research Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="relative h-64 md:h-auto overflow-hidden bg-gray-800/30 flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  <Badge className="absolute top-4 right-4 bg-cyan-500/90 border-0 text-white">
                    {project.status}
                  </Badge>
                </div>
                
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <Building2 className="w-4 h-4" />
                          <span>{project.organization}</span>
                        </div>
                        <p className="text-gray-400">{project.mentor}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardDescription className="text-gray-300 mb-4">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 border-gray-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
