<template>
<!-- Hero Section -->
      <div class="heros">
        <div class="container">
          <div class="row flex-row-reverse hero">
            <div class="col-12 col-md-6 hero1">
              <img src="../assets/img-home/bg-hero.png" alt="">
            </div>
            <div class="col-12 col-md-6 hero2">
              <h3>Don’t just dream <br> Learn with us</h3>
              <p class="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <router-link to="/Login" class=" button">Get Started</router-link>
            </div>
          </div>
        </div>
      </div>

  <!-- Category Course -->
      <div class="kategoris">
        <div class="container">
            <h5>Popular Subject</h5>
            <h3>Category Course</h3>
            <div class="row kategori">
              <div v-for ="todo in todos" :key= "todo" class="col-6 col-md-2 mt-4 kategori1">
                 <h4>{{todo.materi}}</h4>
                 <p>{{todo.courses}}</p>
              </div>
            </div>
        </div>
      </div>
      
      <!-- Features -->
      <div class="fiturs">
        <div class="container">
          <div class="row">
            <div class="col fiturs1">
              <img src="../assets/img-home/bg-fitur.png" alt="">
            </div>
            <div class="col fiturs2">
              <h3>The World’s Largest Selection <br> of Courses and Books</h3>
              <div v-for= "item in icon" :key= "item" class="row fitur">
                  <div  class="col-md-2 fitur1">
                    <img :src="item.icons" alt="">
                  </div>
                  <div  class="col-md-6 fitur1">
                    <p>{{item.name}}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Info -->
      <div class="info">
        <img src="../assets/img-home/bg-fitur1.png" alt="">
        <div class="container">
          <div class="infos">
            <h4>25K+ Students <br> are in One Place</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <router-link to="/Login" class="button1">Join Now</router-link>
          </div>
        </div>
      </div>

      <!-- Testimoni -->
      <div class="testimonis">
        <div class="container">
          <h5>Success Stories</h5>
          <h3>What are other saying <br> about us ?</h3>
          <div class="row testimoni">
            <div v-for= "items in testi" :key="items" class="col testimoni1">
              <img :src="items.gambar" alt="">
              <h4>{{items.nama}}</h4>
              <p>{{items.status}}</p>
              <p>{{items.quotes}}</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
// @ is an alias to /src
export default {
     name : "HomeView",
     data : function() {
       return{
         todos :[
            {            
             materi : 'Science',
             courses : 'Over 100 courses'
            },
            {                 
             materi : 'Mathematic',
             courses : 'Over 100 courses'
            },
            {                 
             materi : 'English',
             courses : 'Over 100 courses'
            },
            {                 
             materi : 'Sports',
             courses : 'Over 100 courses'
            },
            {                 
             materi : 'Finance',
             courses : 'Over 100 courses'
            },
            {     
             materi : 'Histories',
             courses : 'Over 100 courses'
            },
            {     
             materi : 'Arts',
             courses : 'Over 100 courses'
            },
            {    
             materi : 'IT',
             courses : 'Over 100 courses'
            }
         ],
         icon : [
            {
              name : '10k Online Courses',
              icons : 'https://img.icons8.com/ios/30/000000/book.png'
            },
            {
              name : 'Expert Instruction',
              icons : 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/    external-reward-success-flatart-icons-outline-flatarticons.png'
            },
            {
              name : 'Free Access',
              icons : 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/30/000000/external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png'
            }      
         ],
         testi :[
           {
             nama : 'Anindita Putri',
             status : 'Students',
             quotes : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
             gambar : require('../assets/img-home/anindita.png')
           },
           {
             nama : 'Muhammad Aldi',
             status : 'Students',
             quotes : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
             gambar : require('../assets/img-home/aldi.png')
           },
           {
             nama : 'Putri Permata Sari',
             status : 'Students',
             quotes : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
             gambar : require('../assets/img-home/sari.png')
           }
         ]
       }
     }
    //  computed: {
    //    gambar: function(){
    //      return require('../assets/' +this.testi.gambar)
    //    }
    //  }
}

</script>

    <style scoped>
    /* Hero style */
          .heros{
            margin-top: 8%;
          }
          .hero{
            width: 100%;
            margin: 0 auto;
          }
          .hero1, .hero2{
            
            margin: 0 auto;
            width: 40%;
          }
            .hero1{
              margin-left: 10%;
            }
          .hero1 img{
            width: 100%;
          }
          .hero2{
            margin-top: 8%;
          }
          .hero2 h3{
            font-weight: 700;
            font-size: 3rem;
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

          /* Kategori style */
          .kategoris{
            margin-top: 300px;
            margin-left: 5%;
          }
          .kategoris h5{
            font-size: 1rem;
            color: #ED1675;
          }
          .kategoris h3{
            font-size: 2rem;
            font-weight: 700;
          }
          .kategori{ 
            margin: auto auto;
            width: 100%;
            margin-left: -20px;
            margin-top: 40px;
          }
          .kategori1{
            background-color: #f1f1f1;
            height: 100px;
            width: 250px;
            margin: 15px 20px;
            text-align: center;
            padding: 20px 0;
            border-radius: 10px;
            transition: all 0.5s ease-out;
          }
          .kategori1:hover{
            background-color: #ffff;
            box-shadow: 0 9px 11px rgba(98, 98, 98, 0.25);
            
          }
          .kategori1 h4{
            font-size: 1.2rem;
            font-weight: 600;
          }   
          .kategori1 p{
            font-size: .9rem;
            color: #a4a4a4;
            font-weight: 500;
          }   
          
          /* Fitur Style */
          .fiturs{
            margin-top: 300px;
          }
          .fiturs1 img{
            margin-left: 30px;
          }
          .fiturs2{
            margin-left: 3%;
          }
          .fiturs2 h3{
            margin: 6% auto;
            font-weight: 700;
            font-size: 2.2rem;
          }
          .fitur{
            background-color: #f1f1f1;
            color: #a4a4a4;
            width: 60%;
            height: 65px;
            margin-top: 20px;
            margin-left: 2px;
            padding: 15px 10px;
            border-radius: 10px;
            transition: all .5s ease-out;
          }
          .fitur:hover{
            
            background-color: #ffff;
            box-shadow: 0 8px 9px rgba(155, 155, 155, 0.25);
            color: black;
          }
          .fitur p{
            padding: 5px 0;
            font-weight: 500;
          }

        /* Info Style */
          .info{
            margin-top: 300px;
          }
          .info img{
            width: 100%;
          }
          .infos{
            text-align: center;
            margin-top: -32%;
          }
          .infos h4{
            font-weight: 700;
            font-size: 1.5rem;
          }
          .infos p{
            width: 28%;
            margin: 20px auto;
            font-size: .9rem;
            color: #a4a4a4;
          }
          .button1{
            text-decoration: none;
            background-color: #0E3EDA;
            padding: 10px 10px;
            color: #ffff;
            border-radius: 5px;
            transition: all .5s ease-out;
          }
          .button1:hover{
            box-shadow: 0 7px 10px rgba(43, 110, 255, 0.3);
          }

        /* Testimoni Style */
          .testimonis{
            margin-top: 35%;
            margin-left: 5%;
          }
          .testimonis h5{
            font-size: 1rem;
            color: #ED1675;
          }
          .testimonis h3{
            font-size: 2rem;
            font-weight: 700;
          }
          .testimoni{
            width: 85%;
            margin-top: 5%;
          }
          .testimoni1{
            background-color: #f1f1f1; 
            margin: auto 15px;
            padding: 15px;
            border-radius: 10px;
            transition: all .5s ease-out;
          }
          .testimoni1:hover{
            background-color: #ffff;
            box-shadow: 0 8px 9px rgba(155, 155, 155, 0.25);
          }
          
          .testimoni1 h4{
            margin-top: 10px;
            font-size: 1.1rem;
            font-weight: 600;
          }
          .testimoni1 p{
            font-size: .9rem;
          }
          .testimoni1 p:nth-child(3){
            font-weight: 500;
            color: #a4a4a4;
          }
      
    </style>
