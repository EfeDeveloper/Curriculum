<script setup lang="ts">
interface Props {
  id: string
  title: string
  subtitle?: string
  class?: string
}

defineProps<Props>()

const emit = defineEmits<{
  mounted: []
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-20 py-12 md:py-16 lg:py-20" :class="class">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-2">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-base md:text-lg text-muted-foreground dark:text-muted-foreground">
          {{ subtitle }}
        </p>
      </div>

      <slot />
    </div>
  </section>
</template>
