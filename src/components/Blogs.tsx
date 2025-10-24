export function Blogs() {
  return (
    <section id="blogs" className="py-20 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Blog & Insights
          </h2>
          
          <div className="relative py-32">
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-64 h-64 border-2 border-cyan-500 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <p className="text-6xl md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: '800', letterSpacing: '-0.03em' }}>
                COMING SOON
              </p>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Technical deep-dives, tutorials, and thoughts on signal processing, AI, and engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
