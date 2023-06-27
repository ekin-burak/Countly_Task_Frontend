<template>
    <div class="welcome">
        <p>Welcome to Movie Review App !</p>
        <p>Please click to the film that you want to see details</p>
    </div>
    
    <MovieList/>
</template>

<script>
import MovieList from "../components/MovieList.vue"
export default {
    components: {
        MovieList,
    },
}
</script>

<style>
    .welcome {
        text-align: center;
        font-size: 25px;
    }
</style>