"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9833],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return f}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},d=Object.keys(t);for(r=0;r<d.length;r++)a=d[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(r=0;r<d.length;r++)a=d[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,d=t.originalType,i=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),k=p(a),f=n,N=k["".concat(i,".").concat(f)]||k[f]||m[f]||d;return a?r.createElement(N,l(l({ref:e},o),{},{components:a})):r.createElement(N,l({ref:e},o))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var d=a.length,l=new Array(d);l[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var p=2;p<d;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6789:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=a(7462),n=a(3366),d=(a(7294),a(3905)),l=["components"],s={},i="IPCVGuardian",p={unversionedId:"protocol/smart-contract-api/pcv/IPCVGuardian",id:"protocol/smart-contract-api/pcv/IPCVGuardian",title:"IPCVGuardian",description:"an interface for defining how the PCVGuardian functions",source:"@site/docs/protocol/smart-contract-api/pcv/IPCVGuardian.md",sourceDirName:"protocol/smart-contract-api/pcv",slug:"/protocol/smart-contract-api/pcv/IPCVGuardian",permalink:"/docs/protocol/smart-contract-api/pcv/IPCVGuardian",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/pcv/IPCVGuardian.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IPCVDepositBalances",permalink:"/docs/protocol/smart-contract-api/pcv/IPCVDepositBalances"},next:{title:"IPCVSwapper",permalink:"/docs/protocol/smart-contract-api/pcv/IPCVSwapper"}},o={},m=[{value:"Functions",id:"functions",level:2},{value:"isSafeAddress",id:"issafeaddress",level:3},{value:"Parameters",id:"parameters",level:4},{value:"getSafeAddresses",id:"getsafeaddresses",level:3},{value:"setSafeAddress",id:"setsafeaddress",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setSafeAddresses",id:"setsafeaddresses",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"unsetSafeAddress",id:"unsetsafeaddress",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"unsetSafeAddresses",id:"unsetsafeaddresses",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"withdrawToSafeAddress",id:"withdrawtosafeaddress",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"withdrawETHToSafeAddress",id:"withdrawethtosafeaddress",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"withdrawERC20ToSafeAddress",id:"withdrawerc20tosafeaddress",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Events",id:"events",level:2},{value:"SafeAddressAdded",id:"safeaddressadded",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"SafeAddressRemoved",id:"safeaddressremoved",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"PCVGuardianWithdrawal",id:"pcvguardianwithdrawal",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"PCVGuardianETHWithdrawal",id:"pcvguardianethwithdrawal",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"PCVGuardianERC20Withdrawal",id:"pcvguardianerc20withdrawal",level:3},{value:"Parameters",id:"parameters-12",level:4}],k={toc:m};function f(t){var e=t.components,a=(0,n.Z)(t,l);return(0,d.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"ipcvguardian"},"IPCVGuardian"),(0,d.kt)("p",null,"an interface for defining how the PCVGuardian functions"),(0,d.kt)("p",null,"any implementation of this contract should be granted the roles of Guardian and PCVController in order to work correctly"),(0,d.kt)("h2",{id:"functions"},"Functions"),(0,d.kt)("h3",{id:"issafeaddress"},"isSafeAddress"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function isSafeAddress(\n    address pcvDeposit\n) external returns (bool)\n")),(0,d.kt)("p",null,"returns true if the the provided address is a valid destination to withdraw funds to"),(0,d.kt)("h4",{id:"parameters"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the address to check")))),(0,d.kt)("h3",{id:"getsafeaddresses"},"getSafeAddresses"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function getSafeAddresses() external returns (address[])\n")),(0,d.kt)("p",null,"returns all safe addresses"),(0,d.kt)("h3",{id:"setsafeaddress"},"setSafeAddress"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSafeAddress(\n    address pcvDeposit\n) external\n")),(0,d.kt)("p",null,'governor-only method to set an address as "safe" to withdraw funds to'),(0,d.kt)("h4",{id:"parameters-1"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the address to set as safe")))),(0,d.kt)("h3",{id:"setsafeaddresses"},"setSafeAddresses"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSafeAddresses(\n    address[] safeAddresses\n) external\n")),(0,d.kt)("p",null,"batch version of setSafeAddress"),(0,d.kt)("h4",{id:"parameters-2"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddresses")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the addresses to set as safe, as calldata")))),(0,d.kt)("h3",{id:"unsetsafeaddress"},"unsetSafeAddress"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function unsetSafeAddress(\n    address pcvDeposit\n) external\n")),(0,d.kt)("p",null,'governor-or-guardian-only method to un-set an address as "safe" to withdraw funds to'),(0,d.kt)("h4",{id:"parameters-3"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the address to un-set as safe")))),(0,d.kt)("h3",{id:"unsetsafeaddresses"},"unsetSafeAddresses"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function unsetSafeAddresses(\n    address[] safeAddresses\n) external\n")),(0,d.kt)("p",null,"batch version of unsetSafeAddresses"),(0,d.kt)("h4",{id:"parameters-4"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddresses")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the addresses to un-set as safe")))),(0,d.kt)("h3",{id:"withdrawtosafeaddress"},"withdrawToSafeAddress"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdrawToSafeAddress(\n    address pcvDeposit,\n    address safeAddress,\n    uint256 amount,\n    bool pauseAfter,\n    bool depositAfter\n) external\n")),(0,d.kt)("p",null,"governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it"),(0,d.kt)("h4",{id:"parameters-5"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the address of the pcv deposit contract")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddress")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the destination address to withdraw to")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"amount")),(0,d.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the amount to withdraw")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pauseAfter")),(0,d.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,d.kt)("td",{parentName:"tr",align:"left"},"if true, the pcv contract will be paused after the withdraw")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"depositAfter")),(0,d.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,d.kt)("td",{parentName:"tr",align:"left"},"if true, attempts to deposit to the target PCV deposit")))),(0,d.kt)("h3",{id:"withdrawethtosafeaddress"},"withdrawETHToSafeAddress"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdrawETHToSafeAddress(\n    address pcvDeposit,\n    address payable safeAddress,\n    uint256 amount,\n    bool pauseAfter,\n    bool depositAfter\n) external\n")),(0,d.kt)("p",null,"governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it"),(0,d.kt)("h4",{id:"parameters-6"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the address of the pcv deposit contract")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddress")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the destination address to withdraw to")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"amount")),(0,d.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the amount of tokens to withdraw")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pauseAfter")),(0,d.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,d.kt)("td",{parentName:"tr",align:"left"},"if true, the pcv contract will be paused after the withdraw")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"depositAfter")),(0,d.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,d.kt)("td",{parentName:"tr",align:"left"},"if true, attempts to deposit to the target PCV deposit")))),(0,d.kt)("h3",{id:"withdrawerc20tosafeaddress"},"withdrawERC20ToSafeAddress"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdrawERC20ToSafeAddress(\n    address pcvDeposit,\n    address safeAddress,\n    address token,\n    uint256 amount,\n    bool pauseAfter,\n    bool depositAfter\n) external\n")),(0,d.kt)("p",null,"governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it"),(0,d.kt)("h4",{id:"parameters-7"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the deposit to pull funds from")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddress")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the destination address to withdraw to")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"token")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the token to withdraw")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"amount")),(0,d.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,d.kt)("td",{parentName:"tr",align:"left"},"the amount of funds to withdraw")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pauseAfter")),(0,d.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,d.kt)("td",{parentName:"tr",align:"left"},"whether to pause the pcv after withdrawing")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"depositAfter")),(0,d.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,d.kt)("td",{parentName:"tr",align:"left"},"if true, attempts to deposit to the target PCV deposit")))),(0,d.kt)("h2",{id:"events"},"Events"),(0,d.kt)("h3",{id:"safeaddressadded"},"SafeAddressAdded"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"event SafeAddressAdded(\n    address safeAddress\n)\n")),(0,d.kt)("h4",{id:"parameters-8"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddress")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})))),(0,d.kt)("h3",{id:"safeaddressremoved"},"SafeAddressRemoved"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"event SafeAddressRemoved(\n    address safeAddress\n)\n")),(0,d.kt)("h4",{id:"parameters-9"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"safeAddress")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})))),(0,d.kt)("h3",{id:"pcvguardianwithdrawal"},"PCVGuardianWithdrawal"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"event PCVGuardianWithdrawal(\n    address pcvDeposit,\n    address destination,\n    uint256 amount\n)\n")),(0,d.kt)("h4",{id:"parameters-10"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"destination")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"amount")),(0,d.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,d.kt)("td",{parentName:"tr",align:"left"})))),(0,d.kt)("h3",{id:"pcvguardianethwithdrawal"},"PCVGuardianETHWithdrawal"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"event PCVGuardianETHWithdrawal(\n    address pcvDeposit,\n    address destination,\n    uint256 amount\n)\n")),(0,d.kt)("h4",{id:"parameters-11"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"destination")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"amount")),(0,d.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,d.kt)("td",{parentName:"tr",align:"left"})))),(0,d.kt)("h3",{id:"pcvguardianerc20withdrawal"},"PCVGuardianERC20Withdrawal"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-solidity"},"event PCVGuardianERC20Withdrawal(\n    address pcvDeposit,\n    address destination,\n    address token,\n    uint256 amount\n)\n")),(0,d.kt)("h4",{id:"parameters-12"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"pcvDeposit")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"destination")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"token")),(0,d.kt)("td",{parentName:"tr",align:"left"},"address"),(0,d.kt)("td",{parentName:"tr",align:"left"})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"amount")),(0,d.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,d.kt)("td",{parentName:"tr",align:"left"})))))}f.isMDXComponent=!0}}]);