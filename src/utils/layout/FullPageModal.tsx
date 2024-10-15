import { Flex, FlexProps } from "@chakra-ui/react"

export const FullPageModal = (props: FlexProps) => {
  return <Flex
    width="100vw"
    height="100vh"
    position="absolute"
    top="0"
    left="0"
    opacity="0.8"
    zIndex="2"
    backgroundColor="secondary"
    {...props}
  />
}