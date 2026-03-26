/**
 * Curriculum domain types
 * All data models for the CV application
 */

export interface Experience {
  id: string
  position: string
  company: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string[]
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  graduationDate: string
  field: string
  gpa?: string
  highlights?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  images?: string[]
  highlights: string[]
}

export interface Skill {
  id: string
  category: string
  items: SkillItem[]
}

export interface SkillItem {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface Contact {
  id: string
  type: 'email' | 'phone' | 'linkedin' | 'github' | 'twitter' | 'website'
  label: string
  value: string
  url?: string
}

export interface CurriculumState {
  experience: Experience[]
  education: Education[]
  projects: Project[]
  skills: Skill[]
  contacts: Contact[]
  personalInfo: {
    name: string
    title: string
    summary: string
    avatar?: string
  }
}
