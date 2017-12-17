<template>
  <div>
    <message>
      {{ info }}
    </message>
  </div>
</template>

<script>
import Message from "@/components/Message/Message";
import config from "@/constants/config";

export default {
  components: {
    Message
  },
  props: {
    msg: {
      default: "This is a default message, please pass a message"
    }
  },
  data() {
    return {
      info: this.msg
    }
  },
}
</script>

<style>
h2 {
  left: 0;
  line-height: 200px;
  margin: auto;
  margin-top: -100px;
  position: absolute;
  top: 50%;
  width: 100%;
}
</style>
