import { CoursePage } from "#src/features/course";
import { StandaloneMenuViewer } from "#src/pages";
import { TopMenuHighDefinition } from "./features/ali";

function App() {
  // // Check if we're in standalone mode
  // const urlParams = new URLSearchParams(window.location.search);
  // const isStandalone = urlParams.get("standalone") === "true";

  // if (isStandalone) {
  //   return <StandaloneMenuViewer />;
  // }

  // return <CoursePage />;
  return <TopMenuHighDefinition />
}

export default App;
