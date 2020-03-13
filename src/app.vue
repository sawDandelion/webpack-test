<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'abc'
    }
  },
  created() {
    console.log(_.join(['a', 'b', 'c'], '~'))
  }
}
</script>

<style scoped></style>
