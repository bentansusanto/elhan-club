<template>
    <div class="logins">
        <div class="row login">
            <div class="col-md-6">
                <img src="../assets/img-login/bg-login.jpg" alt="">
                  <h1>welcome <br>back!</h1>        
            </div>
            <div class="col-md-6 login1">
                <img src="../assets/favicon.svg" alt="">
                <h3>Login</h3>
                <p>Welcome back please login to your account.</p>
                <form>
                    <div class="mb-3">
                        <label style="color: #a4a4a4;" for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div style="font-size: .8rem" id="emailHelp" class="form-text">Masukkan email anda</div>
                    </div>
                    <div class="mb-3">
                        <label style="color: #a4a4a4;" for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3 form-check">
                                <router-link to="forgot" href="" style="text-decoration: none; color: #090909; margin-left: -4px;
                                " class="form-check-label" for="exampleCheck1">Forget Password ?</router-link>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn">LOGIN</button>
                    <p>Do you have account? &nbsp; <router-link to="register" style="color: #0E3EDA; text-decoration: none; font-weight: 500;" href="#">Sign up</router-link></p>
                  </form>
            </div>
        </div>
    </div>
</template>
<script>
import {useRouter} from "vue-router";
export default {
    setup() {
        const router = useRouter();
        const login = () =>{
            router.push({name :'Home'});
        }
        return {
            login
        }
    },
    data() {
    return {
      showPassword: false,
      password: null
    }
    },
    computed: {
        buttonLabel() {
        return (this.showPassword) ? "Hide" : "Show";
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        }
    }
}
</script>
<style scoped>
    .login img{
        height: 101.6vh;
        margin-top: -1%;
    }
    .login h1{
       margin-top: -65%;
       padding: 0 12%;
       font-size: 4rem;
       font-weight: 700;
       color: #ffff;
       text-transform: capitalize;
    }
    .login1{
        margin-top: -20%;
    }
    .login1 img{
        width: 5%;
    }
    .login1 h3{
         margin-top: -50%;
        font-size: 2.5rem;
        font-weight: 700;
    }
    .login1 p{
        width: 35%;
        font-size: .9rem;
        color: #a4a4a4;
        margin-top: 20px;
    }
    .form-control{
        width: 400px;
    }
    .login label, .login a{
        font-size: .9rem;
    }
    .btn{
        width: 400px;
        padding: 10px 10px;
        font-weight: 500;
        margin-top: 20px;
        background-color: #0E3EDA;
        color: #ffff;
    }
    .login1 form{
        margin-top: 80px;
    }
    .login form p{
        font-size: .9rem;
    }
    

</style>