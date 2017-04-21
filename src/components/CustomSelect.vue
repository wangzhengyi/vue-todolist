<template>
<div class="wrap">
  <div class="searchIpt clearFix">
    <div class="clearFix">
      <input type="text" class="KeyWord" :value="inputValue" @click="showList">
      <input type="button" :value="btnTitle">
      <span></span>
    </div>
    <custom-list v-if="selectShow" :list="list" @receiveValue="changeValueHandle"></custom-list>
  </div>
</div>
</template>

<script>
import CustomList from './CustomList.vue'
export default {
  name: 'CustomSelect',
  props: ['list', 'btnTitle'],
  components: {
    'custom-list': CustomList
  },
  data () {
    return {
      selectShow: false,
      inputValue: ''
    }
  },
  methods: {
    showList () {
      this.selectShow = !this.selectShow
    },
    changeValueHandle (value) {
      this.inputValue = value
    }
  }
}
</script>

<style scoped>
input {
  outline: none;
  cursor: pointer;
}

.wrap {
  width: 348px;
  padding: 100px 76px 50px;
  margin: 50px;
  background: url(../assets/img/select_bg.png) no-repeat;
  box-shadow: 2px 2px 10px #6789ad;
}

.searchIpt {
  position: relative;
  width: 336px;
  border: 1px solid #3736ae;
  padding: 5px;
  border-radius: 24px;
  background: #e4e4fe;
}

.searchIpt input{
  line-height: 34px;
  border-radius:18px;
}

.searchIpt input:nth-of-type(1){
  float: left;
  width: 228px;
  padding-left: 40px;
  border:1px solid #c9c9d5;
  background: #d9d9e2;

}
.searchIpt input:nth-of-type(2){
  float: right;
  width: 58px;
  height: 36px;
  border:1px solid #fd635e;
  background: #fd635e;
}
.searchIpt span{
  position: absolute;
  top:12px;
  left: 15px;
  width: 23px;
  height: 23px;
  background: url(../assets/img/select_search.png) no-repeat;
}

.searchIpt input:nth-of-type(1):focus{
  background: #fff;
  border-color:#fd635e;
}
</style>
