<template>
  <div id="app" class="columns is-marginless">
    <div class="column is-3 has-background-light">
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li><router-link to="/">Home</router-link></li>
        </ul>
        <p class="menu-label">PIXI Elements</p>
        <ul class="menu-list">
          <li><router-link to="/renderer">Renderer</router-link></li>
          <li><router-link to="/container">Container</router-link></li>
          <li><router-link to="/sprite">Sprite</router-link></li>
          <li><router-link to="/text">Text</router-link></li>
        </ul>
      </aside>
    </div>

    <router-view class="column" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#app {
  min-height: 100vh;
}

.canvas-section {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
