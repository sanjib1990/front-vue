<template>
  <div class="home">
    <welcome msg="Hey yeah!! welcome to the club pal !!"/>
    <Counter />
  </div>
</template>

<script>
import Counter from '@/components/Counter/Counter.vue'
import Welcome from "@/components/Welcome/Welcome";

export default {
  name: 'Home',
  components: {
    Welcome,
    Counter
  }
}
</script>
