import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500/50"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <Input 
                      placeholder="Subject" 
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500/50"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      className="min-h-[180px] bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500/50"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/20">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">chinmaydeo2004@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/20">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">
                      Punjab, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/Chinmay-Deo-2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-gray-300">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chinmay-deo-81880b24b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-gray-300">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:chinmaydeo2004@gmail.com"
                    className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all group"
                  >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-gray-300">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border-cyan-500/20">
              <CardContent className="pt-6">
                <p className="text-sm text-gray-300 text-center">
                  <span className="text-cyan-400">Open to:</span> Research collaborations and signal processing projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
