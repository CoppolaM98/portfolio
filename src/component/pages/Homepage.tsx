import { Button, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { ReactNode, useEffect, useState } from "react";
import { TextVariants } from "styles/types/text.types"
import { ProjectBlockRenderer } from "utils/projectRenderers/ProjectBlockRenderer";

import { getProjectsList } from "api/projects/projects";
import { useDebounce } from "utils/hooks/useDebounce";

import ChevronIcon from "assets/icons/chevron.svg";
import { AsyncLifecycleDependantContent } from "utils/layout/AsyncLifecycleContent";
import { AppColors } from "styles/types/primitives.types";

const Carousel = ({ children, ...flexProps }: FlexProps & { children: ReactNode[] }) => {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  const [, setAnimationInterval] = useState<NodeJS.Timeout>();
  const [debouncedPlay, handlePlayRequest] = useDebounce<boolean>(true, 500);

  const startAnimation = () => {
    setAnimationInterval(interval => {
      clearInterval(interval);
      return setInterval(() => {
        setVisibleIndex(i => {
          i++;
          if (i === children.length) i = 0;
          return i
        })
      }, 5000)
    })
  }

  const stopAnimation = () => setAnimationInterval(interval => {
    clearInterval(interval)
    return undefined
  });

  useEffect(() => {
    if (debouncedPlay) startAnimation()
    else stopAnimation()
  }, [debouncedPlay])


  return <Flex position="relative" overflow="hidden" {...flexProps} onMouseOver={() => handlePlayRequest(false)} onMouseOut={() => handlePlayRequest(true)}>
    {children.map((child, index) => <Flex key={"carouselContent" + index} h="100%" w="100%" position="absolute" left={index * 100 + "%"} transform={`translateX(${-visibleIndex * 100}%)`}>
      {child}
    </Flex>)}
    <Flex h="100%" w="100%" position="absolute" align="center" px="2rem">
      <Flex w="100%" justifyContent="space-between">
        <Button onClick={() => {
          handlePlayRequest(false);
          setVisibleIndex(i => {
            if (i === 0) i = children.length;
            return i - 1
          })
        }}
          w="3rem" h="3rem" p="0.5rem 0.5rem" >
          <Image src={ChevronIcon} transform="rotateZ(-90deg)" />
        </Button>
        <Button onClick={() => {
          handlePlayRequest(false);
          setVisibleIndex(i => {
            i++;
            if (i === children.length) i = 0;
            return i
          })
        }}
          w="3rem" h="3rem" p="0.5rem 0.5rem" >
          <Image src={ChevronIcon} transform="rotateZ(90deg)" />
        </Button>
      </Flex>
    </Flex>
  </Flex>
}

export const Homepage = () => {

  return <PageLayout>
    <AsyncLifecycleDependantContent promiseGenerator={() => getProjectsList()}>
      {projects =>
        <>
          <Text variant={TextVariants["Body/Large/Bold"]}>Homepage</Text>
          <Carousel w="100%" h="100%" bgColor={AppColors["brand-digital-blue"]}>
            {projects.map((project) =>
              <ProjectBlockRenderer project={project} key={"carousel" + project.id} h="100%" w="100%" />
            )}
          </Carousel>
        </>
      }
    </AsyncLifecycleDependantContent>
  </PageLayout>
};
