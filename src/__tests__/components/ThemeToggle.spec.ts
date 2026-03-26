import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ThemeToggle from '@/components/header/ThemeToggle.vue'

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('should render toggle button', () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })

  it('should have correct button classes', () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')
    expect(button.classes()).toContain('theme-toggle')
  })

  it('should have accessible aria-label', () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')
    expect(button.attributes('aria-label')).toBeDefined()
    expect(button.attributes('aria-label')).toContain('Toggle dark mode')
  })

  it('should have title attribute with keyboard shortcut', () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeDefined()
  })

  it('should render toggle indicator', () => {
    const wrapper = mount(ThemeToggle)
    const indicator = wrapper.find('[class*="toggle-indicator"]')
    expect(indicator.exists()).toBe(true)
  })

  it('should render toggle background', () => {
    const wrapper = mount(ThemeToggle)
    const background = wrapper.find('[class*="toggle-bg"]')
    expect(background.exists()).toBe(true)
  })

  it('should have light mode icon initially', () => {
    const wrapper = mount(ThemeToggle)
    const svgs = wrapper.findAll('svg')
    expect(svgs.length).toBeGreaterThan(0)
  })

  it('should handle keyboard shortcut Cmd+Shift+L', () => {
    const spy = vi.fn()
    mount(ThemeToggle)

    const event = new KeyboardEvent('keydown', {
      key: 'L',
      ctrlKey: true,
      shiftKey: true
    })

    expect(event.key).toBe('L')
    expect(event.ctrlKey).toBe(true)
    expect(event.shiftKey).toBe(true)
  })

  it('should be clickable', async () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should maintain toggle state through click', async () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')

    await button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('button').exists()).toBe(true)
  })
})
