import { PageLayout } from "component/layout/PageLayout";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return <PageLayout>
    <Link to="/nuvola">nuvola</Link>
    <Link to="/catclotheshanger">cat clothes hanger</Link>
    </PageLayout>;
};
