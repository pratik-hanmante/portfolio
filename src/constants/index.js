import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "SpringBoot Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SpringBoot",
      icon: springboot,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Amit Patel",
      designation: "CFO",
      company: "ABC India",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Priya Sharma",
      designation: "COO",
      company: "XYZ Tech",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Rahul Gupta",
      designation: "CTO",
      company: "789 Solutions",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  
  export default testimonials;
  
  
  const projects = [
    {
      name: "Prismatik Social Media App",
      description:
        "A social media application featuring real-time messaging functionality, built using MongoDB, React, Node.js, Express.js, and WebSockets for seamless communication.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "purple-text-gradient",
        },
        {
          name: "websockets",
          color: "orange-text-gradient",
        },
      ],
      image: prismatik,
      source_code_link: "https://github.com/",
    },
    {
      name: "MERN Blog Application",
      description:
        "A blog application built using MongoDB, React, Redux, Node.js, and Express.js, offering users the ability to create, edit, and delete blog posts with ease.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
      ],
      image: mernblog,
      source_code_link: "https://github.com/",
    },
    {
      name: "SpringBoot Blog Application",
      description:
        "A blog application developed using SpringBoot, React, SQL, and Tailwind CSS, providing a robust and efficient platform for creating and managing blog content.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "purple-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: springblog,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI Summarizer App",
      description:
        "An AI-powered summarization application built with React and Redux, allowing users to summarize lengthy text content into concise summaries with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
      ],
      image: aisummarizer,
      source_code_link: "https://github.com/",
    },
    {
      name: "GitHub Clone",
      description:
        "A clone of the GitHub repository page developed using HTML, CSS, JavaScript, and Node.js, providing a comprehensive view of GitHub repositories.",
      tags: [
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
      ],
      image: githubclone,
      source_code_link: "https://github.com/",
    },
    {
      name: "StreamYard",
      description:
        "A live streaming platform built with HTML, CSS, JavaScript, and Node.js using Express.js for server-side functionality, providing seamless live streaming capabilities.",
      tags: [
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
      ],
      image: streamyard,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "A portfolio website developed using React and Three.js, showcasing projects and skills in an interactive and visually appealing manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  
  
  export { services, technologies, experiences, testimonials, projects };