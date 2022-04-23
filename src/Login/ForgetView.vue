<template>
    <app-head/>
    <div class="forgets">
        <div class="container">
            <div class="row forget">
                <div class="col">
                    <img src="../assets/img-login/bg-forget.svg" alt="">
                </div>
                <div class="col forget1">
                    <h3>Lupa Password nih!</h3>
                    <p> Jangan takut masukkan email yang sudah terdaftar nanti kami akan mengirim 
                        pesan reset password ke email anda.</p>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Masukkan email anda">
                        </div>
                        <button type="submit" class="btn btn-primary">send reset password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHead from '../Login/AppHead.vue'
export default {
    name :'ForgetView',
    components : {
        AppHead
    }
}
</script>
<style scoped>
    .forgets{
        margin-top: 10%;
        margin-left: 5%;
    }
    .forget{
        width: 90%;
    }
    .forget1{
        margin-left: 7%;
        margin-top: 5%;
    }
    .forget1 h3{
        text-transform: capitalize;
        font-weight: 700;
        text-align: center;
        font-size: 2rem;
    }
    .forget1 p{
        text-align: center;
        width: 70%;
        margin: 20px auto;
        font-size: .9rem;
        color: #a4a4a4;
    }.mb-3 input{
        width: 400px;
        font-size: .9rem;
        padding: 10px 10px;
    }
    form{
        margin: auto 60px;
        margin-top: 50px;
    }
    form button{
        width: 400px;
        padding: 10px 10px;
        background-color: #0E3EDA;
        margin-top: 20px;
        text-transform: uppercase;
        font-weight: 600;
    }
</style>