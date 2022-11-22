const Requirement= ()=>{
    return (<div className="ui page active dimmer">
    <div className="content">
      <h1>Webb Requirement for using</h1>
      <div className="ui list">
        <div className="item"> Unsplash Api consuming</div>
        <div className="item"> Create account 
          <a href='https://unsplash.com/documentation#creating-a-developer-account' target="blank"> creating-a-developer-account</a>
        </div>
        <div className="item">NodeJs environment set fileName .env in the root path
        <a href='https://nx.dev/recipes/environment-variables/define-environment-variables' target="blank"> nx monoRepo docs </a>
        </div>
        <div className="item">NodeJs environment set fileName .env in the root path
        variable name must be : 
        </div>
        <div className="item">
        NX_UNSPLASH_API_BASE_URL = https://api.unsplash.com/

        </div>
        <div className="item">          
NX_UNSPLASH_ACCESS_KEY = WSuABCD1234
        </div>
      </div>
    </div>
  </div>);
}
export default Requirement;