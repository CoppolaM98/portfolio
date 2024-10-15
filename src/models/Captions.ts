export interface LanguageMetadata {
  name: string
  locales: string[]
  filePath: string
}

export type Captions = Record<string, string>

export type CaptionsData = Omit<LanguageMetadata, "filePath"> & { captions: Captions }