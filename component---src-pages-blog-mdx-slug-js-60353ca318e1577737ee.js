(self.webpackChunkdante_s_website=self.webpackChunkdante_s_website||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},2837:function(e,t,r){"use strict";var n=r(5318);t.__esModule=!0,t.default=void 0;var o=n(r(1506)),a=n(r(5354)),l=n(r(9713)),c=n(r(7294)),i=n(r(5697)),s=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,(0,l.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);s.propTypes={children:i.default.func.isRequired};var u=s;t.default=u},7441:function(e,t,r){"use strict";var n=r(5318)(r(2837));t.L=n.default},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),c=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),d=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),i=f(t),p=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:d},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(p,s({},a))}},5830:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(5444),a="layout-module--nav-link-text-active--Vi5nz",l=r(6125),c=r(7441),i=r.p+"static/CV-DanteMogni-afdc4797ca7af6bb27201f47e5a3cce0.pdf",s=function(e){var t=e.pageTitle,s=e.children,u=(0,o.K2)("3159585216");return n.createElement("div",{className:"container"},n.createElement("section",{className:"row align-items-center layout-module--headerContainer--xI2j0"},n.createElement("div",{className:"col-sm-auto"},n.createElement(l.S,{src:"../images/sloth.png",alt:"Sloth Emoji",width:70,placeholder:"blurred",__imageData:r(710)})),n.createElement("div",{className:"col col-12 col-sm-9 col-md-7"},n.createElement("header",{className:"bold layout-module--site-title--5N6mf"},u.site.siteMetadata.title),n.createElement("nav",{className:"row  no-decoration"},n.createElement("ul",{className:"col layout-module--nav-links--EROwB"},n.createElement("li",null,n.createElement(o.rU,{to:"/",activeClassName:a},"Home")),n.createElement("li",null,n.createElement(o.rU,{to:"/blog/",activeClassName:a},"Blog")),n.createElement("li",null,n.createElement(o.rU,{to:"/projects/",activeClassName:a},"Projects")),n.createElement("li",null,n.createElement("a",{href:i,download:!0},"CV"))))),n.createElement("div",{className:"col-sm-auto align-self-start"},n.createElement("title",null,t," | ",u.site.siteMetadata.title),n.createElement(c.L,null,(function(e){var t=e.theme,r=e.toggleTheme;return n.createElement("label",{className:"italic layout-module--theme-toggler--ect9d"},n.createElement("input",{type:"checkbox",onChange:function(e){return r(e.target.checked?"dark":"light")},checked:"dark"===t})," ","Dark mode")})))),n.createElement("div",{className:"row"},n.createElement("main",{className:"col col-12 col-sm-10 col-md-9"},n.createElement("h3",{className:"layout-module--heading--8VjLO"},t),s)))}},8917:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(6725),a=r(6125),l=r(5830),c=r(5867);t.default=function(e){var t=e.data,r=(0,a.d)(t.file.childMdx.frontmatter.hero_image);return n.createElement(l.Z,{pageTitle:t.file.childMdx.frontmatter.title},n.createElement("span",{className:"italic "+c.SZ},t.file.childMdx.frontmatter.tags),n.createElement("p",null,t.file.childMdx.frontmatter.date),n.createElement(a.G,{image:r,alt:t.file.childMdx.frontmatter.hero_image_alt}),n.createElement(o.MDXRenderer,null,t.file.childMdx.body))}},5867:function(e,t,r){"use strict";r.d(t,{MP:function(){return n},fI:function(){return o},pq:function(){return a},nP:function(){return l},SZ:function(){return c}});var n="blogPostList-module--blog-post-heading--g97m0",o="blogPostList-module--post-container--irC6w",a="blogPostList-module--date-post--ai3WB",l="blogPostList-module--heading--9rJAB",c="blogPostList-module--tag-post--TN2Gm"},710:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaklEQVQ4y4XUW0wTZhQA4NPCtrjEGXWybICAilwq5SZYWnq/F2gphZZeoKXQAi23ttCKtFwKDIEi5T6YwvAG03FxEKbLLrJNY2aWTE3cXuZeNh80W7KLbgL9/6XsYQ9L9CTn5X/4zvn//+QAvCBaywXgrpCD25hDaDflw3jVgR3uAk6CwZpdKjeQvS1vS2FwQkegS6PhhSHTJ8PKLiq0lIgJvWUiOFkriqwszL1dUszGFicTy/Vkq8lOhRoXi8iQxTwfExYngL01F07BbmCpxUQSXQzlUu4lsYSCZRryH2pzCt/ipIN/TEOAnQDPBRmyA2B2cMDiEkJdAz/Ebc8Dt1EYWWGm/1moPYJ1OeSrptYs8M4XEFPCX4Md0c8BeapEMNTRQVtNhbJ6JpEtTw0eE5zd0rVyKxX31hfgGY/Rd83nhNOtxpCppmIQqeL+DzlLedDvKIaZE2a43toM9VYBEWMMc6t10OTN+8BspWGfvejv9dkOPOUpMZztqoAz7WWhTj0PPBVi6LbmQ01R9n9gu1kC5txUKOeR4JubM0Rq3C4YGNdAfYtwtNrFfmxX075bGbbjpSEbbivjs+tlyRAseHWqmWjTsAhNJVzotMgAxGn7gbcTwGWRgZwWS5BE7wT8y12IfwX22NyiqboW3lOWNIbk1tDXp9tK8IRLGeDEEJgAQOQmhb163qsFgzAJahUUQpOGASDiMkDCYYFCmE0MdhqsOu9v9K/NdiKbk/+IX3qYdB37oaEg/WFfNR+7ddSt8373/aV3ux5e6LU8GGjIH9ZwSa+XicjgUNMJIJMyIC+HRgTYATarEmoLKOW3rozgH7++jEc8BkmjVQhG6dHwKlHCr83KFHym14EG+jvwV58s45/v38CfXxrGXov0GsaPt5uB/JzMEEFWKnBiyUkMSuKdJjP/6d2rk/j26tjWaa8pfclv335j1bGwR5XCWOysMQSUakFg0NcRODc9uvXh4gW0MjvwLHs/RAniQgEGV7TAoaWAojjziqSAhF0V3MCXcyfR+sUefKaz4uPZ7kr/kFNjr84l/+QxcvH5IWfg4mQvqjKWoiqzAqnUuXhp2vekkBK2X8+OAoBQeLm+RfRFeQ0VK1iRG7YiGlqdPI7XJpvx6rgTLww24Pe6THh5tAkvDdvRwlADnht2ofcnvfjTy6ObpUUiXKPhfZYhlIGy7wqAOD9uj9KS2cxJ2duio0bi9kpJYO10C1oe2wa2RlzajQlPyebNBR9aGj+B/U41GjmhxeMeQ2DApcXNRvGTGgUlvV5JA4eGSYR8AhC0ShLIk/dma+nRuNOShxZGHWh53InmT9WiIZcad1TmoFuL/eiHG/N4ccKDmsvFqK1KiprLJdgko8gtiiywa9kh7SY+QCHjAIEKAAVZkeE6dvxvLUYBnu6uQOf6qtHcYB2a6TGjhmIGGnJp8J2PxtCDG3NofsgZqFNzsKNEcC84j8FPM0gyoMeuBCgRpcG3S1Wgp0WBXph6s7aQhvvthRvvtOlRED57shL5j2uQjp8c8DuVG+sXvZu3Fvu3fA4Vdug499wm8Us6QTI4dBywKGgAnIR9oOGSQ4qYJCikJ2j0ojTcpOPi7tqCzf5G1YavUbU56FJvmvKzsCAtGjdqWXiytRT5bApsK2beYZDDQ7kpkWANYturKiEC6HFvgF3LhbKcTJBlHXap2El/lYqOYmPuse3Ui49iGTX+96TIPd28lKh+JTPxWZk4HatYR74PXnl3CICUEvsvWMRIAG5SBLAS39yedDktHvjJkTG5mYcq8yixXXnHYnsk6THtlEP7kjIOhgEz8S3ITozI4CRH9fFSo/nsIxHAJIUTRBkHt8F/AIalPyJecbkoAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/0df950f32da69158c582d4331bd3f826/ad998/sloth.png","srcSet":"/static/0df950f32da69158c582d4331bd3f826/7ceb7/sloth.png 18w,\\n/static/0df950f32da69158c582d4331bd3f826/83fe9/sloth.png 35w,\\n/static/0df950f32da69158c582d4331bd3f826/ad998/sloth.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/0df950f32da69158c582d4331bd3f826/4f7ad/sloth.webp 18w,\\n/static/0df950f32da69158c582d4331bd3f826/dbb7e/sloth.webp 35w,\\n/static/0df950f32da69158c582d4331bd3f826/299bc/sloth.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-60353ca318e1577737ee.js.map