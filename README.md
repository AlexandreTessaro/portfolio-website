# Portfólio - Alexandre Tessaro

Um site de portfólio moderno, responsivo e profissional desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações suaves
- **Modo Escuro/Claro**: Toggle para alternar entre temas com persistência no localStorage
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções e menu mobile funcional
- **Animações Avançadas**: Partículas interativas, parallax e elementos animam ao entrar na viewport
- **Integração GitHub**: Carrega automaticamente seus repositórios do GitHub
- **Lazy Loading**: Imagens carregam apenas quando necessário para melhor performance
- **Acessibilidade**: Seguindo boas práticas de acessibilidade web
- **Performance**: Código otimizado e leve

## 📋 Seções

1. **Hero**: Apresentação inicial com call-to-action e efeito parallax
2. **Sobre Mim**: Informações pessoais e estatísticas
3. **Habilidades**: Tecnologias e ferramentas que você domina
4. **Projetos**: Cards com seus projetos em destaque + integração GitHub
5. **Blog**: Seção para artigos e posts
6. **Certificados**: Mostre suas conquistas e certificações
7. **Depoimentos**: Slider com depoimentos de clientes/colegas
8. **Contato**: Formulário e links para redes sociais

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript Vanilla (ES6+)
- Google Fonts (Inter)

## 📦 Como Usar

1. Clone ou baixe este repositório
2. Configure seu usuário do GitHub no arquivo `script.js` (linha 2):
   ```javascript
   const GITHUB_USERNAME = 'seu-usuario-github';
   ```
3. Abra o arquivo `index.html` no seu navegador
4. Personalize o conteúdo conforme necessário

## ✏️ Personalização

### Alterar Informações Pessoais

1. **Nome e Título**: Edite a seção Hero no `index.html`
2. **Sobre Mim**: Modifique o texto na seção `#about`
3. **Estatísticas**: Altere os números na seção `.about-stats`

### Adicionar/Remover Habilidades

Edite a seção `#skills` no HTML e adicione ou remova tags conforme necessário:

```html
<span class="skill-tag">Sua Tecnologia</span>
```

### Adicionar Projetos

**Opção 1: Projetos Manuais (Destaques)**
Copie o bloco `.project-card` e personalize:

```html
<div class="project-card">
    <div class="project-image">
        <img src="caminho/para/imagem.jpg" alt="Nome do Projeto" loading="lazy" class="project-img">
    </div>
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto...</p>
        <div class="project-tags">
            <span>Tecnologia 1</span>
            <span>Tecnologia 2</span>
        </div>
        <div class="project-links">
            <a href="URL_DO_PROJETO" class="project-link">Ver Projeto</a>
            <a href="URL_DO_GITHUB" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

**Opção 2: Projetos do GitHub (Automático)**
Configure seu usuário do GitHub no `script.js` e os projetos serão carregados automaticamente na aba "GitHub".

### Atualizar Links de Contato

1. **Email**: Altere `href="mailto:seuemail@exemplo.com"` na seção contato
2. **LinkedIn**: Atualize o link do LinkedIn
3. **GitHub**: Atualize o link do GitHub

### Configurar Modo Escuro

O modo escuro já está implementado! O tema é salvo automaticamente no localStorage. As cores do modo escuro podem ser ajustadas nas variáveis CSS:

```css
[data-theme="dark"] {
    --text-primary: #f9fafb;
    --bg-primary: #111827;
    /* ... outras variáveis */
}
```

### Cores e Estilo

As cores podem ser personalizadas através das variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... outras variáveis */
}
```

### Adicionar Artigos ao Blog

Edite a seção `#blog` no HTML e adicione novos cards:

```html
<article class="blog-card">
    <div class="blog-image">
        <img src="imagem.jpg" alt="Título" loading="lazy">
    </div>
    <div class="blog-content">
        <span class="blog-date">15 Jan 2024</span>
        <h3 class="blog-title">Título do Artigo</h3>
        <p class="blog-excerpt">Resumo do artigo...</p>
        <a href="link-do-artigo" class="blog-link">Ler mais →</a>
    </div>
</article>
```

### Adicionar Certificados

Adicione novos cards na seção `#certificates`:

```html
<div class="certificate-card">
    <div class="certificate-icon">
        <svg>...</svg>
    </div>
    <h3 class="certificate-title">Nome do Certificado</h3>
    <p class="certificate-issuer">Instituição</p>
    <span class="certificate-date">Mês Ano</span>
    <a href="link" class="certificate-link">Ver Certificado →</a>
</div>
```

### Adicionar Depoimentos

Adicione novos cards na seção `#testimonials` dentro de `.testimonials-track`:

```html
<div class="testimonial-card">
    <div class="testimonial-content">
        <!-- Conteúdo do depoimento -->
    </div>
</div>
```

## 📧 Formulário de Contato

O formulário de contato atualmente mostra um alerta ao ser enviado. Para implementar o envio real, você pode:

1. **EmailJS**: Integração fácil e gratuita
   - Visite: https://www.emailjs.com/
   - Configure e adicione o código no `script.js`

2. **Formspree**: Serviço de formulários
   - Visite: https://formspree.io/
   - Adicione o action no formulário

3. **Backend próprio**: Crie uma API para processar os dados

## ✨ Funcionalidades Implementadas

- ✅ **Modo Escuro/Claro**: Toggle com persistência no localStorage
- ✅ **Integração GitHub API**: Carrega automaticamente seus repositórios
- ✅ **Seção de Blog**: Cards para artigos e posts
- ✅ **Certificados**: Exibição de certificações e conquistas
- ✅ **Depoimentos**: Slider interativo com navegação
- ✅ **Partículas Animadas**: Canvas com partículas interativas no background
- ✅ **Parallax Avançado**: Efeitos de profundidade no hero
- ✅ **Lazy Loading**: Imagens carregam sob demanda
- ✅ **Tabs de Projetos**: Alterna entre projetos destacados e GitHub

## 🎨 Próximas Melhorias Sugeridas

- Integrar com Google Analytics
- Adicionar SEO meta tags avançadas
- Otimizar imagens com WebP
- Adicionar PWA (Progressive Web App)
- Integrar com CMS para blog dinâmico
- Adicionar filtros de projetos por tecnologia
- Sistema de busca

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

## 👤 Autor

**Alexandre Tessaro**

---

Feito com ❤️ e muito café ☕

