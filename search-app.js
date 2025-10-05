function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filters, setFilters] = React.useState({
    category: '',
    yearFrom: '',
    yearTo: '',
    mission: ''
  });
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const categories = ['Human Physiology', 'Plant Biology', 'Microbiology', 'Radiation Biology', 'Animal Studies'];
  const missions = ['ISS Expedition', 'Artemis', 'Apollo', 'Shuttle', 'Advanced Plant Habitat'];

  const handleSearch = async () => {
    setLoading(true);
    
    try {
      const data = await trickleListObjects('publications', 100, true);
      let filteredResults = data.items;

      if (searchQuery) {
        filteredResults = filteredResults.filter(item => 
          item.objectData.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.objectData.authors?.some(author => 
            author.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }

      if (filters.category) {
        filteredResults = filteredResults.filter(item => 
          item.objectData.category === filters.category
        );
      }

      if (filters.yearFrom) {
        filteredResults = filteredResults.filter(item => 
          item.objectData.year >= parseInt(filters.yearFrom)
        );
      }

      if (filters.yearTo) {
        filteredResults = filteredResults.filter(item => 
          item.objectData.year <= parseInt(filters.yearTo)
        );
      }

      setResults(filteredResults.map(item => ({
        id: item.objectId,
        ...item.objectData
      })));
    } catch (error) {
      // Fallback to sample data
      const sampleResults = window.sampleData ? window.sampleData.recentStudies : [];
      setResults(sampleResults);
    }
    
    setLoading(false);
  };

  React.useEffect(() => {
    // Load initial results
    handleSearch();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Search & Explore
            </h1>
            <p className="text-lg text-[var(--text-gray)] max-w-2xl mx-auto">
              Search across 608+ NASA bioscience publications and experiments
            </p>
          </div>

          {/* Search Bar */}
          <div className="card mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword, title, author, or DOI..."
                  className="w-full px-4 py-3 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg text-[var(--text-light)] placeholder-[var(--text-gray)]"
                />
              </div>
              <button onClick={handleSearch} className="btn-primary">
                <div className="flex items-center space-x-2">
                  <div className="icon-search text-xl"></div>
                  <span>Search</span>
                </div>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="card mb-8">
            <h3 className="text-lg font-semibold text-[var(--text-light)] mb-4">Filters</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-[var(--text-gray)] mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg text-[var(--text-light)]"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-[var(--text-gray)] mb-2">Year From</label>
                <input
                  type="number"
                  value={filters.yearFrom}
                  onChange={(e) => setFilters({...filters, yearFrom: e.target.value})}
                  placeholder="2015"
                  className="w-full px-3 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg text-[var(--text-light)]"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[var(--text-gray)] mb-2">Year To</label>
                <input
                  type="number"
                  value={filters.yearTo}
                  onChange={(e) => setFilters({...filters, yearTo: e.target.value})}
                  placeholder="2025"
                  className="w-full px-3 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg text-[var(--text-light)]"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[var(--text-gray)] mb-2">Mission</label>
                <select
                  value={filters.mission}
                  onChange={(e) => setFilters({...filters, mission: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg text-[var(--text-light)]"
                >
                  <option value="">All Missions</option>
                  {missions.map(mission => (
                    <option key={mission} value={mission}>{mission}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <button onClick={handleSearch} className="btn-primary">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-light)]">
                Search Results ({results.length} found)
              </h3>
              {loading && (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[var(--primary-color)]"></div>
              )}
            </div>

            <div className="space-y-4">
              {results.map((item, index) => (
                <div 
                  key={item.id || index}
                  onClick={() => window.location.href = `project.html?id=${item.id}`}
                  className="p-4 bg-[var(--bg-dark)] rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-color)] cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-[var(--text-light)] font-medium hover:text-[var(--primary-color)] transition-colors">
                      {item.title}
                    </h4>
                    <span className="bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-2 py-1 rounded text-xs ml-2">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-[var(--text-gray)] text-sm mb-2">{item.authors}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-[var(--accent-color)]/20 text-[var(--accent-color)] px-2 py-1 rounded">
                      {item.category}
                    </span>
                    {item.mission && (
                      <span className="text-[var(--text-gray)]">
                        <div className="icon-rocket inline mr-1"></div>
                        {item.mission}
                      </span>
                    )}
                  </div>
                  {item.abstract && (
                    <p className="text-[var(--text-gray)] text-sm mt-2 line-clamp-2">
                      {item.abstract}
                    </p>
                  )}
                </div>
              ))}
              
              {results.length === 0 && !loading && (
                <div className="text-center py-8">
                  <div className="icon-search text-4xl text-[var(--text-gray)] mb-4"></div>
                  <p className="text-[var(--text-gray)]">No results found. Try adjusting your search terms or filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchPage />);
