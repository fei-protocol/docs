"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2029],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(u,".").concat(b)]||p[b]||c[b]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},u="Liquidations and Debt",s={unversionedId:"Turbo/LiquidationsAndDebt",id:"Turbo/LiquidationsAndDebt",title:"Liquidations and Debt",description:"Turbo uses liquidations to overcollateralize boosted FEI, which is a debt.",source:"@site/docs/Turbo/LiquidationsAndDebt.md",sourceDirName:"Turbo",slug:"/Turbo/LiquidationsAndDebt",permalink:"/docs/Turbo/LiquidationsAndDebt",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/Turbo/LiquidationsAndDebt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Turbo User Guide",permalink:"/docs/Turbo/Users"},next:{title:"Tribe DAO Operators",permalink:"/docs/Turbo/TribeDAO"}},d={},c=[{value:"The Savior",id:"the-savior",level:2}],p={toc:c};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"liquidations-and-debt"},"Liquidations and Debt"),(0,i.kt)("p",null,"Turbo uses liquidations to overcollateralize boosted FEI, which is a debt."),(0,i.kt)("p",null,"The FEI strategy doesn't count as collateral, instead it is a second recovery mechanism during failure."),(0,i.kt)("p",null,"In addition to normal liquidations, Safes can fail when a boosted strategy becomes unwithdrawable (due to a downstream issue such as bad debt/oracle manipulation)."),(0,i.kt)("p",null,"Here is a table to describe how liquidations and unwithdrawable strategies are handled."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Failure Mode"),(0,i.kt)("th",{parentName:"tr",align:null},"Collateral Destination"),(0,i.kt)("th",{parentName:"tr",align:null},"Boosted FEI Destination"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Successful Liquidation"),(0,i.kt)("td",{parentName:"tr",align:null},"Sold to repay debt"),(0,i.kt)("td",{parentName:"tr",align:null},"Withdrawable by Safe owner")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Failed Liquidation (Bad Debt)"),(0,i.kt)("td",{parentName:"tr",align:null},"Withdrawable by Safe owner"),(0,i.kt)("td",{parentName:"tr",align:null},'Force "less" by Tribe DAO (immediate)')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Strategy unwithdrawable + liquidation"),(0,i.kt)("td",{parentName:"tr",align:null},"Sold to repay debt"),(0,i.kt)("td",{parentName:"tr",align:null},"Unwithdrawable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Strategy unwithdrawable + overcollateralized"),(0,i.kt)("td",{parentName:"tr",align:null},"Seized by Tribe DAO (15 day delay)"),(0,i.kt)("td",{parentName:"tr",align:null},"Unwithdrawable")))),(0,i.kt)("p",null,"Note, if a strategy is unwithdrawable, a team can repay their FEI debt manually during the sieze window and recover their collateral."),(0,i.kt)("h2",{id:"the-savior"},"The Savior"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fei-protocol/tribe-turbo/blob/main/src/modules/TurboSavior.sol"},"Turbo Savior"),' is a deleveraging mechanism which allows any safe to be permissionlessly "lessed" by any address if nearing liquidation (intially configured at 80% of credit line).'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"There is no incentive for calling the savior.")," Owners are responsible for running their own bot or providing incentives to save their safes."),(0,i.kt)("p",null,"To save a vault, call "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/// @notice Save a Safe (call less on owner's behalf to prevent liquidation).\n/// @param safe The Safe to be saved.\n/// @param vault The Vault to less from.\n/// @param feiAmount The amount of Fei to less from the Safe.\nfunction save(\n    TurboSafe safe,\n    ERC4626 vault,\n    uint256 feiAmount\n) external\n")),(0,i.kt)("p",null,"and input the desired safe, vault, and fei amount. If the vault is over the 80%, it will be lessed by the input amount."))}b.isMDXComponent=!0}}]);