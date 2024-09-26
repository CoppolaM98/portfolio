import React from "react";
import nuvolaImg from "assets/nuvola/nuvola.jpeg";
import nuvolaImg2 from "assets/nuvola/nuvola_2.jpeg";
import nuvolaVid from "assets/nuvola/nuvola.mp4";
import { PageLayout } from "component/layout/PageLayout";
import { Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TextVariants } from "styles/chakra/Text";


export const NuvolaPage = () => {
    return <PageLayout>
        <Text variant={TextVariants.page_title}>
            LAMPADA "NUVOLA"
        </Text>
        <Text variant={TextVariants.content}>
            Uno dei primi progetti realizzati con la <Link to="/CNC">CNC</Link>. Utilizza una striscia LED RGB, potenzialmente del tipo 
            indirizzabile. 
            Utilizzando il cavo USB integrato, può essere alimentato con un caricabatterie, o con un 
            <Link to="/powerbank">power bank</Link>.
        </Text><Text variant={TextVariants.section_title}>
            Idea
        </Text>
        <Text variant={TextVariants.content}>
            Non è difficile trovare in giro altri progetti simili. 
            Essendo uno dei primi progetti realizzati con la CNC, l'obiettivo è di modellare qualcosa di adeguato al fine-tuning 
            della macchina, e adeguato alle attuali competenze.

            Si è scelto quindi un semplice profilo 2D estruso, senza particolari incisioni.
        </Text>
        <Img src={nuvolaImg} width="100%" maxHeight="calc(100vh - 4rem)" objectFit="contain" alt="project detail - first" />
        <Img src={nuvolaImg2} width="100%" maxHeight="calc(100vh - 4rem)" objectFit="contain" alt="project detail - second" />
        <video src={nuvolaVid} style={{ width: "100%", maxHeight: "calc(100vh - 4rem)", objectFit: "contain" }} controls />
    </PageLayout>
}