<template>
    <MovieList :post="movie" :key="movie._id"></MovieList>
    <div class="card">
        <div class="card-image">
            <img src="../assets/Interstellar.jpg" alt="Placeholder image" class="centered">
        </div>
        <div class="card-content">
          <div class="description">
            <strong>Movie Name:</strong>
            <a>{{ movie.movieName }}</a>
            <br>
            <strong>Description:</strong>
            <a>{{ movie.description }}</a>
            <br>
            <strong>Release Year:</strong>
            <a>{{ movie.releaseDate }}</a>
            <br>
            <strong>Average Rating:</strong>
            <a>{{ movie.avgRating }}</a>
            <br>
          </div>
        </div>
      </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import { useRouter,useRoute} from 'vue-router'
import {ref, onMounted} from 'vue'

export default {
    component:{
        MovieList,
    },
    setup(){
        const router = useRouter()
        const route = useRoute()

        const API_URL ='https://movie-reviewapp-20ae84a3a422.herokuapp.com/movies'

        const movie = ref({
            movieName: '',
           description: '',  
           releaseDate: '',
           avgRating:  ''
        })


        const movieDetail = ref({
            movieName: movie.movieName,
            description: movie.description,  
            releaseDate: movie.releaseDate,
            avgRating:  movie.avgRating
        })
        onMounted(() => {
            getMovie()
        })
        async function getMovie() {
            const { id }= route.params
            const response = await fetch('${API_URL}/${id}')
            const json = await response.json()
            movie.value = json
        }
        return {
            movie,

        }
    }
}
</script>

<style>
.centered {
    display: block;
    margin: 0 auto;
}
</style>