(self.webpackChunkdante_s_website=self.webpackChunkdante_s_website||[]).push([[576],{9713:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},2837:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(1506)),c=l(a(5354)),i=l(a(9713)),s=l(a(7294)),o=l(a(5697)),r=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t=e.call.apply(e,[this].concat(l))||this,(0,i.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,c.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);r.propTypes={children:o.default.func.isRequired};var d=r;t.default=d},7441:function(e,t,a){"use strict";var l=a(5318)(a(2837));t.L=l.default},7002:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var l=a(7294),n=a(5444),c="layout-module--nav-link-text-active--Vi5nz",i=a(6125),s=a(7441),o=function(e){var t=e.pageTitle,o=e.children,r=(0,n.K2)("3159585216");return l.createElement("div",{className:"container"},l.createElement("section",{className:"row align-items-center layout-module--headerContainer--xI2j0"},l.createElement("div",{className:"col-sm-auto"},l.createElement(i.S,{src:"../images/sloth.png",alt:"Sloth Emoji",width:70,placeholder:"blurred",__imageData:a(710)})),l.createElement("div",{className:"col col-12 col-sm-9 col-md-7"},l.createElement("header",{className:"bold layout-module--site-title--5N6mf"},r.site.siteMetadata.title),l.createElement("nav",{className:"row  no-decoration"},l.createElement("ul",{className:"col layout-module--nav-links--EROwB"},l.createElement("li",null,l.createElement(n.rU,{to:"/",activeClassName:c},"Home")),l.createElement("li",null,l.createElement(n.rU,{to:"/blog/",activeClassName:c},"Blog")),l.createElement("li",null,l.createElement(n.rU,{to:"/projects/",activeClassName:c},"Projects")),l.createElement("li",null,l.createElement(n.rU,{to:"/cv/",activeClassName:c},"CV"))))),l.createElement("div",{className:"col-sm-auto align-self-start"},l.createElement("title",null,t," | ",r.site.siteMetadata.title),l.createElement(s.L,null,(function(e){var t=e.theme,a=e.toggleTheme;return l.createElement("label",{className:"italic layout-module--theme-toggler--ect9d"},l.createElement("input",{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t})," ","Dark mode")})))),l.createElement("div",{className:"row"},l.createElement("main",{className:"col col-12 col-sm-10 col-md-9"},l.createElement("h3",{className:"layout-module--heading--8VjLO"},t),o)))}},1898:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(7002);t.default=function(){return l.createElement(n.Z,{pageTitle:"My CV"})}},710:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaklEQVQ4y4XUW0wTZhQA4NPCtrjEGXWybICAilwq5SZYWnq/F2gphZZeoKXQAi23ttCKtFwKDIEi5T6YwvAG03FxEKbLLrJNY2aWTE3cXuZeNh80W7KLbgL9/6XsYQ9L9CTn5X/4zvn//+QAvCBaywXgrpCD25hDaDflw3jVgR3uAk6CwZpdKjeQvS1vS2FwQkegS6PhhSHTJ8PKLiq0lIgJvWUiOFkriqwszL1dUszGFicTy/Vkq8lOhRoXi8iQxTwfExYngL01F07BbmCpxUQSXQzlUu4lsYSCZRryH2pzCt/ipIN/TEOAnQDPBRmyA2B2cMDiEkJdAz/Ebc8Dt1EYWWGm/1moPYJ1OeSrptYs8M4XEFPCX4Md0c8BeapEMNTRQVtNhbJ6JpEtTw0eE5zd0rVyKxX31hfgGY/Rd83nhNOtxpCppmIQqeL+DzlLedDvKIaZE2a43toM9VYBEWMMc6t10OTN+8BspWGfvejv9dkOPOUpMZztqoAz7WWhTj0PPBVi6LbmQ01R9n9gu1kC5txUKOeR4JubM0Rq3C4YGNdAfYtwtNrFfmxX075bGbbjpSEbbivjs+tlyRAseHWqmWjTsAhNJVzotMgAxGn7gbcTwGWRgZwWS5BE7wT8y12IfwX22NyiqboW3lOWNIbk1tDXp9tK8IRLGeDEEJgAQOQmhb163qsFgzAJahUUQpOGASDiMkDCYYFCmE0MdhqsOu9v9K/NdiKbk/+IX3qYdB37oaEg/WFfNR+7ddSt8373/aV3ux5e6LU8GGjIH9ZwSa+XicjgUNMJIJMyIC+HRgTYATarEmoLKOW3rozgH7++jEc8BkmjVQhG6dHwKlHCr83KFHym14EG+jvwV58s45/v38CfXxrGXov0GsaPt5uB/JzMEEFWKnBiyUkMSuKdJjP/6d2rk/j26tjWaa8pfclv335j1bGwR5XCWOysMQSUakFg0NcRODc9uvXh4gW0MjvwLHs/RAniQgEGV7TAoaWAojjziqSAhF0V3MCXcyfR+sUefKaz4uPZ7kr/kFNjr84l/+QxcvH5IWfg4mQvqjKWoiqzAqnUuXhp2vekkBK2X8+OAoBQeLm+RfRFeQ0VK1iRG7YiGlqdPI7XJpvx6rgTLww24Pe6THh5tAkvDdvRwlADnht2ofcnvfjTy6ObpUUiXKPhfZYhlIGy7wqAOD9uj9KS2cxJ2duio0bi9kpJYO10C1oe2wa2RlzajQlPyebNBR9aGj+B/U41GjmhxeMeQ2DApcXNRvGTGgUlvV5JA4eGSYR8AhC0ShLIk/dma+nRuNOShxZGHWh53InmT9WiIZcad1TmoFuL/eiHG/N4ccKDmsvFqK1KiprLJdgko8gtiiywa9kh7SY+QCHjAIEKAAVZkeE6dvxvLUYBnu6uQOf6qtHcYB2a6TGjhmIGGnJp8J2PxtCDG3NofsgZqFNzsKNEcC84j8FPM0gyoMeuBCgRpcG3S1Wgp0WBXph6s7aQhvvthRvvtOlRED57shL5j2uQjp8c8DuVG+sXvZu3Fvu3fA4Vdug499wm8Us6QTI4dBywKGgAnIR9oOGSQ4qYJCikJ2j0ojTcpOPi7tqCzf5G1YavUbU56FJvmvKzsCAtGjdqWXiytRT5bApsK2beYZDDQ7kpkWANYturKiEC6HFvgF3LhbKcTJBlHXap2El/lYqOYmPuse3Ui49iGTX+96TIPd28lKh+JTPxWZk4HatYR74PXnl3CICUEvsvWMRIAG5SBLAS39yedDktHvjJkTG5mYcq8yixXXnHYnsk6THtlEP7kjIOhgEz8S3ITozI4CRH9fFSo/nsIxHAJIUTRBkHt8F/AIalPyJecbkoAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/0df950f32da69158c582d4331bd3f826/ad998/sloth.png","srcSet":"/static/0df950f32da69158c582d4331bd3f826/7ceb7/sloth.png 18w,\\n/static/0df950f32da69158c582d4331bd3f826/83fe9/sloth.png 35w,\\n/static/0df950f32da69158c582d4331bd3f826/ad998/sloth.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/0df950f32da69158c582d4331bd3f826/4f7ad/sloth.webp 18w,\\n/static/0df950f32da69158c582d4331bd3f826/dbb7e/sloth.webp 35w,\\n/static/0df950f32da69158c582d4331bd3f826/299bc/sloth.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')}}]);
//# sourceMappingURL=component---src-pages-cv-js-27fbd6dc457dfc1ea56c.js.map