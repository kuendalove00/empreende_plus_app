import Image from "next/image";
import style from "./PopUp.module.css"
const PopUp = ({ correct = false, answer = '', show = false }) => {
  return (
    <div className={style.notification} style={{ display: show ? 'flex' : 'none' }}>

    <div className={style.popup} >
      
      <Image
        src={correct ? "/icons/Checkmark.png" : "/icons/X.png"}
        alt=''
        width={108}
        height={108} 
        />
      {correct ? (
        <p>Correct!</p>
      ) : (
        <p>Wrong! The correct answer is {answer}</p>
      )}
    </div>
  </div>
  );
};

export default PopUp;