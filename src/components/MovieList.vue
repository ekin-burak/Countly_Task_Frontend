<template>
    <div class="container">
        <div v-for="movie in movies" :key="movie._id" class="card my-5">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                    <div class="title-wrapper">
                        <p class="title is-4">{{ movie.movieName }} 
                            <div>
                                <router-link :to="getMovieDetailURL(movie._id)">
                                    <span class="button is-primary my-5">Details</span>
                                </router-link>
                                <router-link :to="getreviewDetailURL(movie._id)" class="button is-primary my-5">
                                    <span><strong>Create Review</strong></span>
                                </router-link>
                            </div>
                        </p>
                    </div>
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
        function getMovieDetailURL(movieId) {
            return `/movies/${movieId}`;
        }
        function getreviewDetailURL(movieId) {
            return `/createReview/${movieId}`;
        }

        return {
            movies,
            getMovieDetailURL,
            getreviewDetailURL,
        };
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
    .title-wrapper {
        display: flex;
        justify-content: space-between;
    }
</style>