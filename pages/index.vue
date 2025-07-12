<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300 container mx-auto">
    <div class="hero-content text-center my-80">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Travel Log</h1>
        <p class="py-6">
          Keep track of your travels and adventures with this simple travel log app. Add 
        </p>
        <AuthButton v-if="!authStore.user" />
        <NuxtLink to="/dashboard" class="btn btn-primary" v-else>
          Start Logging
        </NuxtLink>
      </div>
    </div>
  </div>
</template>