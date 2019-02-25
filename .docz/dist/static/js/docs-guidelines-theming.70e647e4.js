(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docs/Guidelines/Theming.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./src/components/Button/index.js"),l=t("./src/Utils/GlobalStyle.js"),s=t("./src/Utils/Theme.js"),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d={colors:{primary:"red"}};function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return h});var h=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,y(n).call(this,e))).layout=null,t}var t,r,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(l.a,null),o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"theming"}},"Theming"),o.a.createElement(a.MDXTag,{name:"p",components:n},o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import {Grid, Col, Row} from 'react-styled-flexboxgrid'")),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"introduction"}},"Introduction"),o.a.createElement(a.MDXTag,{name:"p",components:n},o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ThemeProvider>")," returns its children when rendering, so it must only wrap a single child node as it may be used as the root of the render() method."),o.a.createElement(i.e,{__codesandbox:"undefined",__position:1,__code:"<ThemeProvider theme={HotelTheme}>\n  <div>\n    <Button>Default Theme</Button>\n  </div>\n</ThemeProvider>",__scope:{props:this?this.props:t,Button:c.a,GlobalStyle:l.a,theme:s.a,styled:u.d,ThemeProvider:u.a,HotelTheme:d}},o.a.createElement(u.a,{theme:d},o.a.createElement("div",null,o.a.createElement(c.a,null,"Default Theme")))))}}])&&p(t.prototype,r),m&&p(t,m),n}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/Utils/Colors.js":function(e,n,t){"use strict";var r={primary:["#429FAA"],primaryHover:["#1D727F"],secondary:["#4A90E2"],secondaryHover:["#2261CF"],tertiary:["#7BBCC4"],interactive01:["#429FAA"],interactive02:["#429FAA"],ui01:["#fff"],ui02:"#f3f3f3",ui03:["#bebebe"],ui04:["#a4a4a4"],text01:["#171717"],text02:["#565656"],text03:["#8c8c8c"],icon01:["#fff"],icon02:["#565656"],field01:["#f3f3f3"],field02:["#dcdcdc"],inverse01:["#fff"],inverse02:["#3d3d3d"],support01:["#EB5757"],support01Hover:["#DD2C2C"],support02:["#27ae60"],support03:["#ffde03"],support04:["#4388DF"],focus:["#429FAA"],activeui:["#bebebe"],disabled01:["#f3f3f3"],disabled02:["#bebebe"],disabled03:["#8c8c8c"],overlay01:"rgba(0, 0, 0, 0.6)",overlay02:"rgba(243, 243, 243, 0.7)",skeleton:["#C6E2E6"],skeletonBg:["#E8F3F5"],white10:"rgba(255, 255, 255, 0.1)",white20:"rgba(255, 255, 255, 0.2)",white30:"rgba(255, 255, 255, 0.3)",white40:"rgba(255, 255, 255, 0.4)",white50:"rgba(255, 255, 255, 0.5)",white60:"rgba(255, 255, 255, 0.6)",white70:"rgba(255, 255, 255, 0.7)",white80:"rgba(255, 255, 255, 0.8)",white90:"rgba(255, 255, 255, 0.9)",white100:"#fff",black10:"rgba(0,0,0,0.1)",black20:"rgba(0,0,0,0.2)",black30:"rgba(0,0,0,0.3)",black40:"rgba(0,0,0,0.4)",black50:"rgba(0,0,0,0.5)",black60:"rgba(0,0,0,0.6)",black70:"rgba(0,0,0,0.7)",black80:"rgba(0,0,0,0.8)",black90:"rgba(0,0,0,0.9)",black100:"rgba(0,0,0,1)",gray10:"#f3f3f3",gray20:"#dcdcdc",gray30:"#bebebe",gray40:"#a4a4a4",gray50:"#8c8c8c",gray60:"#6f6f6f",gray70:"#565656",gray80:"#3d3d3d",gray90:"#282828",gray100:"#171717",brandPrimary10:"#E8F3F5",brandPrimary20:"#C6E2E6",brandPrimary30:"#A1CFD5",brandPrimary40:"#7BBCC4",brandPrimary50:"#5EADB7",brandPrimary60:"#429FAA",brandPrimary70:"#3C97A3",brandPrimary80:"#338D99",brandPrimary90:"#2B8390",brandPrimary100:"#1D727F",brandSecondary10:"#E9F2FC",brandSecondary20:"#C9DEF6",brandSecondary30:"#A5C8F1",brandSecondary40:"#80B1EB",brandSecondary50:"#65A1E6",brandSecondary60:"#4A90E2",brandSecondary70:"#4388DF",brandSecondary80:"#3A7DDA",brandSecondary90:"#3273D6",brandSecondary100:"#2261CF",red10:"#FDEBEB",red20:"#F9CDCD",red30:"#F5ABAB",red40:"#F18989",red50:"#EE7070",red60:"#EB5757",red70:"#E94F4F",red80:"#E54646",red90:"#E23C3C",red100:"#DD2C2C",green60:"#27ae60",yellow60:"#ffde03",trustyou20:"#8b97a8",trustyou40:"#f2c94c",trustyou60:"#a2c569",trustyou80:"#4aae27",trustyou100:"#27ae60"};n.a=r},"./src/Utils/GlobalStyle.js":function(e,n,t){"use strict";var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=t("./node_modules/polished/dist/polished.es.js"),a=t("./src/Utils/Theme.js");function i(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    ","\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n    }\n\n    ::selection {\n        background: darkturquoise;\n        color: #fff;\n    }\n"]);return i=function(){return e},e}var c=Object(r.b)(i(),Object(o.a)(),a.a.fontSystem,a.a.typeScale[4],a.a.colors.text01);n.a=c},"./src/Utils/Theme.js":function(e,n,t){"use strict";t.d(n,"g",function(){return i}),t.d(n,"c",function(){return c}),t.d(n,"h",function(){return l}),t.d(n,"d",function(){return s}),t.d(n,"b",function(){return d}),t.d(n,"f",function(){return f}),t.d(n,"e",function(){return g});var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=t("./src/Utils/Colors.js");function a(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n      @media (min-width: ","rem) {\n        ","\n      }\n    "]);return a=function(){return e},e}var i=[0,"0.0625rem","0.125rem","0.25rem","0.5rem","0.75rem","1rem","1.5rem","2rem","2.5rem","3rem"],c=[0,"1rem","1.5rem","2rem","3rem","4rem","6rem","10rem","15rem"],l=[0,"0.6875rem","0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.75rem","2.25rem","3.375rem","4.75rem"],s=[0,"1rem","1.125rem","1.375rem","1.5rem","1.625rem","2.25rem","2.75rem","4rem","5.5rem"],u='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',d=[u],m={raised:"0 1px 2px 0 rgba(0,0,0,0.1)",button:"0 4px 8px 0 rgba(0,0,0,0.1)",overlay:"0 4px 8px 0 rgba(0,0,0,0.1)",popOut:"0 12px 24px 0 rgba(0,0,0,0.1)"},f={small:"0.125rem",medium:"0.35rem",large:"0.5rem",pill:"2rem",circle:"50%"},p=["0.125rem"],b=["2rem"],y={xl:1200,lg:1024,md:768,sm:576},g=Object.keys(y).reduce(function(e,n){return e[n]=function(){return Object(r.c)(a(),y[n]/16,r.c.apply(void 0,arguments))},e},{}),h={colors:o.a,spacing:i,layoutScale:c,fontCustom:'"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;',fontSystem:u,fontDefault:d,typeScale:l,lineHeight:s,fontRegular:400,fontBold:600,radius:f,buttonRadius:p,buttonBorderWidth:"0.125rem",buttonRounded:b,boxShadows:m,media:g};n.a=h},"./src/components/Button/index.js":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./src/Utils/Theme.js");function c(){var e=s(["\n    position: relative;\n    border: none;\n    padding: 0;\n    box-shadow: none;\n    pointer-events: none;\n    background: ",";\n  \n    &:hover,\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n      cursor: default;\n    }\n  \n    &:before {\n      content: '';\n      width: 0%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0.3;\n      background: ",";\n      animation: "," 3000ms ease-in-out infinite;\n    }\n"]);return c=function(){return e},e}function l(){var e=s(["\n  0% {\n        width: 0%;\n        left: 0;\n        right: auto;\n        opacity: 0.3;\n      }\n      20% {\n        width: 100%;\n        left: 0;\n        right: auto;\n        opacity: 1;\n      }\n      28% {\n        width: 100%;\n        left: auto;\n        right: 0;\n      }\n      51% {\n        width: 0%;\n        left: auto;\n        right: 0;\n      }\n      58% {\n        width: 0%;\n        left: auto;\n        right: 0;\n      }\n      82% {\n        width: 100%;\n        left: auto;\n        right: 0;\n      }\n      83% {\n        width: 100%;\n        left: 0;\n        right: auto;\n      }\n      96% {\n        width: 0%;\n        left: 0;\n        right: auto;\n      }\n      100% {\n        width: 0%;\n        left: 0;\n        right: auto;\n        opacity: 0.3;\n      }\n"]);return l=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u=Object(a.e)(l()),d=a.d.div(c(),function(e){return e.theme.colors.skeletonBg},function(e){return e.theme.colors.skeleton},u);d.defaultProps={theme:i.a};var m=d;function f(){var e=g(["\nheight: ",";\nwidth: 8rem;\n"]);return f=function(){return e},e}function p(){var e=g(["\n    padding: ",";\n    height: 3rem;\n    width: 3rem;\n    box-shadow: ",";\n\n    svg {\n      margin-left: 0;\n    }\n  "]);return p=function(){return e},e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function y(){var e=g(["\n  ",";\n  margin: 2px 4px;\n  display: inline-block;\n  /* Full width */\n  width: ",";\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  /* Only if using bold text */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: 16px;\n  letter-spacing: 0;\n  cursor: pointer;\n  user-select: none;\n  border-style: solid;\n  border-width: ",";\n  transition: all 250ms ease-in-out;\n  border-radius: ",";\n  ",";\n\n  svg {\n    margin-left: ",";\n    fill: currentColor;\n    vertical-align: middle;\n    transition: fill 250ms ease-in-out;\n  }\n\n  &:active {\n    transform: scale(.98);\n    outline: none;\n  }\n\n  &:disabled {\n      background-color: ",";\n      color: ",";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n        /* box-shadow:inset 0 4px 8px 0 rgba(0,0,0,.16); */\n      }\n    }\n"]);return y=function(){return e},e}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",function(){return w}),t.d(n,"b",function(){return j}),t.d(n,"c",function(){return O});var h={small:"\n    padding: ".concat(i.a.spacing[3]," ").concat(i.a.spacing[7],";\n    height: ").concat(i.a.spacing[8],";\n    font-size: ").concat(i.a.typeScale[3],";\n  "),normal:"\n    padding: ".concat(i.a.spacing[4]," ").concat(i.a.spacing[8],";\n    height: ").concat(i.a.spacing[10],";\n    font-size: ").concat(i.a.typeScale[3],";\n  "),big:"\n    padding: ".concat(i.a.spacing[6]," ").concat(i.a.spacing[10],";\n    height: ").concat(i.a.layoutScale[5],";\n    font-size: ").concat(i.a.typeScale[4],";\n  ")},v=Object(a.d)("button")(y(),function(e){var n=e.scale;return h[void 0===n?"normal":n]},function(e){return e.fullWidth&&"100%"},i.a.fontBold,i.a.buttonBorderWidth,function(e){return e.rounded?i.a.buttonRounded:i.a.buttonRadius},function(e){var n=e.kind,t=void 0===n?"primary":n,r=e.outline;return function(e){var n=function(e){return function(n,t,r){var o=e?n:"transparent",a=e?"transparent":n,i=r;return"\n    background-color: ".concat(a,";\n    border-color: ").concat(o,";\n    color: ").concat(e?n:t,";\n\n    &:hover,\n    &:focus {\n      background-color: ").concat(e?a:i,";\n      border-color: ").concat(e?i:o,";\n      color: ").concat(e?i:t,";\n\n      svg {\n        fill: currentColor;\n      }\n    }\n  ")}}(e);return{primary:n("".concat(i.a.colors.primary),"".concat(i.a.colors.inverse01),"".concat(i.a.colors.primaryHover)),secondary:n("".concat(i.a.colors.secondary),"".concat(i.a.colors.inverse01),"".concat(i.a.colors.secondaryHover)),ghost:n("transparent","".concat(i.a.colors.primary),"".concat(i.a.colors.brandPrimary10)),danger:n("".concat(i.a.colors.support01),"".concat(i.a.colors.inverse01),"".concat(i.a.colors.support01Hover))}}(void 0!==r&&r)[t]},i.a.spacing[4],i.a.colors.disabled01,i.a.colors.disabled03,i.a.colors.disabled01,i.a.colors.disabled03),w=function(e){var n=e.children,t=b(e,["children"]);return o.a.createElement(v,t,n)},j=Object(a.d)(w)(p(),i.a.spacing[0],i.a.boxShadows.button),O=Object(a.d)(m)(f(),i.a.spacing[10]);w.defaultProps={scales:"normal",kind:"primary",outline:!1,rounded:!1,fullWidth:!1,theme:i.a},w.displayName="Button",j.displayName="ButtonIcon",O.displayName="ButtonSkeleton",w.__docgenInfo={description:"",methods:[],displayName:"Button",props:{scales:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'big'",computed:!1}]},required:!1,description:""},kind:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1},{value:"'danger'",computed:!1}]},required:!1,description:""},outline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},rounded:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},fullWidth:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},theme:{defaultValue:{value:"theme",computed:!0},type:{name:"custom",raw:"theme"},required:!1,description:""}}}}}]);
//# sourceMappingURL=docs-guidelines-theming.ca37d5a336e842911c01.js.map