<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'

const curriculum = useCurriculumStore()
const { personalInfo } = curriculum.state

// Sample story content - user can customize
const storyParagraphs = [
  `My journey as a frontend developer started in 2010 when I first discovered the magic of HTML, CSS, and JavaScript. What began as a hobby quickly evolved into a passion for building beautiful, functional web applications that solve real-world problems. Throughout my career, I've worked on projects spanning e-commerce platforms, SaaS applications, and mobile-first responsive designs.`,
  `In 2018, I decided to transition my skillset towards a more comprehensive full-stack approach. I invested in learning backend technologies, DevOps practices, and cloud infrastructure. This decision opened new doors and allowed me to lead projects from conception to deployment, understanding the complete lifecycle of modern web applications. At each step, I collaborated closely with design teams, product managers, and fellow engineers to deliver exceptional user experiences.`,
  `Currently at TechVision Corp, I lead a talented team of developers in architecting scalable solutions. I'm passionate about mentoring junior developers, establishing best practices, and fostering a culture of continuous learning. Beyond coding, I believe in the power of clear communication, thoughtful design, and solving problems with elegance and simplicity.`
]

</script>

<template>
  <section class="py-16 md:py-24 lg:py-32 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 md:mb-16">
        My Story.
      </h2>

      <!-- Story Content -->
      <div class="space-y-6 md:space-y-8">
        <p
          v-for="(paragraph, index) in storyParagraphs"
          :key="index"
          class="text-base md:text-lg text-foreground leading-relaxed"
        >
          <!-- Paragraphs can contain inline links -->
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
