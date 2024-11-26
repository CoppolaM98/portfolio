import { Button, ButtonProps, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { VideoPlayer } from "component/media/VideoPlayer";
import { ProjectData } from "models/ProjectData";
import { useNavigate } from "react-router-dom";
import { TextVariants } from "styles/types/text.types";
import { getStringPrefixer } from "utils/stringUtils";

import NoAssetIcon from "assets/icons/no_asset.svg";

export const ProjectBlockRenderer = ({ project, ...buttonProps }: { project: ProjectData } & Omit<ButtonProps, "children">) => {
    const navigate = useNavigate();

    const getAssetsUrl = getStringPrefixer(process.env.PUBLIC_URL + project.assetsDir)

    const styleProps: FlexProps = { width: "100%", height: "100%" }

    return <Button p="0" onClick={() => navigate("/project/" + project.id)} {...buttonProps}>
        <Flex position="relative" w="100%" h="100%">
            {project.coverVideoSrc ?
                <VideoPlayer src={getAssetsUrl(project.coverVideoSrc)} poster={project.coverImageSrc && getAssetsUrl(project.coverImageSrc)} {...styleProps} /> :
                <Image src={project.coverImageSrc ? getAssetsUrl(project.coverImageSrc) : NoAssetIcon} {...styleProps} />
            }
        </Flex>
        <Flex bgColor="white" p="1" border="4px solid black" borderTop="0" position="absolute" zIndex="1" top="0" left="50%" transform="translateX(-50%)">
            <Text variant={TextVariants["Body/Large/Bold"]}
                >
                {project.pageTitle}
            </Text>
        </Flex>
    </Button>
}
