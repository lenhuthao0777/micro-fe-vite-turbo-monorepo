import { ref, onMounted, onUnmounted } from 'vue'

export function useDraggable(initialPosition = { x: 0, y: 0 }) {
  const position = ref(initialPosition)
  const isDragging = ref(false)
  const dragElement = ref<HTMLElement | null>(null)

  const handleMouseDown = (e: MouseEvent) => {
    isDragging.value = true
    const rect = dragElement.value!.getBoundingClientRect()
    position.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return
    dragElement.value!.style.left = `${e.clientX - position.value.x}px`
    dragElement.value!.style.top = `${e.clientY - position.value.y}px`
  }

  const handleMouseUp = () => {
    isDragging.value = false
  }

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  })

  return {
    dragElement,
    handleMouseDown,
    isDragging
  }
}