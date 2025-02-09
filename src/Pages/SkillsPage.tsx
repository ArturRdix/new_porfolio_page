import { useState } from "react";
import styles from "./SkillsPage.module.scss";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMobx } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaReact, FaJs } from "react-icons/fa6";
import { SiSass } from "react-icons/si";

const SkillsPage = () => {
  const [activeHtml, setActiveHtml] = useState(true);
  const [activeCss, setActiveCss] = useState(false);
  const [activeJs, setActiveJs] = useState(false);
  const [activeSass, setActiveSass] = useState(false);
  const [activeReact, setActiveReact] = useState(false);
  const [activeTs, setActiveTs] = useState(false);
  const [activeMobx, setActiveMobx] = useState(false);
  const [activeNext, setActiveNext] = useState(false);

  return (
    <div className={styles.skillsBlock}>
      <div className={styles.skillsInfo}>
        <p onClick={()=>{setActiveHtml(!activeHtml)}} className={`${activeHtml?styles.activehtml:''}`}>
          <span>[HTML] </span>
          Мій досвід роботи з HTML включає створення структурованих, семантично правильних
          і адаптивних веб-сторінок. Використовую останні стандарти HTML5 для забезпечення
          доступності та покращення SEO. Включаю всі необхідні елементи, такі як теги
          структуризації, форми, медіа, а також посилання та списки, щоб сторінки були
          інтуїтивно зрозумілими та ефективними.
        </p>
        <br />
        <p onClick={()=>{setActiveCss(!activeCss)}} className={`${activeCss?styles.activecss:''}`}>
          <span>[CSS] </span>Я маю досвід у створенні стильних, гнучких та адаптивних
          інтерфейсів за допомогою CSS. Використовую як базові властивості стилізації, так
          і сучасні техніки, такі як Flexbox та CSS Grid для побудови складних макетів.
          Впроваджую анімації, трансформації, та стилі, які покращують взаємодію з
          користувачем, забезпечуючи ефективний і красивий дизайн.
        </p>
        <br />
        <p onClick={()=>{setActiveJs(!activeJs)}} className={`${activeJs?styles.activejs:''}`}>
          <span>[JavaScript] </span>Я володію глибокими знаннями JavaScript, що дозволяють
          створювати інтерактивні та динамічні веб-додатки. Використовую ES6+ для
          організації коду, асинхронних операцій, роботи з масивами та об'єктами. Маю
          досвід у роботі з DOM, подіями, а також із популярними бібліотеками та
          фреймворками, що дозволяють збудувати продуктивні та зручні інтерфейси.
          JavaScript для мене — це інструмент для реалізації складних функціональних
          можливостей на стороні клієнта.
        </p>
        <br />
        <p onClick={()=>{setActiveSass(!activeSass)}} className={`${activeSass?styles.activesass:''}`}>
          <span>[SASS/SCSS] </span>З використанням SASS я створюю гнучкі та масштабовані
          стилі для веб-проектів. Це дозволяє ефективно організовувати код за допомогою
          змінних, міксінів, функцій та вкладених правил. Завдяки можливості модульного
          підходу, я забезпечую чистоту та підтримуваність стилів, що значно полегшує
          роботу над великими проектами та дозволяє знижувати повторення коду.
        </p>
        <br />
        <p onClick={()=>{setActiveReact(!activeReact)}} className={`${activeReact?styles.activereact:''}`}>
          <span>[React.js] </span>Я маю досвід у розробці динамічних та інтерактивних
          веб-додатків за допомогою React.js. Використовую компоненти, хуки та стан для
          ефективного управління даними та оновлення інтерфейсу. Застосовую принципи
          однонаправленого потоку даних, що забезпечує прозорість і передбачуваність
          роботи додатка. React дозволяє мені створювати швидкі, масштабовані та реактуючі
          інтерфейси, що покращують взаємодію з користувачем.
        </p>
        <br />
        <p onClick={()=>{setActiveTs(!activeTs)}} className={`${activeTs?styles.activets:''}`}>
          <span>[TypeScript] </span>Я використовую TypeScript для розробки надійних та масштабованих веб-додатків. Завдяки строгій типізації та можливості визначати типи змінних, функцій і об'єктів, я знижую ймовірність помилок і підвищую якість коду. TypeScript дозволяє створювати чисті, зрозумілі та підтримувані рішення, особливо для великих проектів, де важлива чітка структура та передбачуваність.
        </p>
        <br />
        <p onClick={()=>{setActiveMobx(!activeMobx)}} className={`${activeMobx?styles.activemobx:''}`}>
          <span>[MobX] </span>Я використовую MobX для ефективного управління станом у моїх React-додатках. Завдяки принципу реактивності, MobX дозволяє без зайвих зусиль синхронізувати зміни стану з інтерфейсом, що значно полегшує розробку складних додатків. Використовую спостерігачів, екшени та магазини для організації логіки та обробки даних, що дозволяє зберігати код чистим, зрозумілим і ефективним навіть у великих проектах.
        </p>
        <br />
        <p onClick={()=>{setActiveNext(!activeNext)}} className={`${activeNext?styles.activenext:''}`}>
          <span>[Next.js] </span>На мою думку, Next.js — це один з найпотужніших фреймворків для React. Він надає все необхідне для створення високопродуктивних веб-додатків, включаючи серверний рендеринг (SSR), статичну генерацію (SSG) та автоматичну оптимізацію. Завдяки своїй гнучкості та ефективності, Next.js дозволяє легко налаштовувати рендеринг сторінок, що значно покращує SEO та швидкість завантаження. Це ідеальний вибір для масштабованих, швидких і надійних проектів.
        </p>
        <br />
      </div>
      <div className={styles.skillsToogle}>
        <label className={`${styles.skillItem} ${activeHtml ? styles.active : ""}`}>
          <input
            onChange={() => setActiveHtml(!activeHtml)}
            type="checkbox"
            checked={activeHtml}
          />
          <FaHtml5 className={`${styles.html} ${activeHtml ? styles.activehtml : ""}`} />{" "}
          HTML
        </label>
        <label className={`${styles.skillItem} ${activeReact ? styles.active : ""}`}>
          <input
            onChange={() => setActiveReact(!activeReact)}
            type="checkbox"
            checked={activeReact}
          />
          <FaReact
            className={`${styles.react} ${activeReact ? styles.activereact : ""}`}
          />{" "}
          React JS
        </label>
        <label className={`${styles.skillItem} ${activeCss ? styles.active : ""}`}>
          <input
            onChange={() => setActiveCss(!activeCss)}
            type="checkbox"
            checked={activeCss}
          />
          <FaCss3Alt className={`${styles.css} ${activeCss ? styles.activecss : ""}`} />{" "}
          CSS
        </label>
        <label className={`${styles.skillItem} ${activeTs ? styles.active : ""}`}>
          <input
            onChange={() => setActiveTs(!activeTs)}
            type="checkbox"
            checked={activeTs}
          />
          <SiTypescript className={`${styles.ts} ${activeTs ? styles.activets : ""}`} />{" "}
          TypeScript
        </label>
        <label className={`${styles.skillItem} ${activeJs ? styles.active : ""}`}>
          <input
            onChange={() => setActiveJs(!activeJs)}
            type="checkbox"
            checked={activeJs}
          />
          <FaJs className={`${styles.js} ${activeJs ? styles.activejs : ""}`} />{" "}
          JavaScript
        </label>
        <label className={`${styles.skillItem} ${activeMobx ? styles.active : ""}`}>
          <input
            onChange={() => setActiveMobx(!activeMobx)}
            type="checkbox"
            checked={activeMobx}
          />
          <SiMobx className={`${styles.mobx} ${activeMobx ? styles.activemobx : ""}`} />{" "}
          MobX
        </label>
        <label className={`${styles.skillItem} ${activeSass ? styles.active : ""}`}>
          <input
            onChange={() => setActiveSass(!activeSass)}
            type="checkbox"
            checked={activeSass}
          />
          <SiSass className={`${styles.sass} ${activeSass ? styles.activesass : ""}`} />{" "}
          SASS/SCSS
        </label>
        <label className={`${styles.skillItem} ${activeNext ? styles.active : ""}`}>
          <input
            onChange={() => setActiveNext(!activeNext)}
            type="checkbox"
            checked={activeNext}
          />
          <RiNextjsFill
            className={`${styles.next} ${activeNext ? styles.activenext : ""}`}
          />{" "}
          Next.js
        </label>
      </div>
    </div>
  );
};

export default SkillsPage;
