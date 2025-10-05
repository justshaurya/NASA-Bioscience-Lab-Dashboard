function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Contact Team Galactic
            </h1>
            <p className="text-xl text-[var(--text-gray)] leading-relaxed">
              NASA Space Apps Challenge 2025 Team
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-light)] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)]/20 flex items-center justify-center">
                  <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-light)]">Email</h3>
                  <a href="mailto:teamgalactic@gmail.com" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                    teamgalactic@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)]/20 flex items-center justify-center">
                  <div className="icon-github text-xl text-[var(--secondary-color)]"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-light)]">GitHub</h3>
                  <a href="https://github.com/team-galactic" target="_blank" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                    github.com/team-galactic
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center">
                  <div className="icon-globe text-xl text-[var(--accent-color)]"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-light)]">NASA Space Apps Challenge</h3>
                  <a href="https://spaceapps.nasa.gov" target="_blank" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                    Visit Official Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--text-light)] mb-4">About This Project</h2>
            <p className="text-[var(--text-gray)] leading-relaxed mb-4">
              This NASA Bioscience Lab Dashboard was developed as part of the NASA Space Apps Challenge 2025. 
              Our goal is to make NASA's extensive bioscience research more accessible and actionable for researchers, 
              mission planners, and the scientific community.
            </p>
            <p className="text-[var(--text-gray)] leading-relaxed">
              We believe that by organizing and analyzing decades of space biology research, we can accelerate 
              the development of technologies needed for successful human exploration of Mars and beyond.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactPage />);