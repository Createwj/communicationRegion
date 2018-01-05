<template>
  <div id="app">
    <digit/>
  </div>
</template>

<script>
import digit from './components/digit'

export default {
  name: 'app',
  components: {
    digit
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  html,body{
    background :#031F2D;
  }
</style>
