const app = Vue.createApp({
  //data, functions
  data() {
    return {
      launches: [ ]
    }
  },
  mounted() {
    fetch('https://api.spacexdata.com/v4/launches/upcoming')
      .then(res =>res.json() )
      .then(data => this.launches = data)
      .catch(err => console.log(err.message))
  }
})

app.mount('#app')

/*
  function getRandomName() {
    const namelist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return {
        get name() {
            return namelist[Math.floor(Math.random() * namelist.length)];
        },
    }
  }

<div x-data="getRandomName">
    <button @click="name = name">Click me</button>
    <h1 x-text="name"></h1>
</div>
 */   