import React from "react";
import nuvolaImg from "assets/nuvola/nuvola.jpeg";
import nuvolaImg2 from "assets/nuvola/nuvola_2.jpeg";
import nuvolaVid from "assets/nuvola/nuvola.mp4";
import { PageLayout } from "component/layout/PageLayout";
import { Img, Text } from "@chakra-ui/react";


export const NuvolaPage = () => {
    return <PageLayout gap="1rem">
        <Text variant="page_title">
            LAMPADA "NUVOLA"
        </Text>
        <Text variant="content">
            Questa è una sezione intrigante e descrittiva
        </Text><Text variant="section_title">
            Titolo sezione
        </Text>
        <Text variant="content">
            Qui descriviamo il processo ideativo
        </Text>
        <Img src={nuvolaImg} width="100%" maxHeight="calc(100vh - 4rem)" objectFit="contain" alt="project detail - first" />
        <Img src={nuvolaImg2} width="100%" maxHeight="calc(100vh - 4rem)" objectFit="contain" alt="project detail - second" />
        <video src={nuvolaVid} style={{ width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain" }} controls />
    </PageLayout>
}