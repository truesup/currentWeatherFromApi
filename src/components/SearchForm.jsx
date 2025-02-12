import { FaMagnifyingGlass } from 'react-icons/fa6';
import styles from './SearchForm.module.css';
import { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSubmit(city);
    setCity('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Type city name here"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button className={styles.searchButton} type="submit">
        <FaMagnifyingGlass className={styles.searchIcon} />
      </button>
    </form>
  );
}

export default SearchForm;
