<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="grid"></div>
    <div id="main" style="width: 100%">
      <div id="nav">
        <!-- <nav>
     <router-link to="/">HEM</router-link> |
      <router-link to="/Rundvandring">RUNDVANDRING</router-link> |
       <router-link to="/KontaktaOss">KONTAKTA OSS</router-link> 
      </nav> -->
      </div>

      <div class="center examplex">
        <vs-navbar color="#d3d3d3" center-collapsed v-model="active">
          <template #left>
            <img src="./assets/logo.png" height="50px" />
          </template>
          <vs-navbar-group to="/Rundvandring">
            Hem

            <template #items>
              <vs-navbar-item to="/" :active="active == 'guide'" id="guide">
                Guide
              </vs-navbar-item>
              <vs-navbar-item
                to="/Rundvandring"
                :active="active == 'docs'"
                id="docs"
              >
                Documents
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'components'" id="components">
                Components
              </vs-navbar-item>
            </template>
          </vs-navbar-group>

          <vs-navbar-group>
            Rundvandring

            <template #items>
              <h5 class="title">Social</h5>

              <vs-navbar-item :active="active == 'Github'" id="Github">
                Github
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Discord'" id="Discord">
                Discord
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
                Twitter
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Medium'" id="Medium">
                Medium
              </vs-navbar-item>
            </template>
          </vs-navbar-group>

          <vs-navbar-item
            to="/KontaktaOss"
            :active="active == 'License'"
            id="License"
          >
            Kontakta oss
          </vs-navbar-item>

          <!-- <template #right>
            <vs-button flat>Login</vs-button>
            <vs-button>Get Started</vs-button>
          </template> -->
        </vs-navbar>
        <!-- <div class="square">
          <div class="child">child 1</div>
          <div class="child">child 2</div>
          <div class="child">child 3</div>
        </div> -->
      </div>

      <router-view />

      <div class="footer">
        <div class="footer1">
          <div class="location">
            <vs-button border disabled
              ><i class="fa fa-map-pin" style="width: 113px"></i>
            </vs-button>
            <p>Swedish Care Systems AB</p>
            <p>Södra Vallgatan 5 - 211 40 Malmö</p>
          </div>
          <div class="kontakt">
            <vs-button border disabled
              ><i class="fa fa-mobile" style="width: 113px"></i>
            </vs-button>
            <p>Telefon: 046-25 98 21</p>
            <p>Telefax: 046-25 44 14</p>
          </div>
          <div class="email">
            <vs-button border disabled
              ><i class="fa fa-envelope" style="width: 113px">></i>
            </vs-button>
            <p>info@swedish-care.se</p>
          </div>
        </div>
      </div>
      //test

      <!-- <footer>
    <h1>hej</h1>
  </footer> -->
      <!-- <div class="footer">


    </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    active: "guide",
  }),
};
</script>
<style>
/* footer{
  height: 200px;
  background-color: #42b983;
} */
#loginButton {
  background-color: #42b983;
}
.footer1 {
  margin-left: 30%;
  display: flex;
  justify-content: space-around;
  margin: 0;
}
.footer {
  height: 190px;
  background-color: black;
  margin-top: 363px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#main {
  height: 100vh;
  width: 100vh;
}
body {
  margin: 0 auto;
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  
}
</style>
