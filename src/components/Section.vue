<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
interface Props {
  id: string
  title: string
  subtitle?: string
  class?: string
}

defineProps<Props>()
</script>

<template>
  <section :id="id" class="scroll-mt-20 py-12 md:py-16 lg:py-20" :class="class">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 md:mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
          {{ title.replace(/\.$/, '') }}<span class="text-primary">.</span>
        </h2>
        <div class="w-20 h-1.5 bg-primary rounded-full"></div>
        <p v-if="subtitle" class="text-lg text-muted-foreground dark:text-muted-foreground mt-6">
          {{ subtitle }}
        </p>
      </div>

      <slot />
    </div>
  </section>
</template>
