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
  `Além da Faculdade, complemento diariamente meus estudos com cursos da IBM, Linkedin Learning e Plataforma Rocketseat, aperfeiçoando meu código e aprendendo novas ferramentas.`,
  'Aperfeiçoamento Constante',
  'Certificados',
  'Jan 2022 - Atual'
)

hoverChangeExperience(
  '.faculdade',
  `Sinto realizado em cursar Análise e Desenvolvimento de Sistemas e estar em constante evolução com a tecnologia. Para alguém que gosta de estar sempre aprendendo, estou seguro em dizer que estou no lugar certo!`,
  'Análise e Desenvolvimento de Sistemas',
  'Faculdade',
  'Fev 2022 - Jul 2024'
)

hoverChangeExperience(
  '.dados',
  `Realizei Projeto Integrador em grupo sobre Soluções de TI na empresa onde trabalhava, aproveitei para aprofundar no campo de análise de dados e assim descobri e me identifiquei mais com o Front e Back End.`,
  'Voltando aos Estudos',
  'Ciência de Dados',
  'Jul 2021 - Fev 2022'
)

hoverChangeExperience(
  '.engenharia',
  `Sempre me identifiquei com as Exatas e seus Desafios, então depois do Ensino Médio fiz um ano e meio de Engenharia Civil, mas por falta de tempo e dinheiro, tranquei a faculdade.`,
  'Exatas e Soluções de Problemas',
  'Engenharia Civil',
  'Fev 2013 - Jun 2014'
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
