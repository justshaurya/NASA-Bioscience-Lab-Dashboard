function ResourcesPage() {
  const resources = [
    {
      title: 'NASA Task Book',
      url: 'https://taskbook.nasaprs.com/tbp/welcome',
      icon: 'book-open',
      color: 'var(--primary-color)',
      description: 'The NASA Task Book provides information on current and past research projects funded by NASA\'s Biological and Physical Sciences Division. It includes project summaries, investigators, and outcomes.'
    },
    {
      title: 'NASA Space Life Sciences Library (NSLSL)',
      url: 'https://public.ksc.nasa.gov/nslsl/',
      icon: 'library',
      color: 'var(--secondary-color)',
      description: 'A comprehensive library of publications and reports related to NASA\'s Space Life Sciences research programs and experiments.'
    },
    {
      title: 'NASA Open Science Data Repository (OSDR)',
      url: 'https://www.nasa.gov/osdr/',
      icon: 'database',
      color: 'var(--accent-color)',
      description: 'NASA\'s central repository for biological and physical data collected during space missions, providing datasets and metadata for research.'
    },
    {
      title: 'NASA Bioscience Publications GitHub',
      url: 'https://github.com/jgalazka/SB_publications/tree/main',
      icon: 'github',
      color: '#10b981',
      description: 'Curated collection of 608 NASA bioscience publications with summarized metadata and research categorization.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              NASA Resources
            </h1>
            <p className="text-xl text-[var(--text-gray)] leading-relaxed">
              Official NASA databases and repositories for space biology research
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {resources.map((resource, index) => (
              <div 
                key={index}
                onClick={() => window.open(resource.url, '_blank')}
                className="resource-card group"
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${resource.color}20` }}
                  >
                    <div 
                      className={`icon-${resource.icon} text-xl`}
                      style={{ color: resource.color }}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[var(--text-light)] group-hover:text-[var(--primary-color)] transition-colors">
                        {resource.title}
                      </h3>
                      <div className="icon-external-link text-[var(--text-gray)] group-hover:text-[var(--primary-color)] transition-colors"></div>
                    </div>
                    <p className="text-[var(--text-gray)] leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <div className="text-sm text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors">
                      Visit Resource →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--text-light)] mb-4">How We Use These Resources</h2>
            <div className="space-y-4 text-[var(--text-gray)] leading-relaxed">
              <p>
                Our dashboard integrates and analyzes data from these four primary NASA sources to provide 
                a comprehensive view of space biology research. Each source contributes unique value:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Task Book:</strong> Current research projects and funding information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>NSLSL:</strong> Historical publications and research reports</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>OSDR:</strong> Raw experimental data and datasets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>GitHub Repository:</strong> Curated metadata and categorized publications</span>
                </li>
              </ul>
              <p>
                By combining these sources, we create a unified search and analysis platform that makes 
                space biology research more accessible and discoverable for researchers and mission planners.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ResourcesPage />);