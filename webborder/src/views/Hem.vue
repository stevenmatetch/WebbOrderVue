<template>
  <div>
      
      <div>

 <h1>Välkommen till Webborder!</h1>

  <p>Logga in eller ansök om ett konto för att börja använda Webborder! </p>
</div>
 

       
    <div class="buttons">
      <vs-button
      @click="active = !active"
      
      id="loginButton"
      style="width: 113px"
    >
      Logga in
    </vs-button>
    <vs-button
      @click="active = !active"
      
      id="registerButton"
      style="width: 113px"
    >
      Registrera 
    </vs-button>
    </div>
    <vs-dialog v-model="active">
      
    <template #header>
        <h4>Logga in</h4>
      </template>
      <div>
        <vs-input class="email-input" block v-model="email" placeholder="ÅÅÅÅMMDDXXXX">
        </vs-input>
        <vs-input
          class="password-input"
          block
          type="password"
          v-model="password"
          placeholder="Lösenord"
        >
        </vs-input>
       
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="ToggleSms()"  block> Logga in  </vs-button>

          <div class="createaccount">
            Ny här?
            <a href="#" @click="ToggleRegister">Skapa ett konto</a>
          </div>
        </div>
      </template>
    </vs-dialog>


     <vs-dialog v-model="activeSms">
      
    <template #header>
        <h4>Logga in</h4>
      </template>
      <div>
          <h3> Ange SMS-lösenord</h3>
       
        <vs-input
          class="password-input"
          block
          type="password"
          v-model="password"
          placeholder="SMS-lösenord"
        >
        </vs-input>
       
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button  block> Logga in </vs-button>

          
        </div>
      </template>
    </vs-dialog>

    <vs-dialog v-model="active2">
      <template #header>
        <h4>Registreringsformulär:</h4>
      </template>

      <div class="con-form">
          <vs-input
          block
          class="emailInput"
          v-model="first_name"
          placeholder="ÅÅÅÅMMDDXXXX"
        >
          <template #icon> </template>
        </vs-input>
        <vs-input
          block
          class="emailInput"
          v-model="first_name"
          placeholder="Förnamn"
        >
          <template #icon> </template>
        </vs-input>

        <vs-input
          block
          class="emailInput"
          v-model="last_name"
          placeholder="Efternamn"
        >
          <template #icon> </template>
        </vs-input>

        <vs-input block class="emailInput" v-model="email" placeholder="Email">
        </vs-input>

        <vs-input
          block
          id="passwordInput"
          type="password"
          v-model="password"
          placeholder="Telefonnummer (för SMS-lösenord)"
        >
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button  block> Registrera </vs-button>
        </div>
      </template>
    </vs-dialog>
   </div>
</template>


<script>

export default {
  name: "Login",
  data: () => ({
    activeSms:false,
    active: false,
    active2: false,
    active3: false,
    active4: false,
    buttontext: "",
    email: "",
    password: "",
    remember: false,
    first_name: '',
    last_name: '',
  }),
 methods: {
    ToggleRegister(){
      this.active2 = true;
      this.active = false;
    },
    ToggleSms(){
        this.activeSms = true;
    }
      
 }
    
  
};
</script>

<style scoped>
.buttons{
  
  display: flex;
  margin-left: 40%;
  justify-content: space-around;
  margin: 0%;
  
}


.forgotpassword {
  text-decoration: none;
  font-size: 0.9rem;
}
.createaccount {
  font-size: 0.9rem;
}
.email-input {
  margin-bottom: 5%;
}
.password-input {
  margin-bottom: 5%;
}
#popup {
  background-color: #262729;
}
#loginButton {
  background-color: #42b983;
  color: black;
 margin-left: 20%;
   margin:0%

}
#registerButton {
  background-color: #42b983;
  color: black;
   margin-right: 20%
  
   

}
.con-form {
  width: 100%;
}
.emailInput {
  margin-bottom: 5%;
}
</style>