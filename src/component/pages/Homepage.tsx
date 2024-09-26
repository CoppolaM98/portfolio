import { Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { useNavigate } from "react-router-dom";

import catClothesHangerImg from "assets/cat_clothes_hanger/cat_clothes_hanger.jpeg";
import nuvolaImg from "assets/nuvola/nuvola.jpeg";
import { TextVariants } from "styles/chakra/Text";

interface HomepageBlockProps { imageSrc: string, title: string, to: string };

export const HomepageBlock = ({ imageSrc, title, to }: HomepageBlockProps) => {
  const navigate = useNavigate();

  return <Button p="1rem 1rem" h="100%" onClick={() => navigate(to)}>
    <Flex direction="column" h="100%">
    <Text variant={TextVariants.content}>{title}</Text>
    <Img src={imageSrc} w="100%" objectFit="contain" flex="1" />
      </Flex>
  </Button>
}

const HomepageBlocks: HomepageBlockProps[] = [
  {
    title: "Nuvola",
    to: "/nuvola",
    imageSrc: nuvolaImg
  },
  {
    title: "Appendiabiti gatto",
    to: "/catclotheshanger",
    imageSrc: catClothesHangerImg
  }
]

export const Homepage = () => {
  return <PageLayout>
    <Text variant={TextVariants.page_title}>Lista progetti</Text>
    <SimpleGrid w="100%" columns={{
      base: 1,
      md: 2,
      lg: 3,
      xl: 5
    }} gap={6}>
      {HomepageBlocks.map(block => <HomepageBlock {...block} />)}
    </SimpleGrid>
  </PageLayout>
};
