import { useStorage } from '@vueuse/core'
import type { Message } from '@/types/message'

function useChat() {
  const messages = useStorage<Message[]>('chat', [])
  const { isGreeting, reverse, reverseWords, encode } = useText()
  const options = [reverse, reverseWords, encode]

  if (messages.value.length > 0) {
    const { timestamp } = messages.value[messages.value.length - 1]

    if (Date.now() > timestamp + TIME_LIMIT) {
      messages.value = []
    }
  }

  function reply(text: string) {
    if (isGreeting(text)) {
      return WELCOME_MESSAGE
    }

    return options[Math.floor(Math.random() * options.length)](text)
  }

  function speak(text: string) {
    if (messages.value.length > CHAT_LIMIT) {
      return
    }

    messages.value.push({
      severity: 'info',
      content: text,
      timestamp: Date.now(),
      id: messages.value.length,
    })

    if (messages.value.length > CHAT_LIMIT) {
      messages.value.push({
        severity: 'success',
        content: end(),
        timestamp: Date.now(),
        id: messages.value.length,
      })
    }
    else {
      messages.value.push({
        severity: 'success',
        content: reply(text),
        timestamp: Date.now(),
        id: messages.value.length,
      })
    }
  }

  function end() {
    return GOODBYE_MESSAGE
  }

  return {
    speak,
    messages,
  }
}

export {
  useChat,
}
