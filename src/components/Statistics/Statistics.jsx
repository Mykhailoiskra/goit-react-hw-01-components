import PropTypes from "prop-types";
import s from "./statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((item) => (
          <li
            className={s.item}
            key={item.id}
            style={{
              backgroundColor: randomRgbColor(),
            }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function randomRgbColor() {
  return `rgb(${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(
    Math.random() * (255 - 0) + 0
  )}, ${Math.floor(Math.random() * (255 - 0) + 0)})`;
}
