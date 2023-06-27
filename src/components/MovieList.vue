<template>
    <div class="container">
        <div v-for="movie in movies" :key="movie._id" class="card my-5">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ movie.movieName }} </p>
                </div>
              </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref, onMounted} from 'vue'
export default {
    setup() {
        const movies = ref([])
        const API_URL = 'https://movie-reviewapp-20ae84a3a422.herokuapp.com/movies'

        onMounted(() => {
            getMovies()
        })

        async function getMovies(){
            try {
                const response = await fetch(API_URL)
                const json = await response.json()
                movies.value = json
            } catch (error){
                console.log(error)
            }
        }
        return {
            movies,
        }
    },
}
</script>

<style>
    .card-content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>