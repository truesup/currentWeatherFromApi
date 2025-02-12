import styles from './Substrate.module.css';

function Substrate({ children }) {
  return (
    <div className={styles.substrate}>
      <p className={styles.description}>{children}</p>
    </div>
  );
}

export default Substrate;
