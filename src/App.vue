<template lang="pug">
  #app
    HeaderLayout
    .container(class="w-[1200px] mx-auto my-4 flex flex-col gap-6")
      .item-wrap(class="flex flex-col gap-1")
        span(class="text-xl font-bold") 輸入專案路徑
        .form-item(class="flex flex-row gap-2")
          el-input(type="text" :placeholder="localRoute" v-model="projectPath")
          el-button(type="primary" @click="savePath('project')") 儲存
          el-button(type="primary" @click="handleSubmit('projectPath')") 產生cd指令
        div(v-if="projectPathCommand" class="flex flex-row gap-2 items-center")
          span {{ projectPathCommand }}
          el-button(type="primary" @click="copyCommand(projectPathCommand)" icon="el-icon-copy-document")
      .item-wrap(class="flex flex-col gap-1")
        span(class="text-xl font-bold") 輸入得卡包儲存路徑
        .form-item(class="flex flex-row gap-2")
          el-input(type="text" :placeholder="getCardRoute" v-model="getCardPath")
          el-button(type="primary" @click="savePath('getCard')") 儲存
      .item-wrap(class="flex flex-col gap-1")
        span(class="text-xl font-bold") 創建帳號與啟動得卡驗證
        .form-item(class="flex flex-row gap-3 items-center")
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
        span(class="text-xl font-bold") 單獨啟動創建帳號
        .form-item(class="flex flex-row gap-3 items-center")
          div(class="flex flex-col gap-2")
            span 選擇創建帳號模擬器ID
            el-select(v-model="createAccountItemAlone" placeholder="請選擇")
              el-option(v-for="item in createAccountOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            span 選擇卡包
            el-select(v-model="cardType" placeholder="請選擇" clearable)
              el-option(v-for="item in cardTypeOptionList" :key="item.value" :label="item.label" :value="item.value")
          div(class="flex flex-col gap-2")
            el-checkbox(v-model="isEventFlg") 得卡挑戰活動
          el-button(type="primary" @click="handleSubmit('createAccountItemAlone')") 產生指令
        div(v-if="createAccountCommand" class="flex flex-row gap-2 items-center")
          span {{ createAccountCommand }}
          el-button(type="primary" @click="copyCommand(createAccountCommand)" icon="el-icon-copy-document")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderLayout from './components/HeaderLayout.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderLayout,
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
    }
  },
  mounted() {
    this.getCardOptionList = this.createAccountOptionList
  },
  watch: {
    createAccountItem: {
      handler(newVal) {
        console.log(newVal);
        this.getCardOptionList = this.createAccountOptionList.filter(option => 
          !newVal.includes(option.value)
        )
        this.getCardItem = '';
      },
      immediate: true,
    }
  },
  methods: {
    savePath(type) {
      const pathConfig = {
        project: {
          key: 'projectPath',
          value: this.projectPath,
          successMessage: '專案路徑'
        },
        getCard: {
          key: 'getCardPath',
          value: this.getCardPath,
          successMessage: '得卡包儲存路徑'
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
            message: `${config.successMessage}${config.value}已成功儲存`,
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
      console.log(this.createAccountItem, this.getCardItem, this.isEventFlg);
      if(type === 'createAndGetCard') {
        this.createAndGetCardCommand = this.buildCommand(type)
      } else if (type === 'projectPath') {
        this.projectPathCommand = `cd ${this.projectPath}`
      } else if (type === 'createAccountItemAlone') {
        this.createAccountCommand = this.buildCommand(type)
      }
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
            event_flg: this.isEventFlg
          }
        }
      }
      const config = commandConfig[type]
      if (!config) return ''

      return this.formatCommand(config.script, config.params)
    },
    // 格式化命令的方法
    formatCommand(script, params) {
      const paramStrings = Object.entries(params).map(([key, value]) => {
        // 處理布林值參數
        if (typeof value === 'boolean') {
          return value ? `-${key}` : ''
        }
        // 處理空值
        if (!value) return ''
        // 一般參數
        return `-${key} ${value}`
      })
      .filter(Boolean) // 移除空字串
      return `.\\${script} ${paramStrings.join(' ')}`
    },
    copyCommand(command) {
      navigator.clipboard.writeText(command);
    },
  }
}
</script>

<style>

</style>
