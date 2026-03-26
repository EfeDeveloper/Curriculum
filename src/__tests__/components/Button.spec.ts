import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Button } from '@/components/ui/button'

describe('Button component', () => {
  it('should render default button', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('should apply default variant classes', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Default Button'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('bg-primary')
    expect(classes).toContain('text-primary-foreground')
  })

  it('should apply secondary variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary'
      },
      slots: {
        default: 'Secondary Button'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('bg-secondary')
    expect(classes).toContain('text-secondary-foreground')
  })

  it('should apply outline variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'outline'
      },
      slots: {
        default: 'Outline Button'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('border')
    expect(classes).toContain('bg-background')
  })

  it('should apply ghost variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'ghost'
      },
      slots: {
        default: 'Ghost Button'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('hover:bg-accent')
  })

  it('should apply destructive variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'destructive'
      },
      slots: {
        default: 'Delete'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('bg-destructive')
  })

  it('should apply size props correctly', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'sm'
      },
      slots: {
        default: 'Small'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('h-8')
    expect(classes).toContain('px-3')
  })

  it('should apply large size', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg'
      },
      slots: {
        default: 'Large'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('h-10')
    expect(classes).toContain('px-6')
  })

  it('should apply icon size', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'icon'
      },
      slots: {
        default: '📋'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('size-9')
  })

  it('should emit click event', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Clickable'
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('should be disabled when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'Disabled'
      }
    })

    expect(wrapper.element.disabled).toBe(true)
    const classes = wrapper.element.className
    expect(classes).toContain('disabled:opacity-50')
  })

  it('should support link variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'link'
      },
      slots: {
        default: 'Link'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('text-primary')
    expect(classes).toContain('underline-offset-4')
  })
})
