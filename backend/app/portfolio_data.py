from langchain.schema import Document

PORTFOLIO_DATA = [
    {
        "category": "personal_info",
        "content": """
        I am Hunter — a resilient, visionary, and deeply reflective Senior Software Engineer based in Kampala, Uganda.
        With 5+ years of experience in full-stack development, I specialize in Python, JavaScript (React, Node.js), and scalable cloud architecture.
        My journey is a story of transformation: from low resources and pressure to building value-driven, impactful applications — including mental health platforms, e-commerce systems, and AI-powered solutions.
        Beyond code, I write introspective essays, create emotional poetry, and explore the emotional-psychological interface of technology, especially in relation to youth and mental well-being in Africa.
        I believe in building things that matter — tools that heal, systems that empower, and platforms that bring clarity.
        """
    },
    {
        "category": "skills",
        "content": """
        Technical Skills:
        - Programming Languages: Python, JavaScript, TypeScript, Java
        - Frontend: React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS
        - Backend: FastAPI, Django, Node.js, Express.js
        - Databases: PostgreSQL, MongoDB, Redis
        - Cloud: AWS, Google Cloud Platform, Docker, Kubernetes
        - AI/ML: LangChain, OpenAI APIs, Vector Databases, RAG Systems
        - Tools: Git, Jenkins, Linux, Nginx
        
        I'm particularly excited about AI integration in web applications and have been diving deep into
        LangChain and vector databases lately. Always eager to learn new frameworks and technologies.
        """
    },
    {
        "category": "projects",
        "content": """
        Key Projects:
        1. AI Chatbot Platform - Built a RAG-based chatbot using LangChain and FastAPI
           This was challenging but rewarding - implementing semantic search was a learning curve
        2. E-commerce Dashboard - Full-stack React/Node.js application with real-time analytics
           One of my favorite projects, dealing with real-time data visualization
        3. Microservices Architecture - Designed scalable backend services using Docker and Kubernetes
           Learned a lot about distributed systems and container orchestration
        4. Portfolio Website - Personal portfolio built with Next.js and deployed on Vercel
           Keeps evolving as I add new features and experiment with design
        
        Each project taught me something new and pushed me to grow as a developer.
        """
    },
    {
        "category": "experience",
        "content": """
        Professional Experience:
        - Senior Software Engineer at TechCorp (2022-Present)
          Leading development of customer-facing web applications serving 100K+ users
          Mentoring junior developers and making architectural decisions
        - Full-Stack Developer at StartupXYZ (2020-2022)
          Built MVP products and scaled infrastructure from 0 to 10K users
          Learned to work fast and adapt quickly in a startup environment
        - Junior Developer at WebAgency (2019-2020)
          Developed client websites and learned modern web development practices
          Where I fell in love with React and modern JavaScript
        
        Each role taught me different aspects of software development and teamwork.
        I've experienced the full journey from junior to senior level.
        """
    },
    {
        "category": "education",
        "content": """
        Education & Certifications:
        - Bachelor's in Computer Science - Makerere University (2019)
        - AWS Certified Solutions Architect
        - Google Cloud Professional Developer
        - Multiple online certifications in AI/ML and cloud technologies
        
        Formal education gave me the foundation, but I'm a firm believer in continuous learning.
        Most of my practical skills come from hands-on projects and staying curious.
        The tech industry moves fast, so I'm always picking up new skills.
        """
    },
    {
        "category": "personality_work_style",
        "content": """
        Work Philosophy & Style:
        - I believe in writing clean, maintainable code that others can understand
        - Love collaborating with teams and sharing knowledge
        - Always looking for ways to optimize and improve existing solutions
        - Enjoy mentoring and helping others grow in their careers
        - Prefer agile methodologies and iterative development
        - Strong advocate for proper testing and documentation
        
        I find the best solutions come from understanding the problem deeply first.
        Communication is just as important as technical skills in software development.
        """
    },
    {
        "category": "interests_goals",
        "content": """
        Current Interests & Future Goals:
        - Exploring AI/ML integration in web applications
        - Building more scalable and efficient systems
        - Contributing to open-source projects
        - Eventually want to lead a tech team or start my own company
        - Interested in teaching and sharing knowledge with the developer community
        
        I'm excited about the intersection of AI and traditional web development.
        The possibilities seem endless, and I want to be part of that innovation.
        """
    }
]

def get_documents():
    return [
        Document(page_content=entry["content"].strip(), metadata={"category": entry["category"]})
        for entry in PORTFOLIO_DATA
    ]
