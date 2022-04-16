"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1396],{4907:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(6687);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:e},u),{},{components:r})):n.createElement(f,i({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2891:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),i=["components"],c={},p="UniswapV2Library",l={unversionedId:"protocol/smart-contract-api/external/uniswap/UniswapV2Library",id:"protocol/smart-contract-api/external/uniswap/UniswapV2Library",title:"UniswapV2Library",description:"Functions",source:"@site/docs/protocol/smart-contract-api/external/uniswap/UniswapV2Library.md",sourceDirName:"protocol/smart-contract-api/external/uniswap",slug:"/protocol/smart-contract-api/external/uniswap/UniswapV2Library",permalink:"/docs/docs/protocol/smart-contract-api/external/uniswap/UniswapV2Library",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/external/uniswap/UniswapV2Library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMasterContractManager",permalink:"/docs/docs/protocol/smart-contract-api/external/sushi/IMasterContractManager"},next:{title:"IHypervisor",permalink:"/docs/docs/protocol/smart-contract-api/external/visor/IHypervisor"}},u={},s=[{value:"Functions",id:"functions",level:2},{value:"getAmountOut",id:"getamountout",level:3},{value:"Parameters",id:"parameters",level:4}],m={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uniswapv2library"},"UniswapV2Library"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"getamountout"},"getAmountOut"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getAmountOut(\n    uint256 amountIn,\n    uint256 reserveIn,\n    uint256 reserveOut\n) internal returns (uint256 amountOut)\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"reserveIn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"reserveOut")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}d.isMDXComponent=!0}}]);