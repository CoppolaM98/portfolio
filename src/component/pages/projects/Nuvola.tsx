import React from "react";
import nuvolaImg from "assets/nuvola/nuvola.jpeg";
import nuvolaImg2 from "assets/nuvola/nuvola_2.jpeg";
import nuvolaVid from "assets/nuvola/nuvola.mp4";
import { PageLayout } from "component/layout/PageLayout";


export const NuvolaPage = () => {
    return <PageLayout style={{gap: "1rem"}}>
        <img src={nuvolaImg} style={{width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain"}} alt="project detail - first"/>
        <img src={nuvolaImg2} style={{width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain"}} alt="project detail - second"/>
        <video src={nuvolaVid} style={{width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain"}} controls/>
    </PageLayout>
}