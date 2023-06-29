<template>
    <ReviewForm :post="review" :submitForm="createReview" />
</template>

<script>
import ReviewForm from "../components/ReviewForm.vue"
import { reactive } from "vue"
import { useRouter,useRoute } from "vue-router"

export default {
    components: {
        ReviewForm,
    },
    setup(){
        const API_URL = 'https://movie-reviewapp-20ae84a3a422.herokuapp.com/reviews'
        const router = useRouter()
        const route = useRoute()

        const { id }= route.params

        const review = reactive ({
            username: '',
            rating: '',
            userReview: '',
            movieID: id,  

        })

        async function createReview() {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: review.username,
                        rating: review.rating,
                        userReview: review.userReview,
                        movieID: review.movieID


                    })
                })
                const json = await response.json()
                router.push({
                    name: 'home',
                })

            } catch (error) {
                console.log(error)
            }
        }
        return {
            review,
            createReview,
        }
    }
}
</script>

<style>

</style>