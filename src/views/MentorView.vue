<template>
  <div class="mentors">
    <div class="container">
      <div class="judul">
        <h1>Best Mentor With Many Experience</h1>
        <p>Di Elhan Club memiliki mentor-mentor terbaik yang sudah berpengalaman dibidangnya.</p>    
      </div>
      <div class="row mentor">
        <div v-for="item in mentor" :key="item" class="col-md-3 mentor1">
          <img :src="item.foto" alt="">
          <h4>{{item.nama}}</h4>
          <p>{{item.jobdesk}}</p>
          <p>{{item.qoutes}}</p>
          <div class="row icons">
          <div class="col-md-6 icon1">
            <a href="" style="text-decoration: none;">
            <img :src="item.icon1" alt="">
            </a>
          </div>
          <div class="-md-6 icon1">
            <a href="" style="text-decoration: none;">
            <img :src="item.icon2" alt="">
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name :"MentorView",
   data : function(){
    return{
      mentor :[
        {
          nama : 'Rahmat Hidayat',
          jobdesk : 'English Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Andi Pratama',
          jobdesk : 'Math Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto1.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Santi Yunita',
          jobdesk : 'Science Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto2.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Salsabila Nuryanti',
          jobdesk : 'Finance Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto3.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Yunita Cristine',
          jobdesk : 'Art Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto4.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Benny Tan',
          jobdesk : 'IT Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto5.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Nathanael',
          jobdesk : 'PE Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto6.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        },
        {
          nama : 'Gesella Sarwati',
          jobdesk : 'History Teacher',
          qoutes : '“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. “',
          foto  : require('../assets/img-mentor/foto7.png'),
          icon1 : 'https://img.icons8.com/material-outlined/30/a4a4a4/instagram-new--v1.png',
          icon2 : 'https://img.icons8.com/material-outlined/30/a4a4a4/whatsapp--v1.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .mentors{
      margin-top: 10%;
    }
    .judul{ 
      width: 40%;
      margin: 0 auto;
      text-align: center;
    }
    .judul h1{
      font-size: 2rem;
      font-weight: 700;
    }
    .judul p{
      font-size: .9rem;
      width: 60%;
      margin: 0 auto;
      font-weight: 500;
      color: #a4a4a4;
       padding: 15px 0;
    }
    .mentor{
      /* background-color: yellow; */
      width:90%;
      margin: 100px auto;
      justify-content: center;
      text-align: center;
    }
    .mentor1{
      background-color: #f1f1f1;
      margin: 15px 15px;
      padding: 15px;
      border-radius: 10px;
      transition: all .5s ease-out;
    }
    .mentor1:hover{
      background-color: #ffff;
      box-shadow: 0 9px 11px rgba(98, 98, 98, 0.25);
    }
    .mentor1 h4{
      padding-top: 10px;
      font-size: 1.2rem;
    }
    .mentor1 p{
      font-size: .9rem;
    }
    .mentor1 p:nth-child(3){
      font-weight: 500;
      color: #a4a4a4;
    }
    .icons{
      width: 35%;
      margin:auto auto;
    }
    .icon1{
      width: 50%;
      margin: 0 auto;
    }
    
</style>