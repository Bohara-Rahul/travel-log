<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value;
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  }
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" v-model="isDark" />

    <!-- sun icon -->
    <Icon class="swap-on" name="tabler:sun" size="24" />

    <!-- moon icon -->
    <Icon class="swap-off" name="tabler:moon-filled" size="24" />
  </label>
</template>
