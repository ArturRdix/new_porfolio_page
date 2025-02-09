import DecryptedText from "../components/DecryptedText/DecryptedText";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textInfo}>
        <span className={styles.hello}>Всім првіт.</span>
        <h1>
            <DecryptedText sequential={true} text="Мене звати Артур"/>
            </h1>
            
        <h2>&#62; <DecryptedText sequential={true} text="Front-end developer;"/></h2>
       
        <h3><DecryptedText sequential={true} text="{Мої контакти}"/></h3>
        <br/>
        <div className={styles.variablesBlock}>
          <p className={styles.comment}>// Мій телеграм</p>
          <a target="blank" href="https://t.me/TheRdix" className={styles.variable}>
            <span className={styles.const}>const</span>{" "}
            <span className={styles.name}>telegram</span> <span className={styles.equal}>=</span>{" "}
            <span className={styles.value}>"https://t.me/TheRdix"</span>;
          </a>
        </div>
        <br />
        <div className={styles.variablesBlock}>
          <p className={styles.comment}>// Мій інстагарм</p>
          <a target="blank" href="https://www.instagram.com/66baby_devil66/" className={styles.variable}>
            <span className={styles.const}>const</span>{" "}
            <span className={styles.name}>instagram</span> <span className={styles.equal}>=</span>{" "}
            <span className={styles.value}>"https://www.instagram.com/66baby_devil66/"</span>;
          </a>
        </div>
        <br />
        <div className={styles.variablesBlock}>
          <p className={styles.comment}>// Мій GitHub</p>
          <a target="blank" href="https://github.com/ArturRdix" className={styles.variable}>
            <span className={styles.const}>const</span>{" "}
            <span className={styles.name}>gitHub</span> <span className={styles.equal}>=</span>{" "}
            <span className={styles.value}>"https://github.com/ArturRdix"</span>;
          </a>
        </div>
        <br />
        <div className={styles.variablesBlock}>
          <p className={styles.comment}>// Мій Gmail</p>
          <a target="blank" href="mailto:mainrdix@gmail.com" className={styles.variable}>
            <span className={styles.const}>const</span>{" "}
            <span className={styles.name}>mail</span> <span className={styles.equal}>=</span>{" "}
            <span className={styles.value}>"mainrdix@gmail.com"</span>;
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
