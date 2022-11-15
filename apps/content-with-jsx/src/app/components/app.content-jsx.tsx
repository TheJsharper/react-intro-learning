import  './app.content-jsx.module.scss';
export default function ContentJsx(){
    const type = 'number';
    const minValue = 5;
    const maxValue = 10;
    const style = { color: 'blue', border: '2px solid blue' };
    return (
      <div className="content">
        <h2>Content on  Jsx</h2>
        <input type="number" min="7" max="15" />
        <br />
        <input type={type} min={minValue} max={maxValue} />
        <br />
        {/*<input type={type} min=3 max=18 />*/} {/* This CANNOT Work in jsx*/}
        <input type={'number'} min={10} max={20} style={{ color: 'red' }} />
        <br />
        <input type={type} min={minValue} max={maxValue} style={style} />
        <br />
        {/*<input type="number"  style={color:'yellow'} />*/}{' '}
        {/* This CANNOT Work in jsx*/}
      </div>
    );
}