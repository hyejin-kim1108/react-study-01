import '../assets/css/App.css';
import { getRandomColor } from '../common/default.jsx';


export default function Color() {
  return (
    <div>
        <p>내용을 확인하셨으면 아래버튼을 눌러주세요.</p>
       <button 
            className='button1' 
            style={{ backgroundColor: getRandomColor() }}
        >
            확인
        </button>
    </div>
  );
}