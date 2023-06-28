<template>
 <div class="container mt-6">
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Movie Name</label>
          <input v-model="post.movieName" class="input" type="text" placeholder="movie name">
      </div>
      
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="post.username" class="input is-success" type="text" placeholder="Username">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea v-model="post.userReview" class="textarea" placeholder="Your Message"></textarea>
        </div>
      </div>
      
      <div class="field">
        <input v-model="post.rating" class="input" type="number" min="1" max="5" placeholder="Rate the movie(Between 1-5)">
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>
    </form>  
 </div>
</template>

<script>
export default {
  props: ['post', 'submitForm'],
}
</script>

<style>
</style>