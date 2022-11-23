import Accordion from "./components/app.accordion";

const items = [
  {
    title: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] ',
    content: 'However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality'
  },
  {
    title: 'React adheres to the declarative programming paradigm',
    content: 'React code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming convention (capitalize camelCase). Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass the values between components through "props'
  },
  {
    title: 'Where class components are all about the use of classes and the lifecycle methods, ',
    content: 'Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser\'s displayed DOM efficiently.[20] This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[21] It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.'
  },
];

export function App() {
  return (
    <div>
      <Accordion  {...{ items }} />
    </div>
  );
}

export default App;
