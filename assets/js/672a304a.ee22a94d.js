"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5787],{4907:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=n(5177),a=n(4416),o=(n(6687),n(4907)),c=["components"],s={},l="GaugeLens",i={unversionedId:"protocol/smart-contract-api/pcv/angle/GaugeLens",id:"protocol/smart-contract-api/pcv/angle/GaugeLens",title:"GaugeLens",description:"a contract to read tokens held in a gauge",source:"@site/docs/protocol/smart-contract-api/pcv/angle/GaugeLens.md",sourceDirName:"protocol/smart-contract-api/pcv/angle",slug:"/protocol/smart-contract-api/pcv/angle/GaugeLens",permalink:"/docs/docs/protocol/smart-contract-api/pcv/angle/GaugeLens",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/pcv/angle/GaugeLens.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IPoolManager",permalink:"/docs/docs/protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit"},next:{title:"BPTLens",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/BPTLens"}},u={},p=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"balance",id:"balance",level:3},{value:"resistantBalanceAndFei",id:"resistantbalanceandfei",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gaugelens"},"GaugeLens"),(0,o.kt)("p",null,"a contract to read tokens held in a gauge"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _gaugeAddress,\n    address _stakerAddress\n) public\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_gaugeAddress")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_stakerAddress")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"balance"},"balance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function balance() public returns (uint256)\n")),(0,o.kt)("p",null,"returns the amount of tokens staked by stakerAddress in\nthe gauge gaugeAddress."),(0,o.kt)("h3",{id:"resistantbalanceandfei"},"resistantBalanceAndFei"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function resistantBalanceAndFei() public returns (uint256, uint256)\n")),(0,o.kt)("p",null,"returns the amount of tokens staked by stakerAddress in\nthe gauge gaugeAddress.\nIn the case where an LP token between XYZ and FEI is staked in\nthe gauge, this lens reports the amount of LP tokens staked, not the\nunderlying amounts of XYZ and FEI tokens held within the LP tokens.\nThis lens can be coupled with another lens in order to compute the\nunderlying amounts of FEI and XYZ held inside the LP tokens."))}m.isMDXComponent=!0}}]);