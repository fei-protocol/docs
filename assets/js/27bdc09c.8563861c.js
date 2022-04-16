"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[942],{4907:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return u}});var n=r(6687);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(r),u=a,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},490:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),i=["components"],l={},p="IConvexBooster",c={unversionedId:"protocol/smart-contract-api/pcv/convex/IConvexBooster",id:"protocol/smart-contract-api/pcv/convex/IConvexBooster",title:"IConvexBooster",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/convex/IConvexBooster.md",sourceDirName:"protocol/smart-contract-api/pcv/convex",slug:"/protocol/smart-contract-api/pcv/convex/IConvexBooster",permalink:"/docs/docs/protocol/smart-contract-api/pcv/convex/IConvexBooster",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/pcv/convex/IConvexBooster.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConvexBaseRewardPool",permalink:"/docs/docs/protocol/smart-contract-api/pcv/convex/IConvexBaseRewardPool"},next:{title:"IVotiumBribe",permalink:"/docs/docs/protocol/smart-contract-api/pcv/convex/IVotiumBribe"}},d={},m=[{value:"Functions",id:"functions",level:2},{value:"deposit",id:"deposit",level:3},{value:"Parameters",id:"parameters",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"earmarkRewards",id:"earmarkrewards",level:3},{value:"Parameters",id:"parameters-2",level:4}],s={toc:m};function u(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iconvexbooster"},"IConvexBooster"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"deposit"},"deposit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function deposit(\n    uint256 _pid,\n    uint256 _amount,\n    bool _stake\n) external returns (bool)\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_pid")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_stake")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"withdraw"},"withdraw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(\n    uint256 _pid,\n    uint256 _amount\n) external returns (bool)\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_pid")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"earmarkrewards"},"earmarkRewards"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function earmarkRewards(\n    uint256 _pid\n) external returns (bool)\n")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_pid")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);