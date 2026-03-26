<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Section from '@/components/Section.vue'
import { GraduationCap } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const education = curriculum.getEducation()
</script>

<template>
  <Section
    id="education"
    title="Education"
    subtitle="Continuous learning and professional development"
  >
    <div class="space-y-4">
      <Card
        v-for="edu in education"
        :key="edu.id"
        class="hover:border-primary/60 transition-all duration-200"
      >
        <CardHeader class="pb-3">
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <GraduationCap class="w-4 h-4 text-primary dark:text-primary" />
            </div>
            <div class="flex-1 min-w-0">
              <CardTitle class="text-base font-semibold text-foreground dark:text-foreground">
                {{ edu.degree }}
              </CardTitle>
              <CardDescription class="text-sm text-muted-foreground dark:text-muted-foreground mt-0.5">
                <span class="underline decoration-primary">{{ edu.institution }}</span> • {{ edu.field }}
              </CardDescription>
            </div>
          </div>
          <p class="text-xs text-muted-foreground dark:text-muted-foreground mt-2">
            Graduated: {{ edu.graduationDate }}
            <span v-if="edu.gpa" class="ml-2">• GPA: {{ edu.gpa }}</span>
          </p>
        </CardHeader>
        <CardContent v-if="edu.highlights" class="space-y-2">
          <ul class="space-y-1">
            <li
              v-for="(highlight, idx) in edu.highlights"
              :key="idx"
              class="flex gap-2 text-sm text-foreground dark:text-foreground line-clamp-1"
            >
              <span class="text-primary dark:text-primary flex-shrink-0">✓</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </Section>
</template>
