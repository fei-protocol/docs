"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5140],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=n,u=s["".concat(d,".").concat(c)]||s[c]||k[c]||l;return a?r.createElement(u,i(i({ref:e},m),{},{components:a})):r.createElement(u,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3616:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={},d="ITokemakPool",p={unversionedId:"protocol/smart-contract-api/pcv/tokemak/TokemakPCVDepositBase",id:"protocol/smart-contract-api/pcv/tokemak/TokemakPCVDepositBase",title:"ITokemakPool",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/tokemak/TokemakPCVDepositBase.md",sourceDirName:"protocol/smart-contract-api/pcv/tokemak",slug:"/protocol/smart-contract-api/pcv/tokemak/TokemakPCVDepositBase",permalink:"/docs/protocol/smart-contract-api/pcv/tokemak/TokemakPCVDepositBase",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/pcv/tokemak/TokemakPCVDepositBase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ITokemakEthPool",permalink:"/docs/protocol/smart-contract-api/pcv/tokemak/EthTokemakPCVDeposit"},next:{title:"IUniswapPCVDeposit",permalink:"/docs/protocol/smart-contract-api/pcv/uniswap/IUniswapPCVDeposit"}},m={},k=[{value:"Functions",id:"functions",level:2},{value:"underlyer",id:"underlyer",level:3},{value:"balanceOf",id:"balanceof",level:3},{value:"Parameters",id:"parameters",level:4},{value:"requestWithdrawal",id:"requestwithdrawal",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"claim",id:"claim",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Functions",id:"functions-2",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"balance",id:"balance",level:3},{value:"balanceReportedIn",id:"balancereportedin",level:3},{value:"requestWithdrawal",id:"requestwithdrawal-1",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"claimRewards",id:"claimrewards",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Events",id:"events",level:2},{value:"ClaimRewards",id:"claimrewards-1",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"RequestWithdrawal",id:"requestwithdrawal-2",level:3},{value:"Parameters",id:"parameters-7",level:4}],s={toc:k};function c(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"itokemakpool"},"ITokemakPool"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"underlyer"},"underlyer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function underlyer() external returns (address)\n")),(0,l.kt)("h3",{id:"balanceof"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balanceOf(\n    address holder\n) external returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"holder")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"requestwithdrawal"},"requestWithdrawal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function requestWithdrawal(\n    uint256 amount\n) external\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h1",{id:"itokemakrewards"},"ITokemakRewards"),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"claim"},"claim"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function claim(\n    struct ITokemakRewards.Recipient recipient,\n    uint8 v,\n    bytes32 r,\n    bytes32 s\n) external\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct ITokemakRewards.Recipient"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"v")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"r")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h1",{id:"tokemakpcvdepositbase"},"TokemakPCVDepositBase"),(0,l.kt)("h2",{id:"functions-2"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    address _pool,\n    address _rewards\n) internal\n")),(0,l.kt)("p",null,"Tokemak PCV Deposit constructor"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_core")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Tokemak pool to deposit in")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_rewards")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Tokemak rewards contract to claim TOKE incentives")))),(0,l.kt)("h3",{id:"balance"},"balance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balance() public returns (uint256)\n")),(0,l.kt)("p",null,"returns total balance of PCV in the Deposit excluding the FEI"),(0,l.kt)("h3",{id:"balancereportedin"},"balanceReportedIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balanceReportedIn() public returns (address)\n")),(0,l.kt)("p",null,"display the related token of the balance reported"),(0,l.kt)("h3",{id:"requestwithdrawal-1"},"requestWithdrawal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function requestWithdrawal(\n    uint256 amountUnderlying\n) external\n")),(0,l.kt)("p",null,"request to withdraw a given amount of tokens to Tokemak. These\ntokens will be available for withdraw in the next cycles.\nThis function can be called by the contract admin, e.g. the OA multisig,\nin anticipation of the execution of a DAO proposal that will call withdraw()."),(0,l.kt)("p",null,"note that withdraw() calls will revert if this function has not been\ncalled before."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountUnderlying")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"of tokens to withdraw in a subsequent withdraw() call.")))),(0,l.kt)("h3",{id:"claimrewards"},"claimRewards"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimRewards(\n    uint256 cycle,\n    uint256 amount,\n    uint8 v,\n    bytes32 r,\n    bytes32 s\n) external\n")),(0,l.kt)("p",null,"For an example of IPFS json file, see :"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cycle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"v")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"r")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"claimrewards-1"},"ClaimRewards"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event ClaimRewards(\n    address _caller,\n    address _token,\n    address _to,\n    uint256 _amount\n)\n")),(0,l.kt)("p",null,"event generated when rewards are claimed"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_caller")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"requestwithdrawal-2"},"RequestWithdrawal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event RequestWithdrawal(\n    address _caller,\n    address _to,\n    uint256 _amount\n)\n")),(0,l.kt)("p",null,"event generated when a withdrawal is requested"),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_caller")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0}}]);