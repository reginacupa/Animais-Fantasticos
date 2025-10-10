import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import inittooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import initAnimaScroll from "./modules/scrollAnimacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
inittooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaScroll();
