// Classe para a navegação móvel
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  // Anima os links da navegação móvel
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  // Alterna a classe ativa na navegação
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  // Adiciona o evento de clique
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Inicializa a navegação
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

// Instanciando e inicializando a navegação móvel
const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();

// Função de rolagem suave para seções
function scrollPara(id) {
  const destino = document.getElementById(id);
  destino.scrollIntoView({
    behavior: 'smooth',
  });
}

// Código do Modal (Polaroid)
const modal = document.getElementById('image-modal'); 
const modalImg = document.getElementById('modal-img'); 
const modalCaption = document.getElementById('modal-caption'); 

// Quando clicar em uma imagem da galeria, abre o modal
document.querySelectorAll('.gallery-items img').forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src; 
    modalCaption.textContent = img.alt; 
  });
});

// Função para fechar o modal
function fecharModal() {
  modal.style.display = 'none';
}

// Fechar o modal quando clicar fora da imagem
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    fecharModal();
  }
});

// Fechar o modal ao clicar no 'X' de fechamento
document.querySelector('.close-btn').addEventListener('click', fecharModal);

// Formulário demonstrativo: ainda não está ligado a nenhum serviço de envio
const form = document.getElementById('form-contato');
const aviso = document.getElementById('form-aviso');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    aviso.textContent = 'Formulário demonstrativo. Para falar comigo, use o LinkedIn.';
    form.reset();
  });
}
