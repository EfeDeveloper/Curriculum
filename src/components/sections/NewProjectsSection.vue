<script setup lang="ts">
import { ref } from 'vue'
import { useCurriculumStore } from '@/stores/curriculumStore'
import Section from '@/components/Section.vue'
import ProjectModal from '@/components/projects-modal/ProjectModal.vue'
import type { Project } from '@/types/curriculum'

const curriculum = useCurriculumStore()
const projects = curriculum.getProjects()
const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const PROJECT_IMAGE_URL = 'https://images.pexels.com/photos/36444162/pexels-photo-36444162.jpeg'

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}
</script>

<template>
  <Section id="projects" title="Projects." subtitle="Recent work showcasing technical expertise">
    <!-- Projects Grid: 1 col mobile, 2 col tablet, 3 col desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="group rounded-2xl overflow-hidden border-2 border-primary transition-all duration-800 flex flex-col h-full hover:shadow-lg"
      >
        <!-- Image -->
        <div class="relative overflow-hidden aspect-video">
          <img
            :src="PROJECT_IMAGE_URL"
            alt="Project mockup"
            class="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
          />
        </div>

        <!-- Content -->
        <div class="p-4 md:p-6 space-y-3 flex flex-col flex-grow">
          <h3 class="text-lg font-bold text-foreground">
            {{ project.title }}
          </h3>
          <p class="text-sm text-muted-foreground line-clamp-2 flex-grow">
            {{ project.description }}
          </p>
          <button
            @click="openProjectModal(project)"
            class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </Section>

  <!-- Project Modal -->
  <ProjectModal
    :project="selectedProject"
    :open="isModalOpen"
    @update:open="isModalOpen = $event"
  />
</template>
