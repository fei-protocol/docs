"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2372],{4907:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(6687);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8906:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),i=["components"],l={},c="ILiquidityBootstrappingPoolFactory",p={unversionedId:"protocol/smart-contract-api/external/balancer/ILiquidityBootstrappingPoolFactory",id:"protocol/smart-contract-api/external/balancer/ILiquidityBootstrappingPoolFactory",title:"ILiquidityBootstrappingPoolFactory",description:"Functions",source:"@site/docs/protocol/smart-contract-api/external/balancer/ILiquidityBootstrappingPoolFactory.md",sourceDirName:"protocol/smart-contract-api/external/balancer",slug:"/protocol/smart-contract-api/external/balancer/ILiquidityBootstrappingPoolFactory",permalink:"/docs/docs/protocol/smart-contract-api/external/balancer/ILiquidityBootstrappingPoolFactory",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/external/balancer/ILiquidityBootstrappingPoolFactory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ILendingPoolAddressesProvider",permalink:"/docs/docs/protocol/smart-contract-api/external/aave/ILendingPool"},next:{title:"IWeightedPool2TokensFactory",permalink:"/docs/docs/protocol/smart-contract-api/external/balancer/IWeightedPool2TokensFactory"}},d={},s=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4}],u={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iliquiditybootstrappingpoolfactory"},"ILiquidityBootstrappingPoolFactory"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"create"},"create"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function create(\n    string name,\n    string symbol,\n    address[] tokens,\n    uint256[] weights,\n    uint256 swapFeePercentage,\n    address owner,\n    bool swapEnabledOnStart\n) external returns (address)\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"symbol")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tokens")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"weights")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"swapFeePercentage")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"owner")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"swapEnabledOnStart")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);