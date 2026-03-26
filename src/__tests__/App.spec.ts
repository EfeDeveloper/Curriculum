import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import App from '../App.vue'

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render app with header', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          Header: true,
          ExperienceSection: true,
          EducationSection: true,
          ProjectsSection: true,
          SkillsSection: true,
          ContactSection: true,
          Footer: true
        }
      }
    })

    expect(wrapper.element).toBeDefined()
  })

  it('should have min-h-screen class', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          Header: true,
          ExperienceSection: true,
          EducationSection: true,
          ProjectsSection: true,
          SkillsSection: true,
          ContactSection: true,
          Footer: true
        }
      }
    })

    expect(wrapper.element.className).toContain('min-h-screen')
    expect(wrapper.element.className).toContain('bg-background')
  })

  it('should support dark mode class', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          Header: true,
          ExperienceSection: true,
          EducationSection: true,
          ProjectsSection: true,
          SkillsSection: true,
          ContactSection: true,
          Footer: true
        }
      }
    })

    expect(wrapper.element.className).toContain('dark:bg-background')
    expect(wrapper.element.className).toContain('dark:text-foreground')
  })
})
