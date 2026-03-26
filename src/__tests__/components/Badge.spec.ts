import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Badge } from '@/components/ui/badge'

describe('Badge component', () => {
  it('should render a badge element', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Badge'
      }
    })

    expect(wrapper.text()).toBe('Badge')
    expect(wrapper.element.className).toContain('rounded-full')
    expect(wrapper.element.className).toContain('px-2')
    expect(wrapper.element.className).toContain('py-0.5')
  })

  it('should apply default variant classes', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Default'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('bg-primary')
    expect(classes).toContain('text-primary-foreground')
  })

  it('should apply secondary variant', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'secondary'
      },
      slots: {
        default: 'Secondary'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('bg-secondary')
    expect(classes).toContain('text-secondary-foreground')
  })

  it('should apply destructive variant', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'destructive'
      },
      slots: {
        default: 'Destructive'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('bg-destructive')
  })

  it('should apply outline variant', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'outline'
      },
      slots: {
        default: 'Outline'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('border')
    expect(classes).toContain('text-foreground')
  })

  it('should accept custom class prop', () => {
    const wrapper = mount(Badge, {
      props: {
        class: 'custom-badge-class'
      },
      slots: {
        default: 'Custom'
      }
    })

    expect(wrapper.element.className).toContain('custom-badge-class')
  })

  it('should support multiple badges in a group', () => {
    const wrapper = mount({
      components: { Badge },
      template: `
        <div>
          <Badge>Vue</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Tailwind</Badge>
        </div>
      `
    })

    const badges = wrapper.findAll('div > div')
    expect(badges.length).toBeGreaterThanOrEqual(3)
    expect(wrapper.text()).toContain('Vue')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Tailwind')
  })

  it('should render inline with other content', () => {
    const wrapper = mount({
      components: { Badge },
      template: `
        <p>
          Status: <Badge>Active</Badge>
        </p>
      `
    })

    expect(wrapper.text()).toContain('Status:')
    expect(wrapper.text()).toContain('Active')
  })

  it('should have proper font styling', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Styled'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('font-medium')
  })

  it('should be responsive with text sizing', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Responsive'
      }
    })

    const classes = wrapper.element.className
    expect(classes).toContain('text-xs')
  })
})
