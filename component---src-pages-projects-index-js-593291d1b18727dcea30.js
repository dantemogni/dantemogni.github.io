(self.webpackChunkdante_s_website=self.webpackChunkdante_s_website||[]).push([[216],{9713:function(A){A.exports=function(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A},A.exports.default=A.exports,A.exports.__esModule=!0},2837:function(A,e,t){"use strict";var a=t(5318);e.__esModule=!0,e.default=void 0;var c=a(t(1506)),o=a(t(5354)),l=a(t(9713)),i=a(t(7294)),s=a(t(5697)),n=function(A){function e(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return e=A.call.apply(A,[this].concat(a))||this,(0,l.default)((0,c.default)(e),"state",{theme:"undefined"!=typeof window?window.__theme:null}),e}(0,o.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){var A=this;window.__onThemeChange=function(){A.setState({theme:window.__theme})}},t.toggleTheme=function(A){window.__setPreferredTheme(A)},t.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},e}(i.default.Component);n.propTypes={children:s.default.func.isRequired};var d=n;e.default=d},7441:function(A,e,t){"use strict";var a=t(5318)(t(2837));e.L=a.default},5830:function(A,e,t){"use strict";t.d(e,{Z:function(){return n}});var a=t(7294),c=t(5444),o="layout-module--nav-link-text-active--Vi5nz",l=t(6125),i=t(7441),s=t.p+"static/CV-DanteMogni-afdc4797ca7af6bb27201f47e5a3cce0.pdf",n=function(A){var e=A.pageTitle,n=A.children,d=(0,c.K2)("3159585216");return a.createElement("div",{className:"container"},a.createElement("section",{className:"row align-items-center layout-module--headerContainer--xI2j0"},a.createElement("div",{className:"col-sm-auto"},a.createElement(l.S,{src:"../images/sloth.png",alt:"Sloth Emoji",width:70,placeholder:"blurred",__imageData:t(710)})),a.createElement("div",{className:"col col-12 col-sm-9 col-md-7"},a.createElement("header",{className:"bold layout-module--site-title--5N6mf"},d.site.siteMetadata.title),a.createElement("nav",{className:"row  no-decoration"},a.createElement("ul",{className:"col layout-module--nav-links--EROwB"},a.createElement("li",null,a.createElement(c.rU,{to:"/",activeClassName:o},"Home")),a.createElement("li",null,a.createElement(c.rU,{to:"/blog/",activeClassName:o},"Blog")),a.createElement("li",null,a.createElement(c.rU,{to:"/projects/",activeClassName:o},"Projects")),a.createElement("li",null,a.createElement("a",{href:s,download:!0},"CV"))))),a.createElement("div",{className:"col-sm-auto align-self-start"},a.createElement("title",null,e," | ",d.site.siteMetadata.title),a.createElement(i.L,null,(function(A){var e=A.theme,t=A.toggleTheme;return a.createElement("label",{className:"italic layout-module--theme-toggler--ect9d"},a.createElement("input",{type:"checkbox",onChange:function(A){return t(A.target.checked?"dark":"light")},checked:"dark"===e})," ","Dark mode")})))),a.createElement("div",{className:"row"},a.createElement("main",{className:"col col-12 col-sm-10 col-md-9"},a.createElement("h3",{className:"layout-module--heading--8VjLO"},e),n)))}},2069:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var a={};t.r(a),t.d(a,{VJ:function(){return d},qP:function(){return i},iJ:function(){return n},hn:function(){return s},SZ:function(){return r}});var c=t(7294),o=t(5830),l=t(6125),i="projectsPostList-module--itemProject--XEliz",s="projectsPostList-module--projectDetails--nCPz4",n="projectsPostList-module--itemTitle--W+bGX",d="projectsPostList-module--caption--ao5Nz",r="projectsPostList-module--tag-post--uYhlz",m=function(A){A.pageTitle;return c.createElement("section",null,c.createElement("div",{className:"row g-20 justify-content-center align-items-center"},c.createElement("div",{className:"col col-12 "+i},c.createElement("div",{className:s},c.createElement("div",{className:"itemTitle "+n},c.createElement("span",{className:"italic "+r},"Java"),c.createElement("span",{className:"italic "+r},"Spring Boot"),c.createElement("span",{className:"italic "+r},"PostgreSQL"),c.createElement("span",{className:"italic "+r},"fullstack"),c.createElement("span",{className:"italic "+r},"Bootstrap"),c.createElement("h3",null,"# TODO webapp"),c.createElement("caption",{className:d},"Free online ToDo utility built using Spring Boot Framework."),c.createElement("br",null),c.createElement("a",{href:"https://todoapp-dante.herokuapp.com/",target:"_blank"},"Go to site")),c.createElement("div",{className:a.itemImage},c.createElement(l.S,{src:"../images/todoapp.jpg",width:250,placeholder:"blurred",__imageData:t(3208)})))),c.createElement("div",{className:"col col-12 "+i},c.createElement("div",{className:s},c.createElement("div",{className:"itemTitle "+n},c.createElement("span",{className:"italic "+r},"Vue.js"),c.createElement("span",{className:"italic "+r},"Frontend"),c.createElement("span",{className:"italic "+r},"Javascript"),c.createElement("h3",null,"# Pomodoro"),c.createElement("caption",{className:d},"Simple yet useful Pomodoro web app."),c.createElement("br",null),c.createElement("a",{href:"https://pomodoro-dante.netlify.app/",target:"_blank"},"Go to site")),c.createElement("div",{className:a.itemImage},c.createElement(l.S,{src:"../images/pomodoro.jpg",width:250,placeholder:"blurred",__imageData:t(5983)})))),c.createElement("div",{className:"col col-12  "+i},c.createElement("div",{className:s},c.createElement("div",{className:"itemTitle "+n},c.createElement("span",{className:"italic "+r},"Landing Page"),c.createElement("span",{className:"italic "+r},"HTML"),c.createElement("h3",null,"# Estudio Mogni"),c.createElement("caption",{className:d},"Landing Page for 'Estudio Mogni'"),c.createElement("br",null),c.createElement("a",{href:"https://estudiomogni.com.ar/",target:"_blank"},"Go to site")),c.createElement("div",{className:a.itemImage},c.createElement(l.S,{src:"../images/promo-web.jpg",width:250,placeholder:"blurred",__imageData:t(7270)}))))))},E=function(){return c.createElement(o.Z,{pageTitle:"Projects"},c.createElement(m,{pageTitle:"Overview"}))}},710:function(A){"use strict";A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaklEQVQ4y4XUW0wTZhQA4NPCtrjEGXWybICAilwq5SZYWnq/F2gphZZeoKXQAi23ttCKtFwKDIEi5T6YwvAG03FxEKbLLrJNY2aWTE3cXuZeNh80W7KLbgL9/6XsYQ9L9CTn5X/4zvn//+QAvCBaywXgrpCD25hDaDflw3jVgR3uAk6CwZpdKjeQvS1vS2FwQkegS6PhhSHTJ8PKLiq0lIgJvWUiOFkriqwszL1dUszGFicTy/Vkq8lOhRoXi8iQxTwfExYngL01F07BbmCpxUQSXQzlUu4lsYSCZRryH2pzCt/ipIN/TEOAnQDPBRmyA2B2cMDiEkJdAz/Ebc8Dt1EYWWGm/1moPYJ1OeSrptYs8M4XEFPCX4Md0c8BeapEMNTRQVtNhbJ6JpEtTw0eE5zd0rVyKxX31hfgGY/Rd83nhNOtxpCppmIQqeL+DzlLedDvKIaZE2a43toM9VYBEWMMc6t10OTN+8BspWGfvejv9dkOPOUpMZztqoAz7WWhTj0PPBVi6LbmQ01R9n9gu1kC5txUKOeR4JubM0Rq3C4YGNdAfYtwtNrFfmxX075bGbbjpSEbbivjs+tlyRAseHWqmWjTsAhNJVzotMgAxGn7gbcTwGWRgZwWS5BE7wT8y12IfwX22NyiqboW3lOWNIbk1tDXp9tK8IRLGeDEEJgAQOQmhb163qsFgzAJahUUQpOGASDiMkDCYYFCmE0MdhqsOu9v9K/NdiKbk/+IX3qYdB37oaEg/WFfNR+7ddSt8373/aV3ux5e6LU8GGjIH9ZwSa+XicjgUNMJIJMyIC+HRgTYATarEmoLKOW3rozgH7++jEc8BkmjVQhG6dHwKlHCr83KFHym14EG+jvwV58s45/v38CfXxrGXov0GsaPt5uB/JzMEEFWKnBiyUkMSuKdJjP/6d2rk/j26tjWaa8pfclv335j1bGwR5XCWOysMQSUakFg0NcRODc9uvXh4gW0MjvwLHs/RAniQgEGV7TAoaWAojjziqSAhF0V3MCXcyfR+sUefKaz4uPZ7kr/kFNjr84l/+QxcvH5IWfg4mQvqjKWoiqzAqnUuXhp2vekkBK2X8+OAoBQeLm+RfRFeQ0VK1iRG7YiGlqdPI7XJpvx6rgTLww24Pe6THh5tAkvDdvRwlADnht2ofcnvfjTy6ObpUUiXKPhfZYhlIGy7wqAOD9uj9KS2cxJ2duio0bi9kpJYO10C1oe2wa2RlzajQlPyebNBR9aGj+B/U41GjmhxeMeQ2DApcXNRvGTGgUlvV5JA4eGSYR8AhC0ShLIk/dma+nRuNOShxZGHWh53InmT9WiIZcad1TmoFuL/eiHG/N4ccKDmsvFqK1KiprLJdgko8gtiiywa9kh7SY+QCHjAIEKAAVZkeE6dvxvLUYBnu6uQOf6qtHcYB2a6TGjhmIGGnJp8J2PxtCDG3NofsgZqFNzsKNEcC84j8FPM0gyoMeuBCgRpcG3S1Wgp0WBXph6s7aQhvvthRvvtOlRED57shL5j2uQjp8c8DuVG+sXvZu3Fvu3fA4Vdug499wm8Us6QTI4dBywKGgAnIR9oOGSQ4qYJCikJ2j0ojTcpOPi7tqCzf5G1YavUbU56FJvmvKzsCAtGjdqWXiytRT5bApsK2beYZDDQ7kpkWANYturKiEC6HFvgF3LhbKcTJBlHXap2El/lYqOYmPuse3Ui49iGTX+96TIPd28lKh+JTPxWZk4HatYR74PXnl3CICUEvsvWMRIAG5SBLAS39yedDktHvjJkTG5mYcq8yixXXnHYnsk6THtlEP7kjIOhgEz8S3ITozI4CRH9fFSo/nsIxHAJIUTRBkHt8F/AIalPyJecbkoAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/0df950f32da69158c582d4331bd3f826/ad998/sloth.png","srcSet":"/static/0df950f32da69158c582d4331bd3f826/7ceb7/sloth.png 18w,\\n/static/0df950f32da69158c582d4331bd3f826/83fe9/sloth.png 35w,\\n/static/0df950f32da69158c582d4331bd3f826/ad998/sloth.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/0df950f32da69158c582d4331bd3f826/4f7ad/sloth.webp 18w,\\n/static/0df950f32da69158c582d4331bd3f826/dbb7e/sloth.webp 35w,\\n/static/0df950f32da69158c582d4331bd3f826/299bc/sloth.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},3208:function(A){"use strict";A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAYAQACAwAAAAAAAAAAAAAAAAAAAgEDBP/aAAwDAQACEAMQAAAB3S1WMcVtS0hnsAP/xAAcEAEAAgEFAAAAAAAAAAAAAAACAQMABBARFDL/2gAIAQEAAQUCOnMjrDLa4CPnLY5W/wD/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBL/2gAIAQMBAT8BJf8A/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEhP/2gAIAQIBAT8BuzSf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAERICFC/9oACAEBAAY/Ak9OiEK3/8QAHBAAAQQDAQAAAAAAAAAAAAAAAQARIZEQQVFx/9oACAEBAAE/ISxLyHhA20lIQ204eGKVT02p6bx//9oADAMBAAIAAwAAABAz2H3/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAEDAQE/EEjRYc//xAAZEQACAwEAAAAAAAAAAAAAAAAAEQEQIUH/2gAIAQIBAT8Q6seMHX//xAAfEAEBAQACAAcAAAAAAAAAAAABEQAhMUFRYXGBoeH/2gAIAQEAAT8QnjFEfXGQkPVmNvAbhKA4M4dyhIedNEU5k18BfLX9bd9q+7d//9k="},"images":{"fallback":{"src":"/static/5d1dcb0978134c6ee34b4f2c5f799979/f505e/todoapp.jpg","srcSet":"/static/5d1dcb0978134c6ee34b4f2c5f799979/df74b/todoapp.jpg 63w,\\n/static/5d1dcb0978134c6ee34b4f2c5f799979/8bb35/todoapp.jpg 125w,\\n/static/5d1dcb0978134c6ee34b4f2c5f799979/f505e/todoapp.jpg 250w,\\n/static/5d1dcb0978134c6ee34b4f2c5f799979/be5ed/todoapp.jpg 500w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/static/5d1dcb0978134c6ee34b4f2c5f799979/74c72/todoapp.webp 63w,\\n/static/5d1dcb0978134c6ee34b4f2c5f799979/d66e1/todoapp.webp 125w,\\n/static/5d1dcb0978134c6ee34b4f2c5f799979/e7160/todoapp.webp 250w,\\n/static/5d1dcb0978134c6ee34b4f2c5f799979/5f169/todoapp.webp 500w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":250,"height":250}')},7270:function(A){"use strict";A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAMBBP/aAAwDAQACEAMQAAABqnO3DdiLRgD/xAAYEAADAQEAAAAAAAAAAAAAAAAAARAhMf/aAAgBAQABBQIyNGi5f//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/AWP/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAQESH/2gAIAQIBAT8BCJnTDf8A/8QAGxAAAAcBAAAAAAAAAAAAAAAAAAECECAxMpH/2gAIAQEABj8CshtPXzH/xAAcEAEAAgEFAAAAAAAAAAAAAAABABFxECAhMWH/2gAIAQEAAT8h4q08ukYR9JbbERHVs//aAAwDAQACAAMAAAAQox99/8QAFhEAAwAAAAAAAAAAAAAAAAAAESBR/9oACAEDAQE/EBif/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQIYH/2gAIAQIBAT8QaHTkAKF//8QAHRABAQABBAMAAAAAAAAAAAAAAREAITFBUSDB8P/aAAgBAQABPxALQrElOsv1es04DhKOWCVm3eRpL3pgQkiG3h//2Q=="},"images":{"fallback":{"src":"/static/857491d4f314353790e0d77610a23c86/f505e/promo-web.jpg","srcSet":"/static/857491d4f314353790e0d77610a23c86/df74b/promo-web.jpg 63w,\\n/static/857491d4f314353790e0d77610a23c86/8bb35/promo-web.jpg 125w,\\n/static/857491d4f314353790e0d77610a23c86/f505e/promo-web.jpg 250w,\\n/static/857491d4f314353790e0d77610a23c86/be5ed/promo-web.jpg 500w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/static/857491d4f314353790e0d77610a23c86/74c72/promo-web.webp 63w,\\n/static/857491d4f314353790e0d77610a23c86/d66e1/promo-web.webp 125w,\\n/static/857491d4f314353790e0d77610a23c86/e7160/promo-web.webp 250w,\\n/static/857491d4f314353790e0d77610a23c86/5f169/promo-web.webp 500w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":250,"height":250}')},5983:function(A){"use strict";A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHi0zpJLEloGouP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEQEQL/2gAIAQEAAQUCQ1FMRpzP/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ASv/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AWIr/8QAFhAAAwAAAAAAAAAAAAAAAAAAADAx/9oACAEBAAY/AiI//8QAGxAAAwACAwAAAAAAAAAAAAAAAAERECExQVH/2gAIAQEAAT8hSmheND5EZGW6KGr3j//aAAwDAQACAAMAAAAQyBd//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QjZA+Z//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/EEXNR//EABgQAQEBAQEAAAAAAAAAAAAAAAERADEh/9oACAEBAAE/EDPK2b1EAPUxBBzGpERyvbgAouorfXK56Juc3//Z"},"images":{"fallback":{"src":"/static/3ba654dcad2fb534d58b7742cb62a8f0/f505e/pomodoro.jpg","srcSet":"/static/3ba654dcad2fb534d58b7742cb62a8f0/df74b/pomodoro.jpg 63w,\\n/static/3ba654dcad2fb534d58b7742cb62a8f0/8bb35/pomodoro.jpg 125w,\\n/static/3ba654dcad2fb534d58b7742cb62a8f0/f505e/pomodoro.jpg 250w,\\n/static/3ba654dcad2fb534d58b7742cb62a8f0/be5ed/pomodoro.jpg 500w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/static/3ba654dcad2fb534d58b7742cb62a8f0/74c72/pomodoro.webp 63w,\\n/static/3ba654dcad2fb534d58b7742cb62a8f0/d66e1/pomodoro.webp 125w,\\n/static/3ba654dcad2fb534d58b7742cb62a8f0/e7160/pomodoro.webp 250w,\\n/static/3ba654dcad2fb534d58b7742cb62a8f0/5f169/pomodoro.webp 500w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":250,"height":250}')}}]);
//# sourceMappingURL=component---src-pages-projects-index-js-593291d1b18727dcea30.js.map