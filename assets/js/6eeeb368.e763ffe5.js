"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2104],{4907:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return u}});var n=r(6687);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(r),u=a,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6558:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),i=["components"],l={},c="VotiumBriber",p={unversionedId:"protocol/smart-contract-api/pcv/convex/VotiumBriber",id:"protocol/smart-contract-api/pcv/convex/VotiumBriber",title:"VotiumBriber",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/convex/VotiumBriber.md",sourceDirName:"protocol/smart-contract-api/pcv/convex",slug:"/protocol/smart-contract-api/pcv/convex/VotiumBriber",permalink:"/docs/docs/protocol/smart-contract-api/pcv/convex/VotiumBriber",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/pcv/convex/VotiumBriber.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IVotiumBribe",permalink:"/docs/docs/protocol/smart-contract-api/pcv/convex/IVotiumBribe"},next:{title:"CurvePCVDepositPlainPool",permalink:"/docs/docs/protocol/smart-contract-api/pcv/curve/CurvePCVDepositPlainPool"}},d={},m=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"bribe",id:"bribe",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"withdrawERC20",id:"withdrawerc20",level:3},{value:"Parameters",id:"parameters-2",level:4}],s={toc:m};function u(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"votiumbriber"},"VotiumBriber"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    contract IERC20 _token,\n    contract IVotiumBribe _votiumBribe\n) public\n")),(0,o.kt)("p",null,"VotiumBriber constructor"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_core")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_token")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IERC20"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The token spent for bribes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_votiumBribe")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IVotiumBribe"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Votium bribe contract")))),(0,o.kt)("h3",{id:"bribe"},"bribe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function bribe(\n    bytes32 _proposal,\n    uint256 _choiceIndex\n) public\n")),(0,o.kt)("p",null,"Spend tokens on Votium to bribe for a given pool."),(0,o.kt)("p",null,"the call will revert if Votium has not called initiateProposal with\nthe _proposal ID, if _choiceIndex is out of range, or of block.timestamp\nis after the deadline for bribing (usually 6 hours before Convex snapshot\nvote ends)."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_proposal")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,o.kt)("td",{parentName:"tr",align:"left"},"id of the proposal on snapshot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_choiceIndex")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"index of the pool in the snapshot vote to vote for")))),(0,o.kt)("h3",{id:"withdrawerc20"},"withdrawERC20"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdrawERC20(\n    address token,\n    address to,\n    uint256 amount\n) external\n")),(0,o.kt)("p",null,"withdraw ERC20 from the contract"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"token")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"address of the ERC20 to send")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"to")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"address destination of the ERC20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"quantity of ERC20 to send")))))}u.isMDXComponent=!0}}]);