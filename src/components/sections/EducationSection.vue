<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
    <div class="space-y-6">
      <Card
        v-for="edu in education"
        :key="edu.id"
        class="hover:shadow-md dark:hover:shadow-lg transition-shadow"
      >
        <CardHeader>
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <GraduationCap class="w-5 h-5 text-primary dark:text-primary" />
            </div>
            <div class="flex-1 min-w-0">
              <CardTitle class="text-xl md:text-2xl text-foreground dark:text-foreground">
                {{ edu.degree }}
              </CardTitle>
              <CardDescription class="text-base text-muted-foreground dark:text-muted-foreground mt-1">
                {{ edu.institution }} • {{ edu.field }}
              </CardDescription>
            </div>
          </div>
          <p class="text-sm text-muted-foreground dark:text-muted-foreground mt-3">
            Graduated: {{ edu.graduationDate }}
            <span v-if="edu.gpa" class="ml-2">• GPA: {{ edu.gpa }}</span>
          </p>
        </CardHeader>
        <CardContent v-if="edu.highlights" class="space-y-3">
          <ul class="space-y-2">
            <li
              v-for="(highlight, idx) in edu.highlights"
              :key="idx"
              class="flex gap-3 text-sm md:text-base text-foreground dark:text-foreground"
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
