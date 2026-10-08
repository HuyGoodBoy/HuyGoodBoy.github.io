// Portfolio of Bùi Gia Huy. Content based on buigiahuy.pdf.
const h = React.createElement;
const cvPath = document.body.dataset.cvPath || './buigiahuy.pdf';
const assetRoot = document.body.dataset.assetRoot || './assets';
const linkedin = 'https://www.linkedin.com/in/b%C3%B9i-gia-huy-3246b025b/';
const navigation = [
  ['welcome-section', 'Home'], ['about', 'About'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['skills', 'Skills'], ['education', 'Education'], ['contact', 'Contact']
];

const experience = [
  { company: 'Vinfast', role: 'AI Engineer (Fresher)', dates: 'Jul 2026 - Oct 2026', bullets: [
    'Developed an Edge-Cloud in-cabin voice assistant for driver intent detection and vehicle control.',
    'Trained and quantized on-device SLM/NLU models (INT8/INT4) for low-latency automotive inference.',
    'Built tool-calling Cloud LLM Agents for complex queries and fallback cases, optimizing latency and accuracy.'
  ] },
  { company: 'TD Consulting', role: 'AI Engineer (Fresher)', dates: 'Jul 2025 - Dec 2025', bullets: [
    'Integrated AI into recruitment workflows to automate candidate screening and improve hiring precision.',
    'Developed a recruitment chatbot and supported AI-enhanced web features.'
  ] },
  { company: 'VKX Company', role: 'Data Analyst (Intern)', dates: 'Jan 2025 - Jun 2025', bullets: [
    'Cleaned and processed datasets, built visualization dashboards and analyzed trends to optimize workflows.'
  ] },
  { company: 'Giong AI', role: 'AI Engineer (Intern)', dates: 'Oct 2024 - Dec 2024', bullets: [
    'Evaluated n8n and Dify, built LLM/API automation PoCs and delivered AI architecture assessment reports.'
  ] }
];

const projects = [
  {
    title: 'UWB Contactless Respiration Monitoring System', role: 'Team Leader / AI Researcher',
    icon: 'fas fa-heartbeat', label: 'Contactless sensing', tech: ['IR-UWB Radar', 'TCN', 'PyTorch', 'NumPy', 'SciPy'],
    bullets: [
      'Led the team and built real-time contactless respiration monitoring with XETHRU X4M200 IR-UWB radar.',
      'Optimized a TCN pipeline: approximately 79% smaller than the reproduced LSTM baseline while maintaining strong prediction performance.'
    ]
  },
  {
    title: 'Hybrid Edge-Cloud In-Cabin Voice Assistant & Intent Prediction System',
    role: 'Project Leader / Sole Developer', icon: 'fas fa-microphone-alt', label: 'Edge + Cloud AI',
    tech: ['SLM / NLU', 'INT8 / INT4', 'Tool-calling', 'Cloud LLM Agents'],
    bullets: [
      'Designed driver-intent prediction and in-cabin control with quantized INT8/INT4 edge NLU.',
      'Built tool-calling Cloud LLM Agents for multi-turn reasoning and fallback cases.'
    ]
  },
  {
    title: 'RAG & Tool-Calling Test Case Generation System', role: 'Team Leader / AI Engineer',
    icon: 'fas fa-tasks', label: 'Retrieval + evaluation', tech: ['RAG', 'LangGraph', 'RAGAS', 'Vector Stores'],
    bullets: [
      'Coordinated the team and implemented test generation and evaluations of retrieval, answer faithfulness and tool execution.',
      'Built synthetic fixtures for deterministic evaluations without live user data.'
    ]
  },
  {
    title: 'Legal RAG Chatbot', role: 'Team Leader / Core AI Engineer',
    icon: 'fas fa-balance-scale', label: 'Legal knowledge retrieval', tech: ['LLMs', 'RAG', 'Legal Retrieval'],
    bullets: ['Served as team lead and primary developer for an LLM/RAG chatbot and legal retrieval pipelines.']
  }
];

function SocialLinks(props) {
  const links = [
    ['https://github.com/HuyGoodBoy', 'GitHub', 'fab fa-github'],
    [linkedin, 'LinkedIn', 'fab fa-linkedin'],
    ['https://www.facebook.com/Sweet.Kamit', 'Facebook', 'fab fa-facebook'],
    ['https://www.instagram.com/huyyy.bg004/', 'Instagram', 'fab fa-instagram'],
    ['https://discord.com/users/934298468002955324', 'Discord', 'fab fa-discord']
  ];
  return h('div', { className: 'social', 'aria-label': 'Social profiles' }, links.map(([href, label, icon]) =>
    h('a', { key: label, href, title: label, 'aria-label': label, target: '_blank', rel: 'noopener noreferrer',
      tabIndex: props && props.disabled ? -1 : undefined }, h('i', { className: icon, 'aria-hidden': true }))));
}

function Heading(props) {
  return h('div', { className: 'heading section-heading' },
    h('p', { className: 'section-eyebrow' }, props.eyebrow || 'Portfolio'),
    h('h2', { className: 'title', id: props.id }, props.title),
    h('p', { className: 'separator', 'aria-hidden': true }),
    props.subtitle && h('p', { className: 'subtitle' }, props.subtitle));
}

function Menu(props) {
  return h('div', { id: 'portfolio-menu', className: `menu-container ${props.open ? 'active' : 'deactive'}`,
    hidden: !props.open, 'aria-hidden': !props.open },
    h('div', { className: 'overlay', 'aria-hidden': true }),
    h('nav', { className: 'menu-items', 'aria-label': 'Portfolio sections' },
      h('ul', null, navigation.map(([id, label]) => h('li', { key: id },
        h('a', { href: `#${id}`, 'aria-label': label.toUpperCase(), onClick: props.closeMenu, tabIndex: props.open ? 0 : -1 }, label.toUpperCase())))),
      h(SocialLinks, { disabled: !props.open })));
}

function Nav(props) {
  return h('nav', { id: 'navbar', 'aria-label': 'Main navigation' }, h('div', { className: 'nav-wrapper' },
    h('a', { className: 'brand', href: '#welcome-section', 'aria-label': 'HuyGoodBoy home', onClick: props.closeMenu },
      h('span', { className: 'brand-mark', 'aria-hidden': true }, 'HG'),
      h('span', null, 'Bùi Gia Huy', h('span', { className: 'brand-role' }, 'AI Engineer'))),
    h('div', { className: 'desktop-nav' },
      [['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact']].map(([id, label]) =>
        h('a', { key: id, href: `#${id}` }, label)),
      h('a', { className: 'nav-cv', href: cvPath, download: 'Bui-Gia-Huy-CV.pdf' }, 'Download CV ', h('span', { 'aria-hidden': true }, '↗'))),
    h('button', { id: 'menu-toggle', type: 'button', onClick: props.toggleMenu,
      className: `menu-button ${props.open ? 'active' : ''}`, 'aria-expanded': props.open,
      'aria-controls': 'portfolio-menu', 'aria-label': props.open ? 'Close menu' : 'Open menu' },
      h('span', { 'aria-hidden': true }))));
}

function Header() {
  return h('header', { id: 'welcome-section' },
    h('div', { className: 'forest', style: { backgroundImage: `url(${assetRoot}/forest.svg)` }, 'aria-hidden': true }),
    h('div', { className: 'moon', 'aria-hidden': true }),
    h('div', { className: 'container hero-layout' },
      h('div', { className: 'hero-copy' },
        h('p', { className: 'hero-intro' }, h('span', { className: 'intro-rule', 'aria-hidden': true }), 'Bùi Gia Huy · AI Engineer'),
        h('h1', null, h('span', { className: 'line' }, 'Building'), h('span', { className: 'line color' }, 'practical AI.')),
        h('p', { className: 'hero-summary' }, 'I turn AI research into working systems — from on-device voice assistants to retrieval pipelines and cloud agents.'),
        h('div', { className: 'buttons' },
          h('a', { href: '#projects', className: 'cta' }, 'Explore my work ', h('span', { 'aria-hidden': true }, '↗')),
          h('a', { href: cvPath, download: 'Bui-Gia-Huy-CV.pdf' }, 'Download CV ', h('i', { className: 'fas fa-arrow-down', 'aria-hidden': true }))),
        h('div', { className: 'hero-meta' },
          h('span', null, h('i', { className: 'fas fa-map-marker-alt', 'aria-hidden': true }), 'Hanoi, Vietnam'),
          h('a', { href: 'https://github.com/HuyGoodBoy', target: '_blank', rel: 'noopener noreferrer' }, 'GitHub ', h('span', { 'aria-hidden': true }, '↗')),
          h('a', { href: linkedin, target: '_blank', rel: 'noopener noreferrer' }, 'LinkedIn ', h('span', { 'aria-hidden': true }, '↗')))),
      h('aside', { className: 'hero-system', 'aria-label': 'Edge-Cloud voice assistant architecture' },
        h('div', { className: 'system-heading' }, h('span', null, 'EDGE + CLOUD'), h('i', { className: 'fas fa-microphone-alt', 'aria-hidden': true })),
        h('h2', null, 'In-cabin ', h('br'), 'voice intelligence.'),
        h('div', { className: 'system-node' }, h('span', { className: 'node-number' }, '01'),
          h('div', null, h('strong', null, 'On-device intent'), h('span', null, 'Quantized SLM / NLU · INT8 / INT4')),
          h('i', { className: 'fas fa-microchip', 'aria-hidden': true })),
        h('div', { className: 'system-connector', 'aria-hidden': true }, h('span'), '↓'),
        h('div', { className: 'system-node' }, h('span', { className: 'node-number' }, '02'),
          h('div', null, h('strong', null, 'Cloud reasoning'), h('span', null, 'LLM agents · Tool-calling')),
          h('i', { className: 'fas fa-cloud', 'aria-hidden': true })),
        h('p', { className: 'system-caption' }, 'Driver intent → vehicle control'))),
    h('div', { className: 'hero-footer container' },
      h('span', null, 'LLMs & RAG'), h('span', null, 'Edge-Cloud AI'), h('span', null, 'Research & Evaluation'),
      h('a', { href: '#about' }, 'Discover more ', h('span', { 'aria-hidden': true }, '↓'))));
}

function About() {
  return h('section', { id: 'about', 'aria-labelledby': 'about-title' }, h('div', { className: 'wrapper' },
    h('article', null,
      h('div', { className: 'title' }, h('p', { className: 'section-eyebrow' }, '01 / Introduction'), h('h2', { id: 'about-title' }, 'About me.'),
        h('p', { className: 'separator', 'aria-hidden': true })),
      h('div', { className: 'desc full' },
        h('h3', { className: 'subtitle' }, 'Research, implementation and everything in between.'),
        h('p', null, 'I am an AI Engineer based in Hanoi, Vietnam, with experience in automotive AI, recruitment automation, data analysis and LLM workflows.'),
        h('p', null, 'I build practical AI systems, from quantized on-device models and cloud agents to retrieval pipelines and contactless sensing. My work combines research, implementation and evaluation.')),
      h('div', { className: 'desc' }, h('h3', { className: 'subtitle' }, 'AI Engineering'),
        h('p', null, 'I develop LLM and RAG applications, tool-calling agents and Edge-Cloud voice assistants. My experience includes quantizing SLM/NLU models with INT8/INT4 for low-latency inference.')),
      h('div', { className: 'desc' }, h('h3', { className: 'subtitle' }, 'Research & Evaluation'),
        h('p', null, 'I work with PyTorch, NumPy and SciPy on temporal models and real-time sensing. I also evaluate retrieval quality, answer faithfulness and tool execution using RAGAS and deterministic test fixtures.')))));
}

function Experience() {
  return h('section', { id: 'experience', className: 'resume-section', 'aria-labelledby': 'experience-title' },
    h('div', { className: 'section-container' },
      h(Heading, { id: 'experience-title', eyebrow: '02 / Career', title: 'Work experience.', subtitle: 'Applied AI across automotive, recruitment and automation.' }),
      h('div', { className: 'timeline' }, experience.map(job => h('article', { className: 'experience-card', key: job.company },
        h('p', { className: 'dates' }, job.dates),
        h('div', { className: 'experience-body' },
        h('div', { className: 'experience-heading' },
          h('div', null, h('h3', null, job.company), h('p', { className: 'role' }, job.role))),
        h('ul', null, job.bullets.map(text => h('li', { key: text }, text)))))))));
}

function Project(props) {
  const project = props.project;
  return h('article', { className: 'project' },
    h('div', { className: 'project-visual' },
      h('span', null, project.label), h('i', { className: project.icon, 'aria-hidden': true })),
    h('div', { className: 'project-details' },
      h('h3', { className: 'project-tile' }, project.title),
      h('p', { className: 'project-role' }, project.role),
      h('ul', { className: 'project-outcomes' }, project.bullets.map(text => {
        const metric = 'approximately 79% smaller';
        const parts = text.split(metric);
        return h('li', { key: text }, parts.length === 2
          ? [parts[0], h('strong', { key: 'metric' }, metric), parts[1]] : text);
      })),
      h('ul', { className: 'tech-tags', 'aria-label': 'Project technologies' }, project.tech.map(text => h('li', { key: text }, text)))));
}

function Projects() {
  return h('section', { id: 'projects', 'aria-labelledby': 'projects-title' }, h('div', { className: 'projects-container' },
    h(Heading, { id: 'projects-title', eyebrow: '03 / Selected work', title: 'From ideas to systems.', subtitle: 'Four projects in sensing, Edge-Cloud AI and retrieval-augmented generation.' }),
    h('div', { className: 'projects-wrapper' }, projects.map(project => h(Project, { key: project.title, project })))));
}

function Skills() {
  const groups = [
    ['AI', ['LLMs', 'RAG', 'Tool-calling', 'Model quantization', 'TCN', 'YOLO', 'XGBoost']],
    ['Development', ['Python', 'PyTorch', 'NumPy', 'SciPy', 'PostgreSQL', 'Git', 'Docker']],
    ['Tools', ['LangChain', 'LangGraph', 'RAGAS', 'Langfuse', 'Qdrant', 'Neo4j', 'n8n', 'Dify']]
  ];
  return h('section', { id: 'skills', className: 'resume-section', 'aria-labelledby': 'skills-title' },
    h('div', { className: 'section-container' }, h(Heading, { id: 'skills-title', eyebrow: '04 / Toolkit', title: 'The tools behind the work.' }),
      h('div', { className: 'skills-grid' }, groups.map(([name, items]) => h('article', { className: 'skill-card', key: name },
        h('h3', null, name), h('ul', { className: 'tech-tags' }, items.map(item => h('li', { key: item }, item))))))));
}

function Education() {
  return h('section', { id: 'education', className: 'resume-section', 'aria-labelledby': 'education-title' },
    h('div', { className: 'section-container' }, h(Heading, { id: 'education-title', eyebrow: '05 / Learning', title: 'Education & achievements.' }),
      h('div', { className: 'education-grid' },
        h('article', { className: 'education-card' }, h('h3', null, 'FPT University'),
          h('p', { className: 'role' }, 'Bachelor of Science in Artificial Intelligence'),
          h('p', { className: 'dates' }, '2022 - 2026'),
          h('h4', null, 'Languages'), h('p', null, 'Vietnamese — Native'), h('p', null, 'English — Intermediate')),
        h('article', { className: 'education-card' }, h('h3', null, 'Achievements'),
          h('ul', { className: 'achievement-list' },
            h('li', null, h('strong', null, 'Second Prize'), h('span', null, 'FPTxNRC AI Hackathon 2025')),
            h('li', null, h('strong', null, 'Vingroup Applied AI Talent Program'), h('span', null, 'Artificial Intelligence')),
            h('li', null, h('strong', null, 'Excellent Student at FPT University'), h('span', null, 'Summer 2025 Semester')))))));
}

function Contact() {
  return h('section', { id: 'contact', 'aria-labelledby': 'contact-title' }, h('div', { className: 'container' },
    h('div', { className: 'heading-wrapper' }, h('div', { className: 'heading' },
      h('p', { className: 'section-eyebrow' }, '06 / Get in touch'),
      h('h2', { className: 'title', id: 'contact-title' }, 'Let’s build', h('br'), 'something useful.'),
      h('p', { className: 'separator', 'aria-hidden': true }),
      h('p', { className: 'subtitle' }, 'Let’s talk about AI engineering, research or a project you have in mind.')),
      h(SocialLinks)),
    h('div', { className: 'contact-links' },
      h('a', { href: 'mailto:giahuy31639801@gmail.com' }, h('i', { className: 'fas fa-envelope', 'aria-hidden': true }), 'giahuy31639801@gmail.com'),
      h('a', { href: 'tel:+84985643876' }, h('i', { className: 'fas fa-phone', 'aria-hidden': true }), '0985 643 876'),
      h('p', null, h('i', { className: 'fas fa-map-marker-alt', 'aria-hidden': true }), 'Hanoi, Vietnam')),
    h('a', { className: 'contact-cv', href: cvPath, download: 'Bui-Gia-Huy-CV.pdf' }, 'Download my CV ', h('i', { className: 'fas fa-download', 'aria-hidden': true }))));
}

function Footer() {
  return h('footer', null, h('div', { className: 'wrapper' },
    h('p', null, '© ', new Date().getFullYear(), ' Bùi Gia Huy.'),
    h('a', { href: '#welcome-section' }, 'Back to top ', h('span', { 'aria-hidden': true }, '↑'))));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  closeMenu() { this.setState({ menuOpen: false }); }
  toggleMenu() { this.setState(state => ({ menuOpen: !state.menuOpen })); }

  handleKeydown(event) {
    if (!this.state.menuOpen) return;
    if (event.key === 'Escape') { event.preventDefault(); this.closeMenu(); }
    if (event.key === 'Tab') {
      const controls = [document.getElementById('menu-toggle'), ...document.querySelectorAll('#portfolio-menu a')];
      const current = controls.indexOf(document.activeElement);
      const next = (current + (event.shiftKey ? -1 : 1) + controls.length) % controls.length;
      event.preventDefault();
      controls[next].focus();
    }
  }

  handleScroll() {
    const scroll = window.scrollY;
    document.getElementById('navbar').classList.toggle('bg-active', scroll > 80);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    document.addEventListener('keydown', this.handleKeydown);
    this.handleScroll();
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }

  componentDidUpdate(_, previous) {
    if (previous.menuOpen !== this.state.menuOpen) {
      document.body.classList.toggle('menu-open', this.state.menuOpen);
      document.querySelector('main').inert = this.state.menuOpen;
      document.querySelector('footer').inert = this.state.menuOpen;
      if (this.state.menuOpen) document.querySelector('#portfolio-menu a').focus();
      else document.getElementById('menu-toggle').focus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleKeydown);
    document.body.classList.remove('menu-open');
  }

  render() {
    return h(React.Fragment, null,
      h('a', { className: 'skip-link', href: '#about' }, 'Skip to content'),
      h(Menu, { open: this.state.menuOpen, closeMenu: this.closeMenu }),
      h(Nav, { open: this.state.menuOpen, toggleMenu: this.toggleMenu, closeMenu: this.closeMenu }),
      h('main', null, h(Header), h(About), h(Experience), h(Projects), h(Skills), h(Education), h(Contact)), h(Footer));
  }
}

ReactDOM.render(h(App), document.getElementById('app'));
