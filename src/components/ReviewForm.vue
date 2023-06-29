<template>
 <div class="container mt-6">
    <form @submit.prevent="submitForm">
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
        <label class="label">Review</label>
        <div class="control">
          <textarea v-model="post.userReview" class="textarea" placeholder="Your Review"></textarea>
        </div>
      </div>
      
      
      <div class="field">
        <label class="label">Rate</label>
        <input v-model="post.rating" class="input" type="number" min="1" max="10" placeholder="Rate the movie(Between 1-10)">
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
.field {
  width: 65%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>