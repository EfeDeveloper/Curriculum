import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

describe('Card components', () => {
  describe('Card', () => {
    it('should render a card element', () => {
      const wrapper = mount(Card, {
        slots: {
          default: 'Card content'
        }
      })

      expect(wrapper.element.className).toContain('rounded-xl')
      expect(wrapper.element.className).toContain('border')
      expect(wrapper.text()).toBe('Card content')
    })

    it('should have card styling', () => {
      const wrapper = mount(Card, {
        slots: {
          default: 'Content'
        }
      })

      const classes = wrapper.element.className
      expect(classes).toContain('bg-card')
      expect(classes).toContain('text-card-foreground')
    })

    it('should accept custom class prop', () => {
      const wrapper = mount(Card, {
        props: {
          class: 'custom-class'
        },
        slots: {
          default: 'Content'
        }
      })

      expect(wrapper.element.className).toContain('custom-class')
    })
  })

  describe('CardHeader', () => {
    it('should render header with proper spacing', () => {
      const wrapper = mount(CardHeader, {
        slots: {
          default: 'Header content'
        }
      })

      expect(wrapper.element.className).toContain('gap-1.5')
      expect(wrapper.element.className).toContain('px-6')
    })
  })

  describe('CardTitle', () => {
    it('should render title with proper styling', () => {
      const wrapper = mount(CardTitle, {
        slots: {
          default: 'Title'
        }
      })

      expect(wrapper.element.className).toContain('font-semibold')
      expect(wrapper.text()).toBe('Title')
    })

    it('should support custom heading level via as prop', () => {
      const wrapper = mount(CardTitle, {
        props: {
          as: 'h3'
        },
        slots: {
          default: 'Heading'
        }
      })

      expect(wrapper.element.tagName).toBe('H3')
    })
  })

  describe('CardDescription', () => {
    it('should render description with muted color', () => {
      const wrapper = mount(CardDescription, {
        slots: {
          default: 'Description'
        }
      })

      const classes = wrapper.element.className
      expect(classes).toContain('text-muted-foreground')
      expect(wrapper.text()).toBe('Description')
    })

    it('should have smaller text size', () => {
      const wrapper = mount(CardDescription, {
        slots: {
          default: 'Desc'
        }
      })

      expect(wrapper.element.className).toContain('text-sm')
    })
  })

  describe('CardContent', () => {
    it('should render content area with padding', () => {
      const wrapper = mount(CardContent, {
        slots: {
          default: 'Main content'
        }
      })

      expect(wrapper.element.className).toContain('px-6')
      expect(wrapper.text()).toBe('Main content')
    })
  })

  describe('Card composition', () => {
    it('should compose all card parts correctly', () => {
      const wrapper = mount({
        components: { Card, CardHeader, CardTitle, CardDescription, CardContent },
        template: `
          <Card>
            <CardHeader>
              <CardTitle>Test Card</CardTitle>
              <CardDescription>A test card</CardDescription>
            </CardHeader>
            <CardContent>Main content here</CardContent>
          </Card>
        `
      })

      expect(wrapper.text()).toContain('Test Card')
      expect(wrapper.text()).toContain('A test card')
      expect(wrapper.text()).toContain('Main content here')
    })
  })
})
