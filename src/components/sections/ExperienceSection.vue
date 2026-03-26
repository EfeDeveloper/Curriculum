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
    <div class="space-y-6">
      <Card
        v-for="job in experience"
        :key="job.id"
        class="hover:shadow-md dark:hover:shadow-lg transition-shadow"
      >
        <CardHeader>
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div class="flex-1 min-w-0">
              <CardTitle class="text-xl md:text-2xl text-foreground dark:text-foreground">
                {{ job.position }}
              </CardTitle>
              <CardDescription class="text-base text-muted-foreground dark:text-muted-foreground mt-1">
                {{ job.company }}
              </CardDescription>
            </div>
            <div class="flex-shrink-0">
              <Badge
                :variant="job.current ? 'default' : 'secondary'"
                class="text-xs md:text-sm whitespace-nowrap"
              >
                {{ job.current ? 'Current' : 'Past' }}
              </Badge>
            </div>
          </div>
          <p class="text-sm text-muted-foreground dark:text-muted-foreground mt-2">
            {{ job.startDate }} - {{ job.endDate || 'Present' }}
          </p>
        </CardHeader>
        <CardContent class="space-y-4">
          <ul class="space-y-2">
            <li
              v-for="(desc, idx) in job.description"
              :key="idx"
              class="flex gap-3 text-sm md:text-base text-foreground dark:text-foreground"
            >
              <span class="text-primary dark:text-primary flex-shrink-0 mt-1">•</span>
              <span>{{ desc }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 pt-2">
            <Badge
              v-for="tech in job.technologies"
              :key="tech"
              variant="outline"
              class="text-xs dark:border-input dark:text-foreground"
            >
              {{ tech }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
</template>
