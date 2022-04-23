<template>
    <footer>
      <div class="abouts">
        <div class="container">
          <div class="row about">
            <div class="col-md-6 about1">
               <img src="../assets/favicon.svg" alt="">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quo dicta vero itaque accusamus! Veniam a delectus necessitatibus temporibus omnis.</p>
              <p> Copyright &copy; {{year}} | Elhan Club</p>
            </div>
            <div class="col-md-6 about2">
              <div class="row">
                <div class="col-md-3">
                  <h4>Courses</h4>
                  <p>Science</p>
                  <p>Mathematic</p>
                  <p>English</p>
                  <p>Sports</p>
                  <p>Finance</p>
                </div>
                <div class="col-md-3">
                  <h4>Links</h4>
                  <router-link to="" class="navigasi">Home</router-link>
                  <router-link to="about" class="navigasi">About Us</router-link>
                  <router-link to="mentor" class="navigasi">Mentor</router-link>
                  <router-link to="contact" class="navigasi">Contact Us</router-link>
                </div>
                <div class="col-md-3">
                  <h4>Social Media</h4>
                  <a href="#" class="social">Instagram</a>
                  <a href="#" class="social">Twitter</a>
                  <a href="#" class="social">Behance</a>
                  <a href="#" class="social">Facebook</a>
                </div>
                <div class="col-md-3 about3">
                  <h4>Office</h4>
                  <p>PT. Elhan Kursus Indonesia</p>
                  <p>Jl. Raja Isa no. 10 <br> Batam Indonesia</p>
                  <p>(021) 54556789</p>
                  <p>team@elhanclub.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import {computed} from 'vue'

export default {
  name: "AppFooter",
  setup () {
    const year = computed(() => new Date().getFullYear())
    return {year}
  }
}
</script>
<style scoped>
    .abouts{
      background-color: #f1f1f1;
      padding: 30px 0;
      margin-top: 300px;
    }
    .about{
      margin-left: 20px;
    }
    .about h4{
      font-size: 1.2rem;
    }
    .about p{
      font-size: .9rem;
      margin-top: 20px;
      width: 50%;
    }
    .about2{
      margin-left: -5%;
    }
    .about3 p{
      width: 100%;
    }
    .navigasi{
      display: flex;
      margin: 20px 0;
      text-decoration: none;
      color: #090909;
      font-size: .9rem;
    }
    .navigasi:hover{
      color: #0E3EDA !important;
      font-weight: 500;
    }
    .social{
      display: flex;
      margin: 20px 0;
      text-decoration: none;
      color: #090909;
      font-size: .9rem;
    }
</style>