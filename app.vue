<template>
  <main class="relative h-screen w-screen">
    <ChatButton
      ref="chat-button"
      class="absolute bottom-4 right-4 h-16 w-16 invisible opacity-0 transition duration-1000"
    />
    <DynamicDialog />
  </main>
</template>

<script setup lang="ts">
const chatButton = useTemplateRef('chat-button')

onMounted(() => {
  useTimeoutFn(() => {
    chatButton.value?.$el.classList.remove('invisible', 'opacity-0')
  }, 3000)
})
</script>
