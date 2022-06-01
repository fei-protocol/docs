"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3643],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),v=o,f=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},767:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:2},c=void 0,s={unversionedId:"Governance/Tribe DAO",id:"Governance/Tribe DAO",title:"Tribe DAO",description:"The Tribe DAO has ultimate control over the Tribe ecosystem. It has the highest level access control roles, including:",source:"@site/docs/Governance/Tribe DAO.md",sourceDirName:"Governance",slug:"/Governance/Tribe DAO",permalink:"/docs/Governance/Tribe DAO",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/Governance/Tribe DAO.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Governance/Overview"},next:{title:"Overview",permalink:"/docs/Governance/Optimistic Governance/Overview"}},p={},u=[{value:"Timelines",id:"timelines",level:2},{value:"How to vote on proposals",id:"how-to-vote-on-proposals",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Tribe DAO has ultimate control over the Tribe ecosystem. It has the highest level access control roles, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arbitrarily moving PCV"),(0,i.kt)("li",{parentName:"ul"},"Minting FEI"),(0,i.kt)("li",{parentName:"ul"},"Creating and granting new access roles")),(0,i.kt)("p",null,"The Tribe DAO is controlled by Tribe token holders and in order to perform an action it requires a proposal to be created and passed. The proposal threshold is 2.5M TRIBE, with quorum being 25M TRIBE."),(0,i.kt)("p",null,"The contract is available here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/governor/FeiDAO.sol"},"FeiDAO.sol")," and it is an instance of OpenZeppelin's OZ Governor, with a module to make it compatible with GovernorBravo. "),(0,i.kt)("h2",{id:"timelines"},"Timelines"),(0,i.kt)("p",null,"The total time between a set of actions being proposed and those being executed is 3 days. This is broken down as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Voting period: 2 days"),(0,i.kt)("li",{parentName:"ul"},"Timelock period: 1 day")),(0,i.kt)("h2",{id:"how-to-vote-on-proposals"},"How to vote on proposals"),(0,i.kt)("p",null,"New DAO proposals can be created and voted on through the Tally interface: ",(0,i.kt)("a",{parentName:"p",href:"https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494"},"https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494"),"."))}v.isMDXComponent=!0}}]);