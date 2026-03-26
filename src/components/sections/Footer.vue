<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-vue-next'
import { exportCurriculumPDF } from '@/utils/exportPDF'

/**
 * Handle PDF download
 */
const handleDownloadPDF = () => {
  exportCurriculumPDF({
    filename: 'curriculum.pdf',
    title: 'Curriculum - Alex Rivera'
  })
}
</script>

<template>
  <footer class="border-t border-border bg-muted/30 dark:bg-input/20 mt-12 md:mt-16 lg:mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Copyright -->
        <div class="text-center md:text-left">
          <p class="text-sm text-muted-foreground dark:text-muted-foreground">
            © {{ new Date().getFullYear() }} Alex Rivera. All rights reserved.
          </p>
          <p class="text-xs text-muted-foreground/70 dark:text-muted-foreground/70 mt-1">
            Built with Vue 3 + TypeScript + Tailwind CSS
          </p>
        </div>

        <!-- Actions -->
        <Button
          @click="handleDownloadPDF"
          variant="outline"
          size="sm"
          class="dark:border-input dark:text-foreground dark:hover:bg-input/50 whitespace-nowrap"
        >
          <Download class="w-4 h-4 mr-2" />
          <span>Download PDF</span>
        </Button>
      </div>
    </div>
  </footer>
</template>
