<template>
  <div id="app">
    <div class="sidebar-conteiner">
      <nav>
        <img src="@/assets/face-icon.svg/">
        <h3>
          <router-link to="/">HOME</router-link>
        </h3>
        <h3>
          <router-link to="/AboutItem">ABOUT</router-link>
        </h3>
        <h3>
          <router-link to="WorksItem">WORKS</router-link>
        </h3>
        <h3>
          <router-link to="/ContactItem">CONTACT</router-link>
        </h3>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  .sidebar-conteiner{
    width: 272px;
    height: 100%;
    background: #007B6F;
    nav {
      height: 430px;
      margin: 180px 0px 190px;
      font-family: axia-stencil, sans-serif;
      a{
        text-decoration: none;
        color: #ffffff70;
        font-size: 32px;
      }
    }
  }
}
</style>
