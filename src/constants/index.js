import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT_EN = `I am a full stack developer with a abilitys for crafting robust and scalable web applications. With 1,5 years of hands-on experience, I have honed my skills in front-end technologies like JavaScript and React.js, as well as back-end technologies like Laravel, MySQL and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const HERO_CONTENT_PT = `Sou um desenvolvedor full stack com habilidade para criar aplicações web robustas e escaláveis. Com 1,5 anos de experiência prática, aprimorei minhas habilidades em tecnologias front-end como React, bem como em tecnologias back-end como Laravel, MySQL e PostgreSQL. Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem experiências excepcionais ao usuário.`

export const ABOUT_TEXT_EN = `I am a dedicated and versatile full stack developer, passionate about creating efficient and user-friendly web applications. With one year of professional experience, I have worked with various technologies, including React, PHP (CodeIgniter), Bootstrap, and MySQL. My journey in web development began with a deep curiosity about how websites work and evolved into a career where I continuously strive to learn and adapt to new challenges. I excel in teamwork and enjoy solving complex problems to deliver high-quality solutions. Outside of programming, I enjoy exploring souls-like and indie games, where I can even apply programming knowledge to create game patterns and strategies. I believe these experiences enhance my analytical and problem-solving skills, which I bring to my software development projects.`;

export const ABOUT_TEXT_PT = `Sou um desenvolvedor full stack dedicado e versátil, apaixonado por criar aplicações web eficientes e fáceis de usar. Com um ano de experiência profissional, já trabalhei com diversas tecnologias, incluindo React, PHP (CodeIgniter), Bootstrap e MySQL. Minha jornada no desenvolvimento web começou com uma curiosidade profunda sobre o funcionamento dos sites e evoluiu para uma carreira onde me dedico continuamente a aprender e me adaptar a novos desafios. Tenho facilidade em trabalhar em equipe e gosto de resolver problemas complexos para entregar soluções de alta qualidade. Fora da programação, gosto de me aventurar em jogos de estilo souls like e indie, onde posso aplicar até mesmo conhecimentos de programação para gerar padrões e estratégias de jogo. Acredito que essas experiências aprimoram minha capacidade de análise e resolução de problemas, habilidades que levo comigo para o desenvolvimento de software.`

export const EXPERIENCES = [
  {
    ano: `2023 - Presente`,
    year: `2023 - Present`,
    funcao: `Estagiario de programação`,
    role: `Programming Intern`,
    company: `Segure - Segurança do Trabalho`,
    descricao: `Nesta experiência trabalhei com a implementação de novas funcionalidades e manutenções no software da empresa. Desenvolvendo as aplicações web utilizando como ferramentas PHP (CodeIgniter), HTML, CSS, JavaScript (ReactJs) e MySQL.`,
    description: `In this experience I worked with the implementation of new features and maintenance in the company's software. Developing web applications using PHP (CodeIgniter), HTML, CSS, JavaScript (ReactJs) and MySQL tools.`,
    technologies: ["Javascript", "React.js", "PHP (CodeIgniter)" ,"Bootstrap", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Pokedex Website",
    titulo: "Pokedex",
    image: project1,
    description:"A fully functional Pokedex where you can filter by characters, see their abilitys and more!",
    descricao: "Pokdex totalmente funcional aonde você poderá filtrar por personagens, ver suas habilidades e muito mais!",
    technologies: ["HTML", "CSS", "React.js", "Tailwind"],
  },
  {
    title: "E-commerce",
    titulo: "E-commerce",
    image: project2,
    description:"A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    descricao:"Um site de comércio eletrônico totalmente funcional com recursos como lista de produtos, carrinho de compras e autenticação de usuário.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind", "JavaSpring Boot", "PostgreSQL"],
  },
  {
    title: "Login screen",
    titulo: "Tela de Login",
    image: project3,
    description:"A screen where you can register, log in and request password recovery.",
    descricao: "Uma tela aonde você poderá se cadastrar, logar e solicitar recuperação de senha.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind", "Laravel", "Docker" ,"MySQL"],
  },
]

export const CONTACT = {
  address: "Canoas, RS",
  phoneNo: "+55 51 998267655 ",
  email: "guilopes1003@gmail.com",
};