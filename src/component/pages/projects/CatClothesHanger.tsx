import { Img } from "@chakra-ui/react";
import catClothesHangerImg from "assets/cat_clothes_hanger/cat_clothes_hanger.jpeg";
import catClothesHangerVid from "assets/cat_clothes_hanger/cat_clothes_hanger.mp4";
import catClothesHangerImg2 from "assets/cat_clothes_hanger/cat_clothes_hanger_2.jpeg";
import { PageLayout } from "component/layout/PageLayout";


export const CatClothesHangerPage = () => {
    return <PageLayout>
        <Img src={catClothesHangerImg} width="100%" maxHeight="calc(100vh - 4rem)" objectFit="contain" alt="project detail - first" />
        <Img src={catClothesHangerImg2} width="100%" maxHeight="calc(100vh - 4rem)" objectFit="contain" alt="project detail - first" />
        <video src={catClothesHangerVid} style={{ width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain" }} controls />
    </PageLayout>
}