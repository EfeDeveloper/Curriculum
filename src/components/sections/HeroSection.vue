<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const { personalInfo } = curriculum.state
</script>

<template>
  <section id="hero" class="py-16 md:py-24 lg:py-32 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-6 md:space-y-8">
          <!-- Greeting -->
          <div>
            <p class="text-lg md:text-xl text-muted-foreground mb-2">
              Hey, I'm {{ personalInfo.name }} 👋
            </p>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight typing max-w-2xl">
              {{ personalInfo.title }}
            </h1>
          </div>

          <!-- Description -->
          <p class="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            {{ personalInfo.summary }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              as-child
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <!-- Right: Circular Image Placeholder -->
        <div class="flex justify-center md:justify-end">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center shadow-2xl">
            <User class="w-32 h-32 md:w-40 md:h-40 text-primary/60" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
