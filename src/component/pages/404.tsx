import { Button, Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { useNavigate } from "react-router-dom";
import { FullPageContent } from "utils/layout/FullPageContent";


export const Screen404 = () => {

  const navigate = useNavigate();

  return <PageLayout>
    <FullPageContent>
      <Text>OOOOOOPS....</Text>
      <Text>The page you're trying to reach is not available</Text>
      <Button onClick={() => navigate("/")}>Go to the homepage</Button>
    </FullPageContent>
  </PageLayout>
};
