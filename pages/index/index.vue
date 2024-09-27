<template>
  <div>
    <div class="container">
      <div class="bg-white text-black dark:bg-black dark:text-white">
        <h1 class="py-10 text-center" @click="toggleDark()">
          <span class=" ">Hello Word !</span>
        </h1>
        <van-button type="primary" @click="showToast('toast')">
          button
        </van-button>
        <VanButton type="success" @click="showNotify('notify')">
          button
        </VanButton>
        <LazyVanButton type="default">
          lazy button
        </LazyVanButton>
      </div>
    </div>
  </div>
</template>
