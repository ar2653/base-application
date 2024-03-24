const stack = [
    {
      id: 1,
      name: "JavaScript",
      category: "Programming Languages",
      description:
        "I have a rich and diverse experience in working with JavaScript, spanning over six years. It has been my go-to language for developing dynamic and interactive client-side applications. I've successfully delivered multiple projects, leveraging the power and flexibility of JavaScript.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 2,
      name: "TypeScript",
      category: "Programming Languages",
      description:
        "TypeScript has been an integral part of my development toolkit, especially in building Angular applications. The static typing and enhanced tooling provided by TypeScript have significantly improved code maintainability and scalability in my projects.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      id: 3,
      name: "GO Language",
      category: "Programming Languages",
      description:
        "My journey into learning Go (Golang) has been both challenging and rewarding. I've delved into this statically typed and compiled language, appreciating its simplicity and efficiency. It holds promise for building scalable and concurrent systems, and I'm excited to explore its full potential.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
  
    {
      id: 22,
      name: "Python",
      category: "Programming Languages",
      description:
        "Initiated my Python journey as part of the \"Software Testing and Quality Assurance\" curriculum. Currently focused on testing diverse data structures to enhance code coverage and ensure robust software quality.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      id: 4,
      name: "React",
      category: "Frameworks",
      description:
        "React has been my framework of choice for developing robust and efficient user interfaces. I utilized React in creating a project management tool named projects.ly, where its component-based architecture and virtual DOM significantly enhanced the overall user experience.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
      id: 5,
      name: "Angular",
      category: "Frameworks",
      description:
        "Angular has played a pivotal role in my development endeavors, particularly in crafting a feature-rich CRM application called Moya. Its powerful framework and declarative approach allowed me to create maintainable and scalable solutions for complex business requirements.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg",
    },
    {
      id: 6,
      name: "Vue.js",
      category: "Frameworks",
      description:
        "Vue.js has been instrumental in my work on an AI-powered scheduling software named schedule.ly. Its progressive framework and simplicity enabled me to build an intuitive and responsive application that seamlessly integrates with advanced scheduling algorithms.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    },
    {
      id: 7,
      name: "Next.js",
      category: "Frameworks",
      type: 'greyicon',
      description:
        "Currently, I am in the process of learning Next.js, a React framework for server-side rendering and static site generation. I am excited about the possibilities it offers in creating optimized and performant web applications. Interesting Factoid: This portfolio is built using Next.js 😄",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
    },
    {
      id: 8,
      name: "Express.js",
      category: "Frameworks",
      type: 'greyicon',
      description:
        "Express.js has been my framework of choice for building robust APIs. I've leveraged its minimalistic and flexible architecture to create efficient backend services, supporting various applications and microservices.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  
    },
    {
      id: 9,
      name: "Node.js",
      category: "Backend & Database",
      description:
        "Node.js has been a key player in my backend development toolkit. Its event-driven architecture and JavaScript runtime on the server-side have empowered me to create scalable network applications and deliver multiple APIs and microservices.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  
    {
      id: 10,
      name: "MySQL",
      category: "Backend & Database",
      description:
        "MySQL is an open-source relational database management system. It is widely used for managing and organizing structured data in various applications.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      id: 11,
      name: "MongoDB",
      category: "Backend & Database",
      description:
        "MongoDB is a NoSQL document database that provides high performance, high availability, and easy scalability. It is designed to store and manage unstructured data.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      id: 12,
      name: "Redis",
      category: "Backend & Database",
      description:
        "Redis is an in-memory data structure store used as a database, cache, and message broker. It is known for its speed and versatility in handling various data types.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
    },
    {
      id: 13,
      name: "AWS",
      category: "Cloud Services",
      description:
        "Amazon Web Services (AWS) is a comprehensive, evolving cloud computing platform provided by Amazon. It offers a wide range of services, including computing power, storage, and databases, among others.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      id: 14,
      name: "Jest",
      category: "Testing",
      description:
        "Jest is a JavaScript testing framework with a focus on simplicity and ease of use. It is commonly used for unit testing and has built-in features for snapshot testing and mocking.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      id: 19,
      name: "Unit Testing",
      category: "Testing",
      description:
        "Unit testing is a software testing method where individual units or components of a software application are tested in isolation. It helps in ensuring that each unit functions as intended.",
      image: "https://cdn-icons-png.flaticon.com/512/10435/10435166.png",
    },
    {
      id: 20,
      name: "Integration Testing",
      category: "Testing",
      description:
        "Integration testing is the phase in software testing where individual software modules are combined and tested as a group. It ensures that the integrated components work together correctly.",
      image: "https://cdn-icons-png.flaticon.com/512/7001/7001490.png",
    },
    {
      id: 15,
      name: "Git",
      category: "Others",
      description:
        "Git is a distributed version control system used for tracking changes in source code during software development. It enables collaboration among developers and helps in managing code versions efficiently.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    },
    {
      id: 16,
      name: "Github",
      category: "Others",
      type: 'greyicon',
      description:
        "GitHub is a web-based platform for version control and collaboration using Git. It provides a centralized platform for hosting and managing software projects.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      id: 18,
      name: "Gitlab CI",
      category: "Others",
      description:
        "GitLab CI (Continuous Integration) is a part of GitLab that allows you to run tests and deploy your code automatically. It helps in maintaining code quality and ensuring continuous integration practices.",
      image: "https://gitlab.com/uploads/-/system/project/avatar/11674053/gitlab-ci-cd-logo_2x.png"
    },
    {
      id: 21,
      name: "RESTful API Development",
      category: "Others",
      description:
        "RESTful API development involves designing and building APIs based on the principles of Representational State Transfer (REST). It is a common approach for creating scalable and interoperable web services.",
      image: "https://cdn-icons-png.flaticon.com/512/10169/10169724.png",
    },
    {
      id: 22,
      name: "Docker",
      category: "Others",
      description: "Docker is a platform that enables developers to build, deploy, and run applications using containerization technology, providing efficient and consistent environments across different computing environments.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    }
];

export default stack;