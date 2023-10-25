import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeExperience } from './hoverChangeExperience.js'
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  '.certificados',
  `Além da faculdade, todos os dias, complemento meus estudos por meio de cursos oferecidos em plataformas como IBM, LinkedIn Learning, Udemy, Rocketseat e Dio, aprimorando minhas habilidades de codificação e adquirindo novas ferramentas e conhecimentos.`,
  'Aperfeiçoamento Constante',
  'Certificados',
  'Jan 2022 - Atual'
)

hoverChangeExperience(
  '.bootcamp',
  `Participei do Bootcamp Santander 2023 Fullstack, onde aprofundei meus conhecimentos em desenvolvimento, explorando o back end com a linguagem Java e o front end com o framework Angular, aprendendo também sobre suas componentizações.`,
  'Maratona de Código',
  'Bootcamp',
  'Ago 2023 - Out 2023'
)

hoverChangeExperience(
  '.dados',
  `Comecei meus estudos na área de tecnologia há algum tempo, embarcando em um curso de Ciência de Dados que me deu uma visão geral desse campo. Ao longo dos meses de estudo, desenvolvi habilidades em Python e participei de projetos integradores em grupo, focados em soluções de TI para a empresa em que estava trabalhando.`,
  'Voltando aos Estudos',
  'Ciência de Dados',
  'Jul 2021 - Fev 2022'
)

hoverChangeExperience(
  '.grupo',
  `Trabalhei em projetos de portfólios web responsivos em parceria com um amigo que desempenhou o papel de designer UI/UX no Figma, posteriormente transformando esses designs em código. Atualmente, estou desenvolvendo uma aplicação web em colaboração com minha esposa, que também é programadora.`,
  'Trabalhos em Grupo',
  'Projetos Web',
  'Jun 2022 - Atual'
)

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".node",
  "NodeJS é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
);
hoverChangeDescription(
  ".react",
  "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverChangeDescription(
  ".next",
  "NextJS é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe."
);
