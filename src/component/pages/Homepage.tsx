import { Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { TextVariants } from "styles/types/text.types";
import { ProjectBlockRenderer } from "utils/projectRenderers/ProjectBlockRenderer";

import { getProjectsList } from "api/projects/projects";
import { Carousel } from "component/layout/Carousel";
import { useNavigate } from "react-router";
import { AppColors } from "styles/types/primitives.types";
import { AsyncLifecycleDependantContent } from "utils/layout/AsyncLifecycleContent";

export const Homepage = () => {

  const navigate = useNavigate();

  return <PageLayout>
    <AsyncLifecycleDependantContent promiseGenerator={() => getProjectsList()}>
      {projects =>
        <>
          <Text variant={TextVariants["Body/Large/Bold"]}>Homepage</Text>
          <Carousel w="100%" h="100%" bgColor={AppColors["brand-digital-blue"]} autoplay={/*TODO*/ false}>
            {projects.map((project) =>
              <ProjectBlockRenderer project={project} h="100%" w="100%" key={"carousel" + project.id} onClick={() => navigate(`/project/${project.id}`)} cursor="pointer" />
            )}
          </Carousel>
        </>
      }
    </AsyncLifecycleDependantContent>
  </PageLayout>
};
