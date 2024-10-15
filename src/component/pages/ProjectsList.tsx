import { SimpleGrid, Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { TextVariants } from "styles/chakra/Text";
import { ProjectBlockRenderer } from "utils/projectRenderers/ProjectBlockRenderer";

import { getProjectsList } from "api/projects/projects";
import { AsyncLifecycleDependantContent } from "utils/layout/AsyncLifecycleContent";

export const ProjectsList = () => {

  return <PageLayout>
    <AsyncLifecycleDependantContent promiseGenerator={() => getProjectsList()}>
      {projects =>
        <>
          <Text variant={TextVariants.page_title}>Lista progetti</Text>
          <SimpleGrid w="100%" columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4
          }} gap={6}>
            {projects.map(project => <ProjectBlockRenderer project={project} />)}
          </SimpleGrid>
        </>
      }
      </AsyncLifecycleDependantContent>
  </PageLayout>
};
