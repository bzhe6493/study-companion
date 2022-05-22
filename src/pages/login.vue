<template>
  <div class="container">
    <div class="loginbar">
      <div class="study-icon"></div>

      <div class="sign-buttons">
        <div class="sign-button">Sign up</div>
        <div class="sign-button">Login in</div>
      </div>

      <div class="tabs-container">
        <div class="tab-button">Task List</div>
        <div class="tab-button">Kanban Board</div>
        <div class="tab-button">Pomodoro</div>
        <div class="tab-button">Auxiliary</div>
      </div>
    </div>

    <div class="main">
      <h2>Welcome to STUDY</h2>
      <p>
        — I can help you improve your learning efficiency and increase
        self-control.
      </p>

      <form class="auth-form signup-form" id="form">
        <div class="form-item" v-if="signUp">
          <label for="username"> Username </label>
          <input type="text" name="username" id="username" v-model="username" />
        </div>

        <div class="form-item" v-if="signUp">
          <label for="email"> Email </label>
          <input type="email" name="email" id="email" v-model="email" />
        </div>

        <div class="form-item" v-if="!signUp">
          <label for="login-name"> Email or Username </label>
          <input
            type="text"
            name="login-name"
            id="login-name"
            v-model="loginName"
          />
        </div>

        <div class="form-item">
          <label for="password"> Password </label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
        </div>

        <div class="form-item">
          <input type="button" value="sign up" @click="submitForm" />
        </div>
      </form>

      <div class="auth-paint-pic boy-pic">
        <img src="" alt="boy" />
      </div>
      <div class="auth-paint-pic girl-pic">
        <img src="" alt="girl" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "loginPage",
  props: {
    signUp: Boolean,
  },
  data() {
    return {
      loginName: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    clearForm() {
      this.loginName = "";
      this.username = "";
      this.email = "";
      this.password = "";
    },
    onRegister() {
      console.log(this.username, this.email, this.password);
      if (!this.username || !this.email || !this.password) {
        alert("You must input username and email and password ! ");
        return;
      }
      const users = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      users.push({
        username: this.username,
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("users", JSON.stringify(users));
      this.clearForm();
    },
    onLogin() {
      console.log(this.loginName, this.password);
      const users = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      const passLogin =
        users.findIndex(
          (u) =>
            (u.username === this.loginName || u.email === this.loginName) &&
            u.password === this.password
        ) > -1;

      if (!passLogin) {
        alert(
          "Login name and password is not match, please sign up a user first ! "
        );
        return false;
      }
      this.clearForm();
      return passLogin;
    },
    submitForm(e) {
      console.log("click submit");
      if (this.signUp) {
        this.onRegister();
      } else {
        this.onLogin();
      }
      e.preventDefault();
    },
  },
  mounted() {},
});
</script>
<style lang="css" scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  background-color: #ffffff;
}

/* top loginbar */
.loginbar {
  width: 100%;
  height: 80px;
  padding: 0px 8px;
  border-bottom: 1px solid #4d4d4d;
  display: flex;
  position: relative;
  color: white;
}
.loginbar .study-icon {
  width: 60px;
  height: 60px;
  display: inline-block;
  background-color: aquamarine;
  margin-right: 60px;
}
.loginbar .sign-buttons {
  width: 180px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.loginbar .sign-buttons .sign-button {
  width: 70px;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  text-align: center;
  background-color: rgb(120, 186, 244);
  padding: 2px 4px;
  border-radius: 6px;
  cursor: pointer;
}
.loginbar .tabs-container {
  width: 680px;
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
}
.loginbar .tabs-container .tab-button {
  width: 90px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background-color: rgb(120, 186, 244);
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
}
.loginbar .tabs-container .tab-button:nth-child(2) {
  line-height: 25px;
}

/* main area */
.main {
  width: 100%;
  position: relative;
}
/* draw big form */
.main .auth-form {
  margin: 0 auto;
  width: 720px;
  height: 580px;
  border: 1px solid #4d4d4d;
}
.main .auth-form .form-item {
  font-size: 22px;
  text-align: left;
  margin-bottom: 12px;
}
.main .auth-form .form-item label {
  display: block;
}
.main .auth-form .form-item input {
  display: block;
  width: 320px;
  height: 38px;
}

/* draw two pictures */
.main .auth-paint-pic {
  position: absolute;

  width: 270px;
  height: 400px;
  background-color: aliceblue;
}
.main .auth-paint-pic.boy-pic {
  left: 0;
  bottom: 0;
}
.main .auth-paint-pic.girl-pic {
  left: 100%;
  bottom: 0;
  margin-left: -270px;
}
</style>
