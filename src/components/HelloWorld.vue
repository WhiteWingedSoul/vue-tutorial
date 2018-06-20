<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Check out the users i generated</h2>
    <ul>
      <li v-for="user in users">
        {{user.firstname}} {{user.lastname}}
      </li>
    </ul>

    <hr/>
    <span>Write me:</span>
    <input type="text" v-model="input_val">
    <h4>Input value: {{input_val}}</h4>
    <hr/>

    <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'},
      ],
      input_val: '',
      counter: 0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2, h4 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
