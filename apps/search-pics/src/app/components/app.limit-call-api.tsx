const LimitCallApi = (props: { ratelimitLimit: number, ratelimitRemaining: number }) => {
    return (
        <div className="ui page active dimmer">
            <div className="content">
                <div>
                    <svg width="32" height="32" style={{ verticalAlign: 'middle' }} viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en-US">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
                </div>
                <div className="ui red message"> 
                 Unsplash call Api  {props.ratelimitLimit} === {props.ratelimitRemaining}
                
                </div>
            </div>
        </div>
    )
}
export default LimitCallApi;