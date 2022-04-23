<template>
    <!-- Hero Section -->
    <div class="kontaks">
        <div class="container">
            <div class="row flex-row-reverse kontak">
                <div class="col">
                    <img src="../assets/img-contact/bg-hero.svg" alt="">
                </div>
                <div class="col kontak1">
                    <h1>We’re Happy to <br> Help You Today!</h1>
                    <p>Hubungi kami melalui salah satu channel yang telah kami sediakan di bawah atau melaui media social kami.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Content Section -->
    <div class="container">
        <div class="kontens">
            <img src="../assets/img-contact/icon.svg" alt="">
            <h4>Kontak melalui whatsapp</h4>
            <a href="" type="button">Chat Now</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "ContactView"
}
</script>
<style scoped>
    /* Hero Style */
    .kontaks{
        margin-top: 10%;
        margin-left: 5%;
    }
    .kontak1{
        margin: 10% 0;
    }
     .kontak1 h1{
         font-weight: 700;
         font-size: 3rem;
     }
    .kontak1 p{
        padding: 15px 0;
        width: 60%;
        color: #a4a4a4;
    }

    /* Content Style */
    .kontens{
        background-color: #f1f1f1;
        margin-left: 20px;
        margin-top: 300px;
        width: 25%;
        padding: 15px 15px;
        border-radius: 20px;
    }
    .kontens img{
        width: 23%;
    }
    .kontens h4{
        text-transform: capitalize;
        padding: 15px 0;
        font-weight: 700;
        font-size: 1.5rem;
    }
    .kontens a{
        display: block;
        border: 2px solid #0E3EDA;
        width: 100%;
        margin: 5% auto;
        text-align: center;
        padding: 8px 0;
        border-radius: 5px;
        text-decoration: none;
        color: #0E3EDA;
        transition: all .5s ease-out;
    }
    .kontens a:hover{
        background-color: #0E3EDA;
        color: #f1f1f1;
        box-shadow: 0 7px 10px rgba(43, 110, 255, 0.3);
    }
</style>