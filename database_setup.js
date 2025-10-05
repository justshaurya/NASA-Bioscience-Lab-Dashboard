// NASA Bioscience Lab Database Setup
// Creates publications table with sample data

async function setupDatabase() {
  try {
    // Create sample publications to populate the database
    const samplePublications = [
      {
        title: 'Bone Density Changes in Long-Duration Spaceflight',
        authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez'],
        year: 2024,
        category: 'Human Physiology',
        mission: 'ISS Expedition 70',
        pi: 'Dr. Sarah Chen',
        affiliation: 'NASA Johnson Space Center',
        abstract: 'Comprehensive study of bone mineral density changes during 6-month ISS missions.',
        doi: '10.1234/nasa.hp.2024.001',
        keywords: ['bone density', 'microgravity', 'astronaut health'],
        status: 'Completed'
      },
      {
        title: 'Arabidopsis Growth Patterns in Microgravity',
        authors: ['Dr. Emily Watson', 'Dr. James Park'],
        year: 2024,
        category: 'Plant Biology',
        mission: 'ISS Advanced Plant Habitat',
        pi: 'Dr. Emily Watson',
        affiliation: 'NASA Ames Research Center',
        abstract: 'Analysis of root and shoot development in Arabidopsis under microgravity.',
        doi: '10.1234/nasa.pb.2024.002',
        keywords: ['plant growth', 'microgravity', 'arabidopsis'],
        status: 'Ongoing'
      }
    ];

    // Insert sample data
    for (const pub of samplePublications) {
      await trickleCreateObject('publications', pub);
      console.log(`Created publication: ${pub.title}`);
    }

    console.log('Database setup complete!');
  } catch (error) {
    console.error('Database setup error:', error);
  }
}

// Run setup when called
if (typeof window !== 'undefined') {
  window.setupDatabase = setupDatabase;
}