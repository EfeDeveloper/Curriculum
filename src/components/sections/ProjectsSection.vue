<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Section from '@/components/Section.vue'
import { Github, ExternalLink } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const projects = curriculum.getProjects()
</script>

<template>
  <Section
    id="projects"
    title="Featured Projects"
    subtitle="Recent work showcasing technical expertise"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        v-for="project in projects"
        :key="project.id"
        class="hover:shadow-md dark:hover:shadow-lg transition-shadow flex flex-col"
      >
        <CardHeader>
          <CardTitle class="text-xl md:text-2xl text-foreground dark:text-foreground line-clamp-2">
            {{ project.title }}
          </CardTitle>
          <CardDescription class="text-sm md:text-base text-muted-foreground dark:text-muted-foreground mt-2">
            {{ project.description }}
          </CardDescription>
        </CardHeader>
        <CardContent class="flex-1 flex flex-col gap-4">
          <!-- Highlights -->
          <ul class="space-y-2">
            <li
              v-for="(highlight, idx) in project.highlights"
              :key="idx"
              class="flex gap-2 text-xs md:text-sm text-foreground dark:text-foreground"
            >
              <span class="text-primary dark:text-primary flex-shrink-0 mt-0.5">→</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tech in project.technologies"
              :key="tech"
              variant="secondary"
              class="text-xs dark:bg-input/50 dark:text-foreground"
            >
              {{ tech }}
            </Badge>
          </div>

          <!-- Links -->
          <div class="flex gap-2 pt-2 mt-auto">
            <Button
              v-if="project.github"
              variant="outline"
              size="sm"
              as-child
              class="dark:border-input dark:text-foreground dark:hover:bg-input/50"
            >
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                <Github class="w-4 h-4" />
                <span class="hidden sm:inline">Code</span>
              </a>
            </Button>
            <Button
              v-if="project.link"
              variant="outline"
              size="sm"
              as-child
              class="dark:border-input dark:text-foreground dark:hover:bg-input/50"
            >
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                <ExternalLink class="w-4 h-4" />
                <span class="hidden sm:inline">Live</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
</template>
