import {BrowserRouter, Link, Route } from 'react-router-dom';

const PageOne = ()=>{

  return <div> PageOne</div>
}

const PageTwo = ()=>{

  return <div> PageTwo
    <Link to="/"> PageOne</Link>
  </div>
}

const PageThree = ()=>{

  return <div> PageThree
     <Link to="/pagetwo"> PageTwo</Link>
  </div>
}

const PageFour = ()=>{

  return <div> PageFour
    <Link to="/pagetwo"> PageTwo</Link>
    <Link to="/"> MainHome</Link>
    <Link to="/pagetwo"> PageTwo</Link>
  </div>
}


export function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Route path="/"  exact component={PageOne}/>
        <Route path="/pagetwo"  exact component={PageTwo}/>
        <Route path="/pagethree"  exact component={PageThree}/>
        <Route path="/pagefour"  exact component={PageFour}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
