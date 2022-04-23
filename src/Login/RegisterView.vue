<template>
    <div class="row login">
            <div class="col-md-6">
                <img src="../assets/img-login/bg-login.jpg" alt="">
                  <h1>Hello <br>Friends!</h1>        
            </div>
            <div class="col-md-6 login1">
                <img src="../assets/favicon.svg" alt="">
                <h3>Sign Up</h3>
                <p>Enter your personal detail and start journey with us.</p>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Nama Lengkap</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                     </div>
                    <div class="mb-3">
                        <label style="color: #a4a4a4;" class="form-label">Email address</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label style="color: #a4a4a4;" for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn">SIGN UP</button>
                    <p>I have account &nbsp; <router-link to="login" style="color: #0E3EDA; text-decoration: none; font-weight: 500;" href="#">Login</router-link></p>
                  </form>
            </div>
        </div>
</template>
<script>
export default {
    
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