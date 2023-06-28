<template>
    <div class="container">
        <div v-for="movie in movies" :key="movie._id" class="card my-5">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                    <div class="title-wrapper">
                        <p class="title is-4">{{ movie.movieName }} 
                            <div class="buttons my-3">
                               <button @click="detailedMovie(movie._id)"
                                class="card-footer-item button is-primary">Details
                               </button>
                               <button @click="createReview(movie._id)"
                               class="card-footer-item button is-primary">Create Review
                               </button>
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
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter();
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
        function getMovieDetailURL(movieID) {
            return `/movies/${movieID}`;
        }
        function getreviewDetailURL(movieID) {
            return `/createReview/${movieID}`;
        }

        async function detailedMovie(_id) {
            router.push({
                name: 'MovieDetails',
                params: {
                    id: _id,
                },
            })
        }
        async function createReview(_id) {
            router.push ({
                name: 'Review',
                params: {
                    id: _id,
                }
            })
        }
        return {
            movies,
            getMovieDetailURL,
            getreviewDetailURL,
            detailedMovie,
            createReview
        };
    }, 
};
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