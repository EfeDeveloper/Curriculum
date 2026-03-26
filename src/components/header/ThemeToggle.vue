<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { MoonStar, Sun } from 'lucide-vue-next'
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
    class="theme-toggle"
    :class="{ 'dark-mode': isDark }"
    :title="`Toggle dark mode (${isDark ? 'Cmd' : 'Cmd'}/Ctrl+Shift+L)`"
    :aria-label="`Toggle dark mode. Currently in ${isDark ? 'dark' : 'light'} mode`"
  >
    <div class="toggle-bg"></div>
    <div class="toggle-indicator">
      <MoonStar v-if="isDark" class="w-4 h-4 text-primary" />
      <Sun v-else class="w-4 h-4 text-primary" />
    </div>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: relative;
  width: 60px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;
}

.toggle-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ff7159 0%, #ff8a73 100%);
  border: 2px solid #ff7159;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.toggle-indicator {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.theme-toggle.dark-mode .toggle-indicator {
  left: calc(100% - 30px);
}

.theme-toggle:hover .toggle-indicator {
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.5);
}

.theme-toggle.dark-mode:hover .toggle-indicator {
  box-shadow: 0 4px 12px rgba(255, 113, 89, 0.5);
}
</style>
