<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import Header from '@/components/header/Header.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import NewProjectsSection from '@/components/sections/NewProjectsSection.vue'
import NewExperienceSection from '@/components/sections/NewExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
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
  <div class="bg-background dark:bg-background min-h-screen text-foreground dark:text-foreground">
    <!-- Header with theme toggle and navigation -->
    <Header />

    <!-- Main content -->
    <main class="flex-1">
      <!-- Hero Section: Greeting, title, CTA buttons, and circular image -->
      <HeroSection />

      <!-- Experience Section: Timeline with expandable items -->
      <NewExperienceSection />

      <!-- Education Section: Degrees and certifications -->
      <EducationSection />

      <!-- Skills Section: 4-column grid with simple text lists -->
      <NewSkillsSection />

      <!-- Projects Section: 2x2 grid with mockup placeholders -->
      <NewProjectsSection />

      <!-- My Story Section: Narrative text with inline links -->
      <MyStorySection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer: CTA, links, social icons, copyright -->
    <Footer />
  </div>
</template>
