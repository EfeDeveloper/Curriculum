<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import Header from '@/components/header/Header.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/sections/Footer.vue'

/**
 * Initialize theme on app mount
 * This ensures dark mode class is applied to html element
 */
useTheme().initTheme()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
    <!-- Header with theme toggle -->
    <Header />

    <!-- Main content -->
    <main class="flex-1">
      <!-- Experience Section -->
      <ExperienceSection />

      <!-- Education Section -->
      <EducationSection />

      <!-- Projects Section -->
      <ProjectsSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Print styles for PDF export */
@media print {
  :deep(.no-print) {
    display: none !important;
  }

  :deep(.print-only) {
    display: block !important;
  }
}
</style>
