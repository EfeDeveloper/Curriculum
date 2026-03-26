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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        v-for="project in projects"
        :key="project.id"
        class="hover:border-primary/60 transition-all duration-200 flex flex-col max-h-96"
      >
        <CardHeader class="pb-3">
          <CardTitle class="text-base font-semibold text-foreground dark:text-foreground line-clamp-2">
            {{ project.title }}
          </CardTitle>
          <CardDescription class="text-xs text-muted-foreground dark:text-muted-foreground mt-1 line-clamp-2">
            {{ project.description }}
          </CardDescription>
        </CardHeader>
        <CardContent class="flex-1 flex flex-col gap-3 py-3">
          <!-- Highlights -->
          <ul class="space-y-1">
            <li
              v-for="(highlight, idx) in project.highlights"
              :key="idx"
              class="flex gap-2 text-xs text-foreground dark:text-foreground line-clamp-1"
            >
              <span class="text-primary dark:text-primary flex-shrink-0">→</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-1">
            <Badge
              v-for="tech in project.technologies"
              :key="tech"
              variant="outline"
              class="text-xs dark:border-primary/40 dark:text-foreground dark:hover:border-primary/70 transition-colors"
            >
              {{ tech }}
            </Badge>
          </div>

          <!-- Links -->
          <div class="flex gap-2 pt-1 mt-auto">
            <Button
              v-if="project.github"
              variant="outline"
              size="sm"
              as-child
              class="dark:border-primary/40 dark:text-primary dark:hover:border-primary/70 transition-colors duration-200 h-8"
            >
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                <Github class="w-3 h-3" />
                <span class="hidden sm:inline text-xs">Code</span>
              </a>
            </Button>
            <Button
              v-if="project.link"
              variant="outline"
              size="sm"
              as-child
              class="dark:border-primary/40 dark:text-primary dark:hover:border-primary/70 transition-colors duration-200 h-8"
            >
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                <ExternalLink class="w-3 h-3" />
                <span class="hidden sm:inline text-xs">Live</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
</template>
