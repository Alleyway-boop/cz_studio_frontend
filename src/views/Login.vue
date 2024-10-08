<template>
  <div class="container" :class="{'sign-up-mode': changeClass}">
    <div class="forms-container">
      <div class="signin-signup">
        <form :model="ruleForm" class="sign-in-form">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input v-model="ruleForm.username" type="text" placeholder="用户名"/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input v-model="ruleForm.password" type="password" placeholder="密码"/>
          </div>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <div class="box-center">
              <input v-model="ruleForm.verifyCode" class="verifyCode" type="text" placeholder="验证码"/>
              <img class="imageVerify" :src="imageVerify" @click="refreshVerifyCode" alt="">
            </div>
          </div>
          <input type="button" value="立即登录" class="btn solid" @click="btnLogin"/>
        </form>
        <form :model="registerForm" class="sign-up-form">
          <h2 class="title">注册</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input v-model="registerForm.username" type="text" placeholder="用户名"/>
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input v-model="registerForm.email" type="email" placeholder="邮箱"/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input v-model="registerForm.password" type="password" placeholder="密码"/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <div class="box-center">
              <input v-model="registerForm.verifyCode" class="verifyCode" type="text" placeholder="验证码"/>
              <div class="sendCode" :class="className" @click="requestEmail"><span> | </span>{{ count }}{{ message }}
              </div>
            </div>
          </div>
          <input type="button" value="立即注册" class="btn" @click="btnRegister"/>
        </form>
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>加入我们</h3>
          <p>
            加入我们，成为本站的一份子。
          </p>
          <button class="btn transparent" @click="changeActive" id="sign-up-btn">
            去注册
          </button>
        </div>
        <img src="../assets/log.svg" class="image" alt=""/>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已有帐号？</h3>
          <p>
            立即登录已有帐号，享受独家权益。
          </p>
          <button class="btn transparent" @click="changeActive" id="sign-in-btn">
            去登录
          </button>
        </div>
        <img src="../assets/register.svg" class="image" alt=""/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import api from "../api"

export default {
  name: "LoginView",
  components: {Header},
  props: {
    // 用户邮箱
    email: {
      required: true
    }
  },
  data() {
    return {
      ruleForm: {
        username: "11",
        password: "11",
        verifyCode: ""
      },
      registerForm: {
        username: "",
        email: "",
        password: "",
        verifyCode: ''
      },
      imageVerify: "data:image/png;base64,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",
      changeClass: false,
      className: 'clickable',
      message: '发送验证码',
      count: '',
      send: true,
      timer: null,
      reg: /^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/
    }
  },
  methods: {
    btnRegister() {
      const _this = this;
      // this.$axios.post("http://localhost:8082/register",this.registerForm).then(res=>{
      api.registerApi(this.registerForm).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          _this.$message.success(res.data.msg)
        } else if (res.data.code === 400) {
          console.log(res.data)
          _this.$message.error(res.data.msg)
        }
      })
          .catch(err => {
            console.log(err)
            _this.$message.error(err.response.data.msg)
          })
    },
    btnLogin() {
      const _this = this
      // this.$axios.post("http://localhost:8082/login", this.ruleForm).then(res => {
      api.loginApi(this.ruleForm).then(res => {
        if (res.data.code === 200) {
          const jwt = res.headers['authorization']
          console.log("@jwt" + jwt)
          const userInfo = res.data.data
          _this.$store.commit("SET_TOKEN", jwt)
          _this.$store.commit("SET_USERINFO", userInfo)
          _this.$message.success(res.data.msg)
          setTimeout(() => {
            _this.$router.push("/")
          }, 1000)
        } else if (res.data.code === 400) {
          _this.$message.error(res.data.msg)
        }
      }).catch(err => {
        _this.$message.error(err.response.data.msg)
      })
    },
    refreshVerifyCode() {
      console.log("验证码被刷新了 ")
      const _this = this
      api.getImageVerifyApi()
          .then(res => {
            _this.imageVerify = res.data.data
          })
    },
    changeActive() {
      this.changeClass = !this.changeClass
    },
    requestEmail() {
      const _this = this
      if (this.send) {
        this.send = false
        console.log('开始请求数据')
        api.sendEmailApi(this.registerForm.email).then(res => {
          this.send = false
          _this.$message.success("已发送验证码到邮箱")
        })
        // 修改样式
        this.className = 'unclickable'
        this.message = 's后重发'
        this.send = false
        const TOTAL_TIME = 60
        if (!this.timer) {
          this.count = TOTAL_TIME
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TOTAL_TIME) {
              this.count--
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.count = ''
              this.message = '重新发送'
              this.className = 'clickable'
              this.send = true
            }
          }, 1000)
        }
      }
    }
  },
  created() {
    this.refreshVerifyCode();
  }
}
</script>

<style scoped>
.clickable {
  font-family: SourceHanSansCN-Normal;
  font-size: x-small;
  color: #5474C2;
  letter-spacing: 0;
  text-align: center;
}

.unclickable {
  font-family: SourceHanSansCN-Normal;
  font-size: x-small;
  color: #B5BBC4;
  letter-spacing: 0;
  text-align: center;
}

span {
  color: #B5BBC4;
  margin-right: 3px;
}

/*@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}


.container {
  /*position: relative;*/
  width: 100%;
  background-color: #fff;
  /*min-height: 100vh;*/
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.box-center {
  display: flex;
  /*width: 380px;*/
}

.imageVerify {
  /*height: 40px;*/
  border-radius: 5px;
  margin: auto;
  width: 100px;
  height: 50px;
}

.sendCode {
  margin: auto;
  font-size: 15px;
}

.input-field .verifyCode {
  max-width: 120px;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #44ebc4;
  border-color: #44ebdd;
}

.btn {
  width: 150px;
  background-color: #04de52;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  text-align: center;
}


.btn:hover {
  background-color: #4de2d1;
}

.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #44ebeb 0%, #04fef6 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }

  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }

  .panel .content {
    padding: 0.5rem 1rem;
  }

  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
</style>
