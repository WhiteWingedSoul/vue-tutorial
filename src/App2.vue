<template>
  <div id="app">

    <!-- navigation bar -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand"><i class="glyphicon glyphicon-bullhorn"></i> Vue Events Bulletin Board</a>
      </div>
    </nav>

    <!-- main body of our application -->
    <Events class="container"/>

  </div>
</template>

<script>
import Events from './components/events/events-component'

export default {
  name: 'App2',
  components: {
    Events
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  padding-top: 20px;
}
</style>
