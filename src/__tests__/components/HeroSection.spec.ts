import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HeroSection from '@/components/sections/HeroSection.vue'

describe('HeroSection', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render hero section with id', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('[id="hero"]').exists()).toBe(true)
  })

  it('should have correct section structure', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('should render container with proper padding', () => {
    const wrapper = mount(HeroSection)
    const container = wrapper.find('.container')
    expect(container.exists()).toBe(true)
  })

  it('should have grid layout', () => {
    const wrapper = mount(HeroSection)
    const grid = wrapper.find('.grid')
    expect(grid.exists()).toBe(true)
  })

  it('should display greeting text', () => {
    const wrapper = mount(HeroSection)
    const text = wrapper.text()
    expect(text).toContain("Hey, I'm")
  })

  it('should display hero title with Full Stack Developer', () => {
    const wrapper = mount(HeroSection)
    const text = wrapper.text()
    expect(text).toContain('Full')
    expect(text).toContain('Stack')
    expect(text).toContain('Developer')
  })

  it('should have Full in primary color', () => {
    const wrapper = mount(HeroSection)
    const fullSpan = wrapper.find('.text-primary')
    expect(fullSpan.exists()).toBe(true)
    expect(fullSpan.text()).toContain('Full')
  })

  it('should have circular avatar placeholder', () => {
    const wrapper = mount(HeroSection)
    const circle = wrapper.find('.rounded-full')
    expect(circle.exists()).toBe(true)
  })

  it('should have CTA button', () => {
    const wrapper = mount(HeroSection)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should have Get In Touch link in button', () => {
    const wrapper = mount(HeroSection)
    const text = wrapper.text()
    expect(text).toContain('Get In Touch')
  })

  it('should have summary/description text', () => {
    const wrapper = mount(HeroSection)
    const text = wrapper.text()
    expect(text.length).toBeGreaterThan(50)
  })

  it('should have proper responsive classes', () => {
    const wrapper = mount(HeroSection)
    const section = wrapper.find('section')
    expect(section.classes()).toContain('py-16')
  })
})
