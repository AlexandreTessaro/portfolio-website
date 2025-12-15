// Arquivo de Configuração do Portfólio
// Personalize as informações abaixo conforme necessário

const CONFIG = {
    // Informações Pessoais
    personal: {
        name: 'Alexandre Tessaro',
        title: 'Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais incríveis',
        email: 'seuemail@exemplo.com',
        github: 'https://github.com/seu-usuario',
        linkedin: 'https://linkedin.com/in/seu-perfil'
    },

    // GitHub Configuration
    github: {
        username: 'seu-usuario-github', // IMPORTANTE: Altere para seu usuário do GitHub
        reposCount: 6, // Número de repositórios para exibir
        sortBy: 'updated' // 'updated', 'created', 'pushed', 'full_name'
    },

    // Estatísticas (Sobre Mim)
    stats: {
        projects: '50+',
        experience: '3+',
        dedication: '100%'
    },

    // Partículas
    particles: {
        enabled: true,
        count: 50, // Número de partículas
        speed: 0.5 // Velocidade das partículas (0.1 - 1.0)
    },

    // Depoimentos - Auto-play
    testimonials: {
        autoPlay: false, // true para ativar auto-play
        interval: 5000 // Intervalo em milissegundos
    }
};

// Exportar configuração (se usar módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}



