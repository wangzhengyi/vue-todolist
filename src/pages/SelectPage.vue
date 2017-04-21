<template>
<div class="box">
  <div class="wrap">
    <h1>城市列表</h1>
    <custom-select :list="citys" btnTitle="Search"></custom-select>
  </div>
  <div class="wrap">
    <h1>技能列表</h1>
    <custom-select :list="skills" btnTitle="Search"></custom-select>
  </div>
</div>
</template>

<script>
import CustomSelect from '../components/CustomSelect'
export default {
  name: 'SelectPage',
  components: {
    'custom-select': CustomSelect
  },
  data () {
    return {
      citys: ['北京', '上海', '广州', '青岛'],
      skills: ['Java', 'Android', 'Vue', 'PHP']
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrap {
  margin: 100px 30px 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
