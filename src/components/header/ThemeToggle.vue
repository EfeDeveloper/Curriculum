<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-vue-next'
import { onMounted } from 'vue'

const { isDark, toggleTheme } = useTheme()

/**
 * Handle keyboard shortcut for theme toggle
 * Cmd/Ctrl + Shift + L
 */
const handleKeyboardShortcut = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'L') {
    event.preventDefault()
    toggleTheme()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyboardShortcut)
})
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    @click="toggleTheme"
    class="ml-2 border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
    :title="`Toggle dark mode (${isDark ? 'Cmd' : 'Cmd'}/Ctrl+Shift+L)`"
    :aria-label="`Toggle dark mode. Currently in ${isDark ? 'dark' : 'light'} mode`"
  >
    <Sun
      v-if="isDark"
      class="h-5 w-5 text-primary dark:text-primary transition-all"
    />
    <Moon
      v-else
      class="h-5 w-5 text-primary dark:text-primary transition-all"
    />
  </Button>
</template>

<style scoped>
button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}
</style>
