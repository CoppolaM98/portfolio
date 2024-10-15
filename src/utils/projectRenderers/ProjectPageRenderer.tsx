import { Image, Text } from "@chakra-ui/react"
import { getProjectById } from "api/projects/projects"
import { PageLayout } from "component/layout/PageLayout"
import { VideoPlayer } from "component/media/VideoPlayer"
import { ProjectData } from "models/ProjectData"
import { useEffect, useState } from "react"
import { getStringPrefixer } from "utils/stringUtils"
import { ContentDataType, ImageContentData, TextContentData, VideoContentData } from "../../models/ContentData"
import { useParams } from "react-router-dom"
import { NoDataContent } from "utils/layout/AsyncLifecycleContent"

export const ProjectPageRenderer = () => {

    //TODO refactor using AsyncLifecycleContent

    const { id } = useParams<{ id: string }>();

    const [project, setProject] = useState<ProjectData>()

    useEffect(() => {
        if (id)
            getProjectById(id).then(setProject)
    }, [id])

    if (project) {

        const getAssetsUrl = getStringPrefixer(process.env.PUBLIC_URL + project.assetsDir)

        return <PageLayout>
            {project.content.length ? project.content.map(_contentPart => {
                switch (_contentPart.type) {
                    case ContentDataType.Text: {
                        const contentPart: TextContentData = _contentPart;
                        return <Text variant={contentPart.variant}>{contentPart.content}</Text>
                    }
                    case ContentDataType.Image: {
                        const contentPart: ImageContentData = _contentPart;
                        return <Image src={getAssetsUrl(contentPart.src)} alt={contentPart.alt} />
                    }
                    case ContentDataType.Video: {
                        const contentPart: VideoContentData = _contentPart;
                        return <VideoPlayer src={getAssetsUrl(contentPart.src)} poster={contentPart.posterSrc && getAssetsUrl(contentPart.posterSrc)} />
                    }
                    default: {
                        return `unhandled content of type `
                    }
                }
            }) : <NoDataContent />}
        </PageLayout>
    }

    return <NoDataContent />
}

