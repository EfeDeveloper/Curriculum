<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-vue-next'
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
</script>

<template>
  <footer class="border-t border-border bg-background flex flex-col">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex-1">
      <!-- CTA Section -->
      <div class="text-center space-y-3 pb-4 md:pb-6">
        <h3 class="text-xl md:text-2xl font-bold text-foreground">
          Interested in working together?
        </h3>
        <p class="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
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
      <div class="border-t border-border my-6" />

      <!-- Bottom Section -->
      <div class="text-center space-y-1.5">
        <p class="text-xs md:text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs text-muted-foreground/70">
          <span>Built with Vue 3 + TypeScript + Tailwind CSS</span>
          <span class="hidden sm:inline">•</span>
          <Button
            @click="handleDownloadPDF"
            variant="ghost"
            size="sm"
            class="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
          >
            <Download class="w-3 h-3 mr-1" />
            <span>Download Resume</span>
          </Button>
        </div>
      </div>
    </div>

    <!-- Naranja footer bar - absolutely last element -->
    <div class="w-full h-6 bg-primary"></div>
  </footer>
</template>
