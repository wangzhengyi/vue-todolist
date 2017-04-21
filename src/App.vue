<template>
  <div id="app">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="TodoList"/>
      <mu-tab value="tab2" title="CustomSelect"/>
    </mu-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleTabChange (value) {
      if (value === 'tab1') {
        this.$router.push({name: 'todolist'})
      } else if (value === 'tab2') {
        this.$router.push({name: 'select'})
      }
    }
  }
}
</script>

<style>

</style>
