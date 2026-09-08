// --- DICIONÁRIO DE TRADUÇÕES ---
const translations = {
    pt: {
        nav_home: "Home",
        nav_sobre: "Sobre",
        nav_experiencia: "Experiência",
        nav_projetos: "Projetos",
        nav_habilidades: "Habilidades",
        nav_contato: "Contato",
        home_hello: "Olá, eu sou",
        home_desc: "Estudante do 6º período de Ciência da Computação na PUC Minas e Desenvolvedor / Engenheiro de Software. Focado no desenvolvimento de soluções robustas, integrações de sistemas e criação de aplicações modernas que unem performance e boa experiência do usuário.",
        btn_projects: "Ver Projetos",
        btn_cv: "Download CV",
        sobre_title_1: "Sobre ",
        sobre_title_2: "Mim",
        sobre_p1: "Sou um desenvolvedor apaixonado por tecnologia, atualmente cursando o 6º período de Ciência da Computação na PUC Minas. Minha jornada na programação começou com uma forte base em Python, C e Java, e rapidamente se expandiu para o desenvolvimento Full Stack moderno e mobile.",
        sobre_p2: "Hoje, atuo profissionalmente com desenvolvimento web, integrações de sistemas e migração de grandes volumes de dados. Tenho facilidade em aprender novas tecnologias, inglês avançado e busco sempre criar arquiteturas escaláveis, seja construindo uma API estruturada, um frontend dinâmico ou um aplicativo mobile gamificado.",
        exp_title_1: "Minha ",
        exp_title_2: "Experiência",
        
        // Tagna
        exp_role_tagna: "Estagiário de Desenvolvimento de Software",
        exp_date_tagna: "Tagna | Set. 2026 - Atual",
        exp_li1_tagna: "Desenvolvimento e evolução de funcionalidades para os módulos da plataforma NEXUM, focando em escalabilidade e experiência do usuário.",
        exp_li2_tagna: "Construção de soluções no back-end e front-end utilizando tecnologias como Java, Spring Boot, Node.js e React.js.",
        exp_li3_tagna: "Gerenciamento e integração de banco de dados com MySQL e orquestração de serviços utilizando a infraestrutura do Google Cloud.",
        
        // LEVTY
        exp_role: "Engenheiro de Software Trainee",
        exp_date: "LEVTY | Jul. 2025 - Set. 2026",
        exp_li1: "Atuação no desenvolvimento e manutenção de aplicações web utilizando JavaScript e Sydle One.",
        exp_li2: "Participação ativa em projetos para clientes reais, envolvendo demandas de front-end e back-end.",
        exp_li3: "Execução e monitoramento de grandes migrações de dados, garantindo integridade utilizando Elasticsearch.",
        
        proj_title_1: "Meus ",
        proj_title_2: "Projetos",
        proj_desc_1: "Aplicativo mobile all-in-one de saúde. Conta com sistema gamificado de contagem de calorias e gestão de treinos personalizados, focado em retenção e engajamento do usuário.",
        proj_btn_repo: "Ver Repositório",
        proj_desc_2: "Aplicação web Full Stack para criação de escalações personalizadas da Kings League. Permite filtragem avançada de jogadores e organização tática visual.",
        proj_btn_site: "Ver Site",
        proj_desc_3: "Plataforma para mapeamento de locais pet-friendly em BH. Inclui integração com IA de reconhecimento de imagem para avaliar a limpeza dos locais a partir de fotos.",
        proj_btn_repo_2: "Ver Repositório",
        proj_desc_4: "Site institucional e portfólio desenvolvido para uma cliente psicóloga. Foco em SEO, design responsivo e conversão de novos pacientes. (Em desenvolvimento)",
        proj_btn_site_2: "Ver Site",
        hab_title_1: "Principais ",
        hab_title_2: "Habilidades",
        hab_cat_1: "Front-end & Mobile",
        hab_cat_2: "Back-end & Banco de Dados",
        hab_cat_3: "Ferramentas & Outros",
        hab_tag_en: "Inglês Avançado",
        cont_title_1: "Vamos ",
        cont_title_2: "Conversar?",
        cont_desc: "Estou sempre aberto a novos desafios e oportunidades na área de tecnologia.",
        cont_ph_name: "Seu Nome",
        cont_ph_email: "Seu E-mail",
        cont_ph_msg: "Sua Mensagem",
        cont_btn: "Enviar Mensagem",
        footer_text: "&copy; 2026 Rafael Iannini. Todos os direitos reservados."
    },
    en: {
        nav_home: "Home",
        nav_sobre: "About",
        nav_experiencia: "Experience",
        nav_projetos: "Projects",
        nav_habilidades: "Skills",
        nav_contato: "Contact",
        home_hello: "Hello, I am",
        home_desc: "Computer Science student (6th term) at PUC Minas and Developer / Software Engineer. Focused on developing robust solutions, system integrations, and creating modern applications that combine performance with a great user experience.",
        btn_projects: "View Projects",
        btn_cv: "Download CV",
        sobre_title_1: "About ",
        sobre_title_2: "Me",
        sobre_p1: "I am a technology-passionate developer, currently in my 6th term of Computer Science at PUC Minas. My programming journey started with a strong foundation in Python, C, and Java, and quickly expanded into modern Full Stack and mobile development.",
        sobre_p2: "Today, I work professionally with web development, system integrations, and large-scale data migrations. I learn new technologies easily, have advanced English skills, and always strive to create scalable architectures, whether building a structured API, a dynamic frontend, or a gamified mobile app.",
        exp_title_1: "My ",
        exp_title_2: "Experience",
        
        // Tagna
        exp_role_tagna: "Software Development Intern",
        exp_date_tagna: "Tagna | Sep 2026 - Present",
        exp_li1_tagna: "Development and evolution of features for the NEXUM platform modules, focusing on scalability and user experience.",
        exp_li2_tagna: "Building back-end and front-end solutions using technologies such as Java, Spring Boot, Node.js, and React.js.",
        exp_li3_tagna: "Database management and integration with MySQL, and service orchestration using Google Cloud infrastructure.",

        // LEVTY
        exp_role: "Software Engineer Trainee",
        exp_date: "LEVTY | Jul 2025 - Sep 2026",
        exp_li1: "Development and maintenance of web applications using JavaScript and Sydle One.",
        exp_li2: "Active participation in real client projects, involving both front-end and back-end demands.",
        exp_li3: "Execution and monitoring of large data migrations, ensuring integrity using Elasticsearch.",
        
        proj_title_1: "My ",
        proj_title_2: "Projects",
        proj_desc_1: "All-in-one health mobile app. Features a gamified calorie counting system and personalized workout management, focused on user retention and engagement.",
        proj_btn_repo: "View Repository",
        proj_desc_2: "Full Stack web application for creating custom Kings League lineups. Allows advanced player filtering and visual tactical organization.",
        proj_btn_site: "View Site",
        proj_desc_3: "Platform for mapping pet-friendly locations in BH. Includes integration with image recognition AI to evaluate location cleanliness from photos.",
        proj_btn_repo_2: "View Repository",
        proj_desc_4: "Institutional website and portfolio developed for a psychologist client. Focus on SEO, responsive design, and converting new patients. (In development)",
        proj_btn_site_2: "View Site",
        hab_title_1: "Main ",
        hab_title_2: "Skills",
        hab_cat_1: "Front-end & Mobile",
        hab_cat_2: "Back-end & Database",
        hab_cat_3: "Tools & Others",
        hab_tag_en: "Advanced English",
        cont_title_1: "Let's ",
        cont_title_2: "Talk?",
        cont_desc: "I am always open to new challenges and opportunities in the technology field.",
        cont_ph_name: "Your Name",
        cont_ph_email: "Your Email",
        cont_ph_msg: "Your Message",
        cont_btn: "Send Message",
        footer_text: "&copy; 2026 Rafael Iannini. All rights reserved."
    }
};

const typedStrings = {
    pt: ["Desenvolvedor Full Stack", "Engenheiro de Software", "Desenvolvedor Mobile"],
    en: ["Full Stack Developer", "Software Engineer", "Mobile Developer"]
};

// Links dos currículos
const cvLinks = {
    pt: "https://drive.google.com/file/d/1a3V8UyLfQ0vXSPwpxxTbd46_27Hewb6H/view?usp=sharing",
    en: "https://drive.google.com/file/d/1UFv0EeHgjznhXbx4ZhndPzza4joaqRRP/view?usp=sharing" 
};

// --- INICIALIZAÇÃO DO TYPED.JS ---
let typed = new Typed('.texto', {
    strings: typedStrings.pt,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});

// --- LÓGICA DE TROCA DE IDIOMA ---
const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');

function setLanguage(language) {
    // 1. Atualizar textos com data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[language][key]) {
            el.innerHTML = translations[language][key];
        }
    });

    // 2. Atualizar placeholders (inputs/textarea)
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[language][key]) {
            el.setAttribute('placeholder', translations[language][key]);
        }
    });

    // 3. Atualizar link do currículo
    document.getElementById('cv-link').href = cvLinks[language];

    // 4. Reiniciar a animação do Typed.js com o idioma correto
    typed.destroy();
    typed = new Typed('.texto', {
        strings: typedStrings[language],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
    });

    // 5. Atualizar classes de ativo nos botões
    if(language === 'pt') {
        btnPt.classList.add('active');
        btnEn.classList.remove('active');
        document.documentElement.lang = "pt-BR";
    } else {
        btnEn.classList.add('active');
        btnPt.classList.remove('active');
        document.documentElement.lang = "en";
    }
}

// Eventos de clique para trocar o idioma
btnPt.addEventListener('click', () => setLanguage('pt'));
btnEn.addEventListener('click', () => setLanguage('en'));


// --- CÓDIGOS ORIGINAIS MANTIDOS ABAIXO ---

// Menu Mobile Toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = menuIcon.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.replace('bx-menu', 'bx-x');
    } else {
        icon.classList.replace('bx-x', 'bx-menu');
    }
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.replace('bx-x', 'bx-menu');
    });
});

// Marcação de link ativo durante o Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};