<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section.vue'

const curriculum = useCurriculumStore()
const experience = curriculum.getExperience()
</script>

<template>
  <Section
    id="experience"
    title="Professional Experience"
    subtitle="7+ years building scalable web applications"
  >
    <div class="space-y-4">
      <Card
        v-for="job in experience"
        :key="job.id"
        class="hover:border-primary/60 transition-all duration-200"
      >
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div class="flex-1 min-w-0">
              <CardTitle class="text-lg font-semibold text-foreground dark:text-foreground">
                {{ job.position }}
              </CardTitle>
              <CardDescription class="text-sm text-muted-foreground dark:text-muted-foreground mt-0.5">
                {{ job.company }}
              </CardDescription>
            </div>
            <div class="flex-shrink-0">
              <Badge
                :variant="job.current ? 'default' : 'secondary'"
                class="text-xs whitespace-nowrap h-6"
              >
                {{ job.current ? 'Current' : 'Past' }}
              </Badge>
            </div>
          </div>
          <p class="text-xs text-muted-foreground dark:text-muted-foreground mt-1.5">
            {{ job.startDate }} - {{ job.endDate || 'Present' }}
          </p>
        </CardHeader>
        <CardContent class="space-y-3">
          <ul class="space-y-1">
            <li
              v-for="(desc, idx) in job.description"
              :key="idx"
              class="flex gap-3 text-sm text-foreground dark:text-foreground line-clamp-2"
            >
              <span class="text-primary dark:text-primary flex-shrink-0 mt-0.5">•</span>
              <span>{{ desc }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-1 pt-1">
            <Badge
              v-for="tech in job.technologies"
              :key="tech"
              variant="outline"
              class="text-xs dark:border-primary/40 dark:text-foreground dark:hover:border-primary/70 transition-colors"
            >
              {{ tech }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
</template>
