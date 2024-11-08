import { SimpleGrid, Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { TextVariants } from "styles/types/text.types"
import { ProjectBlockRenderer } from "utils/projectRenderers/ProjectBlockRenderer";

import { getProjectsList } from "api/projects/projects";
import { AsyncLifecycleDependantContent } from "utils/layout/AsyncLifecycleContent";
import { AppSpacings } from "styles/types/primitives.types";

export const ProjectsList = () => {

  return <PageLayout>
    <AsyncLifecycleDependantContent promiseGenerator={() => getProjectsList()}>
      {projects =>
        <>
          <Text variant={TextVariants["Body/Large/Bold"]}>Lista progetti</Text>
          <SimpleGrid w="100%" columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4
          }} gap={AppSpacings[4]}>
            {projects.map(project => <ProjectBlockRenderer project={project} />)}
          </SimpleGrid>
        </>
      }
      </AsyncLifecycleDependantContent>
  </PageLayout>
};
