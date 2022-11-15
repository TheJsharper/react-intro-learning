import ApplyingStyle from "./components/app.applying-style";
import AttributeJsx from "./components/app.attibute-jsx";
import ContentJsx from "./components/app.content-jsx";


export function App() {

  return (
    <div className="container">

      <ContentJsx />
      <AttributeJsx/>
      <ApplyingStyle />
    </div>
  );
}

export default App;
