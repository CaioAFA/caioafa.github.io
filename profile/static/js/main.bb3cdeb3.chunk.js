(this["webpackJsonpportfolio-caio-arrabal"]=this["webpackJsonpportfolio-caio-arrabal"]||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),s=n(2),c=n.n(s),i=n(5),a=(n(30),n(0));function l(e){return Object(a.jsx)("div",{className:"panel",id:e.id,style:{backgroundColor:e.backgroundColor},children:e.children})}var j=n(18),d=n(19),b=n.n(d);n(41);var m=b()((function(e){var t=e.inViewport,n=e.forwardedRef,r=e.showed,o=function(e,t,n,r,o){var s="",c=r||n?"end":"start";switch(e){case"FadeInBottomUp":s+="desktop-fade-in-bottom-up-".concat(c," ");break;case"FadeInLeftToRight":s+="desktop-fade-in-left-right-".concat(c," ");break;case"FadeInRightToLeft":s+="desktop-fade-in-right-left-".concat(c," ")}switch(t){case"FadeInBottomUp":s+="mobile-fade-in-bottom-up-".concat(c," ");break;case"FadeInLeftToRight":s+="mobile-fade-in-left-right-".concat(c," ");break;case"FadeInRightToLeft":s+="mobile-fade-in-right-left-".concat(c," ")}return s}(e.desktopAnimation,e.mobileAnimation,t,r);return Object(a.jsx)("div",{ref:n,className:"".concat(e.wrapperClasses," ").concat(o),id:e.id,children:e.children})})),x=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),o=n[0],s=n[1];return Object(a.jsx)(m,Object(j.a)({showed:o,onEnterViewport:function(){s(!0)}},e))};n(42);function p(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"next-section-arrow-wrapper",onClick:function(){return function(e){var t=document.getElementById(e),n=window.pageYOffset+t.getBoundingClientRect().top;window.scrollTo({top:n,behavior:"smooth"})}(e.goTo)},children:[e.text&&Object(a.jsx)("span",{className:"next-section-text",children:e.text}),Object(a.jsx)("img",{className:"down-arrow",src:"./images/down-arrow.svg",alt:"down-arrow"})]})})}var O=n(72);function g(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)("span",{children:e.name}),e.imageName&&Object(a.jsx)("img",{alt:"",src:"./dev-icons/".concat(e.imageName,".png"),style:{marginLeft:"10px"}})]})})}function u(e){return Object(a.jsx)(O.a,{anchor:"right",open:e.knowledgeDrawerOpen,onClose:function(){return e.setKnowledgeDrawerOpen(!1)},children:Object(a.jsxs)("div",{className:"drawer-content",children:[Object(a.jsx)("h2",{children:"Conhecimentos"}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Idiomas"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:"Ingl\xeas - Conhecimento intermedi\xe1rio"})}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Programa\xe7\xe3o"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)(g,{name:"Python 3",imageName:"python"}),Object(a.jsx)(g,{name:"Java",imageName:"java"}),Object(a.jsx)(g,{name:"NodeJs",imageName:"nodejs_small"}),Object(a.jsx)(g,{name:"PHP",imageName:"php"}),Object(a.jsx)(g,{name:"Go",imageName:"go"}),Object(a.jsx)(g,{name:"C"}),Object(a.jsx)(g,{name:"C ++"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Desenvolvimento Web"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)(g,{name:"HTML 5",imageName:"html5"}),Object(a.jsx)(g,{name:"CSS 3",imageName:"css3"}),Object(a.jsx)(g,{name:"Javascript",imageName:"js_badge"}),Object(a.jsx)(g,{name:"React JS",imageName:"react"}),Object(a.jsx)(g,{name:"Vue JS",imageName:"js_badge"}),Object(a.jsx)(g,{name:"Nuxt JS",imageName:"js_badge"}),Object(a.jsx)(g,{name:"Sass",imageName:"sass"}),Object(a.jsx)(g,{name:"GraphQL",imageName:"database"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Desenvolvimento Mobile"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)(g,{name:"Android",imageName:"android"}),Object(a.jsx)(g,{name:"Flutter",imageName:"dart"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Banco de Dados"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)(g,{name:"MySQL",imageName:"mysql"}),Object(a.jsx)(g,{name:"MongoDB",imageName:"mongodb"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"E-Commerce"}),Object(a.jsx)("ul",{children:Object(a.jsx)(g,{name:"Magento 2",imageName:"magento"})}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Infraestrutura e DevOps"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)(g,{name:"Linux",imageName:"linux"}),Object(a.jsx)(g,{name:"Jenkins",imageName:"jenkins"}),Object(a.jsx)(g,{name:"Servi\xe7os da AWS (EC2, RDS e S3)",imageName:"aws"}),Object(a.jsx)(g,{name:"Docker",imageName:"docker"})]})]})})}function h(e){return Object(a.jsx)(O.a,{anchor:"left",open:e.formationDrawerOpen,onClose:function(){return e.setFormationDrawerOpen(!1)},children:Object(a.jsxs)("div",{className:"drawer-content",children:[Object(a.jsx)("h2",{children:"Forma\xe7\xe3o"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:["Bacharelado em Ci\xeancia da Computa\xe7\xe3o \u2013 Universidade Presbiteriana Mackenzie",Object(a.jsx)("br",{}),"Dura\xe7\xe3o: de Mar\xe7o de 2017 a dezembro de 2020"]}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Curso Completo do Desenvolvedor NodeJS e MongoDB - UDEMY"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Curso Aprenda Golang do Zero! Desenvolva uma APLICA\xc7\xc3O COMPLETA! - UDEMY"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Curso de Ingl\xeas! - O Fant\xe1stico M\xe9todo para Ser Fluente - UDEMY"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Curso Cria\xe7\xe3o de Apps Android e iOS Com Flutter 2021 - Crie 14 Apps - UDEMY"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Ansible: Sua infraestrutura como c\xf3digo - ALURA"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Docker: Criando containers sem dor de cabe\xe7a - ALURA"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Amazon EC2: Fa\xe7a um deploy da sua webapp com alta disponibilidade e escalabilidade - ALURA"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Git: Controle e compartilhe seu c\xf3digo - ALURA"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Vue JS - Curso COMPLETO do B\xe1sico ao Avan\xe7ado - UDEMY"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"GraphQL - Criando APIs Profissionais e Flex\xedveis - UDEMY"}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:["Inform\xe1tica B\xe1sica \u2013 SENAI",Object(a.jsx)("br",{}),"Dura\xe7\xe3o: de abril de 2014 a junho de 2014"]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:["Montagem e Manuten\xe7\xe3o de Microcomputadores \u2013 SENAI",Object(a.jsx)("br",{}),"Dura\xe7\xe3o: de maio de 2015 a junho 2015"]})]})]})})}n(43);function f(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),o=n[0],s=n[1],c=Object(r.useState)(!1),j=Object(i.a)(c,2),d=j[0],b=j[1];return Object(a.jsx)(l,{id:e.id,backgroundColor:"darkred",children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(x,{desktopAnimation:"FadeInLeftToRight",mobileAnimation:"FadeInBottomUp",wrapperClasses:"row no-gutters d-flex justify-content-center",children:[Object(a.jsx)("img",{className:"col-12",id:"profile-picture",alt:"profile",src:"./images/profile.jpg"}),Object(a.jsx)("h1",{className:"col-12",id:"profile-name",children:"Caio Augusto Ferreira Arrabal"}),Object(a.jsxs)("div",{id:"presentation-actions",className:"row col-12 d-flex flex-column flex-sm-row justify-content-center",children:[Object(a.jsxs)("div",{className:"presentation-button-wrapper d-flex col-10 align-items-center",onClick:function(){return s(!0)},children:[Object(a.jsx)("img",{src:"./images/cap.svg",className:"presentation-button-icon",id:"formation-button",alt:"formation button"}),"\xa0\xa0",Object(a.jsx)("h2",{children:"Forma\xe7\xe3o"})]}),"\xa0 \xa0 \xa0 \xa0",Object(a.jsxs)("div",{className:"presentation-button-wrapper d-flex col-10 align-items-center",onClick:function(){return b(!0)},children:[Object(a.jsx)("img",{src:"./images/brainstorm.svg",className:"presentation-button-icon",id:"knowledge-button",alt:"knowledge preview"}),"\xa0\xa0",Object(a.jsx)("h2",{children:"Conhecimentos"})]})]}),Object(a.jsx)(p,{text:"Conhecer Portf\xf3lio",goTo:e.nextSectionId}),Object(a.jsx)(u,{knowledgeDrawerOpen:d,setKnowledgeDrawerOpen:b}),Object(a.jsx)(h,{formationDrawerOpen:o,setFormationDrawerOpen:s})]})})})}n(44);function w(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"blue",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInLeftToRight",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column flex-sm-row\n            justify-content-between align-items-center",id:"guitar-scale-generator",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Gerador de escalas para viol\xe3o e guitarra"}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Implementado Em:"})," Flutter",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Dispon\xedvel para:"})," Web, Mobile e PWA",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://caioafa.github.io/guitar-scale-generator/#/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar App"})})]}),Object(a.jsx)("img",{id:"guitar-scale-generator-preview",alt:"guitar-scale-generator-preview",src:"./images/guitar-scale-generator-preview.png"})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(45);function v(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"steelblue",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInRightToLeft",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column-reverse flex-sm-row\n            justify-content-between align-items-center",id:"flutter-samples",children:[Object(a.jsx)("img",{id:"flutter-logo",alt:"flutter-logo",src:"./images/flutter-logo.png"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"C\xf3digos de Exemplo em Flutter"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Anima\xe7\xf5es, navega\xe7\xe3o, MobX, BLoC, estado global, exemplos de telas prontas e Widgets interessantes. Tudo com c\xf3digos organizados, previews e funcionando!"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/flutter-public-samples",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Reposit\xf3rio"})})]})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(46);function A(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"darkblue",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInLeftToRight",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column flex-sm-row\n            justify-content-between align-items-center",id:"react-samples",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"C\xf3digos de Exemplo em React"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Formul\xe1rios (com Formik e Yup), hooks, React + Redux e mais. C\xf3digos simples que podem ser reaproveitados em in\xfameras aplica\xe7\xf5es!"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/react-samples",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Reposit\xf3rio"})})]}),Object(a.jsx)("img",{id:"react-logo",alt:"react logo",src:"./images/react-logo.png"})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}function C(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{id:e.id,style:{textAlign:"right"},children:[Object(a.jsxs)("div",{children:["Icons made by\xa0",Object(a.jsx)("a",{href:"https://www.flaticon.com/authors/google",title:"Google",children:"Google"}),", Good Ware,\xa0",Object(a.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik "}),"from ",Object(a.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(a.jsx)("div",{children:"Imagem do cron\xf4metro feita por catalyststuff, dispon\xedvel em br.freepik.com."})]})})}n(47);function F(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"maroon",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInLeftToRight",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column-reverse flex-sm-row\n            justify-content-between align-items-center",id:"magento-2-samples",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"C\xf3digos de Exemplo para Magento 2"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Exemplos did\xe1ticos de m\xf3dulos para a plataforma de E-Commerce Magento 2: uma das mais vers\xe1teis encontradas atualmente no mercado!"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/magento-2-public-samples",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Reposit\xf3rio"})})]}),Object(a.jsx)("img",{id:"magento-logo",alt:"magento-logo",src:"./images/magento-logo.png"})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(48);function k(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"midnightblue",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInRightToLeft",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column flex-sm-row\n            justify-content-between align-items-center",id:"youtube-channel",children:[Object(a.jsx)("img",{id:"youtube-logo",alt:"youtube logo",src:"./images/youtube-logo.png"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Canal do YouTube"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Conte\xfados musicais aleat\xf3rios, importantes para a evolu\xe7\xe3o da humanidade."}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://www.youtube.com/channel/UCrcjPKHW66dzYEFxhjvAElA",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Canal"})})]})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(49);function I(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"teal",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInRightToLeft",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column-reverse flex-sm-row\n            justify-content-between align-items-center",id:"vue-samples",children:[Object(a.jsx)("img",{id:"vue-logo",alt:"vue-logo",src:"./images/vue-logo.png"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"C\xf3digos de Exemplo em Vue JS"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Biblioteca Vue Router"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/vue-router-samples",rel:"noreferrer",target:"_blank",children:"Acessar Reposit\xf3rio"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Biblioteca Vuex"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/vue-vuex-samples",rel:"noreferrer",target:"_blank",children:"Acessar Reposit\xf3rio"})]}),Object(a.jsx)("br",{})]})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}function S(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:e.backgroundColor,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{desktopAnimation:"FadeInBottomUp",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters",children:Object(a.jsx)("h1",{style:{color:e.textColor,textAlign:"center",textShadow:"3px 3px black"},children:e.text})}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(50);function N(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"#9D91FF",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInLeftToRight",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column-reverse flex-sm-row\n            justify-content-between align-items-center",id:"magento-2-samples",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Gerador de GIF's de contagem regressiva"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Esse App permite gerar GIF's de contagem regressiva de forma parametrizada: edite a sua data final, cor da fonte, tamanho, tipo, cor do fundo, etc.",Object(a.jsx)("br",{}),"Feito em NodeJS"]}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/node-countdown-gif-generator",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Reposit\xf3rio"})})]}),Object(a.jsx)("img",{id:"countdown-img",alt:"countdown-img",src:"./images/countdown.jpg"})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(51);function y(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"brown",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInRightToLeft",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column flex-sm-row\n            justify-content-between align-items-center",id:"graphql-server",children:[Object(a.jsx)("img",{id:"graphql-logo",alt:"graphql logo",src:"./images/graphql-logo.png"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Graphql Apollo Server - Servidor De Exemplo"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Servidor GraphQL de exemplo, feito com Apollo Server utilizando ",Object(a.jsx)("b",{children:"NodeJS"})," para estudo da tecnologia.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Conta com um frontend feito em ",Object(a.jsx)("b",{children:"NuxtJS"})," para consumo da API.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Possui:",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Autentica\xe7\xe3o JWT"}),Object(a.jsxs)("li",{children:["Conex\xe3o com Banco de Dados MySQL (com encripta\xe7\xe3o de senha e ",Object(a.jsx)("i",{children:"transactions"}),")"]})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/sample-graphql-apollo-server",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Reposit\xf3rio"})})]})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(52);function R(e){return Object(a.jsx)(l,{id:e.id,backgroundColor:"black",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x,{desktopAnimation:"FadeInLeftToRight",mobileAnimation:"FadeInBottomUp",wrapperClasses:"col-9 no-gutters d-flex flex-column-reverse flex-sm-row\n            justify-content-between align-items-center",id:"raw-php-server-sample",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Servidor em PHP puro"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Aplica\xe7\xe3o de exemplo feita para um desafio de implementa\xe7\xe3o de backend em PHP puro (sem frameworks ou bibliotecas auxiliares).",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Conta com um frontend feito em VueJS para consumo da API e Docker para deploy."]}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/CaioAFA/bis2bis-test",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("b",{children:"Acessar Reposit\xf3rio"})})]}),Object(a.jsx)("img",{id:"php-logo-img",alt:"php-logo",src:"./images/php-logo.png"})]}),Object(a.jsx)(p,{goTo:e.nextSectionId})]})})}n(53);var D=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{id:"presentation-panel",nextSectionId:"public-apps-and-codes"}),Object(a.jsx)(S,{id:"public-apps-and-codes",backgroundColor:"slategray",text:"Apps E C\xf3digos P\xfablicos",textColor:"white",nextSectionId:"guitar-scale-generator-panel"}),Object(a.jsx)(w,{id:"guitar-scale-generator-panel",nextSectionId:"flutter-samples-panel"}),Object(a.jsx)(v,{id:"flutter-samples-panel",nextSectionId:"react-samples-panel"}),Object(a.jsx)(A,{id:"react-samples-panel",nextSectionId:"vue-samples-panel"}),Object(a.jsx)(I,{id:"vue-samples-panel",nextSectionId:"magento-2-samples-panel"}),Object(a.jsx)(F,{id:"magento-2-samples-panel",nextSectionId:"youtube-channel-panel"}),Object(a.jsx)(k,{id:"youtube-channel-panel",nextSectionId:"countdown-gif-generator"}),Object(a.jsx)(N,{id:"countdown-gif-generator",nextSectionId:"apollo-server-graphql-sample"}),Object(a.jsx)(y,{id:"apollo-server-graphql-sample",nextSectionId:"raw-php-server-sample"}),Object(a.jsx)(R,{id:"raw-php-server-sample",nextSectionId:"credits"}),Object(a.jsx)(C,{id:"credits"})]})};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.bb3cdeb3.chunk.js.map