import { useQRCode } from '@vueuse/integrations/useQRCode'

const SEGMENTER = new Intl.Segmenter('en', {
  granularity: 'word',
})

function useText() {
  function isGreeting(s: string) {
    return ['hi', 'hello', 'привет', 'tere'].includes(s.toLocaleLowerCase())
  }

  function reverse(s: string) {
    return s.split('').reverse().join('')
  }

  function reverseWords(s: string) {
    return [...SEGMENTER.segment(s)].map(word => reverse(word.segment)).join('')
  }

  function encode(s: string) {
    return useQRCode(s)
  }

  function isImage(s: string) {
    return s.startsWith('data:image/png;base64,')
  }

  return {
    isGreeting,
    isImage,
    reverse,
    reverseWords,
    encode,
  }
}

export {
  useText,
}
