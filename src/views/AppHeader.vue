<template>
        <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="../assets/favicon.svg" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="about" class="nav-link">About Us</router-link>
                <router-link to="mentor" class="nav-link">Mentor</router-link>
                <router-link to="contact" class="nav-link">Contact Us</router-link>
            </div>  
            <div class="navbar-nav1">
                <router-link to="login" class="nav-link" style="color: #0E3EDA;">Login</router-link>
                <router-link to="register" class="button btn-primary">Sign Up</router-link>
             </div> 
        </div>
    </div>
    </nav>
</template>
<script>
export default {
    name : "AppHeader"
}
</script>
<style scoped>
    .navbar{
        margin-top: 10px;
        display: block;
    }
    .navbar-brand{
        margin-left: 50px;
    }
    .navbar-brand img{
        width: 90%;
    }
    .navbar-nav{
        width: 40%;
        margin-left: 25% !important;
    }
    .navbar-nav1{
        display: flex;
        margin-left: 15%;
    }
    .nav-link{
        color: black;
        margin: 0 auto;
        font-weight: 500;
    }
    .nav-link:hover{
        color: #0E3EDA !important;
    }
    .button{
        margin-left: 20px;
        padding: 8px 15px;
        text-decoration: none;
        background-color: #0E3EDA;
        border-radius: 5px;
        border: none;
        font-size: 1rem;
        transition: all .5s ease-out;
    }
    .button:hover{
        box-shadow: 0 7px 10px rgba(43, 110, 255, 0.3);
    }
   
</style>
