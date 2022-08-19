import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className={css.label}>{label} </span>
            <span className={css.percentage}>{percentage}% </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

Statistics.prototype = {
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
