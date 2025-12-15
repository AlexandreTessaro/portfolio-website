// Configuração - ALTERE AQUI SEU USUÁRIO DO GITHUB
// Você pode usar o arquivo config.js ou alterar diretamente aqui
const GITHUB_USERNAME = (typeof CONFIG !== 'undefined' && CONFIG.github) ? CONFIG.github.username : 'seu-usuario-github';

// Navegação suave e menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('contactForm');
    const themeToggle = document.getElementById('themeToggle');

    // Toggle modo escuro/claro
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    initTheme();

    // Toggle menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Animação de entrada para elementos ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .contact-item, .blog-card, .certificate-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Lazy loading de imagens
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });

    // Formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Aqui você pode adicionar lógica para enviar o formulário
            // Por exemplo, usando fetch para uma API ou EmailJS
            
            // Simulação de envio
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // Simular delay de envio
            setTimeout(() => {
                alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Em breve entrarei em contato.`);
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);

            // Para implementação real, você pode usar:
            // - EmailJS: https://www.emailjs.com/
            // - Formspree: https://formspree.io/
            // - Sua própria API backend
        });
    }

    // Smooth scroll para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar efeito parallax melhorado no hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = Math.max(0, 1 - (scrolled / window.innerHeight) * 1.5);
            }
        });
    }

    // Adicionar tooltip para links externos
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('title', 'Abre em nova aba');
    });

    // Prevenir fechamento acidental do menu ao redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Tabs de projetos
    const tabButtons = document.querySelectorAll('.tab-btn');
    const featuredProjects = document.getElementById('featuredProjects');
    const githubProjects = document.getElementById('githubProjects');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            if (tab === 'featured') {
                featuredProjects.classList.remove('hidden');
                githubProjects.classList.add('hidden');
            } else {
                featuredProjects.classList.add('hidden');
                githubProjects.classList.remove('hidden');
                loadGitHubProjects();
            }
        });
    });

    // Carregar projetos do GitHub
    async function loadGitHubProjects() {
        if (githubProjects.querySelector('.project-card')) {
            return; // Já carregado
        }

        const loadingSpinner = githubProjects.querySelector('.loading-spinner');
        
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
            if (!response.ok) throw new Error('Erro ao carregar projetos');
            
            const repos = await response.json();
            loadingSpinner.style.display = 'none';

            repos.forEach(repo => {
                if (repo.fork) return; // Ignorar forks

                const languages = repo.language || 'Outro';
                const description = repo.description || 'Sem descrição disponível.';
                
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="https://opengraph.githubassets.com/${Date.now()}/${GITHUB_USERNAME}/${repo.name}" 
                             alt="${repo.name}" 
                             loading="lazy" 
                             class="project-img"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="project-placeholder" style="display:none;">
                            <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="250" fill="currentColor" opacity="0.1"/>
                                <circle cx="200" cy="125" r="50" fill="currentColor" opacity="0.2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${repo.name}</h3>
                        <p class="project-description">${description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
                        <div class="project-tags">
                            <span>${languages}</span>
                            ${repo.stargazers_count > 0 ? `<span>⭐ ${repo.stargazers_count}</span>` : ''}
                        </div>
                        <div class="project-links">
                            ${repo.homepage ? `
                                <a href="${repo.homepage}" class="project-link" target="_blank" rel="noopener noreferrer">
                                    <span>Ver Projeto</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.167 15.833L15.833 4.167M15.833 4.167H6.667M15.833 4.167V13.333" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </a>
                            ` : ''}
                            <a href="${repo.html_url}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <span>GitHub</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15.833C6.25 16.5 6.25 16.5 5 15.833M12.5 15.833C13.75 16.5 13.75 16.5 15 15.833M12.5 15.833V13.125C12.5 12.375 12.375 11.958 12.125 11.625C13.583 11.458 15 10.833 15 8.75C15 7.708 14.625 6.875 14.042 6.25C14.167 5.875 14.167 5.333 13.958 4.583C13.958 4.583 13.375 4.375 12.5 5.417C11.75 5.208 10.875 5.208 10.125 5.417C9.25 4.375 8.667 4.583 8.667 4.583C8.458 5.333 8.458 5.875 8.583 6.25C8 6.875 7.625 7.708 7.625 8.75C7.625 10.833 9.042 11.458 10.5 11.625C10.292 11.875 10.208 12.25 10.208 12.75V15.833M7.5 15.833V13.125C7.5 12.375 7.375 11.958 7.125 11.625C5.667 11.458 4.25 10.833 4.25 8.75C4.25 7.708 4.625 6.875 5.208 6.25C5.083 5.875 5.083 5.333 5.292 4.583C5.292 4.583 5.875 4.375 6.75 5.417C7.5 5.208 8.375 5.208 9.125 5.417C10 4.375 10.583 4.583 10.583 4.583C10.792 5.333 10.792 5.875 10.667 6.25C11.25 6.875 11.625 7.708 11.625 8.75C11.625 10.833 10.208 11.458 8.75 11.625C8.958 11.875 9.042 12.25 9.042 12.75V15.833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                `;
                
                projectCard.style.opacity = '0';
                projectCard.style.transform = 'translateY(30px)';
                githubProjects.appendChild(projectCard);
                observer.observe(projectCard);
            });
        } catch (error) {
            loadingSpinner.innerHTML = '<p>Erro ao carregar projetos do GitHub. Verifique se o usuário está configurado corretamente.</p>';
            console.error('Erro ao carregar projetos:', error);
        }
    }

    // Slider de depoimentos
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const testimonialDots = document.getElementById('testimonialDots');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    let currentTestimonial = 0;

    // Criar dots
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para depoimento ${index + 1}`);
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDots.appendChild(dot);
    });

    function updateTestimonials() {
        const offset = -currentTestimonial * 100;
        testimonialsTrack.style.transform = `translateX(${offset}%)`;
        
        document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonial);
        });
    }

    function goToTestimonial(index) {
        currentTestimonial = index;
        updateTestimonials();
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        updateTestimonials();
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        updateTestimonials();
    }

    if (testimonialNext) {
        testimonialNext.addEventListener('click', nextTestimonial);
    }

    if (testimonialPrev) {
        testimonialPrev.addEventListener('click', prevTestimonial);
    }

    // Auto-play depoimentos (opcional)
    // setInterval(nextTestimonial, 5000);
});

// Sistema de Partículas
class Particles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        this.ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)';

        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Conectar partículas próximas
        this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.05)';
        this.ctx.lineWidth = 1;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    update() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar partículas quando a página carregar
window.addEventListener('load', function() {
    const canvas = document.getElementById('particlesCanvas');
    if (canvas) {
        new Particles(canvas);
    }
});

// Adicionar classe para animação de entrada na página
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
