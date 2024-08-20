export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Link = {
  TEXT: string
  HREF: string
  SUBLINKS?: Link[] // Subenlaces opcionales
}

export type Links = Link[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]
