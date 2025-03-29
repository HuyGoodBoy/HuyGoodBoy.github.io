// Made by Bùi Gia Huy

/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return React.createElement(
    'div',
    { className: `menu-container ${props.showMenu}` },
    React.createElement('div', { className: 'overlay' }),
    React.createElement(
      'div',
      { className: 'menu-items' },
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '#welcome-section', onClick: props.toggleMenu }, 'HOME')
        ),
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '#about', onClick: props.toggleMenu }, 'ABOUT')
        ),
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '#projects', onClick: props.toggleMenu }, 'PORTFOLIO')
        ),
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '#contact', onClick: props.toggleMenu }, 'CONTACT')
        )
      ),
      React.createElement(SocialLinks)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'nav',
      { id: 'navbar' },
      React.createElement(
        'div',
        { className: 'nav-wrapper' },
        React.createElement(
          'p',
          { className: 'brand' },
          'Huy',
          React.createElement('strong', null, 'GoodBoy')
        ),
        React.createElement('a', {
          onClick: props.toggleMenu,
          className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
        }, React.createElement('span'))
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = props => {
  return React.createElement(
    'header',
    { id: 'welcome-section' },
    React.createElement('div', { className: 'forest' }),
    React.createElement('div', { className: 'silhouette' }),
    React.createElement('div', { className: 'moon' }),
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'h1',
        null,
        React.createElement('span', { className: 'line' }, 'I do'),
        React.createElement('span', { className: 'line' }, 'AI Engineering'),
        React.createElement(
          'span',
          { className: 'line' },
          React.createElement('span', { className: 'color' }, '&'),
          ' Data Science.'
        )
      ),
      React.createElement(
        'div',
        { className: 'buttons' },
        React.createElement('a', { href: '#projects' }, 'my portfolio'),
        React.createElement('a', { href: '#contact', className: 'cta' }, 'get in touch')
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = props => {
  return React.createElement(
    'section',
    { id: 'about' },
    React.createElement(
      'div',
      { className: 'wrapper' },
      React.createElement(
        'article',
        null,
        React.createElement(
          'div',
          { className: 'title' },
          React.createElement('h3', null, "Who's this guy?"),
          React.createElement('p', { className: 'separator' })
        ),
        React.createElement(
          'div',
          { className: 'desc full' },
          React.createElement('h4', { className: 'subtitle' }, 'My name is Bùi Gia Huy.'),
          React.createElement('p', null, 'I am an AI Engineer and Data Scientist based in Vietnam.'),
          React.createElement(
            'p',
            null,
            'I am passionate about artificial intelligence and machine learning, with a focus on building practical AI solutions. I love working on projects that combine cutting-edge technology with real-world applications. When I\'m not coding, I enjoy exploring new AI technologies and contributing to the AI community.'
          )
        ),
        React.createElement(
          'div',
          { className: 'title' },
          React.createElement('h3', null, 'What does he do?'),
          React.createElement('p', { className: 'separator' })
        ),
        React.createElement(
          'div',
          { className: 'desc' },
          React.createElement('h4', { className: 'subtitle' }, "I'm an AI Engineer."),
          React.createElement(
            'p',
            null,
            'I specialize in developing AI and machine learning solutions, particularly in natural language processing and computer vision. My expertise includes building chatbots, implementing RAG systems, and developing facial recognition applications.'
          ),
          React.createElement(
            'p',
            null,
            'I work with various AI frameworks and libraries including TensorFlow, PyTorch, and Hugging Face Transformers. I also have experience with cloud platforms and deploying AI models at scale.'
          )
        ),
        React.createElement(
          'div',
          { className: 'desc' },
          React.createElement('h4', { className: 'subtitle' }, 'Also a Data Scientist.'),
          React.createElement(
            'p',
            null,
            'I analyze complex datasets and develop machine learning models to solve real-world problems. My work involves data preprocessing, feature engineering, model development, and performance optimization. I\'m particularly interested in projects that combine multiple AI technologies to create comprehensive solutions.'
          )
        )
      )
    )
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
    node: 'fab fa-node',
    python: 'fab fa-python',
    tensorflow: 'fas fa-brain',
    nlp: 'fas fa-language',
    opencv: 'fas fa-camera'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return React.createElement(
    'div',
    { className: 'project' },
    React.createElement(
      'a',
      { className: 'project-link', href: link, target: '_blank', rel: 'noopener noreferrer' },
      React.createElement('img', {
        className: 'project-image',
        src: props.img,
        alt: 'Screenshot of ' + props.title
      })
    ),
    React.createElement(
      'div',
      { className: 'project-details' },
      React.createElement(
        'div',
        { className: 'project-tile' },
        React.createElement(
          'p',
          { className: 'icons' },
          props.tech.split(' ').map(t => React.createElement('i', { className: tech[t], key: t }))
        ),
        props.title,
        ' '
      ),
      props.children,
      React.createElement(
        'div',
        { className: 'buttons' },
        React.createElement(
          'a',
          { href: repo, target: '_blank', rel: 'noopener noreferrer' },
          'View source ',
          React.createElement('i', { className: 'fas fa-external-link-alt' })
        ),
        React.createElement(
          'a',
          { href: link, target: '_blank', rel: 'noopener noreferrer' },
          'Try it Live ',
          React.createElement('i', { className: 'fas fa-external-link-alt' })
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return React.createElement(
    'section',
    { id: 'projects' },
    React.createElement(
      'div',
      { className: 'projects-container' },
      React.createElement(
        'div',
        { className: 'heading' },
        React.createElement('h3', { className: 'title' }, 'My Works'),
        React.createElement('p', { className: 'separator' }),
        React.createElement(
          'p',
          { className: 'subtitle' },
          'Here are some of my recent AI and machine learning projects that showcase my expertise in developing practical AI solutions.'
        )
      ),
      React.createElement(
        'div',
        { className: 'projects-wrapper' },
        React.createElement(Project, {
          title: 'Book Recommendation System',
          img: 'https://doorcountypulse.com/wp-content/uploads/2022/02/Book-Recs-scaled.jpg',
          tech: 'python scikit-learn nlp',
          link: 'https://github.com/HuyGoodBoy/book-recommendation-system',
          repo: 'https://github.com/HuyGoodBoy/book-recommendation-system',
          children: [
            React.createElement('small', null, 'Built using Python, scikit-learn, and collaborative filtering techniques.'),
            React.createElement('p', null, 'A recommendation system that uses Singular Value Decomposition (SVD) and K-Nearest Neighbors (KNN) to discover latent factors and provide personalized book recommendations based on user preferences.')
          ]
        }),
        React.createElement(Project, {
          title: 'Legal RAG Chatbot',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGeQHnhzN9MsbO2pN05j1EXS80lPAG_dRLw&s',
          tech: 'python langchain openai',
          link: 'https://662chatbot.io.vn/chat',
          repo: 'https://github.com/662chatbot/662chatbot.github.io',
          children: [
            React.createElement('small', null, 'Built using Python, LangChain, and OpenAI\'s GPT models.'),
            React.createElement('p', null, 'A Retrieval-Augmented Generation chatbot specialized in legal information and documentation.')
          ]
        }),
        React.createElement(Project, {
          title: 'Face Recognition System',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasEe1EK6-HTOCeyxsiLnRQC5FSltw6QUaAg&s',
          tech: 'python opencv tensorflow',
          link: 'https://github.com/HuyGoodBoy/face-recognition-system',
          repo: 'https://github.com/HuyGoodBoy/face-recognition-system',
          children: [
            React.createElement('small', null, 'Built using Python, OpenCV, and TensorFlow.'),
            React.createElement('p', null, 'A facial recognition system that can identify and verify individuals in real-time.')
          ]
        }),
        React.createElement(Project, {
          title: 'Discord Music Bot',
          img: 'https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg',
          tech: 'python discord.py ffmpeg',
          link: 'https://discord.com/oauth2/authorize?client_id=1351445711505330196',
          repo: 'https://github.com/HuyGoodBoy/discordbott',
          children: [
            React.createElement('small', null, 'Built using Python, Discord.py, and FFmpeg for audio processing.'),
            React.createElement('p', null, 'A Discord bot that can play music from YouTube in voice channels, featuring commands for playback control, queue management, and server interaction.')
          ]
        }),
        React.createElement(Project, {
          title: 'Food Recognition & Recommendations',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAt5GYkUkaEGFLJ6W4vXWH58bHKH3_uSgnA&s',
          tech: 'python tensorflow opencv',
          link: 'https://github.com/HuyGoodBoy',
          repo: 'https://github.com/HuyGoodBoy/food-recognition-and-food-recommendations',
          children: [
            React.createElement('small', null, 'Built using Python, YOLOv11, and Spoonacular API.'),
            React.createElement('p', null, 'A food recognition and recommendation system that detects food in images and provides recipe recommendations.')
          ]
        })
      )
    )
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return React.createElement(
    'section',
    { id: 'contact' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'heading-wrapper' },
        React.createElement(
          'div',
          { className: 'heading' },
          React.createElement(
            'p',
            { className: 'title' },
            'Want to ',
            React.createElement('br'),
            'contact me?'
          ),
          React.createElement('p', { className: 'separator' }),
          React.createElement(
            'p',
            { className: 'subtitle' },
            'Please, use the form below or send an email to ',
            React.createElement(
              'span',
              { className: 'mail' },
              'giahuy31639801',
              React.createElement('i', { className: 'fas fa-at at' }),
              'gmail',
              React.createElement('i', { className: 'fas fa-circle dot' }),
              'com'
            ),
            ':'
          )
        ),
        React.createElement(SocialLinks)
      ),
      React.createElement(
        'form',
        { id: 'contact-form', action: '#' },
        React.createElement('input', { placeholder: 'Name', name: 'name', type: 'text', required: true }),
        React.createElement('input', { placeholder: 'Email', name: 'email', type: 'email', required: true }),
        React.createElement('textarea', { placeholder: 'Message', type: 'text', name: 'message' }),
        React.createElement('input', { className: 'button', id: 'submit', value: 'Submit', type: 'submit' })
      )
    )
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return React.createElement(
    'footer',
    null,
    React.createElement(
      'div',
      { className: 'wrapper' },
      React.createElement('h3', null, 'THANKS FOR VISITING'),
      React.createElement('p', null, '© ', new Date().getFullYear(), ' Bùi Gia Huy.'),
      React.createElement(SocialLinks)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return React.createElement(
    'div',
    { className: 'social' },
    React.createElement(
      'a',
      {
        href: 'https://github.com/HuyGoodBoy',
        target: '_blank',
        rel: 'noopener noreferrer',
        title: "Link to author's GitHub profile"
      },
      ' ',
      React.createElement('i', { className: 'fab fa-github' })
    ),
    React.createElement(
      'a',
      {
        href: 'https://www.facebook.com/Sweet.Kamit',
        target: '_blank',
        rel: 'noopener noreferrer',
        title: "Link to author's Facebook Profile"
      },
      ' ',
      React.createElement('i', { className: 'fab fa-facebook' })
    ),
    React.createElement(
      'a',
      {
        href: 'https://www.instagram.com/huyyy.bg004/',
        target: '_blank',
        rel: 'noopener noreferrer',
        title: "Link to author's Instagram Profile"
      },
      ' ',
      React.createElement('i', { className: 'fab fa-instagram' })
    ),
    React.createElement(
      'a',
      {
        href: 'https://discord.com/users/934298468002955324',
        target: '_blank',
        rel: 'noopener noreferrer',
        title: "Link to author's Discord Profile"
      },
      ' ',
      React.createElement('i', { className: 'fab fa-discord' })
    )
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false
    };
  }

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
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header),
      React.createElement(About),
      React.createElement(Projects),
      React.createElement(Contact),
      React.createElement(Footer)
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

ReactDOM.render(React.createElement(App), document.getElementById('app'));