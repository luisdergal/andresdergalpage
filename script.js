// ===== ACCORDION FUNCTIONALITY =====
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.classList.contains("show")) {
      panel.classList.remove("show");
      // Remove animations when closing
      const cards = panel.querySelectorAll(".card1");
      cards.forEach(card => {
        card.classList.remove("animate__animated", "animate__bounceIn");
      });
    } else {
      panel.classList.add("show");
      // Add animations when opening
      const cards = panel.querySelectorAll(".card1");
      cards.forEach((card, index) => {
        // Remove animation classes first in case it was opened before
        card.classList.remove("animate__animated", "animate__bounceIn");
        // Trigger reflow to restart animation
        void card.offsetWidth;
        // Add animation with a slight delay for each card
        setTimeout(() => {
          card.classList.add("animate__animated", "animate__bounceIn");
        }, index * 100);
      });
    }
  });
});

// ===== LANGUAGE SWITCHER =====
const translations = {
  en: {
    title: "FULL-STACK DEVELOPER",
    intro: `
      <p class="highlight">
        3+ years of professional experience developing web applications for international markets, with a focus on software architecture and clean code practices.
      </p>
    `,
    "summary-title": "Professional Summary",
    "summary-content": `
      <p class="summary-intro">
        Full-Stack Developer with over 3 years of professional experience in software architecture and development for international markets. Primary focus on building and maintaining web applications using modern JavaScript frameworks and backend technologies.
      </p>

      <p class="summary-paragraph">
        Technical expertise encompasses both frontend development with React, Angular, and Next.js, as well as backend development using Java Spring Boot, Node.js, and Go. Experienced in working with SQL databases, implementing DevOps practices with Docker and CI/CD pipelines, and following industry-standard software development methodologies.
      </p>

      <p class="summary-paragraph">
        Professional practice includes system modernization, e-commerce platform development, and code refactoring for improved maintainability. Familiar with implementing business logic for inventory management, pricing systems, and checkout processes. Additionally experienced in exploring AI technologies, including LLM integration and data analysis tools.
      </p>
    `,
    "tech-title": "Tech Stack",
    "tech-frontend": "Frontend",
    "tech-backend": "Backend",
    "tech-database": "Databases",
    "tech-devops": "DevOps & CI/CD",
    "tech-design": "Web Design",
    "tech-ai": "AI & Innovation",
    "links-professional": "Professional Network",
    "link-linkedin": "LinkedIn",
    "links-projects": "Projects & Code",
    "link-github": "GitHub",
    "links-business": "Business Page",
    "link-business": "Business Page",
    "links-social": "Social Networks",
    "accordion-social": "Social Networks",
    "social-facebook": "Facebook:",
    "social-instagram": "Instagram:",
    "social-youtube": "YouTube:",
    "contact-title": "Contact"
  },
  es: {
    title: "FULL-STACK DEVELOPER",
    intro: `
      <p class="highlight">
        Más de 3 años de experiencia profesional desarrollando aplicaciones web para mercados internacionales, con enfoque en arquitectura de software y prácticas de código limpio.
      </p>
    `,
    "summary-title": "Resumen Profesional",
    "summary-content": `
      <p class="summary-intro">
        Desarrollador Full-Stack con más de 3 años de experiencia profesional en arquitectura de software y desarrollo para mercados internacionales. Enfoque principal en la construcción y mantenimiento de aplicaciones web utilizando frameworks modernos de JavaScript y tecnologías backend.
      </p>

      <p class="summary-paragraph">
        Experiencia técnica que abarca tanto desarrollo frontend con React, Angular y Next.js, como desarrollo backend utilizando Java Spring Boot, Node.js y Go. Experiencia trabajando con bases de datos SQL, implementando prácticas DevOps con Docker y pipelines de CI/CD, y siguiendo metodologías de desarrollo de software estándar de la industria.
      </p>

      <p class="summary-paragraph">
        Mi experiencia en la industria incluye modernización de sistemas, desarrollo de plataformas e-commerce y refactorización de código para mejorar la mantenibilidad. Familiarizado con la implementación de lógica de negocio para gestión de inventarios, sistemas de precios y procesos de checkout. Adicionalmente, experiencia explorando tecnologías de IA, incluyendo integración de LLMs y herramientas de análisis de datos.
      </p>

    `,
    "tech-title": "Stack Tecnológico",
    "tech-frontend": "Frontend",
    "tech-backend": "Backend",
    "tech-database": "Bases de Datos",
    "tech-devops": "DevOps & CI/CD",
    "tech-design": "Diseño Web",
    "tech-ai": "IA e Innovación",
    "links-professional": "Red Social Profesional",
    "link-linkedin": "LinkedIn",
    "links-projects": "Proyectos y Código",
    "link-github": "GitHub",
    "links-business": "Página de Negocios",
    "link-business": "Página de Negocios",
    "links-social": "Redes Sociales",
    "accordion-social": "Redes Sociales",
    "social-facebook": "Facebook:",
    "social-instagram": "Instagram:",
    "social-youtube": "YouTube:",
    "contact-title": "Contacto"
  }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to update language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (key === 'intro' || key === 'summary-content') {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// Set initial language on page load
setLanguage(currentLang);

// ===== HERO TITLE CHARACTER-BY-CHARACTER ANIMATION =====
function animateHeroTitle() {
  const titleElement = document.querySelector('.animated-title');
  if (!titleElement) return;

  const text = titleElement.textContent;

  // Fade out first
  titleElement.style.opacity = '0';

  setTimeout(() => {
    // Create a document fragment to build the new content
    const fragment = document.createDocumentFragment();

    // Create a span for each character
    const characters = text.split('');
    characters.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'hero-title-letter';
      // Preserve spaces with non-breaking space
      if (char === ' ') {
        span.style.width = '0.3em';
      }
      span.style.animationDelay = `${index * 0.05}s`; // 50ms delay between each letter (slower)
      fragment.appendChild(span);
    });

    // Replace content all at once
    titleElement.textContent = '';
    titleElement.appendChild(fragment);

    // Fade back in
    titleElement.style.opacity = '1';
  }, 150); // Wait for fade out to complete
}

// Run the animation when the page loads
window.addEventListener('load', () => {
  setTimeout(animateHeroTitle, 100); // Small delay to ensure everything is loaded
});

// Re-animate title when language changes
const originalSetLanguage = setLanguage;
setLanguage = function(lang) {
  originalSetLanguage(lang);
  setTimeout(animateHeroTitle, 100); // Re-animate after language change
};
