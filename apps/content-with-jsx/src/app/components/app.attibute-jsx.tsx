import './app.content-jsx.module.scss';
export default  function AttributeJsx(){
   
     return (
        <div className='attr'>
            <h2>Attribute on Jsx</h2>
            <textarea autoFocus={true}   cols={30} rows={10}/>
            {/*<textarea autofocus={true}   cols="30" rows="10"/>*/} {/* That will NOT WORK HTML ATTRIBUTE name muss be written camelCase */}
        </div>

     );
}