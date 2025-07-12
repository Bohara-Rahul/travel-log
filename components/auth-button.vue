<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
   <button 
    :disabled="authStore.loading" 
    @click="authStore.signIn" 
    class="btn btn-accent"
   >Sign In with Github
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" /> 
    <Icon v-else name="tabler:brand-github" size="24" />
    </button>
</template>