<template>
  <div>
    <span>
      The Count: {{ count }}
    </span>
    <span> | </span>
    <span>
      <button @click="increment(1)">Increment</button>
    </span>
    <span> | </span>
    <span>
      <button @click="reset()">Reset</button>
    </span>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  computed: {
    ...mapState({
      count: state => state.counter.count
    })
  },
  methods: {
    ...mapMutations({
      increment: 'counter/increment',
      reset: 'counter/reset',
    })
  }
}
</script>

<style>
</style>
