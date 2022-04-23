<template>
  <!-- Hero Section -->
  <div class="abouts">
    <div class="container">
      <div class="row about">
        <div class="col">
            <img src="../assets/img-about/hero.svg" alt="">
        </div>
        <div class="col about1">
            <h3>Help People To Grow</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta in nobis explicabo illum possimus consequuntur placeat veniam deleniti cum repellendus vitae, eos aliquid suscipit doloremque? Molestias deserunt similique doloremque fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam similique amet recusandae eligendi dolores cupiditate repellat cum delectus eius.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error porro libero incidunt, praesentium quasi vel enim pariatur! Nulla, ipsum.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Rating Section -->
  <div class="ratings">
    <div class="container">
      <div class="row rating">
        <div v-for="todo in rating" :key="todo" class="col-md-4 rating1">
          <h4>{{todo.angka}}</h4>
          <p>{{todo.desk}}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section -->
  <div class="kontens">
    <div class="container">
      <div class="row flex-row-reverse konten">
        <div class="col">
          <img src="../assets/img-about/bg-hero.png" alt="">
        </div>
        <div class="col konten1">
          <h5>Learn From Master</h5>
          <h3>Menyajikan konten edukasi <br> oleh mentor berpengalaman</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, qui labore ullam earum aut eos eum aperiam magni corrupti animi!</p>
          <router-link to="/mentor" class="button">View All Mentor</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data : function() {
    return {
      rating : [
        {
          angka : '25.000',
          desk  : 'Succsess Member'
        },
        {
          angka : '180',
          desk  : 'High Quality'
        },
        {
          angka : '4.8',
          desk  : 'Rating Course'
        },
      ]
    }
  }
}
</script>
<style scoped>
    /* Hero Style */
      .abouts{
        margin-top: 10%;
      }
      .about1{
        margin: 5% 0;
      }
      .about1 h3{
          padding: 20px 0;
          font-weight: 700;
      }
      .about1 p{
        width: 75%;
      }

      /* Rating Style */
      .rating{
        margin: auto auto;
        width: 70%;
        padding: 10px;
        margin-top: 300px;
      }
      .rating1{
        margin: 0 auto;
        text-align: center;
      }
      .rating1 h4{
        font-size: 2rem;
        font-weight: 700;
        color: #0E3EDA;
      }
      .rating1 p{
        font-weight: 500;
      }

      /* Konten Style */
      .kontens{
        margin-left: 5%;
        margin-top: 300px;
      }
      .konten1{
        margin-top: 10%;
      }
      .konten1 h3, .konten1 h5{
        text-transform: capitalize;
      }
      .konten h5{
        font-size: 1rem;
        color: #ED1675;
      }
      .konten h3{
        font-size: 2rem;
        font-weight: 700;
      }
      .konten1 p{
        width: 65%;
        padding: 15px 0;
      }
      .button{
        text-decoration: none;
        padding: 10px 10px;
        border: none;
        background-color: #0E3EDA;
        color: #ffff;
        border-radius: 5px;
        transition: all .5s ease-out;
      }
      .button:hover{
         box-shadow: 0 7px 10px rgba(43, 110, 255, 0.3);
      }

</style>