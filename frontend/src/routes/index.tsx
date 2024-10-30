import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Link to="/studylog">StudyLog</Link>
      <Link to="/create"> Create</Link>
    </>
  );
}
