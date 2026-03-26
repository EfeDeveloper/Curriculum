<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Twitter, Mail } from 'lucide-vue-next'
import { exportCurriculumPDF } from '@/utils/exportPDF'
import { useCurriculumStore } from '@/stores/curriculumStore'

const curriculum = useCurriculumStore()
const { personalInfo } = curriculum.state

/**
 * Handle PDF download
 */
const handleDownloadPDF = () => {
  exportCurriculumPDF({
    filename: 'curriculum.pdf',
    title: `Curriculum - ${personalInfo.name}`
  })
}

// Social links (placeholder)
const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
  { icon: Mail, label: 'Email', url: 'mailto:hello@example.com' }
]
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <!-- CTA Section -->
      <div class="text-center mb-12 md:mb-16">
        <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Interested in working together?
        </h3>
        <p class="text-muted-foreground mb-6 max-w-md mx-auto">
          Let's create something amazing. Reach out and let's chat about your next project.
        </p>
        <Button
          size="lg"
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          as-child
        >
          <a href="mailto:hello@example.com">Send me an email</a>
        </Button>
      </div>

      <!-- Divider -->
      <div class="border-t border-border my-8 md:my-12" />

      <!-- Bottom Section -->
      <div class="space-y-8">
        <!-- Links -->
        <div class="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Home
          </a>
          <a href="#projects" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Projects
          </a>
          <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            About
          </a>
          <a href="#contact" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Contact
          </a>
        </div>

        <!-- Social Icons -->
        <div class="flex justify-center gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-center space-y-2">
          <p class="text-sm text-muted-foreground">
            © {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.
          </p>
          <p class="text-xs text-muted-foreground/70">
            Built with Vue 3 + TypeScript + Tailwind CSS
          </p>
          <Button
            @click="handleDownloadPDF"
            variant="ghost"
            size="sm"
            class="text-xs text-muted-foreground hover:text-primary"
          >
            <Download class="w-3 h-3 mr-1" />
            <span>Download Resume</span>
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>
