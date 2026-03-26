<script setup lang="ts">
import { ref } from 'vue'
import { useCurriculumStore } from '@/stores/curriculumStore'
import Section from '@/components/Section.vue'
import ProjectCard from '@/components/ui/project-card/ProjectCard.vue'
import ProjectModal from '@/components/projects-modal/ProjectModal.vue'
import type { Project } from '@/types/curriculum'

const curriculum = useCurriculumStore()
const projects = curriculum.getProjects()
const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}
</script>

<template>
  <Section id="projects" title="Projects." subtitle="Recent work showcasing technical expertise">
    <!-- Projects Grid: 1 col mobile, 5 col tablet/desktop with asymmetric layout -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 auto-rows-max">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
        @view-more="openProjectModal(project)"
      />
    </div>
  </Section>

  <!-- Project Modal -->
  <ProjectModal
    :project="selectedProject"
    :open="isModalOpen"
    @update:open="isModalOpen = $event"
  />
</template>
