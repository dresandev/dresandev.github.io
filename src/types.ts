interface Link {
  label: string
  url: string
}

export interface Project {
  name: string
  description: string
  tags: string[]
  links: Link[]
  imageUrl: string
}
