
import { Button, Flex, FlexProps, Image } from "@chakra-ui/react";
import ChevronIcon from "assets/icons/chevron.svg";
import { ReactNode, useEffect, useState } from "react";
import { useDebounce } from "utils/hooks/useDebounce";

const buttonContainerStyles: FlexProps = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
}

export const Carousel = ({ children, autoplay, ...flexProps }: FlexProps & { children: ReactNode[], autoplay?: boolean }) => {
    const [visibleIndex, setVisibleIndex] = useState<number>(0);

    const [, setAnimationInterval] = useState<NodeJS.Timeout>();
    const [debouncedPlay, handlePlayRequest] = useDebounce<boolean>(autoplay ?? true, 500);

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
        <Flex {...buttonContainerStyles} left="2"><Button onClick={() => {
            handlePlayRequest(false);
            setVisibleIndex(i => {
                if (i === 0) i = children.length;
                return i - 1
            })
        }}
            w="3rem" h="3rem" p="0.5rem 0.5rem" >
            <Image src={ChevronIcon} transform="rotateZ(-90deg)" />
        </Button></Flex>
        <Flex  {...buttonContainerStyles} right="2">
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
}