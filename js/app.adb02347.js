(function(){"use strict";var e={9398:function(e,t,a){var r=a(7203),n=a.n(r),o=a(6848),l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("HeaderLayout"),t("div",{staticClass:"container w-[1200px] mx-auto my-4 flex flex-col gap-6 relative min-h-[1200px]"},[t("div",{staticClass:"item-wrap flex flex-col gap-1"},[e._m(0),t("div",{staticClass:"form-item flex flex-row gap-2"},[t("el-input",{staticClass:"code-input",attrs:{type:"textarea",placeholder:"貼上帳號資訊",resize:"none"},model:{value:e.accountInfo,callback:function(t){e.accountInfo=t},expression:"accountInfo"}})],1),t("div",{staticClass:"form-item flex flex-row gap-2"},[t("el-select",{attrs:{placeholder:"請選擇",multiple:"","collapse-tags":""},model:{value:e.selectFriendCodeForNewAddFriend,callback:function(t){e.selectFriendCodeForNewAddFriend=t},expression:"selectFriendCodeForNewAddFriend"}},e._l(e.FRIEND_CODE_LIST,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"form-item flex flex-row gap-2"},[t("el-input",{attrs:{type:"text",placeholder:"好友代碼(用逗號隔開)"},model:{value:e.friendCodeForNewAddFriend,callback:function(t){e.friendCodeForNewAddFriend=t},expression:"friendCodeForNewAddFriend"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("autoAddFriend2")}}},[e._v("產生指令")])],1),e.autoAddFriend2Command?t("div",{staticClass:"flex flex-row gap-2 items-center"},[t("span",[e._v(e._s(e.autoAddFriend2Command))]),t("el-button",{attrs:{type:"primary",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyCommand(e.autoAddFriend2Command)}}})],1):e._e()]),t("div",{staticClass:"item-wrap flex flex-col gap-1"},[t("div",{staticClass:"flex flex-row items-center"},[e.secretBtn2?t("img",{staticClass:"w-7 h-7",attrs:{src:a(1195)},on:{click:function(t){e.secretBtn2=!e.secretBtn2}}}):t("img",{staticClass:"w-7 h-7",attrs:{src:a(9086)},on:{click:function(t){e.secretBtn2=!e.secretBtn2}}}),t("span",{staticClass:"text-xl font-bold"},[e._v("專案路徑")])]),t("div",{staticClass:"form-item flex flex-row gap-2"},[t("el-input",{attrs:{type:"text",placeholder:e.localRoute},model:{value:e.projectPath,callback:function(t){e.projectPath=t},expression:"projectPath"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.savePath("project")}}},[e._v("儲存")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("projectPath")}}},[e._v("產生cd指令")])],1),e.projectPathCommand?t("div",{staticClass:"flex flex-row gap-2 items-center"},[t("span",[e._v(e._s(e.projectPathCommand))]),t("el-button",{attrs:{type:"primary",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyCommand(e.projectPathCommand)}}})],1):e._e()]),t("div",{staticClass:"item-wrap flex flex-col gap-1"},[e._m(1),t("div",{staticClass:"form-item flex flex-row gap-2"},[t("el-input",{attrs:{type:"text",placeholder:e.getCardRoute},model:{value:e.getCardPath,callback:function(t){e.getCardPath=t},expression:"getCardPath"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.savePath("getCard")}}},[e._v("儲存")])],1)]),t("div",{staticClass:"item-wrap flex flex-col gap-1"},[t("div",{staticClass:"flex flex-row items-center"},[e.secretBtn1?t("img",{staticClass:"w-7 h-7",attrs:{src:a(1195)},on:{click:function(t){e.secretBtn1=!e.secretBtn1}}}):t("img",{staticClass:"w-7 h-7",attrs:{src:a(9252)},on:{click:function(t){e.secretBtn1=!e.secretBtn1}}}),t("span",{staticClass:"text-xl font-bold"},[e._v("自動加好友")])]),t("div",{staticClass:"form-item flex flex-row gap-3 items-end"},[t("div",{staticClass:"flex flex-col gap-2"},[t("span",[e._v("選擇模擬器ID")]),t("el-select",{attrs:{placeholder:"請選擇"},model:{value:e.addFriendId,callback:function(t){e.addFriendId=t},expression:"addFriendId"}},e._l(e.createAccountOptionList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"flex flex-col gap-2"},[t("span",[e._v("好友代碼")]),t("el-input",{attrs:{type:"text",placeholder:"3782321085029142"},model:{value:e.friendCode,callback:function(t){e.friendCode=t},expression:"friendCode"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("autoAddFriend")}}},[e._v("產生指令")])],1),e.autoAddFriendCommand?t("div",{staticClass:"flex flex-row gap-2 items-center"},[t("span",[e._v(e._s(e.autoAddFriendCommand))]),t("el-button",{attrs:{type:"primary",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyCommand(e.autoAddFriendCommand)}}})],1):e._e()]),t("div",{staticClass:"item-wrap flex flex-col gap-1"},[e._m(2),t("div",{staticClass:"form-item flex flex-row gap-3 items-end"},[t("div",{staticClass:"flex flex-col gap-2"},[t("span",[e._v("選擇模擬器ID")]),t("el-select",{attrs:{placeholder:"請選擇"},model:{value:e.addFriendArrayId,callback:function(t){e.addFriendArrayId=t},expression:"addFriendArrayId"}},e._l(e.createAccountOptionList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"flex flex-col gap-2"},[t("span",[e._v("好友代碼(用逗號隔開)")]),t("el-input",{staticClass:"w-[700px]",attrs:{type:"text",placeholder:"3782321085029142,3961502832604782"},model:{value:e.friendCodeArr,callback:function(t){e.friendCodeArr=t},expression:"friendCodeArr"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("autoAddFriendArray")}}},[e._v("產生指令")])],1),e.autoAddFriendArrayCommand?t("div",{staticClass:"flex flex-row gap-2 items-center"},[t("span",[e._v(e._s(e.autoAddFriendArrayCommand))]),t("el-button",{attrs:{type:"primary",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyCommand(e.autoAddFriendArrayCommand)}}})],1):e._e()]),t("div",{staticClass:"item-wrap flex flex-col gap-1"},[e._m(3),t("div",{staticClass:"form-item flex flex-row gap-3 items-end"},[t("div",{staticClass:"flex flex-col gap-2"},[t("span",[e._v("選擇模擬器ID")]),t("el-select",{attrs:{placeholder:"請選擇"},model:{value:e.makeAccountPushId,callback:function(t){e.makeAccountPushId=t},expression:"makeAccountPushId"}},e._l(e.createAccountOptionList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"flex flex-col gap-2"},[t("span",[e._v("xml檔名")]),t("el-input",{attrs:{type:"text",placeholder:0x47e94a2c2943ac},model:{value:e.xmlName,callback:function(t){e.xmlName=t},expression:"xmlName"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("makeAccountPush")}}},[e._v("產生指令")])],1),e.makeAccountPushCommand?t("div",{staticClass:"flex flex-row gap-2 items-center"},[t("span",[e._v(e._s(e.makeAccountPushCommand))]),t("el-button",{attrs:{type:"primary",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyCommand(e.makeAccountPushCommand)}}})],1):e._e()]),t("el-button",{staticClass:"my-4",attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.clearAllRecord}},[e._v("清除所有紀錄")]),e.secretBtn1&&e.secretBtn2?t("div",{staticClass:"list-wrap absolute top-[300px] right-[0px] p-4 bg-white border border-gray-300 rounded-lg flex justify-center items-center flex-col gap-2"},e._l(e.secretFriendCodeList,(function(a){return t("div",{key:a.value,on:{click:function(t){return e.copyCommand(a.value)}}},[t("el-button",[e._v(e._s(a.label))])],1)})),0):e._e()],1),t("FooterLayout")],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row items-center"},[t("img",{staticClass:"w-7 h-7",attrs:{src:a(4406)}}),t("span",{staticClass:"text-xl font-bold"},[e._v("自動加好友2.0")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row items-center"},[t("img",{staticClass:"w-7 h-7",attrs:{src:a(4406)}}),t("span",{staticClass:"text-xl font-bold"},[e._v("輸入得卡包儲存路徑")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row items-center"},[t("img",{staticClass:"w-7 h-7",attrs:{src:a(579)}}),t("span",{staticClass:"text-xl font-bold"},[e._v("自動加多組好友")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row items-center"},[t("img",{staticClass:"w-7 h-7",attrs:{src:a(8289)}}),t("span",{staticClass:"text-xl font-bold"},[e._v("模擬器寫入帳號")])])}];a(8992),a(4520),a(3949),a(1454);const i=[{label:"教主",value:"7574249243230041"},{label:"14",value:"3163477060987121"},{label:"賢賢(至尊本號)",value:"8076548706677528"},{label:"ㄚ薰",value:"3961502832604782"},{label:"嗚啦",value:"0533823079785559"},{label:"186",value:"1924802664025666"},{label:"皮媽霏霏(霏霏)",value:"1472550788273075"},{label:"嘎啦",value:"6327373641158054"},{label:"汪汪狗鯊(汪汪 真 狗狗)",value:"3869871072185116"},{label:"阿琦琦(琦)",value:"4632129169375739"},{label:"兒兒",value:"3782321085029142"},{label:"室友",value:"9691530321487258"},{label:"choco",value:"1864817649911196"},{label:"Hsun",value:"0340902103938840"},{label:"BIBII",value:"3800195344918020"},{label:"烏鴉",value:"0903333396051784"},{label:"亨利(蝙蝠俠)",value:"0379230796324845"},{label:"Kizz",value:"0978689557537040"},{label:"同事A(steven)",value:"9421998054533884"},{label:"同事B(patrick)",value:"5575900059941808"},{label:"賢賢(小號)",value:"0880618651566095"},{label:"卡比君(霏霏)",value:"2299773240793377"},{label:"伊布布(霏霏)",value:"5341687341075031"}];var c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},m=u,p=a(1656),f=(0,p.A)(m,c,d,!1,null,"b9167eee",null),v=f.exports,h=function(){var e=this;e._self._c;return e._m(0)},g=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"h-16 bg-gray-950 flex items-center justify-center"},[t("h1",{staticClass:"text-white text-xl font-bold"},[e._v("腳本指令快速產生器")])])}],C={name:"HeaderLayout"},_=C,A=(0,p.A)(_,h,g,!1,null,"19c5c092",null),y=A.exports,x=function(){var e=this;e._self._c;return e._m(0)},b=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row justify-center items-center bg-current h-[150px] relative bottom-0"},[t("span",{staticClass:"text-white"},[e._v("Copyright ©2024 h2")])])}],I={name:"FooterLayout"},k=I,F=(0,p.A)(k,x,b,!1,null,null,null),w=F.exports,P={name:"App",components:{HelloWorld:v,HeaderLayout:y,FooterLayout:w},data(){return{FRIEND_CODE_LIST:i,localRoute:"C:\\Users\\88692\\Desktop\\pokemon-tcgp-helper",getCardRoute:"C:\\Users\\88692\\Downloads\\PTCG",projectPath:"",getCardPath:"",isEventFlg:!1,createAccountItem:[],getCardItem:"",createAccountItemAlone:"",getCardItemAlone:"",friendCode:"",addFriendId:"",makeAccountPushId:"",addFriendArrayId:"",xmlName:"",createAccountOptionList:[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"}],getCardOptionList:[],createAndGetCardCommand:"",createAccountCommand:"",getCardCommand:"",projectPathCommand:"",autoAddFriendCommand:"",makeAccountPushCommand:"",autoAddFriendArrayCommand:"",autoAddFriend2Command:"",cardType:"",cardTypeOptionList:[{label:"噴火龍",value:"1"},{label:"超夢",value:"2"},{label:"皮卡丘",value:"3"},{label:"夢幻",value:"4"}],secretBtn1:!1,secretBtn2:!1,secretFriendCodeList:[{label:"兒兒",value:"3782321085029142"},{label:"室友",value:"9691530321487258"},{label:"choco",value:"1864817649911196"},{label:"Hsun",value:"0340902103938840"},{label:"BIBII",value:"3800195344918020"},{label:"烏鴉",value:"0903333396051784"},{label:"教主",value:"7574249243230041"}],friendCodeArr:"",accountInfo:"",friendCodeForNewAddFriend:"",accountInfoAccount:"",accountInfoPassword:"",selectFriendCodeForNewAddFriend:[]}},mounted(){this.getCardOptionList=this.createAccountOptionList,this.projectPath=localStorage.getItem("projectPath")||"",this.getCardPath=localStorage.getItem("getCardPath")||"";const e=localStorage.getItem("createAccountItem");this.createAccountItem=e?e.split(","):[],this.getCardItem=localStorage.getItem("getCardItem")||"",this.getCardItemAlone=localStorage.getItem("getCardItemAlone")||"",this.isEventFlg=JSON.parse(localStorage.getItem("isEventFlg"))||!1,this.createAccountItemAlone=localStorage.getItem("createAccountItemAlone")||"",this.friendCode=localStorage.getItem("friendCode")||"",this.addFriendId=localStorage.getItem("addFriendId")||"",this.makeAccountPushId=localStorage.getItem("makeAccountPushId")||"",this.cardType=localStorage.getItem("cardType")||"",this.friendCodeArr=localStorage.getItem("friendCodeArr")||"",this.addFriendArrayId=localStorage.getItem("addFriendArrayId")||""},watch:{createAccountItem:{handler(e){this.getCardOptionList=this.createAccountOptionList.filter((t=>!e.includes(t.value)))}},selectFriendCodeForNewAddFriend:{handler(e){this.friendCodeForNewAddFriend=e.join(",")}}},methods:{savePath(e){const t={project:{key:"projectPath",value:this.projectPath},getCard:{key:"getCardPath",value:this.getCardPath}},a=t[e];if(a)try{localStorage.setItem(a.key,a.value);const e=localStorage.getItem(a.key);if(e!==a.value)throw new Error("儲存驗證失敗");this.$notify({title:"成功",message:`${a.value}已成功儲存`,type:"success"})}catch(r){this.$notify({title:"錯誤",message:`儲存失敗：${r.message}`,type:"error"})}},handleSubmit(e){const t={createAndGetCard:{fields:[{key:"createAccountItem",message:"需要選擇模擬器ID",validator:e=>e.length>0},{key:"getCardItem",message:"需要選擇得卡驗證模擬器ID",validator:e=>""!==e},{key:"cardType",message:"需要選擇卡包",validator:e=>""!==e}],command:"createAndGetCardCommand",storage:["createAccountItem","getCardItem","isEventFlg","cardType"]},projectPath:{fields:[{key:"projectPath",message:"需要填寫專案路徑",validator:e=>""!==e}],command:"projectPathCommand",storage:["projectPath"]},createAccountItemAlone:{fields:[{key:"createAccountItemAlone",message:"需要選擇模擬器ID",validator:e=>""!==e},{key:"cardType",message:"需要選擇卡包",validator:e=>""!==e}],command:"createAccountCommand",storage:["createAccountItemAlone","cardType"]},getCardItemAlone:{fields:[{key:"getCardItemAlone",message:"需要選擇模擬器ID",validator:e=>""!==e}],command:"getCardCommand",storage:["getCardItemAlone","isEventFlg"]},autoAddFriend:{fields:[{key:"addFriendId",message:"需要選擇模擬器ID",validator:e=>""!==e},{key:"getCardPath",message:"需要輸入得卡包路徑",validator:e=>""!==e}],command:"autoAddFriendCommand",storage:["addFriendId","getCardPath","friendCode"]},makeAccountPush:{fields:[{key:"makeAccountPushId",message:"需要選擇模擬器ID",validator:e=>""!==e},{key:"getCardPath",message:"需要輸入得卡包路徑",validator:e=>""!==e},{key:"xmlName",message:"需要輸入.xml檔名",validator:e=>""!==e}],command:"makeAccountPushCommand",storage:["makeAccountPushId","getCardPath"]},autoAddFriendArray:{fields:[{key:"addFriendArrayId",message:"需要選擇模擬器ID",validator:e=>""!==e},{key:"getCardPath",message:"需要輸入得卡包路徑",validator:e=>""!==e},{key:"friendCodeArr",message:"需要輸入好友代碼",validator:e=>""!==e}],command:"autoAddFriendArrayCommand",storage:["addFriendArrayId","getCardPath","friendCodeArr"]},autoAddFriend2:{fields:[{key:"accountInfo",message:"需要貼上正確格式的帳號資訊",validator:e=>{const t=/<string name="deviceAccount">(.*?)<\/string>/,a=/<string name="devicePassword">(.*?)<\/string>/;return t.test(e)&&a.test(e)}},{key:"friendCodeForNewAddFriend",message:"需要輸入好友代碼",validator:e=>""!==e}],command:"autoAddFriend2Command",storage:["friendCodeForNewAddFriend"]}},a=t[e];if(a){for(const e of a.fields)if(!e.validator(this[e.key]))return void this.$notify({title:"必填",message:e.message,type:"error"});if("autoAddFriend2"===e)try{const e=this.accountInfo.match(/<string name="deviceAccount">(.*?)<\/string>/),t=this.accountInfo.match(/<string name="devicePassword">(.*?)<\/string>/);if(!e||!t)throw new Error("帳號資訊格式不正確");if(this.accountInfoAccount=e[1],this.accountInfoPassword=t[1],!this.accountInfoAccount||!this.accountInfoPassword)throw new Error("無法提取帳號或密碼")}catch(r){return void this.$notify({title:"錯誤",message:`解析帳號資訊失敗：${r.message}`,type:"error"})}this[a.command]="projectPath"===e?`cd ${this.projectPath}`:this.buildCommand(e),a.storage.forEach((e=>{localStorage.setItem(e,this[e])}))}},buildCommand(e){const t={createAndGetCard:{script:"01-makeAccounts-multi.ps1",params:{deviceIndexes:this.createAccountItem.join(","),deviceIndex_check:this.getCardItem,pack:this.cardType,notify_rarity:"SR,SAR",check:!0,account_num:12,event_flg:this.isEventFlg}},createAccountItemAlone:{script:"01-makeAccounts.ps1",params:{device_index:this.createAccountItemAlone,pack:this.cardType,notify_rarity:"SR,SAR",check:!0}},getCardItemAlone:{script:"03-makeAccounts-check-auto.ps1",params:{device_index:this.getCardItemAlone,account_num:12,event_flg:this.isEventFlg}},autoAddFriend:{script:"06-addFriend.ps1",params:{device_index:this.addFriendId,target_path:this.getCardPath,fc:this.friendCode?`"${this.friendCode}"`:""}},makeAccountPush:{script:"02-makeAccounts-push.ps1",params:{device_index:this.makeAccountPushId,source_file:`${this.getCardPath}\\${this.xmlName}.xml`}},autoAddFriendArray:{script:"06-addFriend-array.ps1",params:{device_index:this.addFriendArrayId,target_path:this.getCardPath,fc:this.friendCodeArr?`@(${this.friendCodeArr.split(",").map((e=>`"${e.trim()}"`)).join(",")})`:""}},autoAddFriend2:{script:"friend_adder",params:{account:this.accountInfoAccount,password:this.accountInfoPassword,codes:this.friendCodeForNewAddFriend?`${this.friendCodeForNewAddFriend.split(",").map((e=>`${e.trim()}`)).join(",")}`:""}}},a=t[e];return a?this.formatCommand(a.script,a.params):""},formatCommand(e,t){const a=Object.entries(t).map((([t,a])=>"friend_adder"===e?a?`--${t} ${a}`:"":"boolean"===typeof a?a?`-${t}`:"":a?`-${t} ${a}`:"")).filter(Boolean);return`.\\${e} ${a.join(" ")}`},copyCommand(e){navigator.clipboard.writeText(e).then((()=>{this.$notify({title:"成功",message:"指令已複製到剪貼簿",type:"success",duration:2e3})})).catch((e=>{this.$notify({title:"錯誤",message:`複製失敗：${e.message}`,type:"error",duration:3e3})}))},clearAllRecord(){this.$confirm("此操作將刪除所有欄位紀錄, 是否繼續?","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((()=>{localStorage.clear(),this.projectPath="",this.getCardPath="",this.createAccountItem=[],this.getCardItem="",this.createAccountItemAlone="",this.getCardItemAlone="",this.friendCode="",this.addFriendId="",this.makeAccountPushId="",this.cardType="",this.isEventFlg=!1,this.xmlName="",this.$notify({title:"成功",message:"所有紀錄已清除",type:"success"})})).catch((()=>{}))}}},j=P,S=(0,p.A)(j,l,s,!1,null,null,null),O=S.exports;o["default"].config.productionTip=!1,o["default"].use(n()),new o["default"]({render:e=>e(O)}).$mount("#app")},579:function(e,t,a){e.exports=a.p+"img/COIN_100060_FUSHIGIBANA.6db3bfee.png"},8289:function(e,t,a){e.exports=a.p+"img/COIN_100100_MEWTWO.9e9fa105.png"},9252:function(e,t,a){e.exports=a.p+"img/COIN_100130_SIRNIGHT.0630b698.png"},4406:function(e,t,a){e.exports=a.p+"img/COIN_100140_PIKACHU.72a661b4.png"},1195:function(e,t,a){e.exports=a.p+"img/COIN_100240_PremiumSet.1e7fc7ac.png"},9086:function(e,t,a){e.exports=a.p+"img/COIN_100250_MEW.0fe19cc4.png"}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var s=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/shell-app/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,l=r[0],s=r[1],i=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var d=i(a)}for(t&&t(r);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=self["webpackChunkshell_app"]=self["webpackChunkshell_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(9398)}));r=a.O(r)})();
//# sourceMappingURL=app.adb02347.js.map