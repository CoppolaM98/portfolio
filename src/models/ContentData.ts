export enum ContentDataType {
    Text = "Text",
    Image = "Image",
    Video = "Video"
}

export type ContentData = TextContentData | ImageContentData | VideoContentData;


export interface TextContentData {
    type: ContentDataType.Text,
    variant?: string
    content: string
}

export interface ImageContentData {
    type: ContentDataType.Image
    alt?: string
    src: string
}

export interface VideoContentData {
    type: ContentDataType.Video
    src: string
    posterSrc?: string
}