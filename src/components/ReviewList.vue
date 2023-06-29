<template>
    <div class="container">
        <div v-for="review in reviews" :key="review.movieID" class="card my-5">
            <div class="card-content" id="reviews">
              <div class="media">
                <div class="media-content">
                    <div>
                        <strong>Reviewer's Username:&nbsp;</strong>
                        <p>{{ review.username }}</p>
                        <strong>Reviewer's Comment:&nbsp;</strong>
                        <p>{{ review.userReview}} </p>
                        <strong>Reviewer's Rating:&nbsp;</strong>
                        <p>{{ review.rating }} </p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRouter,useRoute } from 'vue-router'
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const reviews = ref([])
        const API_URL = 'https://movie-reviewapp-20ae84a3a422.herokuapp.com/reviews'
        const specificID = route.params.id

        onMounted(() => {
            getReviews()
        })

        async function getReviews(){
            try {
                const response = await fetch(API_URL)
                const json = await response.json()
                reviews.value = json.filter(review => review.movieID === specificID);
            } catch (error){
                console.log(error)
            }
        }
        return {
            reviews,
        }
    }, 
};
</script>

<style>
    #reviews {
        background-color:aquamarine;
    }
</style>