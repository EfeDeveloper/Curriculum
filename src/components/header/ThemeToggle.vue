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
  <button
    @click="toggleTheme"
    class="inline-flex items-center justify-center w-10 h-10 transition-transform duration-500 hover:rotate-180"
    :title="`Toggle dark mode (${isDark ? 'Cmd' : 'Cmd'}/Ctrl+Shift+L)`"
    :aria-label="`Toggle dark mode. Currently in ${isDark ? 'dark' : 'light'} mode`"
  >
    <Sun v-if="isDark" class="w-5 h-5 text-primary" />
    <Moon v-else class="w-5 h-5 text-primary" />
  </button>
</template>
