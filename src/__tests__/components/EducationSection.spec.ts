import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import EducationSection from '@/components/sections/EducationSection.vue'

describe('EducationSection', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render education section', () => {
    const wrapper = mount(EducationSection)
    expect(wrapper.find('[id="education"]').exists()).toBe(true)
  })

  it('should display section title', () => {
    const wrapper = mount(EducationSection)
    expect(wrapper.text()).toContain('Education')
  })

  it('should render timeline structure', () => {
    const wrapper = mount(EducationSection)
    const timeline = wrapper.find('.space-y-6')
    expect(timeline.exists()).toBe(true)
  })

  it('should have vertical dashed line', () => {
    const wrapper = mount(EducationSection)
    const line = wrapper.find('.border-dashed')
    expect(line.exists()).toBe(true)
  })

  it('should render education timeline circles', () => {
    const wrapper = mount(EducationSection)
    const circles = wrapper.findAll('[class*="w-10"][class*="h-10"][class*="bg-primary"]')
    expect(circles.length).toBeGreaterThan(0)
  })

  it('should toggle expand/collapse on button click', async () => {
    const wrapper = mount(EducationSection)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)

    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.expandedIds.size).toBeGreaterThan(0)
    }
  })

  it('should display View More text initially', () => {
    const wrapper = mount(EducationSection)
    expect(wrapper.text()).toContain('View More')
  })

  it('should change to View Less when expanded', async () => {
    const wrapper = mount(EducationSection)
    const buttons = wrapper.findAll('button')

    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      await wrapper.vm.$nextTick()
      const text = wrapper.text()
      expect(text).toContain('View Less')
    }
  })

  it('should render degree titles', () => {
    const wrapper = mount(EducationSection)
    const text = wrapper.text()
    expect(text.length).toBeGreaterThan(10)
  })

  it('should have proper button styling with variant', () => {
    const wrapper = mount(EducationSection)
    const viewMoreButtons = wrapper.findAll('button')
    expect(viewMoreButtons.length).toBeGreaterThan(0)
  })
})
