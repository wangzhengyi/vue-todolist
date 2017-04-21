<template>
<ul class="list">
<li v-for="(item, index) in list" @click="seleceValueHandle(item)">
{{item}}
</li>
</ul>
</template>

<script>
export default {
  name: 'CustomList',
  props: ['list'],
  methods: {
    seleceValueHandle (item) {
      this.$emit('receiveValue', item)
    }
  }
}
</script>

<style scoped>
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list {
  margin-top: 40px;
}

.list li {
  margin: 3px 0;
  color: #333;
  line-height: 30px;
  padding-left: 16px;
  width: 270px;
  box-sizing: border-box;
  border-radius: 14px;
}

.list li.active, .list li:hover {
  color: #fff;
  background: #fd635e;
  cursor: pointer;
}
</style>
