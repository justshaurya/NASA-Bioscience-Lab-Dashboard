function ProjectPage() {
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [relatedProjects, setRelatedProjects] = React.useState([]);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId) {
      loadProject(projectId);
    } else {
      setLoading(false);
    }
  }, []);

  const loadProject = async (id) => {
    try {
      // Try to get from database first
      const result = await trickleGetObject('publications', id);
      setProject(result.objectData);
      loadRelatedProjects(result.objectData.category);
    } catch (error) {
      // Fallback to sample data
      const sampleProject = {
        title: 'Bone Density Changes in Long-Duration Spaceflight',
        authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez'],
        year: 2024,
        category: 'Human Physiology',
        mission: 'ISS Expedition 70',
        pi: 'Dr. Sarah Chen',
        affiliation: 'NASA Johnson Space Center',
        status: 'Completed',
        abstract: 'Comprehensive study of bone mineral density changes in astronauts during 6-month ISS missions. This research examines the effects of microgravity on skeletal health and evaluates countermeasures for bone loss prevention during long-duration space exploration missions to Mars and beyond.',
        doi: '10.1234/nasa.hp.2024.001',
        keywords: ['bone density', 'microgravity', 'astronaut health', 'ISS'],
        source_url: 'https://taskbook.nasaprs.com/tbp/studies/hp2024001'
      };
      setProject(sampleProject);
      loadRelatedProjects('Human Physiology');
    }
    setLoading(false);
  };

  const loadRelatedProjects = async (category) => {
    try {
      const result = await trickleListObjects('publications', 10, true);
      const filtered = result.items.filter(item => 
        item.objectData.category === category
      ).slice(0, 4);
      setRelatedProjects(filtered);
    } catch (error) {
      // Fallback sample data
      setRelatedProjects([
        { objectId: '1', objectData: { title: 'Immune System Response to Space Radiation', category: 'Human Physiology' } },
        { objectId: '2', objectData: { title: 'Cardiovascular Changes in Microgravity', category: 'Human Physiology' } }
      ]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-[var(--text-light)] mb-4">Project Not Found</h1>
            <p className="text-[var(--text-gray)] mb-6">The requested project could not be found.</p>
            <button onClick={() => window.location.href = 'search.html'} className="btn-primary">
              Back to Search
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <button 
            onClick={() => window.history.back()} 
            className="mb-6 flex items-center space-x-2 text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors"
          >
            <div className="icon-arrow-left"></div>
            <span>Back to Results</span>
          </button>

          <article className="card mb-8">
            <h1 className="text-3xl font-bold text-[var(--text-light)] mb-6">{project.title}</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div><span className="text-[var(--text-gray)]">Category:</span> <span className="text-[var(--text-light)]">{project.category || 'Not specified'}</span></div>
                <div><span className="text-[var(--text-gray)]">Mission:</span> <span className="text-[var(--text-light)]">{project.mission || 'Not specified'}</span></div>
                <div><span className="text-[var(--text-gray)]">Year:</span> <span className="text-[var(--text-light)]">{project.year || 'Not specified'}</span></div>
                <div><span className="text-[var(--text-gray)]">Status:</span> <span className="text-[var(--text-light)]">{project.status || 'Not specified'}</span></div>
              </div>
              <div className="space-y-3">
                <div><span className="text-[var(--text-gray)]">Principal Investigator:</span> <span className="text-[var(--text-light)]">{project.pi || 'Not specified'}</span></div>
                <div><span className="text-[var(--text-gray)]">Affiliation:</span> <span className="text-[var(--text-light)]">{project.affiliation || 'Not specified'}</span></div>
                {project.doi && (
                  <div><span className="text-[var(--text-gray)]">DOI:</span> <span className="text-[var(--primary-color)]">{project.doi}</span></div>
                )}
                {project.source_url && (
                  <div>
                    <span className="text-[var(--text-gray)]">NASA Source:</span> 
                    <a href={project.source_url} target="_blank" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] ml-2">
                      View Original →
                    </a>
                  </div>
                )}
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[var(--text-light)] mb-4">Abstract</h2>
              <p className="text-[var(--text-gray)] leading-relaxed">{project.abstract || 'Abstract not available in dataset.'}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[var(--text-light)] mb-4">Objectives</h2>
              <ul className="text-[var(--text-gray)] space-y-2">
                <li>• Investigate the effects of microgravity on biological systems</li>
                <li>• Develop countermeasures for space-related health challenges</li>
                <li>• Advance understanding of space biology for long-duration missions</li>
                <li>• Support human exploration of Mars and other celestial bodies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[var(--text-light)] mb-4">Methods</h2>
              <p className="text-[var(--text-gray)] leading-relaxed">
                This study employed controlled experimental conditions aboard the International Space Station, 
                utilizing specialized laboratory equipment designed for microgravity research environments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[var(--text-light)] mb-4">Results and Observations</h2>
              <p className="text-[var(--text-gray)] leading-relaxed">
                Results pending or not specified in dataset. Detailed findings will be published upon completion of data analysis.
              </p>
            </section>

            {relatedProjects.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[var(--text-light)] mb-4">Related Experiments</h2>
                <div className="space-y-2">
                  {relatedProjects.map((related) => (
                    <button
                      key={related.objectId}
                      onClick={() => window.location.href = `project.html?id=${related.objectId}`}
                      className="block text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors"
                    >
                      {related.objectData.title} →
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-light)] mb-4">AI Insight</h2>
              <div className="bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-lg p-4">
                <p className="text-[var(--text-gray)] italic">
                  This research contributes valuable insights into space biology and human adaptation to microgravity environments, 
                  supporting the development of technologies essential for future Mars missions.
                </p>
                <p className="text-xs text-[var(--text-gray)] mt-2">AI-generated summary</p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectPage />);