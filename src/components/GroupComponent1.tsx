import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  vuesaxlinearmessages?: string;
  answerQuestions?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  vuesaxlinearmessages,
  answerQuestions,
}) => {
  return (
    <div className={styles.vuesaxlinearmessagesParent}>
      <img
        className={styles.vuesaxlinearmessagesIcon}
        loading="lazy"
        alt=""
        src={vuesaxlinearmessages}
      />
      <h2 className={styles.answerQuestions}>{answerQuestions}</h2>
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. `}</div>
    </div>
  );
};

export default GroupComponent1;
