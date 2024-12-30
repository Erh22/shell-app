<template lang="pug">
  #app
    HeaderLayout
    .container(class="w-[1200px] mx-auto my-4 flex flex-col gap-6 relative")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(v-if="secretBtn2" src="../src/assets/img/COIN_100240_PremiumSet.png" class="w-7 h-7" @click="secretBtn2 = !secretBtn2")
          img(v-else src="../src/assets/img/COIN_100250_MEW.png" class="w-7 h-7" @click="secretBtn2 = !secretBtn2")
          span(class="text-xl font-bold") 專案路徑
        .form-item(class="flex flex-row gap-2")
          el-input(type="text" :placeholder="localRoute" v-model="projectPath")
          el-button(type="primary" @click="savePath('project')") 儲存
          el-button(type="primary" @click="handleSubmit('projectPath')") 產生cd指令
        div(v-if="projectPathCommand" class="flex flex-row gap-2 items-center")
          span {{ projectPathCommand }}
          el-button(type="primary" @click="copyCommand(projectPathCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(src="../src/assets/img/COIN_100140_PIKACHU.png" class="w-7 h-7")
          span(class="text-xl font-bold") 輸入得卡包儲存路徑
        .form-item(class="flex flex-row gap-2")
          el-input(type="text" :placeholder="getCardRoute" v-model="getCardPath")
          el-button(type="primary" @click="savePath('getCard')") 儲存
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(src="../src/assets/img/COIN_100080_KAMEX.png" class="w-7 h-7")
          span(class="text-xl font-bold") 創建帳號與啟動得卡驗證
        .form-item(class="flex flex-row gap-3 items-end")
          div(class="flex flex-col gap-2")
            span 選擇創建帳號模擬器ID
            el-select(v-model="createAccountItem" multiple placeholder="請選擇")
              el-option(v-for="item in createAccountOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span 選擇啟動得卡驗證模擬器ID
            el-select(v-model="getCardItem" placeholder="請選擇" clearable)
              el-option(v-for="item in getCardOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span 選擇卡包
            el-select(v-model="cardType" placeholder="請選擇" clearable)
              el-option(v-for="item in cardTypeOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            el-checkbox(v-model="isEventFlg") 得卡挑戰活動
          el-button(type="primary" @click="handleSubmit('createAndGetCard')") 產生指令
        div(v-if="createAndGetCardCommand" class="flex flex-row gap-2 items-center")
          span {{ createAndGetCardCommand }}
          el-button(type="primary" @click="copyCommand(createAndGetCardCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(src="../src/assets/img/COIN_100040_LIZARDON.png" class="w-7 h-7")
          span(class="text-xl font-bold") 單獨啟動創建帳號
        .form-item(class="flex flex-row gap-3 items-end")
          div(class="flex flex-col gap-2")
            span 選擇創建帳號模擬器ID
            el-select(v-model="createAccountItemAlone" placeholder="請選擇")
              el-option(v-for="item in createAccountOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span 選擇卡包
            el-select(v-model="cardType" placeholder="請選擇" clearable)
              el-option(v-for="item in cardTypeOptionList" :key="item.value" :label="item.label" :value="item.value")
          el-button(type="primary" @click="handleSubmit('createAccountItemAlone')") 產生指令
        div(v-if="createAccountCommand" class="flex flex-row gap-2 items-center")
          span {{ createAccountCommand }}
          el-button(type="primary" @click="copyCommand(createAccountCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(src="../src/assets/img/COIN_100030_NYARTH.png" class="w-7 h-7")
          span(class="text-xl font-bold") 單獨啟動得卡驗證
        .form-item(class="flex flex-row gap-3 items-end")
          div(class="flex flex-col gap-2")
            span 選擇啟動得卡驗證模擬器ID
            el-select(v-model="getCardItemAlone" placeholder="請選擇" clearable)
              el-option(v-for="item in getCardOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            el-checkbox(v-model="isEventFlg") 得卡挑戰活動
          el-button(type="primary" @click="handleSubmit('getCardItemAlone')") 產生指令
        div(v-if="getCardCommand" class="flex flex-row gap-2 items-center")
          span {{ getCardCommand }}
          el-button(type="primary" @click="copyCommand(getCardCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(v-if="secretBtn1" src="../src/assets/img/COIN_100240_PremiumSet.png" class="w-7 h-7" @click="secretBtn1 = !secretBtn1")
          img(v-else src="../src/assets/img/COIN_100130_SIRNIGHT.png" class="w-7 h-7" @click="secretBtn1 = !secretBtn1")
          span(class="text-xl font-bold") 自動加好友
        .form-item(class="flex flex-row gap-3 items-end")
          div(class="flex flex-col gap-2")
            span 選擇模擬器ID
            el-select(v-model="addFriendId" placeholder="請選擇")
              el-option(v-for="item in createAccountOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span 好友代碼
            el-input(type="text" placeholder="3782321085029142" v-model="friendCode")
          el-button(type="primary" @click="handleSubmit('autoAddFriend')") 產生指令
        div(v-if="autoAddFriendCommand" class="flex flex-row gap-2 items-center")
          span {{ autoAddFriendCommand }}
          el-button(type="primary" @click="copyCommand(autoAddFriendCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(src="../src/assets/img/COIN_100060_FUSHIGIBANA.png" class="w-7 h-7")
          span(class="text-xl font-bold") 自動加多組好友
        .form-item(class="flex flex-row gap-3 items-end")
          div(class="flex flex-col gap-2")
            span 選擇模擬器ID
            el-select(v-model="addFriendArrayId" placeholder="請選擇")
              el-option(v-for="item in createAccountOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span 好友代碼(用逗號隔開)
            el-input(type="text" placeholder="3782321085029142,3961502832604782" v-model="friendCodeArr" class="w-[700px]")
          el-button(type="primary" @click="handleSubmit('autoAddFriendArray')") 產生指令
        div(v-if="autoAddFriendArrayCommand" class="flex flex-row gap-2 items-center")
          span {{ autoAddFriendArrayCommand }}
          el-button(type="primary" @click="copyCommand(autoAddFriendArrayCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        div(class="flex flex-row items-center")
          img(src="../src/assets/img/COIN_100100_MEWTWO.png" class="w-7 h-7")
          span(class="text-xl font-bold") 模擬器寫入帳號
        .form-item(class="flex flex-row gap-3 items-end")
          div(class="flex flex-col gap-2")
            span 選擇模擬器ID
            el-select(v-model="makeAccountPushId" placeholder="請選擇")
              el-option(v-for="item in createAccountOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span xml檔名
            el-input(type="text" :placeholder="20241228124210093" v-model="xmlName")
          el-button(type="primary" @click="handleSubmit('makeAccountPush')") 產生指令
        div(v-if="makeAccountPushCommand" class="flex flex-row gap-2 items-center")
          span {{ makeAccountPushCommand }}
          el-button(type="primary" @click="copyCommand(makeAccountPushCommand)" icon="el-icon-copy-document")
      el-button(type="danger" @click="clearAllRecord" icon="el-icon-delete" class="my-4") 清除所有紀錄
      .list-wrap(v-if="secretBtn1 && secretBtn2" class="absolute top-[300px] right-[0px] p-4 bg-white border border-gray-300 rounded-lg flex justify-center items-center flex-col gap-2")
        div(v-for="item in secretFriendCodeList" :key="item.value" @click="copyCommand(item.value)")
          el-button {{ item.label }}
    FooterLayout
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import FooterLayout from './components/FooterLayout.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderLayout,
    FooterLayout,
  },
  data() {
    return {
      localRoute: 'C:\\Users\\88692\\Desktop\\pokemon-tcgp-helper',
      getCardRoute: 'C:\\Users\\88692\\Downloads\\PTCG',
      projectPath: '',
      getCardPath: '',
      isEventFlg: false,
      createAccountItem: [],
      getCardItem: '',
      createAccountItemAlone: '',
      getCardItemAlone: '',
      friendCode: '',
      addFriendId: '',
      makeAccountPushId: '',
      addFriendArrayId: '',
      xmlName: '',
      createAccountOptionList: [
        {
          label: '0',
          value: '0'
        },
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        },
        {
          label: '3',
          value: '3'
        },
        {
          label: '4',
          value: '4'
        },
        {
          label: '5',
          value: '5'
        },
        {
          label: '6',
          value: '6'
        },
        {
          label: '7',
          value: '7'
        },
      ],
      getCardOptionList: [],
      createAndGetCardCommand: '',
      createAccountCommand: '',
      getCardCommand: '',
      projectPathCommand: '',
      autoAddFriendCommand: '',
      makeAccountPushCommand: '',
      autoAddFriendArrayCommand: '',
      cardType: '',
      cardTypeOptionList: [
        {
          label: '噴火龍',
          value: '1'
        },
        {
          label: '超夢',
          value: '2'
        },
        {
          label: '皮卡丘',
          value: '3'
        },
        {
          label: '夢幻',
          value: '4'
        },
      ],
      secretBtn1: false,
      secretBtn2: false,
      secretFriendCodeList: [
        {
          label: '兒兒',
          value: '3782321085029142'
        },
        {
          label: '室友',
          value: '9691530321487258'
        },
        {
          label: 'choco',
          value: '1864817649911196'
        },
        {
          label: 'Hsun',
          value: '0340902103938840'
        },
        {
          label: '烏鴉',
          value: '0903333396051784'
        },
        {
          label: '教主',
          value: '7574249243230041'
        },
      ],
      friendCodeArr: '',
    }
  },
  mounted() {
    this.getCardOptionList = this.createAccountOptionList;
    this.projectPath = localStorage.getItem('projectPath') || '';
    this.getCardPath = localStorage.getItem('getCardPath') || '';
    const savedItems = localStorage.getItem('createAccountItem')
    this.createAccountItem = savedItems ? savedItems.split(',') : []
    this.getCardItem = localStorage.getItem('getCardItem') || '';
    this.getCardItemAlone = localStorage.getItem('getCardItemAlone') || '';
    this.isEventFlg = JSON.parse(localStorage.getItem('isEventFlg')) || false;
    this.createAccountItemAlone = localStorage.getItem('createAccountItemAlone') || '';
    this.friendCode = localStorage.getItem('friendCode') || '';
    this.addFriendId = localStorage.getItem('addFriendId') || '';
    this.makeAccountPushId = localStorage.getItem('makeAccountPushId') || '';
    this.cardType = localStorage.getItem('cardType') || '';
    this.friendCodeArr = localStorage.getItem('friendCodeArr') || '';
    this.addFriendArrayId = localStorage.getItem('addFriendArrayId') || '';
  },
  watch: {
    createAccountItem: {
      handler(newVal) {
        this.getCardOptionList = this.createAccountOptionList.filter(option => 
          !newVal.includes(option.value)
        )
        // this.getCardItem = '';
      },
      // immediate: true,
    }
  },
  methods: {
    savePath(type) {
      const pathConfig = {
        project: {
          key: 'projectPath',
          value: this.projectPath,
        },
        getCard: {
          key: 'getCardPath',
          value: this.getCardPath,
        }
      }

      const config = pathConfig[type]
      if (!config) return

      try {
        // 儲存路徑
        localStorage.setItem(config.key, config.value)

        // 驗證是否儲存成功
        const result = localStorage.getItem(config.key)

        if (result === config.value) {
          this.$notify({
            title: '成功',
            message: `${config.value}已成功儲存`,
            type: 'success'
          })
        } else {
          throw new Error('儲存驗證失敗')
        }
      } catch (error) {
        this.$notify({
          title: '錯誤',
          message: `儲存失敗：${error.message}`,
          type: 'error'
        })
      }
    },
    handleSubmit(type) {
      const validationConfig = {
        createAndGetCard: {
          fields: [
            { key: 'createAccountItem', message: '需要選擇模擬器ID', validator: value => value.length > 0 },
            { key: 'getCardItem', message: '需要選擇得卡驗證模擬器ID', validator: value => value !== '' },
            { key: 'cardType', message: '需要選擇卡包', validator: value => value !== '' }
          ],
          command: 'createAndGetCardCommand',
          storage: ['createAccountItem', 'getCardItem', 'isEventFlg', 'cardType']
        },
        projectPath: {
          fields: [
            { key: 'projectPath', message: '需要填寫專案路徑', validator: value => value !== '' }
          ],
          command: 'projectPathCommand',
          storage: ['projectPath']
        },
        createAccountItemAlone: {
          fields: [
            { key: 'createAccountItemAlone', message: '需要選擇模擬器ID', validator: value => value !== '' },
            { key: 'cardType', message: '需要選擇卡包', validator: value => value !== '' }
          ],
          command: 'createAccountCommand',
          storage: ['createAccountItemAlone', 'cardType']
        },
        getCardItemAlone: {
          fields: [
            { key: 'getCardItemAlone', message: '需要選擇模擬器ID', validator: value => value !== '' }
          ],
          command: 'getCardCommand',
          storage: ['getCardItemAlone', 'isEventFlg']
        },
        autoAddFriend: {
          fields: [
            { key: 'addFriendId', message: '需要選擇模擬器ID', validator: value => value !== '' },
            { key: 'getCardPath', message: '需要輸入得卡包路徑', validator: value => value !== '' }
          ],
          command: 'autoAddFriendCommand',
          storage: ['addFriendId', 'getCardPath', 'friendCode']
        },
        makeAccountPush: {
          fields: [
            { key: 'makeAccountPushId', message: '需要選擇模擬器ID', validator: value => value !== '' },
            { key: 'getCardPath', message: '需要輸入得卡包路徑', validator: value => value !== '' },
            { key: 'xmlName', message: '需要輸入.xml檔名', validator: value => value !== '' }
          ],
          command: 'makeAccountPushCommand',
          storage: ['makeAccountPushId', 'getCardPath']
        },
        autoAddFriendArray: {
          fields: [
            { key: 'addFriendArrayId', message: '需要選擇模擬器ID', validator: value => value !== '' },
            { key: 'getCardPath', message: '需要輸入得卡包路徑', validator: value => value !== '' },
            { key: 'friendCodeArr', message: '需要輸入好友代碼', validator: value => value !== '' }
          ],
          command: 'autoAddFriendArrayCommand',
          storage: ['addFriendArrayId', 'getCardPath', 'friendCodeArr']
        }
      }

      const config = validationConfig[type]
      if (!config) return

      // 驗證必填欄位
      for (const field of config.fields) {
        if (!field.validator(this[field.key])) {
          this.$notify({
            title: '必填',
            message: field.message,
            type: 'error'
          })
          return
        }
      }

      // 生成指令
      if (type === 'projectPath') {
        this[config.command] = `cd ${this.projectPath}`
      } else {
        this[config.command] = this.buildCommand(type)
      }

      // 儲存到 localStorage
      config.storage.forEach(key => {
        localStorage.setItem(key, this[key])
      })
    },
    buildCommand(type) {
      const commandConfig = {
        createAndGetCard: {
          script: '01-makeAccounts-multi.ps1',
          params: {
            deviceIndexes: this.createAccountItem.join(','),
            deviceIndex_check: this.getCardItem,
            pack: this.cardType,
            notify_rarity: 'SR,SAR',
            check: true,
            account_num: 12,
            event_flg: this.isEventFlg
          }
        },
        createAccountItemAlone: {
          // .\01-makeAccounts.ps1 -device_index 3 -pack 3 -notify_rarity SR,SAR -check
          script: '01-makeAccounts.ps1',
          params: {
            device_index: this.createAccountItemAlone,
            pack: this.cardType,
            notify_rarity: 'SR,SAR',
            check: true,
          }
        },
        getCardItemAlone: {
          script: '03-makeAccounts-check-auto.ps1',
          params: {
            device_index: this.getCardItemAlone,
            account_num: 12,
            event_flg: this.isEventFlg
          }
        },
        autoAddFriend: {
          script: '06-addFriend.ps1',
          params: {
            device_index: this.addFriendId,
            target_path: this.getCardPath,
            fc: this.friendCode ? `"${this.friendCode}"` : '',
          }
        },
        makeAccountPush: {
          script: '02-makeAccounts-push.ps1',
          params: {
            device_index: this.makeAccountPushId,
            source_file: `${this.getCardPath}\\${this.xmlName}.xml`,
          }
        },
        // .\06-addFriend-array.ps1 -device_index 0 -target_path "C:\Users\88692\Downloads\PTCG" -fc @("3782321085029142",”3961502832604782”)
        autoAddFriendArray: {
          script: '06-addFriend-array.ps1',
          params: {
            device_index: this.addFriendId,
            target_path: this.getCardPath,
            fc: this.friendCodeArr ? `@(${this.friendCodeArr.split(',').map(code => `"${code.trim()}"`).join(',')})` : '',
          }
        }
      }
      const config = commandConfig[type]
      if (!config) return ''

      return this.formatCommand(config.script, config.params)
    },
    formatCommand(script, params) {
      const paramStrings = Object.entries(params).map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? `-${key}` : ''
        }
        if (!value) return ''
        return `-${key} ${value}`
      })
      .filter(Boolean)
      return `.\\${script} ${paramStrings.join(' ')}`
    },
    copyCommand(command) {
      navigator.clipboard.writeText(command)
        .then(() => {
          // 複製成功通知
          this.$notify({
            title: '成功',
            message: '指令已複製到剪貼簿',
            type: 'success',
            duration: 2000  // 通知顯示時間（毫秒）
          })
        })
        .catch(err => {
          // 複製失敗通知
          this.$notify({
            title: '錯誤',
            message: `複製失敗：${err.message}`,
            type: 'error',
            duration: 3000
          })
        })
    },
    clearAllRecord() {
      this.$confirm('此操作將刪除所有欄位紀錄, 是否繼續?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.clear();
        this.projectPath = '';
        this.getCardPath = '';
        this.createAccountItem = [];
        this.getCardItem = '';
        this.createAccountItemAlone = '';
        this.getCardItemAlone = '';
        this.friendCode = '';
        this.addFriendId = '';
        this.makeAccountPushId = '';
        this.cardType = '';
        this.isEventFlg = false;
        this.xmlName = '';
        this.$notify({
          title: '成功',
          message: '所有紀錄已清除',
          type: 'success'
        })
      }).catch(() => {
        return
      });
    },
  }
}
</script>

<style>

</style>
