import React from "react";
import catClothesHangerImg from "assets/cat_clothes_hanger/cat_clothes_hanger.jpeg";
import catClothesHangerImg2 from "assets/cat_clothes_hanger/cat_clothes_hanger_2.jpeg";
import catClothesHangerVid from "assets/cat_clothes_hanger/cat_clothes_hanger.mp4";
import { PageLayout } from "component/layout/PageLayout";


export const CatClothesHangerPage = () => {
    return <PageLayout gap="1rem">
        <img src={catClothesHangerImg} style={{width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain"}} alt="project detail - first"/>
        <img src={catClothesHangerImg2} style={{width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain"}} alt="project detail - second"/>
        <video src={catClothesHangerVid} style={{width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain"}} controls/>
    </PageLayout>
}