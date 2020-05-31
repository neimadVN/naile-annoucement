'use strict';

const e = React.createElement;
const useState = React.useState;

const FORM_MAX_WDITH = 280;

{
  function Cell(props) {
    const {image, title, detail, type} = props;
    return (
      <div className="cell-container" style={{backgoundImage: `url(${image})`}}>
        <div>{title}</div>
        <div>{detail}</div>
        <div>{type}</div>
      </div>
    );
  };

  function App() {
    // Declare a new state variable, which we'll call "count"
  const [image, setImage] = useState(0);
  const [title, setTitle] = useState('Set you title');
  const [detail, setDetail] = useState('Set your detail');
  const [type, setType] = useState('choose type');
  
    return (
      <div className="announcement-create">
        <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()} style={{maxWidth: FORM_MAX_WDITH}}>
          <input name="title" value={title}/>
          <textarea name="detail" rows={2} value={detail}/>
          <select name="type" value={type}>
            <option value='PROMO'>Promotion</option>
            <option value='ANNOUNCEMENT'>Announcement</option>
            <option value='FEATURE'>New feature</option>
          </select>
        </form>
        </div>
        <div className="preview-container">
          <img src="phone-sample.png" alt="Ios preview" width="375px"/>
          <div className="sample-cell">
            <Cell
              image={image}
              title={title}
              detail={detail}
              type={type}  
            />
          </div>
        </div>
      </div>
    );
  }
  
  const domContainer = document.querySelector('#root');
  ReactDOM.render(e(App), domContainer);
}