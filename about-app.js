function AboutPage() {
  const topics = [
    {
      title: 'Bone Loss Prevention',
      icon: 'activity',
      color: '#f59e0b',
      description: 'Understanding how microgravity affects bone density and developing countermeasures for long-duration missions.'
    },
    {
      title: 'Radiation Protection',
      icon: 'shield',
      color: '#ef4444',
      description: 'Studying cosmic radiation effects on DNA and developing protective strategies for astronauts.'
    },
    {
      title: 'Plant Growth Systems',
      icon: 'leaf',
      color: '#10b981',
      description: 'Developing sustainable food production systems for Mars colonies and long-term space habitation.'
    },
    {
      title: 'Immune Response',
      icon: 'heart',
      color: '#8b5cf6',
      description: 'Investigating how space environment affects immune system function and astronaut health.'
    },
    {
      title: 'Microbial Behavior',
      icon: 'cpu',
      color: '#06b6d4',
      description: 'Understanding how microorganisms behave in space environments and their impact on crew health.'
    },
    {
      title: 'Psychological Health',
      icon: 'brain',
      color: '#f97316',
      description: 'Studying mental health challenges in isolated space environments and developing support systems.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              About Our Mission
            </h1>
            <p className="text-xl text-[var(--text-gray)] leading-relaxed">
              Understanding life in space to enable humanity's journey to the Moon and Mars
            </p>
          </div>

          <div className="card mb-12">
            <h2 className="text-2xl font-bold text-[var(--text-light)] mb-6">Why Space Biology Matters</h2>
            <div className="space-y-4 text-[var(--text-gray)] leading-relaxed">
              <p>
                As humanity prepares for long-duration missions to the Moon and Mars, understanding how living organisms 
                adapt to space environments becomes critical for mission success and astronaut survival.
              </p>
              <p>
                Our comprehensive analysis of NASA's bioscience research provides insights into the fundamental challenges 
                of space exploration, from maintaining astronaut health during multi-year journeys to establishing 
                sustainable life support systems on other planets.
              </p>
              <p>
                The 608+ publications in our database represent decades of research into how space affects everything 
                from human physiology to plant growth, providing the scientific foundation for humanity's next giant leap.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text-light)] mb-8 text-center">Key Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${topic.color}20` }}
                    >
                      <div 
                        className={`icon-${topic.icon} text-xl`}
                        style={{ color: topic.color }}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-light)] mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-[var(--text-gray)] text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--text-light)] mb-4">Our Approach</h2>
            <div className="space-y-4 text-[var(--text-gray)] leading-relaxed">
              <p>
                We leverage artificial intelligence to analyze and synthesize findings from multiple NASA research databases, 
                making complex scientific knowledge accessible to researchers, mission planners, and the public.
              </p>
              <p>
                By identifying patterns, trends, and knowledge gaps across decades of space biology research, we help 
                accelerate the development of technologies and countermeasures needed for successful deep space exploration.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = 'search.html'}
                  className="btn-primary"
                >
                  Explore Research
                </button>
                <button 
                  onClick={() => window.location.href = 'contact.html'}
                  className="bg-[var(--secondary-color)] hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Contact Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutPage />);