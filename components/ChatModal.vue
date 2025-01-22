<template>
  <Card class="shadow-none">
    <template #content>
      <div
        ref="content-div"
        class="flex flex-col gap-4 font-fredoka h-96 overflow-y-auto p-px"
      >
        <Message
          v-for="{ severity, content, id } of messages"
          :key="id"
          :severity="severity"
          class="w-fit odd:ml-auto"
        >
          <template #icon>
            <Avatar
              image=""
              shape="circle"
            >
              <template #icon>
                <Icon
                  name="tabler:user-square"
                  size="2.5rem"
                  mode="svg"
                />
              </template>
            </Avatar>
            <span class="ml-2">
              <NuxtImg
                v-if="isImage(content)"
                :src="content"
              />
              <span v-else>
                {{ content }}
              </span>
            </span>
          </template>
        </Message>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-1 mt-4">
        <InputText
          v-model="inputText"
          type="text"
          placeholder="Say something..."
          class="w-full"
          @keydown.enter="submit"
        />
        <Button
          label="Send"
          @click="submit"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'

const { messages, speak } = useChat()
const { isImage } = useText()
const contentDiv = useTemplateRef('content-div')
const inputText = ref('')

async function submit() {
  speak(inputText.value)
  inputText.value = ''

  await promiseTimeout(100)

  if (contentDiv.value) {
    contentDiv.value.scrollTop = contentDiv.value.scrollHeight
  }
}
</script>
