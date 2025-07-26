export const HeroSection = () => {
  return (
    <main 
      id="main-content"
      className="relative min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 overflow-hidden"
      role="banner"
    >
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-10" 
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(var(--n8n-purple)) 0%, transparent 50%)`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight">
              <span className="text-white block">Supercharge Your</span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Pentesting
              </span>
              <span className="text-white block">Experience</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Transform your penetration testing workflow with enhanced automation, 
              AI-powered analysis tools, and intelligent vulnerability assessment capabilities.
            </p>
          </div>

          {/* Right Side - Product Pictures Space */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Product Showcase</h3>
                <p className="text-white/60 max-w-sm mx-auto">
                  Interactive demonstrations and workflow visualizations will be displayed here
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white/5 border border-white/10 rounded-lg p-4 h-20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded opacity-60"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
};