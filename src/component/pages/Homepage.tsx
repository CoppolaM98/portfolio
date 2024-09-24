import { Text } from "@chakra-ui/react";
import { PageLayout } from "component/layout/PageLayout";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return <PageLayout>
    <Link to="/nuvola"><Text variant="menu_entry">nuvola</Text></Link>
    <Link to="/catclotheshanger"><Text variant="menu_entry">cat clothes hanger</Text></Link>
    </PageLayout>;
};
