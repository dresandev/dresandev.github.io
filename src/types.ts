export interface Tag {
  label: string
  color: string
}

interface Link {
  label: string
  url: string
}

export interface Project {
  name: string
  description: string
  tags: Tag[]
  links: Link[]
  imageUrl: string
}
