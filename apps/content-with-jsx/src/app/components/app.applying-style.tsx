const ApplyingStyle = ()=>{
    const ankerstyle = {textDecoration: 'none', padding: '5px'};
    const browsers = ["firebox", "Chrome", "Internet Explorer", "Microsoft Edge", "Opera", "Opera Mobile"];
    
    return (
        <div>

            <h1>Hellow World</h1>
            <a href="http://google.com" style={ankerstyle} target="blank"> Google</a>
            
            <ul>

           {browsers.map((browser)=> (<li style={{listStyle:'none'}}>{browser}</li>))}
            </ul>
                
            
        </div>
    );
}
export default ApplyingStyle;