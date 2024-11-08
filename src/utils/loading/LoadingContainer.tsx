import { Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { loadingManager, LoadingChangeHandler, LoadingRequestersMap } from "./LoadingManager";
import { AppColors } from "styles/types/primitives.types";

export interface LoadingContainerState {
  requesters: LoadingRequestersMap;
  displayNames: string[];
  visible: boolean
}

export const LoadingContainer: React.FunctionComponent = () => {
  const [state, setState] = React.useState<LoadingContainerState>({
    requesters: new Map(),
    displayNames: [],
    visible: false
  });

  useEffect(() => {
    loadingManager.addChangeListener(handleStoreChange);
    return () => {
      loadingManager.removeChangeListener(handleStoreChange);
    };
  }, []);

  const handleStoreChange: LoadingChangeHandler = (requesters) => {
    setState({
      requesters,
      displayNames: Array.from(requesters.values()).reduce<string[]>((acc, requesterData) => {
        if (requesterData.displayName) return [...acc, requesterData.displayName]
        return acc
      }, []),
      visible: requesters.size > 0
    });
  }


  if (state.visible)
    return (
      <Flex
        width="100vw"
        height="100vh"
        position="absolute"
        top="0"
        left="0"
        opacity="0.8"
        zIndex="2"
        backgroundColor={AppColors["brand-digital-blue"]}
      >
        <Spinner />
      </Flex>
    );
  return null;
};

export default LoadingContainer;
