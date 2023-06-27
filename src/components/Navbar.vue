<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" style="background: transparent;" width="34" height="42">
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start" navbar-item-color="white">
            <strong class="navbar-item">
              <router-link to="/">
                Movie Review Web App
              </router-link>
                
            </strong>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/createReview" class="button is-primary">
                  <strong>Create Review</strong>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>