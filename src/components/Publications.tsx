import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title: "Comparative Analysis of U-Net and U-Net++ for Solar Potential Estimation",
    authors: "Chinmay Deo et al.",
    venue: "IEEE INSPECT 2025",
    location: "IIITM Gwalior",
    year: "2025",
    type: "Conference",
    status: "Accepted",
    presentationLink: "#", // Add your presentation link here
  },
  {
    title: "Real-Time Non-Contact Soil Moisture Estimation Using Machine Learning at the Edge",
    authors: "Chinmay Deo et al.",
    venue: "IEEE ICEdge 2025",
    location: "IISc Bangalore",
    year: "2025",
    type: "Conference",
    status: "Accepted",
    presentationLink: "#", // Add your presentation link here
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-20 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Publications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Papers presented at conferences. IEEE Xplore links will be added upon publication.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-cyan-500/10 rounded-lg mt-1">
                        <FileText className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white mb-2">{pub.title}</CardTitle>
                        <p className="text-gray-300">{pub.authors}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge 
                      variant="secondary"
                      className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    >
                      {pub.status}
                    </Badge>
                    <Badge 
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                    >
                      {pub.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm">
                    <p className="text-cyan-400">{pub.venue}</p>
                    <p className="text-gray-500">{pub.location} • {pub.year}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50"
                      onClick={() => window.open(pub.presentationLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Presentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
