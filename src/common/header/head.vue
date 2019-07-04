<template>
  <div class="head">
    <slot name="head" :icon="icon"></slot>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: "<"
    };
  },

  props: {
    title: {
      type: String,
      default: "猫眼电影"
    }
  }
};
</script>

<style>
.head {
  width: 100%;
  height: 1rem;
  background-color: #c33;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}
.head>p{
position: absolute;
left: .2rem;
font-size: .6rem;
}
</style>
