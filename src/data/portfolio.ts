import avatar from '../images/heroimg.jpg'
import spbank from '../images/spbank.png'
import spfeemager from '../images/spfeemanger.png'
import spvideo from '../images/spvideo.png'
import spweather from '../images/spweather.png'
export const personalInfo = {
  name: "Zohaib Khan",
  title: "Web Developer + Digital Craftsman",
  tagline: "Crafting Digital Experiences with Code & Creativity",
  location: "Mardan, Khyber Pakhtunkhwa",
  email: "zohaibkhanwebdevolper@gmail.com",
  phone: "+92 316 5657 513",
  social: {
    github: "https://github.com/zohaibkhan",
    linkedin: "https://linkedin.com/in/zohaibkhan",
    whatsapp: "https://wa.me/923165657513"
  },
  avatar,
};

export const skills = [
  { name: "React", level: 95, icon: "⚛️", description: "Building dynamic user interfaces with hooks and modern patterns" },
  { name: "JavaScript", level: 90, icon: "🔷", description: "Type-safe JavaScript development for scalable applications" },
  { name: "Tailwind CSS", level: 92, icon: "🎨", description: "Utility-first CSS framework for rapid UI development" },
  { name: "Node.js", level: 85, icon: "🟢", description: "Server-side JavaScript runtime for full-stack development" },
  { name: "Figma", level: 88, icon: "🎯", description: "UI/UX design and prototyping for seamless user experiences" },
  { name: "Git", level: 90, icon: "📦", description: "Version control and collaborative development workflows" },
  { name: "VSCode", level: 95, icon: "📝", description: "Professional development environment optimization" },
  { name: "Responsive Design", level: 93, icon: "📱", description: "Mobile-first design approaches for all devices" }
];

export const projects = [
  {
    id: 2,
    title: "ViraBank",
    description: "Modern banking dashboard with real-time analytics",
    longDescription: "A comprehensive banking application featuring real-time transaction monitoring, advanced analytics, and secure user authentication. Built with React and modern design principles.",
    image: spbank,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "web-app",
    liveUrl: "https://khan-1291.github.io/ViraBank/",
    githubUrl: "https://github.com/Khan-1291/ViraBank",
    featured: true
  },
   {
    id: 3,
    title: "Student Fee Manger",
    description: "Responsive Student fee manger with perfect functionality",
    longDescription: "A sophisticated student fee manger, open source project. You can add students, manage their fees. you can track Total collection and total dues also.. cheack out the live demo. custamization avalable.",
    image: spfeemager+ "?auto=compress&cs=tinysrgb&w=200",
    technologies: ["React", "CSS Grid", "Intersection Observer"],
    category: "web-app",
    liveUrl: "https://khan-1291.github.io/studentfeemanger/",
    githubUrl: "https://github.com/Khan-1291/studentfeemanger",
    featured: false
  },
  {
    id: 7,
    title: "weatheCast",
    description: "Get instint weather Data from our weather cast",
    longDescription: "A powerful  a beautiful, responsive interface which will give you  Current , hourly and weekly forcast whereever you are",
    image:  spweather+"?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "CSS3", "HTML5"],
    category: "tool",
    liveUrl: "https://khan-1291.github.io/weatherCastW/",
    githubUrl: "https://github.com/Khan-1291/weatherCastW",
    featured: false
  },
  {
    id: 6,
    title: "Custom Video Player",
    description: "Feature-rich video player with custom controls",
    longDescription: "A custom-built video player with advanced controls, playlist support, subtitle handling, and responsive design for optimal viewing experience.",
    image:  spvideo+"?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Video.js", "CSS3"],
    category: "web-app",
    liveUrl: "https://khan-1291.github.io/videoPlyer/",
    githubUrl: "https://github.com/Khan-1291/videoPlyer",
    featured: true
  },
  {
    id: 4,
    title: "Number Guessing Game",
    description: "Interactive game with difficulty levels and scoring",
    longDescription: "An engaging number guessing game featuring multiple difficulty levels, scoring system, leaderboards, and smooth animations for an entertaining user experience.",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "CSS3", "HTML5"],
    category: "game",
    liveUrl: "https://khan-1291.github.io/GussNumberGame/INDEX.HTML",
    githubUrl: "https://khan-1291.github.io/GussNumberGame/INDEX.HTML",
    featured: false
  }

];

export const testimonials = [
  {
    id: 1,
    name: "Zainab Khan",
    role: "Telecom ",
    content: "Zohaib delivered exceptional work on our dashboard redesign. His attention to detail and user experience focus exceeded our expectations.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Startup Founder",
    content: "Working with Zohaib was fantastic. He transformed our ideas into a beautiful, functional website that our users love.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Lisa Chen",
    role: "Design Director",
    content: "Zohaib combines technical expertise with excellent design sense. His portfolio speaks for itself—highly recommended!",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5
  }
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web-app', name: 'Web Applications' },
  { id: 'tool', name: 'Tools' },
  { id: 'game', name: 'Games' },
  
];