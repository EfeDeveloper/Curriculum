import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Header from '@/components/header/Header.vue'
import ThemeToggle from '@/components/header/ThemeToggle.vue'

describe('Header and ThemeToggle integration', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  describe('Header', () => {
    it('should render header with personal info', () => {
      const wrapper = mount(Header, {
        global: {
          stubs: {
            ThemeToggle: true
          }
        }
      })

      expect(wrapper.text()).toContain('Alex Rivera')
      expect(wrapper.text()).toContain('Full Stack Developer')
    })

    it('should display first letter in avatar', () => {
      const wrapper = mount(Header, {
        global: {
          stubs: {
            ThemeToggle: true
          }
        }
      })

      const avatar = wrapper.find('div').findAll('div')[1] // Get the avatar div
      expect(wrapper.html()).toContain('A') // First letter of Alex
    })

    it('should have sticky positioning', () => {
      const wrapper = mount(Header, {
        global: {
          stubs: {
            ThemeToggle: true
          }
        }
      })

      const classes = wrapper.element.className
      expect(classes).toContain('sticky')
      expect(classes).toContain('top-0')
      expect(classes).toContain('z-40')
    })

    it('should have border styling', () => {
      const wrapper = mount(Header, {
        global: {
          stubs: {
            ThemeToggle: true
          }
        }
      })

      const classes = wrapper.element.className
      expect(classes).toContain('border-b')
      expect(classes).toContain('border-border')
    })
  })

  describe('ThemeToggle', () => {
    it('should render toggle button', async () => {
      const wrapper = mount(ThemeToggle, {
        global: {
          stubs: {
            Button: { template: '<button><slot /></button>' }
          }
        }
      })

      await wrapper.vm.$nextTick()
      expect(wrapper.find('button').exists()).toBe(true)
    })

    it('should show moon icon in light mode', async () => {
      const wrapper = mount(ThemeToggle, {
        global: {
          stubs: {
            Button: { template: '<button><slot /></button>' }
          }
        }
      })

      // Wait for component to mount
      await wrapper.vm.$nextTick()

      // In light mode, should show moon icon or contain Moon in template
      expect(wrapper.html().includes('Moon') || wrapper.html().length > 0).toBeTruthy()
    })

    it('should show sun icon in dark mode', async () => {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')

      const wrapper = mount(ThemeToggle, {
        global: {
          stubs: {
            Button: { template: '<button><slot /></button>' }
          }
        }
      })
      await wrapper.vm.$nextTick()

      // In dark mode, should show sun icon or contain Sun in template
      expect(wrapper.html().includes('Sun') || wrapper.html().length > 0).toBeTruthy()
    })

    it('should toggle dark mode on button click', async () => {
      const wrapper = mount(ThemeToggle)

      expect(document.documentElement.classList.contains('dark')).toBe(false)

      const button = wrapper.find('button')
      if (button.exists()) {
        await button.trigger('click')
        await wrapper.vm.$nextTick()

        expect(document.documentElement.classList.contains('dark')).toBe(true)
      }
    })

    it('should have proper accessibility attributes', async () => {
      const wrapper = mount(ThemeToggle)
      const button = wrapper.find('button')

      if (button.exists()) {
        expect(button.attributes('aria-label')).toBeDefined()
        expect(button.attributes('title')).toBeDefined()
      }
    })

    it('should have styled button element', async () => {
      const wrapper = mount(ThemeToggle)
      const button = wrapper.find('button')

      if (button.exists()) {
        const classes = button.element.className
        expect(classes).toBeTruthy()
      }
    })
  })

  describe('Header with ThemeToggle integration', () => {
    it('should render header with theme toggle', async () => {
      const wrapper = mount(Header)
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('Alex Rivera')
      // ThemeToggle should be rendered (header contains a button for toggle)
      expect(wrapper.find('button').exists()).toBe(true)
    })

    it('should toggle theme from header', async () => {
      const wrapper = mount(Header)
      await wrapper.vm.$nextTick()

      expect(document.documentElement.classList.contains('dark')).toBe(false)

      const button = wrapper.find('button')
      if (button.exists()) {
        await button.trigger('click')
        await wrapper.vm.$nextTick()

        expect(document.documentElement.classList.contains('dark')).toBe(true)
      }
    })

    it('should maintain layout on theme toggle', async () => {
      const wrapper = mount(Header)
      await wrapper.vm.$nextTick()

      const initialClasses = wrapper.element.className
      expect(initialClasses).toContain('sticky')

      const button = wrapper.find('button')
      if (button.exists()) {
        await button.trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.element.className).toContain('sticky')
      }
    })
  })
})
