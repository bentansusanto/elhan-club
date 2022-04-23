<template>
    <app-head/>
    <div class="verifys">
        <div class="container">
            <div class="row forget">
                <div class="col">
                    <img src="../assets/img-login/bg-verify.svg" alt="">
                </div>
                <div class="col forget1">
                    <h3>Verifikasi Email</h3>
                    <p> Selangkah lagi kamu bisa mengakses semua pembelajaran di dalam 
                        website elhan club</p>
                        <button type="submit" class="btn btn-primary">verifikasi email</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHead from '../Login/AppHead.vue'
export default {
    name :'VerifyView',
    components : {
        AppHead
    }
}
</script>
<style scoped>
    .verifys{
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
    }
    .forget1 button{
        width: 400px;
        padding: 10px 10px;
        background-color: #0E3EDA;
        margin: 20px auto;
        margin-left: 60px;
        text-transform: uppercase;
        font-weight: 600;
    }
</style>