// Made by Bùi Gia Huy


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Huy
            <strong>GoodBoy</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I do</span>
          <span className="line">graphic design</span>
          <span className="line">
            <span className="color">&</span> code.
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Bùi Gia Huy.</h4>
            <p>
              I am an AI Engineer and Data Scientist based in Vietnam.
            </p>
            <p>
              I am passionate about artificial intelligence and machine learning, with a focus on building practical AI solutions. I love working on projects that combine cutting-edge technology with real-world applications. When I'm not coding, I enjoy exploring new AI technologies and contributing to the AI community.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm an AI Engineer.</h4>
            <p>
              I specialize in developing AI and machine learning solutions, particularly in natural language processing and computer vision. My expertise includes building chatbots, implementing RAG systems, and developing facial recognition applications.
            </p>
            <p>
              I work with various AI frameworks and libraries including TensorFlow, PyTorch, and Hugging Face Transformers. I also have experience with cloud platforms and deploying AI models at scale.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a Data Scientist.</h4>
            <p>
              I analyze complex datasets and develop machine learning models to solve real-world problems. My work involves data preprocessing, feature engineering, model development, and performance optimization.
            </p>
            <p>
              I'm particularly interested in projects that combine multiple AI technologies to create comprehensive solutions.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here are some of my recent AI and machine learning projects that showcase my expertise in developing practical AI solutions.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="AI Cooking Assistant Chatbot"
            img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg'}
            tech="python tensorflow nlp"
            link="https://github.com/yourusername/cooking-chatbot"
            repo="https://github.com/yourusername/cooking-chatbot"
          >
            <small>
              Built using Python, TensorFlow, and Natural Language Processing techniques.
            </small>
            <p>
              An intelligent chatbot that helps users with cooking recipes, meal planning, and kitchen tips.
            </p>
          </Project>
          <Project
            title="Book Classification System"
            img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg'}
            tech="python scikit-learn nlp"
            link="https://github.com/yourusername/book-classifier"
            repo="https://github.com/yourusername/book-classifier"
          >
            <small>
              Built using Python, scikit-learn, and NLP techniques.
            </small>
            <p>
              A machine learning system that automatically classifies books into different genres and categories.
            </p>
          </Project>
          <Project
            title="Legal RAG Chatbot"
            img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg'}
            tech="python langchain openai"
            link="https://github.com/yourusername/legal-chatbot"
            repo="https://github.com/yourusername/legal-chatbot"
          >
            <small>
              Built using Python, LangChain, and OpenAI's GPT models.
            </small>
            <p>
              A Retrieval-Augmented Generation chatbot specialized in legal information and documentation.
            </p>
          </Project>
          <Project
            title="Facial Recognition System"
            img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/IssueTracker.jpg'}
            tech="python opencv tensorflow"
            link="https://github.com/yourusername/face-recognition"
            repo="https://github.com/yourusername/face-recognition"
          >
            <small>
              Built using Python, OpenCV, and TensorFlow.
            </small>
            <p>
              A facial recognition system that can identify and verify individuals in real-time.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">
                your
                <i className="fas fa-at at" />
                email
                <i className="fas fa-circle dot" />
                com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Bùi Gia Huy.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's LinkedIn Profile"
      >
        {' '}
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
};



/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}


ReactDOM.render(<App />, document.getElementById('app'));