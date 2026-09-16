<script setup>
</script>

<template>
  <div class="not-found-container">
    <img src="/images/404.png" alt="Not Found" title="Not Found" class="not-found-img" />
    <div class="action-overlay">
      <el-button type="primary" size="large" @click="$router.push('/')">
        Return to Home
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f0f2f5;
}

.not-found-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Stretches and crops the image to fill the screen entirely */
  display: block;
}

.action-overlay {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>
