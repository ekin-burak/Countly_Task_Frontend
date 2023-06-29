<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <router-link to="/" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" style="background: transparent;" width="34" height="42">
            </router-link>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start" >
            <strong class="navbar-item">
              <router-link to="/" >
                Movie Review Web App
              </router-link>
            </strong>
        </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-success is-light" href="https://github.com/ekin-burak/Countly_Task_Frontend">
                  <strong>Frontend Source Code</strong>
                </a>
                <a class="button is-success is-light" href="https://github.com/ekin-burak/Countly_Task_Backend">
                  <strong>Backend Source Code</strong>
                </a>
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