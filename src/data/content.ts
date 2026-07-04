import { ServiceItem, CreativeDivision, ArtItem, TimelineEvent, ValueItem, FAQItem } from '../types';

import heroArtworkGold from '../assets/images/hero_artwork_gold_1783113004311.jpg';
import kenziyaAfrikaArt from '../assets/images/kenziya_afrika_art_1783113017862.jpg';
import visualArtImg from '../assets/images/visualart.jpg';
import creativeImg from '../assets/images/creative.jpg';
import artistImg from '../assets/images/artist.jpg';
import exhibitionImg from '../assets/images/exhit.jpg';
import illImg from '../assets/images/ill.jpg';
import monolithSculpture from '../assets/images/monolith_sculpture_1783113030596.jpg';
import techLabGenerative from '../assets/images/tech_lab_generative_1783113045653.jpg';
import organicTextileTapestry from '../assets/images/organic_textile_tapestry_1783113401864.jpg';
import kineticWaterSculpture from '../assets/images/kinetic_water_sculpture_1783113413527.jpg';
import luxuryGallerySanctuary from '../assets/images/luxury_gallery_sanctuary_1783113425312.jpg';
import artistResidencyStudio from '../assets/images/artist_residency_studio_1783113436722.jpg';
import goldArtMonographBook from '../assets/images/gold_art_monograph_book_1783113448333.jpg';
import fineArtPaintingStudio from '../assets/images/fine_art_painting_studio_1783113458918.jpg';
import publicCivicArtMonument from '../assets/images/public_civic_art_monument_1783113470806.jpg';
import museumExhibitionHall from '../assets/images/museum_exhibition_hall_1783113481281.jpg';

export const BRAND = {
  name: 'Lunar Gold Art',
  tagline: 'Clustering Illusions. Inspiring Development.',
  logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><defs><linearGradient id="g" x1="50" y1="50" x2="450" y2="350" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="%23FFF2C6"/><stop offset="50%" stop-color="%23E2BE6A"/><stop offset="100%" stop-color="%238A641A"/></linearGradient></defs><path d="M 300,72 C 180,65 95,120 90,210 C 85,300 160,375 285,372 C 345,370 385,345 405,310 C 418,285 410,255 385,240 C 350,220 290,225 240,250 C 180,280 135,320 120,335" stroke="url(%23g)" stroke-width="3"/><path d="M 285,210 C 325,160 380,120 420,135 C 445,145 450,175 425,205 C 390,245 315,300 240,340 C 215,353 190,360 172,352 C 158,345 155,330 168,320 C 185,308 215,310 245,322 C 290,340 350,365 410,380 C 435,386 455,382 460,370 C 465,358 448,350 430,352 C 370,360 310,335 265,315 C 320,278 385,225 415,188 C 430,170 430,152 415,145 C 385,132 338,168 298,215 Z" fill="url(%23g)"/></svg>',
  email: 'contact@lunargoldart.com',
  phone: '+1 (800) 586-2787',
  locations: [
    { city: 'Lagos', detail: 'Victoria Island Creative Hub', country: 'Nigeria' },
    { city: 'London', detail: 'Mayfair Cultural Exchange', country: 'United Kingdom' },
    { city: 'Paris', detail: 'Le Marais Innovation Atelier', country: 'France' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    vimeo: 'https://vimeo.com',
  },
};

export const STATS = [
  { value: '10+', label: 'Creative Disciplines', subtext: 'Multidisciplinary Mastery' },
  { value: '350+', label: 'Artists Nurtured', subtext: 'Across Global Ecosystems' },
  { value: '24+', label: 'Global Exhibitions', subtext: 'In International Galleries' },
  { value: '100%', label: 'Independent Purpose', subtext: 'Zero Unnecessary Gatekeeping' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'visual-arts',
    title: 'Visual Arts',
    category: 'Fine Art & Expression',
    tagline: 'Sculpting contemporary narratives through masterwork paintings, sculptures, and mixed media.',
    description: 'Our visual arts division curates and commissions extraordinary works of art that bridge heritage and futuristic aesthetics. We collaborate with master painters, sculptors, and digital artists to bring vision into tangible reality.',
    deliverables: ['Custom Canvas Commissions', 'Contemporary Sculptures', 'Mixed Media Installations', 'Fine Art Acquisitions'],
    image: visualArtImg,
    iconName: 'Palette',
    featured: true,
  },
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    category: 'Strategic Curation',
    tagline: 'Architecting cohesive visual identities, artistic themes, and high-concept physical environments.',
    description: 'We orchestrate full-scale creative direction for luxury institutions, cultural exhibitions, and global brands seeking authentic artistic resonance and flawless aesthetic execution.',
    deliverables: ['Brand Visual Identity', 'Exhibition Concepting', 'Editorial & Spatial Direction', 'Artistic Curation Frameworks'],
    image: creativeImg,
    iconName: 'Compass',
    featured: true,
  },
  {
    id: 'art-installations',
    title: 'Art Installations',
    category: 'Spatial Experiences',
    tagline: 'Immersive, monumental spatial installations that provoke thought and redefine architectural spaces.',
    description: 'Transforming public plazas, gallery halls, and corporate headquarters into sensory artistic environments. Our installations combine organic elements, dynamic lighting, and spatial audio.',
    deliverables: ['Site-Specific Sculptures', 'Light & Kinetic Installations', 'Acoustic Spatial Art', 'Interactive Public Works'],
    image: illImg,
    iconName: 'Boxes',
    featured: true,
  },
  {
    id: 'photography',
    title: 'Photography & Media',
    category: 'Visual Documentation',
    tagline: 'Documenting human heritage, African portraiture, and architectural brilliance through high art optics.',
    description: 'Capturing moments of cultural transformation with museum-grade photographic craft. From medium-format editorial shoots to documentary photojournalism that honors identity.',
    deliverables: ['High-Art Editorial Photography', 'Cultural Documentary Series', 'Architectural Capture', 'Limited Edition Fine Art Prints'],
    image: kenziyaAfrikaArt,
    iconName: 'Camera',
    featured: true,
  },
  {
    id: 'creative-consultancy',
    title: 'Creative Consultancy',
    category: 'Strategic Advisory',
    tagline: 'Guiding institutions, collectors, and municipalities through art strategy and cultural stewardship.',
    description: 'Strategic advisory services for art collectors, real estate developers, and municipal cultural boards seeking to incorporate meaningful art initiatives and sustainable cultural investments.',
    deliverables: ['Collection Curation Strategy', 'Cultural Impact Assessment', 'Art Market Valuation Advisory', 'Urban Creative Planning'],
    image: luxuryGallerySanctuary,
    iconName: 'Sparkles',
    featured: false,
  },
  {
    id: 'artist-development',
    title: 'Artist Development',
    category: 'Talent Empowerment',
    tagline: 'Breaking barriers and providing emerging creators with masterclass mentorship and global platforms.',
    description: 'Rooted in our founding mission, we eliminate traditional gatekeeping by offering artist residency programs, business literacy for creators, international gallery placement, and production grants.',
    deliverables: ['Residency Fellowships', 'Portfolio Optimization', 'Global Gallery Placement', 'Grant & Resource Allocations'],
    image: artistImg,
    iconName: 'UserCheck',
    featured: true,
  },
  {
    id: 'brand-storytelling',
    title: 'Brand Storytelling',
    category: 'Narrative Craft',
    tagline: 'Weaving poetic visual narratives that articulate core purpose and leave an indelible human imprint.',
    description: 'Translating institutional values into cinematic short films, art monographs, and narrative experiences that connect brands with audiences on a deep cultural level.',
    deliverables: ['Cinematic Brand Films', 'Publishing & Art Books', 'Monograph Design', 'Documentary Featurettes'],
    image: goldArtMonographBook,
    iconName: 'BookOpen',
    featured: false,
  },
  {
    id: 'public-art',
    title: 'Public Art',
    category: 'Civic Transformation',
    tagline: 'Enriching urban landscapes with monumental murals, outdoor sculptures, and civic landmarks.',
    description: 'Partnering with city planners and community leaders to install public art that honors local histories, celebrates diversity, and invigorates public spaces.',
    deliverables: ['Civic Murals & Monuments', 'Urban Sculpture Parks', 'Community Art Hubs', 'Interactive City Landmarks'],
    image: publicCivicArtMonument,
    iconName: 'Landmark',
    featured: false,
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions & Experiences',
    category: 'Curatorial Arts',
    tagline: 'Designing immersive museum exhibitions, pop-up gallery shows, and hybrid digital showcases.',
    description: 'From physical gallery curation in Paris and London to interactive online showcases, we craft exhibition spaces that engage the intellect and spark emotional wonder.',
    deliverables: ['Museum-Grade Curation', 'Spatial Lighting & Layout', 'Exhibition Catalogs', 'Virtual Hybrid Showrooms'],
    image: exhibitionImg,
    iconName: 'Frame',
    featured: true,
  },
  {
    id: 'community-projects',
    title: 'Community Projects',
    category: 'Social Impact',
    tagline: 'Deploying creative resources to drive sustainable development, education, and social cohesion.',
    description: 'Art as a catalyst for social development. We run grassroots workshops, youth creative incubators, and cultural preservation projects in underserved regions.',
    deliverables: ['Youth Art Mentorships', 'Cultural Heritage Mapping', 'Grassroots Creative Centers', 'Community Micro-Grants'],
    image: organicTextileTapestry,
    iconName: 'Users',
    featured: false,
  },
];

export const CREATIVE_FAMILY: CreativeDivision[] = [
  {
    id: 'kenziya-afrika',
    name: 'Kenziya Afrika',
    tagline: 'Celebrating Extraordinary African Artistic Excellence',
    description: 'Kenziya Afrika is a flagship initiative recognized through kenziyaafrika.com for its exceptional celebration of African creativity, contemporary fine art, and cultural heritage. It serves as a premier showcase and gallery platform elevating visionary African artists to the global stage while preserving authentic cultural identities.',
    website: 'https://kenziyaafrika.com',
    image: visualArtImg,
    category: 'Flagship Cultural Initiative',
    highlights: [
      'Dedicated African Fine Art Curation',
      'Contemporary African Masters Showcase',
      'Pan-African Cultural Archives',
      'International Collector Network'
    ],
    featured: true,
  },
  {
    id: 'lunar-tech-labs',
    name: 'Lunar Tech Labs',
    tagline: 'Creative Engineering & Digital Platforms',
    description: 'The technological arm of Lunar Gold Art. Tech Labs develops carefully designed digital platforms, interactive online exhibitions, creative software, and artist marketplaces that extend artistic expression into the digital realm without replacing human craftsmanship.',
    image: techLabGenerative,
    category: 'Innovation & ArtTech',
    highlights: [
      'Interactive Exhibition Engine',
      'Digital Artist Portfolios & Marketplaces',
      'Spatial 3D Gallery Experiences',
      'Generative & Interactive Installations'
    ],
    featured: true,
  },
  {
    id: 'gallery-exhibitions',
    name: 'Gallery Exhibitions',
    tagline: 'Physical Museums & Gallery Spaces',
    description: 'Managing bespoke gallery spaces and exhibition pavilions globally. Creating serene, minimalist environments where art can be experienced with reverence and intimacy.',
    image: exhibitionImg,
    category: 'Exhibition Network',
    highlights: [
      'International Gallery Pavilion Network',
      'Acoustic & Spatial Illumination Design',
      'Private Collector Salons',
      'Biennale Participations'
    ],
    featured: false,
  },
  {
    id: 'horizon-residency',
    name: 'Horizon Residency',
    tagline: 'Global Artist Incubator & Fellowships',
    description: 'An international residency initiative providing selected artists with spacious studio retreats, stipend grants, material support, and direct mentorship from industry visionaries.',
    image: artistImg,
    category: 'Artist Incubator',
    highlights: [
      'Fully Funded Studio Residencies',
      'Curator-in-Residence Exchange',
      'Material & Tool Stipends',
      'End-of-Residency Solo Exhibitions'
    ],
    featured: false,
  },
  {
    id: 'gold-edition-press',
    name: 'Gold Edition Press',
    tagline: 'Luxury Art Publishing & Monograph Documentation',
    description: 'Publishing limited-edition art books, collector monographs, and cultural anthologies crafted with fine paper, foil stamping, and archival bindings.',
    image: goldArtMonographBook,
    category: 'Publishing House',
    highlights: [
      'Archival Monograph Production',
      'Bespoke Collector Books',
      'Cultural Essays & Criticism',
      'Global Library Distribution'
    ],
    featured: false,
  },
];

export const ARTWORKS: ArtItem[] = [
  {
    id: 'art-1',
    title: 'Cosmic Embrace (Creative Direction)',
    artist: 'Lunar Gold Studio',
    category: 'Creative Direction & Fine Art',
    year: '2026',
    medium: 'Acrylic and Pigment on Canvas',
    image: creativeImg,
    description: 'A sublime cosmic embrace rendered in indigo starlight and rich earthy tones. Serving as a pinnacle piece for Lunar Gold Art creative direction.',
    dimensions: '200 x 140 cm',
    location: 'Lunar Gold Gallery, Lagos',
  },
  {
    id: 'art-2',
    title: 'Monolith of Illusions',
    artist: 'Lunar Gold Studio',
    category: 'Fine Art & Expression',
    year: '2026',
    medium: 'Pigment and Acrylic on Textured Canvas',
    image: illImg,
    description: 'A contemplative fine art composition capturing a seated figure amidst an atmospheric aura of copper and bronze pigment splatters against a light blue gradient backdrop. Captures the theme "Clustering Illusions".',
    dimensions: '180 x 140 cm',
    location: 'Lunar Gold Gallery, London',
  },
  {
    id: 'art-3',
    title: 'Ancestral Resynchronization',
    artist: 'Amafina Odu',
    category: 'Fine Art & Expression',
    year: '2025',
    medium: 'Acrylic and Oil on Canvas with Gold Foil Details',
    image: visualArtImg,
    description: 'A striking fine art composition celebrating African womanhood, cultural heritage, and vibrant color harmonies.',
    dimensions: '180 x 135 cm',
    location: 'Private Collection, Paris',
  },
  {
    id: 'art-4',
    title: 'Quantum Horizon',
    artist: 'Lunar Tech Labs',
    category: 'Interactive Digital Canvas',
    year: '2026',
    medium: 'Real-time Generative Algorithmic Projection',
    image: techLabGenerative,
    description: 'An installation that transforms ambient visitor motion into evolving golden geometric constellations on liquid crystal displays.',
    dimensions: 'Variable Dimensions',
    location: 'International Tech & Art Pavilion',
  },
  {
    id: 'art-5',
    title: 'Earthy Resonance No. 4',
    artist: 'Kenziya Afrika Fellow',
    category: 'Organic Pigments & Textile',
    year: '2024',
    medium: 'Hand-woven Silk, Terracotta Dust, Deep Gold Thread',
    image: organicTextileTapestry,
    description: 'A tactile tapestry honoring West African textile traditions, celebrating community unity and sustainable craftsmanship.',
    dimensions: '300 x 200 cm',
    location: 'Lunar Gold Gallery, Lagos',
  },
  {
    id: 'art-6',
    title: 'Spheres of Continuity',
    artist: 'Public Art Division',
    category: 'Site-Specific Installation',
    year: '2025',
    medium: 'Stainless Steel, Gold Plated Accents, Water Mirror',
    image: kineticWaterSculpture,
    description: 'A water-borne kinetic sculpture installation designed for civic waterfronts to foster reflection and cultural pride.',
    dimensions: '600 cm Diameter',
    location: 'Civic Waterfront Park',
  },
  {
    id: 'art-7',
    title: 'Collective Journey & Lorry Loading (Artist Development)',
    artist: 'Horizon Residency Masters',
    category: 'Artist Development & Fine Art',
    year: '2026',
    medium: 'Impasto Oil and Pigment on Canvas',
    image: artistImg,
    description: 'An expressive impasto painting depicting community collaboration, movement, and the loading of a yellow transport lorry. Symbolizing collective momentum and artist empowerment.',
    dimensions: '220 x 160 cm',
    location: 'Lunar Gold Gallery, Lagos',
  },
  {
    id: 'art-8',
    title: 'Market Canopy Overhead (Exhibition Showcase)',
    artist: 'Kenziya Afrika Masters',
    category: 'Exhibitions & Cultural Curation',
    year: '2026',
    medium: 'Oil and Acrylic on Canvas',
    image: exhibitionImg,
    description: 'A striking bird\'s-eye view painting capturing the lively canopy of colorful triangular market umbrellas in an open-air exhibition. Celebrating human connection and vibrant cultural trade.',
    dimensions: '200 x 200 cm',
    location: 'Lunar Gold Exhibition Pavilion, London',
  },
];

export const VALUES: ValueItem[] = [
  {
    title: 'Creativity',
    description: 'The fundamental force driving all human evolution. We treat imagination as an infinite resource that unlocks new dimensions of possibility.',
    iconName: 'Sparkles',
  },
  {
    title: 'Excellence',
    description: 'Uncompromising precision in execution, curatorial standards, materials, and presentation across all disciplines.',
    iconName: 'Award',
  },
  {
    title: 'Integrity',
    description: 'Honoring our artistic promises, protecting creative rights, and acting with total transparency and ethical stewardship.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge technology as a tool to amplify artistic expression, democratize access, and bridge physical and digital realms.',
    iconName: 'Cpu',
  },
  {
    title: 'Discipline',
    description: 'Rigorous craft and methodical execution behind every project, turning abstract conceptual brilliance into enduring physical reality.',
    iconName: 'Compass',
  },
  {
    title: 'Collaboration',
    description: 'Uniting artists, institutions, technologists, and global communities to build synergies far greater than individual efforts.',
    iconName: 'Share2',
  },
  {
    title: 'Cultural Appreciation',
    description: 'Preserving, respecting, and amplifying rich cultural heritage—specifically honoring African creativity and global artistic traditions.',
    iconName: 'Globe',
  },
  {
    title: 'Sustainable Development',
    description: 'Creating economic viability and lasting infrastructure for artists so that creativity becomes a self-sustaining engine of social progress.',
    iconName: 'Leaf',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2020',
    title: 'The Catalyst',
    subtitle: 'Overcoming Gatekeeping',
    description: 'Lunar Gold Art was born out of a direct response to systemic barriers faced by visionary creators. Founded with a vision to build a non-restrictive platform where talent thrives without artificial gatekeeping.',
    category: 'Founding',
  },
  {
    year: '2022',
    title: 'Kenziya Afrika Launch',
    subtitle: 'Celebrating African Artistry',
    description: 'Establishment of Kenziya Afrika (kenziyaafrika.com) as a premier flagship division celebrating African fine art, contemporary sculpture, and cultural storytelling on the international stage.',
    category: 'Ecosystem Expansion',
  },
  {
    year: '2023',
    title: 'Lunar Tech Labs Inception',
    subtitle: 'Bridging Art & Technology',
    description: 'Pioneered custom digital curation tools, interactive gallery environments, and algorithmic art platforms designed to enhance human artistic expression rather than substitute it.',
    category: 'Innovation',
  },
  {
    year: '2024',
    title: 'Global Gallery Network',
    subtitle: 'Lagos — London — Paris',
    description: 'Established permanent exhibition partnerships and physical gallery spaces across major global art capitals, connecting regional creators directly with global collectors.',
    category: 'Global Presence',
  },
  {
    year: '2025',
    title: 'Horizon Residency Fellowship',
    subtitle: 'Sustainable Artist Infrastructure',
    description: 'Allocated comprehensive grants and fully equipped studio spaces to over 150 emerging artists, launching their works into world-renowned biennales and private collections.',
    category: 'Impact',
  },
  {
    year: '2026+',
    title: 'The Future Paradigm',
    subtitle: 'Clustering Illusions. Inspiring Development.',
    description: 'Expanding public art initiatives, civic architecture projects, and digital cultural archives to ensure creativity remains the premier catalyst for sustainable global development.',
    category: 'Vision Forward',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does Lunar Gold Art support independent artists?',
    answer: 'Lunar Gold Art provides artists with platform visibility, residency grants, production resources, gallery curation, and direct connections to global collectors—removing traditional gatekeepers and commission exploitation.',
    category: 'Artists',
  },
  {
    question: 'What is the relationship between Lunar Gold Art and Kenziya Afrika?',
    answer: 'Kenziya Afrika (kenziyaafrika.com) is a core division within the Lunar Gold Art family. It operates with its own distinct identity focused specifically on African fine art, culture, and artist showcases while drawing strength from the overarching Lunar Gold Art ecosystem.',
    category: 'Ecosystem',
  },
  {
    question: 'How does Lunar Gold Art integrate technology with visual arts?',
    answer: 'Technology is viewed as a supportive instrument that amplifies human creativity. Through Lunar Tech Labs, we design digital gallery platforms, interactive spatial installations, virtual exhibitions, and digital archives that expand access without compromising artisanal craft.',
    category: 'Innovation',
  },
  {
    question: 'Can private collectors or institutions commission custom artworks?',
    answer: 'Yes. We handle private and corporate art commissions, monumental public art installations, site-specific sculptures, and full-scale spatial creative direction for hotels, museums, civic centers, and private estates.',
    category: 'Commissions',
  },
  {
    question: 'How can our organization partner with Lunar Gold Art for community impact?',
    answer: 'We collaborate with municipal boards, cultural foundations, educational institutions, and corporate CSR programs to deliver high-impact public art, youth mentorships, and sustainable cultural development programs.',
    category: 'Partnerships',
  },
];
