<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Button } from '@/components/ui/button'
import Section from '@/components/Section.vue'
import { Mail, Phone, Linkedin, Github, Globe, Twitter } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const contacts = curriculum.getContacts()

/**
 * Get icon for contact type
 */
function getIcon(type: string) {
  switch (type) {
    case 'email':
      return Mail
    case 'phone':
      return Phone
    case 'linkedin':
      return Linkedin
    case 'github':
      return Github
    case 'website':
      return Globe
    case 'twitter':
      return Twitter
    default:
      return Globe
  }
}
</script>

<template>
  <Section
    id="contact"
    title="Get in Touch"
    subtitle="Let's connect and discuss opportunities"
  >
    <div class="flex flex-wrap gap-2 justify-center md:justify-start">
      <Button
        v-for="contact in contacts"
        :key="contact.id"
        :as-child="contact.url ? true : false"
        variant="outline"
        class="text-primary hover:border-primary/60 dark:hover:border-primary/70 font-medium transition-colors duration-200"
      >
        <a
          v-if="contact.url"
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2"
          :aria-label="`Contact via ${contact.type}`"
        >
          <component :is="getIcon(contact.type)" class="w-4 h-4" />
          <span class="hidden sm:inline text-sm">{{ contact.label }}</span>
        </a>
        <button v-else class="flex items-center gap-2">
          <component :is="getIcon(contact.type)" class="w-4 h-4" />
          <span class="hidden sm:inline text-sm">{{ contact.value }}</span>
        </button>
      </Button>
    </div>
  </Section>
</template>
