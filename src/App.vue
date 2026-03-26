<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import Header from '@/components/header/Header.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import NewProjectsSection from '@/components/sections/NewProjectsSection.vue'
import NewExperienceSection from '@/components/sections/NewExperienceSection.vue'
import MyStorySection from '@/components/sections/MyStorySection.vue'
import NewSkillsSection from '@/components/sections/NewSkillsSection.vue'
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
    <!-- Header with theme toggle and navigation -->
    <Header />

    <!-- Main content -->
    <main class="flex-1">
      <!-- Hero Section: Greeting, title, CTA buttons, and circular image -->
      <HeroSection />

      <!-- Projects Section: 2x2 grid with mockup placeholders -->
      <NewProjectsSection />

      <!-- Experience Section: Timeline with expandable items -->
      <NewExperienceSection />

      <!-- My Story Section: Narrative text with inline links -->
      <MyStorySection />

      <!-- Skills Section: 4-column grid with simple text lists -->
      <NewSkillsSection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer: CTA, links, social icons, copyright -->
    <Footer />
  </div>
</template>


<style scoped>
/* Smooth transitions between pages */
:deep(*) {
  @apply transition-colors duration-300;
}

/* Reveal animation on scroll */
:deep([data-reveal]) {
  animation: reveal 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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
