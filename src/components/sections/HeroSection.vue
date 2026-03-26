<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Button } from '@/components/ui/button'
import { Code2, Terminal, Brackets } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const { personalInfo } = curriculum.state
</script>

<template>
  <section id="hero" class="py-16 md:py-24 lg:py-32 border-border border-b overflow-hidden">
    <div class="mx-auto px-6 sm:px-6 lg:px-8 container">
      <div class="items-center gap-12 grid grid-cols-1 md:grid-cols-2">
        <!-- Left: Text Content -->
        <div class="space-y-6 md:space-y-8">
          <!-- Greeting -->
          <div>
            <p class="mb-2 text-muted-foreground text-lg md:text-xl">
              Hey, I'm {{ personalInfo.name }} 👋
            </p>
            <h1 class="font-bold text-foreground text-5xl md:text-6xl lg:text-7xl leading-none">
              <span class="text-primary">Full</span> Stack<br />Developer
            </h1>
          </div>

          <!-- Description -->
          <p class="max-w-lg text-muted-foreground text-base md:text-lg leading-relaxed">
            {{ personalInfo.summary }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex items-start">
            <Button
              size="lg"
              class="bg-primary hover:bg-primary/90 font-semibold text-primary-foreground"
              as-child
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <!-- Right: Professional Profile Image with Animated Geometric Elements -->
        <div class="flex justify-center md:justify-end items-center">
          <div class="relative w-72 md:w-80 lg:w-96 aspect-square">
            <!-- Animated rotating circles background -->
            <div
              class="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin"
              style="animation-duration: 20s"
            ></div>
            <div
              class="absolute inset-8 border border-primary/15 rounded-full animate-spin"
              style="animation-duration: 15s; animation-direction: reverse"
            ></div>
            <div class="absolute inset-16 border-2 border-primary/25 rounded-full"></div>

            <!-- Floating geometric shapes -->
            <div
              class="-top-8 -left-8 absolute border-2 border-primary/30 rounded-lg w-24 h-24 rotate-45 animate-pulse"
              style="animation-duration: 3s"
            ></div>
            <div
              class="-right-6 -bottom-6 absolute border-2 border-primary/25 rounded-full w-20 h-20 animate-pulse"
              style="animation-duration: 4s; animation-delay: 1s"
            ></div>
            <div
              class="top-1/2 -right-12 absolute border-2 border-primary/20 rounded-lg w-16 h-16 rotate-12 animate-bounce"
              style="animation-duration: 2s"
            ></div>

            <!-- Development Icons - Random distribution with varied sizes and fade animation -->
            <!-- Top left - Code2 (large) -->
            <div
              class="top-1/3 left-1/4 absolute -translate-x-32 -translate-y-28"
              style="animation: fadeInOut 6s ease-in-out infinite"
            >
              <Code2 :size="100" class="text-primary/50" />
            </div>

            <!-- Right side - Console (largest) -->
            <div
              class="top-1/4 right-1/7 absolute -translate-y-8 translate-x-28"
              style="animation: fadeInOut 6s ease-in-out infinite 0.5s"
            >
              <Brackets :size="70" class="text-primary/50" />
            </div>

            <!-- Bottom left - Terminal (medium-large) -->
            <div
              class="bottom-1/12 left-1/2 absolute -translate-x-20 translate-y-24"
              style="animation: fadeInOut 6s ease-in-out infinite 2s"
            >
              <Terminal :size="70" class="text-primary/50" />
            </div>

            <!-- Center glow effect -->
            <div
              class="absolute inset-0 bg-linear-to-br from-primary via-primary/40 to-primary/10 opacity-30 blur-3xl rounded-full"
            ></div>

            <!-- Main image container -->
            <div
              class="group relative border-2 border-primary/40 rounded-full w-full h-full overflow-hidden transition-all duration-700"
            >
              <img
                src="https://png.pngtree.com/png-vector/20250530/ourmid/pngtree-smiling-man-posing-for-a-portrait-png-image_16420590.png"
                alt="Profile"
                class="w-full h-full object-cover"
              />

              <!-- Dynamic overlay with gradient -->
              <div
                class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10"
              ></div>

              <!-- Top shine effect -->
              <div
                class="top-0 left-1/4 absolute bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl w-1/2 h-1/3 transition-opacity duration-700"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
