<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #005DBB;
  color: #005DBB;
  text-decoration: none;
  padding: 10px 15px;
}

.button--blue:hover {
  color: #fff;
  background-color: #005DBB;
  @apply transition duration-300
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
