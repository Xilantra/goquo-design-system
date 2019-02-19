(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/Components/Button.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./src/Utils/GlobalStyle.js"),l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./src/Utils/Theme.js");function u(){var e=m(["\n    position: relative;\n    border: none;\n    padding: 0;\n    box-shadow: none;\n    pointer-events: none;\n    background: ",";\n  \n    &:hover,\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n      cursor: default;\n    }\n  \n    &:before {\n      content: '';\n      width: 0%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0.3;\n      background: ",";\n      animation: "," 3000ms ease-in-out infinite;\n    }\n"]);return u=function(){return e},e}function d(){var e=m(["\n  0% {\n        width: 0%;\n        left: 0;\n        right: auto;\n        opacity: 0.3;\n      }\n      20% {\n        width: 100%;\n        left: 0;\n        right: auto;\n        opacity: 1;\n      }\n      28% {\n        width: 100%;\n        left: auto;\n        right: 0;\n      }\n      51% {\n        width: 0%;\n        left: auto;\n        right: 0;\n      }\n      58% {\n        width: 0%;\n        left: auto;\n        right: 0;\n      }\n      82% {\n        width: 100%;\n        left: auto;\n        right: 0;\n      }\n      83% {\n        width: 100%;\n        left: 0;\n        right: auto;\n      }\n      96% {\n        width: 0%;\n        left: 0;\n        right: auto;\n      }\n      100% {\n        width: 0%;\n        left: 0;\n        right: auto;\n        opacity: 0.3;\n      }\n"]);return d=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=Object(l.d)(d()),b=l.c.div(u(),function(e){return e.theme.colors.skeletonBg},function(e){return e.theme.colors.skeleton},p);b.defaultProps={theme:s.b};var h=b;function f(){var e=k(["\nheight: ",";\nwidth: 8rem;\n"]);return f=function(){return e},e}function g(){var e=k(["\n    padding: ",";\n    height: 3rem;\n    width: 3rem;\n    box-shadow: ",";\n\n    svg {\n      margin-left: 0;\n    }\n  "]);return g=function(){return e},e}function y(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function v(){var e=k(["\n  ",";\n  margin: 2px 4px;\n  display: inline-block;\n  /* Full width */\n  width: ",";\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  /* Only if using bold text */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: 16px;\n  letter-spacing: 0;\n  cursor: pointer;\n  user-select: none;\n  border-style: solid;\n  border-width: ",";\n  transition: all 250ms ease-in-out;\n  border-radius: ",";\n  ",";\n\n  svg {\n    margin-left: ",";\n    fill: currentColor;\n    vertical-align: middle;\n    transition: fill 250ms ease-in-out;\n  }\n\n  &:active {\n    transform: scale(.98);\n    outline: none;\n  }\n\n  &:disabled {\n      background-color: ",";\n      color: ",";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n        /* box-shadow:inset 0 4px 8px 0 rgba(0,0,0,.16); */\n      }\n    }\n"]);return v=function(){return e},e}function k(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var w={small:"\n    padding: ".concat(s.b.spacing[3]," ").concat(s.b.spacing[7],";\n    height: ").concat(s.b.spacing[8],";\n    font-size: ").concat(s.b.fontSizes[3],";\n  "),normal:"\n    padding: ".concat(s.b.spacing[4]," ").concat(s.b.spacing[8],";\n    height: ").concat(s.b.spacing[10],";\n    font-size: ").concat(s.b.fontSizes[3],";\n  "),big:"\n    padding: ".concat(s.b.spacing[6]," ").concat(s.b.spacing[10],";\n    height: ").concat(s.b.layoutScale[5],";\n    font-size: ").concat(s.b.fontSizes[4],";\n  ")},B=Object(l.c)("button")(v(),function(e){var n=e.scale;return w[void 0===n?"normal":n]},function(e){return e.fullWidth&&"100%"},s.b.fontBold,s.b.buttonBorderWidth,function(e){return e.rounded?s.b.buttonRounded:s.b.buttonRadius},function(e){var n=e.kind,t=void 0===n?"primary":n,o=e.outline;return function(e){var n=function(e){return function(n,t,o){var a=e?n:"transparent",r=e?"transparent":n,i=o;return"\n    background-color: ".concat(r,";\n    border-color: ").concat(a,";\n    color: ").concat(e?n:t,";\n\n    &:hover,\n    &:focus {\n      background-color: ").concat(e?r:i,";\n      border-color: ").concat(e?i:a,";\n      color: ").concat(e?i:t,";\n\n      svg {\n        fill: currentColor;\n      }\n    }\n  ")}}(e);return{primary:n("".concat(s.b.colors.primary),"".concat(s.b.colors.inverse01),"".concat(s.b.colors.primaryHover)),secondary:n("".concat(s.b.colors.secondary),"".concat(s.b.colors.inverse01),"".concat(s.b.colors.secondaryHover)),ghost:n("transparent","".concat(s.b.colors.primary),"".concat(s.b.colors.brandPrimary10)),danger:n("".concat(s.b.colors.support01),"".concat(s.b.colors.inverse01),"".concat(s.b.colors.support01Hover))}}(void 0!==o&&o)[t]},s.b.spacing[4],s.b.colors.disabled01,s.b.colors.disabled03,s.b.colors.disabled01,s.b.colors.disabled03),_=function(e){var n=e.children,t=y(e,["children"]);return a.a.createElement(B,t,n)},E=Object(l.c)(_)(g(),s.b.spacing[0],s.b.boxShadows.button),x=Object(l.c)(h)(f(),s.b.spacing[10]);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function C(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,n){return!n||"object"!==S(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}_.defaultProps={scales:"normal",kind:"primary",outline:!1,rounded:!1,fullWidth:!1},_.displayName="Button",E.displayName="ButtonIcon",x.displayName="ButtonSkeleton",_.__docgenInfo={description:"",methods:[],displayName:"Button",props:{scales:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'big'",computed:!1}]},required:!1,description:""},kind:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1},{value:"'danger'",computed:!1}]},required:!1,description:""},outline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},rounded:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},fullWidth:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}},t.d(n,"default",function(){return j});var j=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=O(this,T(n).call(this,e))).layout=null,t}var t,o,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=D(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(c.a,null),a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"button"}},"Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import { Button, ButtonIcon, ButtonSkeleton } from '../src/components/Button/'")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"introduction"}},"Introduction"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," or ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ButtonIcon />")," components to render a primitive button, and ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ButtonSkeleton />")," for the skeleton.",a.a.createElement("br",null),"\nDo not use buttons as navigational elements. Instead, use ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Link")," when the desired action is to take the user to a new page. Default props for button is ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'kind="primary"')," & ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'scale="normal"'),"."),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"primary-button"}},"Primary Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use it for the principle call to action on the page. Buttons are used primarily on action items. Some examples include Add, Save, Delete, and Sign up. Each page can have only ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"one or two primary buttons"),". Any remaining calls-to-action should be represented as secondary buttons."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:1,__code:'<Button>Default</Button>\n<Button kind="primary" scale="normal">\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,null,"Default"),a.a.createElement(_,{kind:"primary",scale:"normal"},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"secondary-button"}},"Secondary Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use for secondary actions on each page."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:2,__code:'<Button kind="secondary" scale="normal">\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"secondary",scale:"normal"},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"ghost-button"}},"Ghost Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use when an action does not require primary dominance on the page. Ghost buttons require a glyph icon (cannot be stand alone text because of poor affordance)."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:3,__code:'<Button kind="ghost" scale="normal">\n  Click me{\' \'}\n  <svg\n    width="16"\n    height="16"\n    viewBox="0 0 16 16"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"\n      fillRule="evenodd"\n    />\n  </svg>\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"ghost",scale:"normal"},"Click me ",a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z",fillRule:"evenodd"})))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"danger-button"}},"Danger Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use when an action has harmful intentions to the users data (delete, remove, etc)."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:4,__code:'<Button kind="danger" scale="normal">\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"danger",scale:"normal"},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"outline-button"}},"Outline Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"TODO: Put a description here"),a.a.createElement(i.e,{__codesandbox:"undefined",__position:5,__code:'<Button outline kind="primary" scale="normal">\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{outline:!0,kind:"primary",scale:"normal"},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"disabled-button"}},"Disabled Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use when the user cannot proceed until an input is collected. I\u2019m not sure whether it\u2019s ok to grey out the button instead of just fading the opacity. Keep in mind that disabled buttons exclude users with disabilities. It\u2019s one of the best reasons to stop using them. The best practice is to keep the button enabled. Let the user click the button and then show the message why it can\u2019t proceed.",a.a.createElement("br",null),"\nMore on this: ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://axesslab.com/disabled-buttons-suck/"}},"https://axesslab.com/disabled-buttons-suck/")),a.a.createElement(i.e,{__codesandbox:"undefined",__position:6,__code:'<Button kind="primary" scale="normal" disabled>\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"primary",scale:"normal",disabled:!0},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"icon-button"}},"Icon Button"),a.a.createElement(r.MDXTag,{name:"p",components:n},"When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text for UX. The icon size must always be ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"16px/1rem")," and the whole size need to have at least ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"48px x 48px (3rem)")," in mobile."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:7,__code:'<ButtonIcon kind="primary">\n  <svg\n    width="16"\n    height="16"\n    viewBox="0 0 16 16"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"\n      fillRule="evenodd"\n    />\n  </svg>\n</ButtonIcon>\n<ButtonIcon kind="secondary" outline rounded>\n  <svg\n    width="16"\n    height="16"\n    viewBox="0 0 16 16"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"\n      fillRule="evenodd"\n    />\n  </svg>\n</ButtonIcon>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(E,{kind:"primary"},a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z",fillRule:"evenodd"}))),a.a.createElement(E,{kind:"secondary",outline:!0,rounded:!0},a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z",fillRule:"evenodd"})))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"link"}},"Link"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Link with button style. Links are used primarily as a navigational element. Links may also change what or how data is displayed (view more, show all, etc). If the action taken by the user will change or manipulate data, use a button."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:8,__code:'<Button\n  kind="primary"\n  scale="small"\n  as="a"\n  href="https://goquo.com"\n  target="_blank"\n  rel="noreferrer noopener"\n>\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"primary",scale:"small",as:"a",href:"https://goquo.com",target:"_blank",rel:"noreferrer noopener"},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"button-size"}},"Button Size"),a.a.createElement(r.MDXTag,{name:"p",components:n},"TODO: Put a description here."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:9,__code:'<Button kind="primary" scale="small">\n  Click me\n</Button>\n<Button kind="primary" scale="normal">\n  Click me\n</Button>\n<Button kind="primary" scale="big">\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"primary",scale:"small"},"Click me"),a.a.createElement(_,{kind:"primary",scale:"normal"},"Click me"),a.a.createElement(_,{kind:"primary",scale:"big"},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"button-full-width"}},"Button Full Width"),a.a.createElement(r.MDXTag,{name:"p",components:n},"TODO: Put a description here."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:10,__code:'<Button kind="primary" scale="small" fullWidth>\n  Click me\n</Button>\n<Button kind="primary" scale="normal" fullWidth>\n  Click me\n</Button>\n<Button kind="primary" scale="big" fullWidth>\n  Click me\n</Button>',__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(_,{kind:"primary",scale:"small",fullWidth:!0},"Click me"),a.a.createElement(_,{kind:"primary",scale:"normal",fullWidth:!0},"Click me"),a.a.createElement(_,{kind:"primary",scale:"big",fullWidth:!0},"Click me")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"button-skeleton"}},"Button Skeleton"),a.a.createElement(r.MDXTag,{name:"p",components:n},"TODO: Put a description here."),a.a.createElement(i.e,{__codesandbox:"undefined",__position:11,__code:"<ButtonSkeleton />",__scope:{props:this?this.props:t,GlobalStyle:c.a,Button:_,ButtonIcon:E,ButtonSkeleton:x}},a.a.createElement(x,null)),a.a.createElement(i.f,{of:_}))}}])&&C(t.prototype,o),l&&C(t,l),n}();j.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/Utils/GlobalStyle.js":function(e,n,t){"use strict";var o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("./node_modules/polished/dist/polished.es.js"),r=t("./src/Utils/Theme.js");function i(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    ","\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n    }\n"]);return i=function(){return e},e}var c=Object(o.a)(i(),Object(a.a)(),r.b.fontSystem,r.b.fontSizes[4],r.b.colors.text01);n.a=c},"./src/Utils/Theme.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"h",function(){return a}),t.d(n,"e",function(){return r}),t.d(n,"c",function(){return i}),t.d(n,"f",function(){return c}),t.d(n,"d",function(){return l}),t.d(n,"g",function(){return s});var o={primary:["#429FAA"],primaryHover:["#1D727F"],secondary:["#4A90E2"],secondaryHover:["#2261CF"],tertiary:["#7BBCC4"],interactive01:["#429FAA"],interactive02:["#429FAA"],ui01:["#fff"],ui02:"#f3f3f3",ui03:["#bebebe"],ui04:["#a4a4a4"],text01:["#171717"],text02:["#565656"],text03:["#8c8c8c"],icon01:["#fff"],icon02:["#565656"],field01:["#f3f3f3"],field02:["#dcdcdc"],inverse01:["#fff"],inverse02:["#3d3d3d"],support01:["#EB5757"],support01Hover:["#DD2C2C"],support02:["#27ae60"],support03:["#ffde03"],support04:["#4388DF"],focus:["#429FAA"],activeui:["#bebebe"],disabled01:["#f3f3f3"],disabled02:["#bebebe"],disabled03:["#8c8c8c"],overlay01:"rgba(0, 0, 0, 0.6)",overlay02:"rgba(243, 243, 243, 0.7)",skeleton:["#C6E2E6"],skeletonBg:["#E8F3F5"],white10:"rgba(255, 255, 255, 0.1)",white20:"rgba(255, 255, 255, 0.2)",white30:"rgba(255, 255, 255, 0.3)",white40:"rgba(255, 255, 255, 0.4)",white50:"rgba(255, 255, 255, 0.5)",white60:"rgba(255, 255, 255, 0.6)",white70:"rgba(255, 255, 255, 0.7)",white80:"rgba(255, 255, 255, 0.8)",white90:"rgba(255, 255, 255, 0.9)",white100:"#fff",black10:"rgba(0,0,0,0.1)",black20:"rgba(0,0,0,0.2)",black30:"rgba(0,0,0,0.3)",black40:"rgba(0,0,0,0.4)",black50:"rgba(0,0,0,0.5)",black60:"rgba(0,0,0,0.6)",black70:"rgba(0,0,0,0.7)",black80:"rgba(0,0,0,0.8)",black90:"rgba(0,0,0,0.9)",black100:"rgba(0,0,0,1)",gray10:"#f3f3f3",gray20:"#dcdcdc",gray30:"#bebebe",gray40:"#a4a4a4",gray50:"#8c8c8c",gray60:"#6f6f6f",gray70:"#565656",gray80:"#3d3d3d",gray90:"#282828",gray100:"#171717",brandPrimary10:"#E8F3F5",brandPrimary20:"#C6E2E6",brandPrimary30:"#A1CFD5",brandPrimary40:"#7BBCC4",brandPrimary50:"#5EADB7",brandPrimary60:"#429FAA",brandPrimary70:"#3C97A3",brandPrimary80:"#338D99",brandPrimary90:"#2B8390",brandPrimary100:"#1D727F",brandSecondary10:"#E9F2FC",brandSecondary20:"#C9DEF6",brandSecondary30:"#A5C8F1",brandSecondary40:"#80B1EB",brandSecondary50:"#65A1E6",brandSecondary60:"#4A90E2",brandSecondary70:"#4388DF",brandSecondary80:"#3A7DDA",brandSecondary90:"#3273D6",brandSecondary100:"#2261CF",red10:"#FDEBEB",red20:"#F9CDCD",red30:"#F5ABAB",red40:"#F18989",red50:"#EE7070",red60:"#EB5757",red70:"#E94F4F",red80:"#E54646",red90:"#E23C3C",red100:"#DD2C2C",green60:"#27ae60",yellow60:"#ffde03",trustyou20:"#8b97a8",trustyou40:"#f2c94c",trustyou60:"#a2c569",trustyou80:"#4aae27",trustyou100:"#27ae60"},a=[0,"0.0625rem","0.125rem","0.25rem","0.5rem","0.75rem","1rem","1.5rem","2rem","2.5rem","3rem"],r=[0,"1rem","1.5rem","2rem","3rem","4rem","6rem","10rem","15rem"],i=[0,"0.6875rem","0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.75rem","2.25rem","3.375rem","4.75rem"],c=[0,"1rem","1.125rem","1.375rem","1.5rem","1.625rem","2.25rem","2.75rem","5.5rem"],l='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',s={small:"0.125rem",medium:"0.35rem",large:"0.5rem",pill:"2rem",circle:"50%"},u={colors:o,spacing:a,layoutScale:r,fontCustom:'"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;',fontSystem:l,fontDefault:[l],fontSizes:i,lineHeight:c,fontRegular:400,fontBold:600,radius:s,buttonRadius:["0.125rem"],buttonBorderWidth:"0.125rem",buttonRounded:["2rem"],boxShadows:{raised:"0 1px 2px 0 rgba(0,0,0,0.1)",button:"0 4px 8px 0 rgba(0,0,0,0.1)",overlay:"0 4px 8px 0 rgba(0,0,0,0.1)",popOut:"0 12px 24px 0 rgba(0,0,0,0.1)"}};n.b=u}}]);
//# sourceMappingURL=docs-components-button.9175dccebfaf5461025a.js.map