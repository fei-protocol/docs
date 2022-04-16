"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9998],{4907:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(5177),r=n(4416),i=(n(6687),n(4907)),l=["components"],o={},d="IPCVSwapper",p={unversionedId:"protocol/smart-contract-api/pcv/IPCVSwapper",id:"protocol/smart-contract-api/pcv/IPCVSwapper",title:"IPCVSwapper",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/IPCVSwapper.md",sourceDirName:"protocol/smart-contract-api/pcv",slug:"/protocol/smart-contract-api/pcv/IPCVSwapper",permalink:"/docs/docs/protocol/smart-contract-api/pcv/IPCVSwapper",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/pcv/IPCVSwapper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IPCVGuardian",permalink:"/docs/docs/protocol/smart-contract-api/pcv/IPCVGuardian"},next:{title:"PCVDeposit",permalink:"/docs/docs/protocol/smart-contract-api/pcv/PCVDeposit"}},s={},c=[{value:"Functions",id:"functions",level:2},{value:"swap",id:"swap",level:3},{value:"setReceivingAddress",id:"setreceivingaddress",level:3},{value:"Parameters",id:"parameters",level:4},{value:"tokenSpent",id:"tokenspent",level:3},{value:"tokenReceived",id:"tokenreceived",level:3},{value:"tokenReceivingAddress",id:"tokenreceivingaddress",level:3},{value:"Events",id:"events",level:2},{value:"UpdateReceivingAddress",id:"updatereceivingaddress",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Swap",id:"swap-1",level:3},{value:"Parameters",id:"parameters-2",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ipcvswapper"},"IPCVSwapper"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"swap"},"swap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function swap() external\n")),(0,i.kt)("h3",{id:"setreceivingaddress"},"setReceivingAddress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setReceivingAddress(\n    address _tokenReceivingAddress\n) external\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_tokenReceivingAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"tokenspent"},"tokenSpent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function tokenSpent() external returns (address)\n")),(0,i.kt)("h3",{id:"tokenreceived"},"tokenReceived"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function tokenReceived() external returns (address)\n")),(0,i.kt)("h3",{id:"tokenreceivingaddress"},"tokenReceivingAddress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function tokenReceivingAddress() external returns (address)\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"updatereceivingaddress"},"UpdateReceivingAddress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event UpdateReceivingAddress(\n    address oldTokenReceivingAddress,\n    address newTokenReceivingAddress\n)\n")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"oldTokenReceivingAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newTokenReceivingAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"swap-1"},"Swap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Swap(\n    address _caller,\n    address _tokenSpent,\n    address _tokenReceived,\n    uint256 _amountSpent,\n    uint256 _amountReceived\n)\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_caller")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_tokenSpent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_tokenReceived")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_amountSpent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_amountReceived")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);