import { ContentData } from "models/ContentData"

export interface ProjectData {
  id: string
  pageTitle: string
  assetsDir: string
  coverVideoSrc?: string
  coverImageSrc?: string
  content: ContentData[]
}