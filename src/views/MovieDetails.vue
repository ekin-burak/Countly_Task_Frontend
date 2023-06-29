<template>
    <div  class="card my-5">
        <div class="card-image">   
            <img  :src="movieDetail.image" alt="Placeholder image" class="centered">
        </div>
        <div class="card-content">
            
            <div class="info">
            <strong>Movie Name:</strong>
            <p>{{ movieDetail.movieName }}</p>
            <strong>Description:</strong>
            <p>{{ movieDetail.description }}</p>
            <strong>Release Year:</strong>
            <p>{{ getYearFromDate(movieDetail.releaseDate) }}</p>
            <strong>Average Rating:</strong>
            <p>{{ movieDetail.avgRating }}</p>
          </div>
        </div>
        <div class="reviewcard my-4">
            <ReviewList/>
        </div>
      </div>
      
</template>

<script>
import ReviewList from '../components/ReviewList.vue'
import MovieList from '../components/MovieList.vue'
import { useRouter,useRoute} from 'vue-router'
import { ref, onMounted, computed } from 'vue'


export default {
    components:{
        ReviewList,
        MovieList,
    },
    data(){
        const router = useRouter()
        const route = useRoute()

        const API_URL ='https://movie-reviewapp-20ae84a3a422.herokuapp.com/movies'

        const movieDetail = ref({
            id:'',
            image: '',
            movieName: '',
            description: '',  
            releaseDate: '',
            avgRating: '',
        })

        onMounted(() => {
            getMovie()
        })
        async function getMovie() {
            const { id }= route.params
            const response = await fetch(`${API_URL}/${id}`)
            const json = await response.json()
            movieDetail.value = json
            console.log(response)
            const a1 = movieDetail.image
            const image = document.getElementById("movieimg")

        }
        return {
            movieDetail,
        }
    },
    year() {
        return {
            dateString: this.movieDetail.releaseDate
        };
    },
  methods: {
    getYearFromDate(dateString) {
      const date = new Date(dateString);
      return date.getFullYear();
    }
  }
}

</script>

<style>
.centered {
    display: block;
    margin: 0 auto;
    width: 15%;
}
.card-content {
    font-size: medium;
    
}
.reviewcard {
    text-align: center;
    display: flex;
    justify-content: center; 
    align-content: center; 
}

</style>