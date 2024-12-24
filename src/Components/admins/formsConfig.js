// CATEGORY: MARTIAL AND PHYSICAL ART

// 1. Martial and Physical Arts Instructors

// Name: Full name of the martial or physical arts instructor.
// Specialization: The specific discipline or style they teach (e.g., karate, yoga, dance).
// Biography: A brief description of the instructor's background and teaching experience.
// Training Programs: Details of training programs or classes offered.
// Certifications: Any relevant certifications or qualifications.
// Location: Geographic location coordinates for the instructor's training facility or studio.
// Contact Information: Contact details for the instructor.

// 2. Martial Arts Schools and Studios

// Name: Name of the martial arts school or studio.
// Discipline: The type of martial or physical arts taught at the school (e.g., taekwondo, Pilates).
// Location: Geographic location coordinates for the school or studio.
// Programs: Description of training programs, classes, or workshops offered.
// Instructor Information: Names and profiles of instructors at the school.
// Contact Information: Contact details for the school or studio.

// CATEGORY: ENVIRONMENTAL AND LAND ART

// 1. Environmental and Land Artists

// Name: Full name of the environmental or land artist.
// Artistic Focus: Description of the artist's primary themes or messages in their work.
// Biography: A brief description of the artist's background and career.
// Notable Works: List of significant environmental or land art creations.
// Exhibitions: Record of exhibitions or shows where their art has been displayed.
// Location: Geographic coordinates for the artist's base or studio.
// Contact Information: Contact details for the artist.

// 2. Environmental and Land Art Installations

// Title: Title of the environmental or land art installation.
// Location: Geographic coordinates for the installation's site in a natural environment.
// Creation Date: The date the installation was created.
// Artist: The name of the artist who created the installation.
// Description: A brief description of the installation, its concept, and materials used.
// Exhibition History: Information about where and when the installation has been exhibited.

// CATEGORY: EXPERIMENTAL AND CONCEPTUAL ART

// 1. Experimental and Conceptual Artists

// Name: Full name of the experimental or conceptual artist.
// Artistic Focus: Description of the artist's primary themes or concepts in their work.
// Biography: A brief description of the artist's background and career.
// Notable Works: List of significant experimental or conceptual art pieces.
// Exhibitions: Record of exhibitions or shows where their art has been displayed.
// Location: Geographic coordinates for the artist's base or studio.
// Contact Information: Contact details for the artist.

// 2. Experimental and Conceptual Art Installations

// Title: Title of the experimental or conceptual art installation.
// Location: Geographic coordinates for the installation's site.
// Creation Date: The date the installation was created.
// Artist: The name of the artist who created the installation.
// Concept: A brief description of the installation's concept and materials used.
// Exhibition History: Information about where and when the installation has been exhibited.

// CATEGORY: HERITAGE AND TOURISM

// 1. Heritage Sites and Monuments

// Site Name: Name of the heritage site or monument.
// Location: Geographic coordinates for the site's location.
// Description: Detailed information about the site, its history, and significance.
// Cultural Significance: Insights into the cultural and historical importance of the site.
// Visiting Information: Details for tourists, including entry fees and hours of operation.
// Contact Information: Contact details for site management or preservation organizations.

// 2. Tourism Professionals

// Name: Full name of the tourism professional.
// Occupation: The specific role in the tourism industry (e.g., tour guide, curator).
// Biography: A brief description of the professional's background and career.
// Expertise: Areas of expertise or knowledge related to heritage and tourism.
// Location: Geographic coordinates for the professional's workplace or office.
// Contact Information: Contact details for the tourism professional.

export const formsConfig = {
  Crafts: {
    Artists: [
      { label: "Name", type: "text", required: true },
      { label: "Age", type: "number", required: false },
      { label: "Genre", type: "text", required: true },
    ],
    Films: [
      { label: "Title", type: "text", required: true },
      { label: "Director", type: "text", required: true },
      { label: "Release Year", type: "number", required: false },
    ],
    Animals: [
      { label: "Species", type: "text", required: true },
      { label: "Habitat", type: "text", required: false },
      { label: "Population", type: "number", required: true },
    ],
    // Add other sections here...
  },
  "Digital and Multimedia": {
    "Digital and Multimedia Artists": [
      { label: "Full Name", type: "text", required: true },
      { label: "Specialization", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Portfolio", type: "textarea", required: false },
      { label: "Awards and Recognitions", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Digital and Multimedia Projects": [
      { label: "Title", type: "text", required: true },
      { label: "Specialization", type: "text", required: true },
      { label: "Year Created", type: "number", required: true },
      { label: "Artist", type: "text", required: true },
      { label: "Description", type: "textarea", required: false },
      { label: "Location", type: "text", required: false },
    ],
    // Add other sections here...
  },
  "Culinary Arts": {
    "Culinary Professionals": [
      { label: "Full Name", type: "text", required: true },
      { label: "Specialization", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Signature Dishes", type: "textarea", required: false },
      { label: "Awards and Recognitions", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Restaurants and Eateries": [
      { label: "Name", type: "text", required: true },
      { label: "Cuisine Type", type: "text", required: true },
      { label: "Location", type: "text", required: true },
      { label: "Menu", type: "textarea", required: false },
      { label: "Customer Reviews", type: "textarea", required: false },
      { label: "Contact Information", type: "text", required: true },
    ],
    // Add other sections here...
  },
  "Street and Graffiti Art": {
    "Street and Graffiti Artists": [
      { label: "Name", type: "text", required: true },
      { label: "Specialization", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Portfolio", type: "textarea", required: false },
      { label: "Recognition", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Street Art and Graffiti Works": [
      { label: "Title", type: "text", required: true },
      { label: "Type", type: "text", required: true },
      { label: "Year Created", type: "number", required: true },
      { label: "Artist", type: "text", required: true },
      { label: "Description", type: "textarea", required: false },
      { label: "Location", type: "text", required: false },
    ],
    // Add other sections here...
  },
  "Martial and Physical Arts": {
    "Martial and Physical Arts Instructors": [
      { label: "Name", type: "text", required: true },
      { label: "Specialization", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Training Programs", type: "textarea", required: false },
      { label: "Certifications", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Martial Arts Schools and Studios": [
      { label: "Name", type: "text", required: true },
      { label: "Discipline", type: "text", required: true },
      { label: "Location", type: "text", required: true },
      { label: "Programs", type: "textarea", required: false },
      { label: "Instructor Information", type: "textarea", required: false },
      { label: "Contact Information", type: "text", required: true },
    ],
    // Add other sections here...
  },
  "Environmental and Land Art": {
    "Environmental and Land Artists": [
      { label: "Name", type: "text", required: true },
      { label: "Artistic Focus", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Notable Works", type: "textarea", required: false },
      { label: "Exhibitions", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Environmental and Land Art Installations": [
      { label: "Title", type: "text", required: true },
      { label: "Location", type: "text", required: true },
      { label: "Creation Date", type: "text", required: true },
      { label: "Artist", type: "text", required: true },
      { label: "Description", type: "textarea", required: false },
      { label: "Exhibition History", type: "textarea", required: false },
    ],
    // Add other sections here...
  },
  "Experimental and Conceptual Art": {
    "Experimental and Conceptual Artists": [
      { label: "Name", type: "text", required: true },
      { label: "Artistic Focus", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Notable Works", type: "textarea", required: false },
      { label: "Exhibitions", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Experimental and Conceptual Art Installations": [
      { label: "Title", type: "text", required: true },
      { label: "Location", type: "text", required: true },
      { label: "Creation Date", type: "text", required: true },
      { label: "Artist", type: "text", required: true },
      { label: "Concept", type: "textarea", required: false },
      { label: "Exhibition History", type: "textarea", required: false },
    ],
    // Add other sections here...
  },
  "Heritage and Tourism": {
    "Heritage Sites and Monuments": [
      { label: "Site Name", type: "text", required: true },
      { label: "Location", type: "text", required: true },
      { label: "Description", type: "textarea", required: false },
      { label: "Cultural Significance", type: "textarea", required: false },
      { label: "Visiting Information", type: "textarea", required: false },
      { label: "Contact Information", type: "text", required: true },
    ],
    "Tourism Professionals": [
      { label: "Name", type: "text", required: true },
      { label: "Occupation", type: "text", required: true },
      { label: "Biography", type: "textarea", required: false },
      { label: "Expertise", type: "textarea", required: false },
      { label: "Location", type: "text", required: true },
      { label: "Contact Information", type: "text", required: true },
    ],
    // Add other sections here...
  },
};
