import { ref, onMounted, watch } from 'vue'

type Theme = 'light' | 'dark'

/**
 * Composable for managing dark/light theme with localStorage persistence
 * Syncs with Tailwind's dark: mode via html.classList
 */
export function useTheme() {
  const isDark = ref<boolean>(false)

  /**
   * Initialize theme from localStorage or system preference
   */
  const initTheme = () => {
    const htmlElement = document.documentElement
    const savedTheme = localStorage.getItem('theme') as Theme | null

    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Use system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    applyTheme()
  }

  /**
   * Apply theme to DOM and update localStorage
   */
  const applyTheme = () => {
    const htmlElement = document.documentElement

    if (isDark.value) {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  /**
   * Toggle between dark and light mode
   */
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  /**
   * Set theme to specific value
   */
  const setTheme = (theme: Theme) => {
    isDark.value = theme === 'dark'
  }

  /**
   * Get current theme string
   */
  const getCurrentTheme = (): Theme => {
    return isDark.value ? 'dark' : 'light'
  }

  /**
   * Watch for changes and apply theme
   */
  watch(isDark, () => {
    applyTheme()
  })

  /**
   * Setup on component mount
   */
  onMounted(() => {
    initTheme()

    // Listen to system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
      }
    }

    mediaQuery.addEventListener('change', handleChange)
  })

  return {
    isDark,
    toggleTheme,
    setTheme,
    getCurrentTheme,
    initTheme
  }
}
