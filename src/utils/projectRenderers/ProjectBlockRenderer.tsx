import { Button, ButtonProps, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { VideoPlayer } from "component/media/VideoPlayer";
import { ProjectData } from "models/ProjectData";
import { useNavigate } from "react-router-dom";
import { TextVariants } from "styles/chakra/Text";
import { getStringPrefixer } from "utils/stringUtils";

import NoAssetIcon from "assets/icons/no_asset.svg";

export const ProjectBlockRenderer = ({ project, ...buttonProps }: { project: ProjectData } & Omit<ButtonProps, "children">) => {
    const navigate = useNavigate();

    const getAssetsUrl = getStringPrefixer(process.env.PUBLIC_URL + project.assetsDir)

    const styleProps: FlexProps = { width: "100%", height: "200px", objectFit: "contain" }

    return <Button p="1rem 1rem" h="100%" onClick={() => navigate("/project/" + project.id)} {...buttonProps}>
        <Flex direction="column" h="100%" justifyContent="center">
            <Text variant={TextVariants.content}>{project.pageTitle}</Text>
            {project.coverVideoSrc ?
                <VideoPlayer src={getAssetsUrl(project.coverVideoSrc)} poster={project.coverImageSrc && getAssetsUrl(project.coverImageSrc)} {...styleProps} /> :
                <Image src={project.coverImageSrc ? getAssetsUrl(project.coverImageSrc) : NoAssetIcon} {...styleProps} />
            }
        </Flex>
    </Button>
}
