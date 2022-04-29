"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1661],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=i,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5604:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:2},l="Peg stability module",c={unversionedId:"protocol/Mechanism/PegStabilityModule",id:"protocol/Mechanism/PegStabilityModule",title:"Peg stability module",description:"The Peg Stability Module (PSM) is responsible for helping the FEI protocol keep its peg at $1. The PSM is a stability mechanism, that is used to bring other existing liquidity venues back to the peg.",source:"@site/docs/protocol/Mechanism/PegStabilityModule.md",sourceDirName:"protocol/Mechanism",slug:"/protocol/Mechanism/PegStabilityModule",permalink:"/docs/protocol/Mechanism/PegStabilityModule",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/Mechanism/PegStabilityModule.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PCV Management",permalink:"/docs/protocol/Mechanism/PCVManagement"},next:{title:"Collaterisation",permalink:"/docs/protocol/Mechanism/Collaterisation"}},u={},p=[{value:"PSM Architecture Diagram",id:"psm-architecture-diagram",level:2}],h={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peg-stability-module"},"Peg stability module"),(0,o.kt)("p",null,"The Peg Stability Module (PSM) is responsible for helping the FEI protocol keep its peg at $1. The PSM is a stability mechanism, that is used to bring other existing liquidity venues back to the peg."),(0,o.kt)("p",null,"The FEI PSM is a contract which holds a reserve of assets in order to exchange FEI at $1 of other assets with a fee. There are two allowed actions ",(0,o.kt)("inlineCode",{parentName:"p"},"mint()")," - buy FEI for $1 of assets plus a fee and ",(0,o.kt)("inlineCode",{parentName:"p"},"redeem()")," - sell FEI back for $1 of assets, minus a fee. The current PSM's external asset is DAI so on mint, a user provides DAI, and the protocol gives FEI. On redeem, the user provides FEI, and receives DAI."),(0,o.kt)("p",null,"The contract has a reservesThreshold of external assets meant to stand ready for redemptions. The PSM has a reserve threshold, which is the maximum target amount of asset to hold. Any assets above the reserve threshold can be sent into the PCV using ",(0,o.kt)("inlineCode",{parentName:"p"},"allocateSurplus()"),"."),(0,o.kt)("p",null,"The contract implements the following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PCVDeposit - to track reserves and balances"),(0,o.kt)("li",{parentName:"ul"},"OracleRef - to determine price of the asset"),(0,o.kt)("li",{parentName:"ul"},"RateLimitedMinter - to stop infinite mints and related issues.")),(0,o.kt)("p",null,"The PSM currently charges the following fees:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 basis point fee on mint to incentivize building up DAI reserves"),(0,o.kt)("li",{parentName:"ul"},"10 basis point fee on redeem")),(0,o.kt)("p",null,"Previous iterations of the PSM used an oracle to determine the DAI price. The newest PSM currently in use for DAI is a fixed price PSM and trades like DAI and FEI are always $1 and only uses the oracle to determine if the price of DAI is outside of the acceptable trading range. If the price of DAI is below $0.975 or above $1.025, then the PSM will shut down and disable trading while the price is outside of the acceptable range."),(0,o.kt)("p",null,"A newer iteration of the PSM is the non custodial PSM which removes the dripper, and instead grants the PSM the PCV Controller role. This non custodial PSM is much more capital efficient as it has no reserves threshold and stores all external assets in the ERC20PCVDeposit where they are then deposited into the yield venue. This architecture stops capital from sitting idly in the PSM and instead puts it all to work immediately."),(0,o.kt)("p",null,"The PSM makes several assumptions in its architecture, mainly that FEI is always $1 as there is never any oracle calls to check on the FEI price. The PSM also assumes that the PCVDeposit the ERC20Dripper pulls from has enough funds to refill it. The PSM requires the minter role to generate new FEI on mint actions."),(0,o.kt)("h2",{id:"psm-architecture-diagram"},"PSM Architecture Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FEI PSM Architecture",src:r(6539).Z,width:"1760",height:"1360"})))}d.isMDXComponent=!0},6539:function(e,t,r){t.Z=r.p+"assets/images/FEIPSM-7555871fb4d6b3969b904129d3d95f56.png"}}]);