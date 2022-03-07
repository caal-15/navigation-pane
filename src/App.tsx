import PaneSwitcherExample from "./PaneSwitcherExample";

function App() {
  return (
    <>
      <h1>Hello!</h1>
      <p>
        This repo contains a small example of a <strong>pane switcher</strong>, it only shows the selected Pane,
        and children can decide which pane should be set as selected, this is useful for complex navigation scenarios
        or for complex wizard flows. the following is an example:
      </p>
      <PaneSwitcherExample />
    </>
  );
}

export default App;
