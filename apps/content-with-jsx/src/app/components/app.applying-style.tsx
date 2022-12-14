import './app.content-jsx.module.scss';

const ApplyingStyle = ()=>{
    const ankerstyle = {textDecoration: 'none', padding: '5px'};
    const browsers = ["firebox", "Chrome", "Internet Explorer", "Microsoft Edge", "Opera", "Opera Mobile"];
    
    return (
        <div className='style-apply'>

            <h2>Style application on elements</h2>
            <a href="http://google.com" style={ankerstyle} target="blank"> Google</a>
            
            <ul>

           {browsers.map((browser:string, index:number)=> (<li key={index} style={{listStyle:'none'}}>{browser}</li>))}
            </ul>
                
            
        </div>
    );
}
export default ApplyingStyle;