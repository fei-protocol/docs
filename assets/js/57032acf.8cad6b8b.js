"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4915],{4907:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(a),k=n,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(u,p(p({ref:t},s),{},{components:a})):r.createElement(u,p({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9379:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var r=a(5177),n=a(4416),l=(a(6687),a(4907)),p=["components"],i={},d="MockRewardsDistributor",o={unversionedId:"protocol/smart-contract-api/mock/MockRewardsDistributor",id:"protocol/smart-contract-api/mock/MockRewardsDistributor",title:"MockRewardsDistributor",description:"Functions",source:"@site/docs/protocol/smart-contract-api/mock/MockRewardsDistributor.md",sourceDirName:"protocol/smart-contract-api/mock",slug:"/protocol/smart-contract-api/mock/MockRewardsDistributor",permalink:"/docs/docs/protocol/smart-contract-api/mock/MockRewardsDistributor",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/mock/MockRewardsDistributor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MockRestrictedPermissions",permalink:"/docs/docs/protocol/smart-contract-api/mock/MockRestrictedPermissions"},next:{title:"MockRouter",permalink:"/docs/docs/protocol/smart-contract-api/mock/MockRouter"}},s={},m=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"_setPendingAdmin",id:"_setpendingadmin",level:3},{value:"Parameters",id:"parameters",level:4},{value:"_acceptAdmin",id:"_acceptadmin",level:3},{value:"_grantComp",id:"_grantcomp",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"_setCompSupplySpeed",id:"_setcompsupplyspeed",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"_setCompBorrowSpeed",id:"_setcompborrowspeed",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"_setContributorCompSpeed",id:"_setcontributorcompspeed",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"_addMarket",id:"_addmarket",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"compSupplySpeeds",id:"compsupplyspeeds",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"compBorrowSpeeds",id:"compborrowspeeds",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"setCompSupplySpeed",id:"setcompsupplyspeed",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"setCompBorrowSpeed",id:"setcompborrowspeed",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"_setImplementation",id:"_setimplementation",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Events",id:"events",level:2},{value:"successSetAdmin",id:"successsetadmin",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"successAcceptPendingAdmin",id:"successacceptpendingadmin",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"successGrantComp",id:"successgrantcomp",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"successSetCompSupplySpeed",id:"successsetcompsupplyspeed",level:3},{value:"successSetCompBorrowSpeed",id:"successsetcompborrowspeed",level:3},{value:"successSetCompContributorSpeed",id:"successsetcompcontributorspeed",level:3},{value:"successAddMarket",id:"successaddmarket",level:3}],c={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mockrewardsdistributor"},"MockRewardsDistributor"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor() public\n")),(0,l.kt)("h3",{id:"_setpendingadmin"},"_setPendingAdmin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setPendingAdmin(\n    address _newPendingAdmin\n) external\n")),(0,l.kt)("p",null,"Begins transfer of admin rights. The newPendingAdmin must call ",(0,l.kt)("inlineCode",{parentName:"p"},"_acceptAdmin")," to finalize the transfer."),(0,l.kt)("p",null,"Admin function to begin change of admin. The newPendingAdmin must call ",(0,l.kt)("inlineCode",{parentName:"p"},"_acceptAdmin")," to finalize the transfer."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_newPendingAdmin")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"New pending admin.")))),(0,l.kt)("h3",{id:"_acceptadmin"},"_acceptAdmin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _acceptAdmin() external\n")),(0,l.kt)("p",null,"Accepts transfer of admin rights. msg.sender must be pendingAdmin"),(0,l.kt)("p",null,"Admin function for pending admin to accept role and update admin"),(0,l.kt)("h3",{id:"_grantcomp"},"_grantComp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _grantComp(\n    address recipient,\n    uint256 amount\n) external\n")),(0,l.kt)("p",null,"Transfer COMP to the recipient"),(0,l.kt)("p",null,"Note: If there is not enough COMP, we do not perform the transfer all."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the recipient to transfer COMP to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of COMP to (possibly) transfer")))),(0,l.kt)("h3",{id:"_setcompsupplyspeed"},"_setCompSupplySpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setCompSupplySpeed(\n    address cToken,\n    uint256 compSpeed\n) external\n")),(0,l.kt)("p",null,"Set COMP speed for a single market"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market whose COMP speed to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"compSpeed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_setcompborrowspeed"},"_setCompBorrowSpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setCompBorrowSpeed(\n    address cToken,\n    uint256 compSpeed\n) external\n")),(0,l.kt)("p",null,"Set COMP speed for a single market"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market whose COMP speed to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"compSpeed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_setcontributorcompspeed"},"_setContributorCompSpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setContributorCompSpeed(\n    address contributor,\n    uint256 compSpeed\n) external\n")),(0,l.kt)("p",null,"Set COMP speed for a single contributor"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"contributor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The contributor whose COMP speed to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"compSpeed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"New COMP speed for contributor")))),(0,l.kt)("h3",{id:"_addmarket"},"_addMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _addMarket(\n    address cToken\n) external\n")),(0,l.kt)("p",null,"Add a default market to claim rewards for in ",(0,l.kt)("inlineCode",{parentName:"p"},"claimRewards()")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market to add")))),(0,l.kt)("h3",{id:"compsupplyspeeds"},"compSupplySpeeds"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function compSupplySpeeds(\n    address cToken\n) external returns (uint256)\n")),(0,l.kt)("p",null,"view function to get the comp supply speeds from the rewards distributor contract"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market to view")))),(0,l.kt)("h3",{id:"compborrowspeeds"},"compBorrowSpeeds"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function compBorrowSpeeds(\n    address cToken\n) external returns (uint256)\n")),(0,l.kt)("p",null,"view function to get the comp borrow speeds from the rewards distributor contract"),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market to view")))),(0,l.kt)("h3",{id:"setcompsupplyspeed"},"setCompSupplySpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCompSupplySpeed(\n    uint256 newSpeed\n) external\n")),(0,l.kt)("p",null,"admin function"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newSpeed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setcompborrowspeed"},"setCompBorrowSpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCompBorrowSpeed(\n    uint256 newSpeed\n) external\n")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newSpeed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_setimplementation"},"_setImplementation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setImplementation(\n    address implementation_\n) external\n")),(0,l.kt)("p",null,"Set the implementation contract the RewardsDistributorDelegator delegate calls"),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"implementation_")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the logic contract address")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"successsetadmin"},"successSetAdmin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successSetAdmin(\n    address pendingAdmin\n)\n")),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pendingAdmin")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"successacceptpendingadmin"},"successAcceptPendingAdmin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successAcceptPendingAdmin(\n    address newlyAppointedAdmin\n)\n")),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newlyAppointedAdmin")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"successgrantcomp"},"successGrantComp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successGrantComp(\n    address compGrantee,\n    uint256 compAmount\n)\n")),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"compGrantee")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"compAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"successsetcompsupplyspeed"},"successSetCompSupplySpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successSetCompSupplySpeed(\n)\n")),(0,l.kt)("h3",{id:"successsetcompborrowspeed"},"successSetCompBorrowSpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successSetCompBorrowSpeed(\n)\n")),(0,l.kt)("h3",{id:"successsetcompcontributorspeed"},"successSetCompContributorSpeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successSetCompContributorSpeed(\n)\n")),(0,l.kt)("h3",{id:"successaddmarket"},"successAddMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event successAddMarket(\n)\n")))}k.isMDXComponent=!0}}]);