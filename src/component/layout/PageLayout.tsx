import { Flex } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";

export const PageLayout = ({children, style}: {children: ReactNode, style?: CSSProperties}) => {
 return <div style={{minHeight: "calc(100vh - 4rem)", padding: "4rem 6rem", backgroundColor: "purple"}}>
    <Flex minHeight="calc(100% - 2rem)" padding="2rem 3rem" backgroundColor="white" direction="column" style={style}>
        {children}
    </Flex>
 </div>
}