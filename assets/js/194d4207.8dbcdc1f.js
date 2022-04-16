"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4969],{4907:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7247:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(5177),o=r(4416),a=(r(6687),r(4907)),c=["components"],i={},s="NoOpGuard",u={unversionedId:"protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard",id:"protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard",title:"NoOpGuard",description:"Functions",source:"@site/docs/protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard.md",sourceDirName:"protocol/smart-contract-api/sentinel/guards/examples",slug:"/protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard",permalink:"/docs/docs/protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultiActionGuard",permalink:"/docs/docs/protocol/smart-contract-api/sentinel/guards/examples/MultiActionGuard"},next:{title:"ReEntrancyGuard",permalink:"/docs/docs/protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard"}},l={},p=[{value:"Functions",id:"functions",level:2},{value:"check",id:"check",level:3},{value:"getProtecActions",id:"getprotecactions",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noopguard"},"NoOpGuard"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"check"},"check"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function check() external returns (bool)\n")),(0,a.kt)("h3",{id:"getprotecactions"},"getProtecActions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function getProtecActions() external returns (address[] targets, bytes[] datas, uint256[] values)\n")))}m.isMDXComponent=!0}}]);