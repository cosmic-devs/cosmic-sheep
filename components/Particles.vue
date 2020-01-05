<template>
  <client-only class="particles">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="160"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0"
      :linesDistance="150"
      :moveSpeed="0.4"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </client-only>
</template>

<script>
  // import 'particles.js'
  export default {
    name: 'particles'
  };
</script>

<style scoped>
  #particles-js {
    /*background-color: #232741;*/
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 60%, rgba(0, 148, 179, 1) 100%);
    height: 100%;
    width: 100%;
  }
</style>
