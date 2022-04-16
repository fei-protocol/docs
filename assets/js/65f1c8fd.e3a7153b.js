"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8318],{4907:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6501:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=a(5177),n=a(4416),l=(a(6687),a(4907)),i=["components"],o={},p="IWeightedPool",d={unversionedId:"protocol/smart-contract-api/pcv/balancer/IWeightedPool",id:"protocol/smart-contract-api/pcv/balancer/IWeightedPool",title:"IWeightedPool",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/balancer/IWeightedPool.md",sourceDirName:"protocol/smart-contract-api/pcv/balancer",slug:"/protocol/smart-contract-api/pcv/balancer/IWeightedPool",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/IWeightedPool",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/pcv/balancer/IWeightedPool.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IAsset",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/IVault"},next:{title:"BaseBalancerPoolManager",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/manager/BaseBalancerPoolManager"}},c={},s=[{value:"Functions",id:"functions",level:2},{value:"getSwapEnabled",id:"getswapenabled",level:3},{value:"getNormalizedWeights",id:"getnormalizedweights",level:3},{value:"getGradualWeightUpdateParams",id:"getgradualweightupdateparams",level:3},{value:"setSwapEnabled",id:"setswapenabled",level:3},{value:"Parameters",id:"parameters",level:4},{value:"updateWeightsGradually",id:"updateweightsgradually",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"withdrawCollectedManagementFees",id:"withdrawcollectedmanagementfees",level:3},{value:"Parameters",id:"parameters-2",level:4}],u={toc:s};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iweightedpool"},"IWeightedPool"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"getswapenabled"},"getSwapEnabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getSwapEnabled() external returns (bool)\n")),(0,l.kt)("h3",{id:"getnormalizedweights"},"getNormalizedWeights"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getNormalizedWeights() external returns (uint256[])\n")),(0,l.kt)("h3",{id:"getgradualweightupdateparams"},"getGradualWeightUpdateParams"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getGradualWeightUpdateParams() external returns (uint256 startTime, uint256 endTime, uint256[] endWeights)\n")),(0,l.kt)("h3",{id:"setswapenabled"},"setSwapEnabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSwapEnabled(\n    bool swapEnabled\n) external\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"swapEnabled")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"updateweightsgradually"},"updateWeightsGradually"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function updateWeightsGradually(\n    uint256 startTime,\n    uint256 endTime,\n    uint256[] endWeights\n) external\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"startTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"endTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"endWeights")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"withdrawcollectedmanagementfees"},"withdrawCollectedManagementFees"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdrawCollectedManagementFees(\n    address recipient\n) external\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);