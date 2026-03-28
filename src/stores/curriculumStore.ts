import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurriculumState } from '@/types/curriculum'
import curriculumData from '@/data/curriculum.json'

export const useCurriculumStore = defineStore('curriculum', () => {
  const state = ref<CurriculumState>(curriculumData as CurriculumState)

  const getExperience = () => state.value.experience
  const getEducation = () => state.value.education
  const getProjects = () => state.value.projects
  const getSkills = () => state.value.skills
  const getContacts = () => state.value.contacts

  return {
    state,
    getExperience,
    getEducation,
    getProjects,
    getSkills,
    getContacts,
  }
})
