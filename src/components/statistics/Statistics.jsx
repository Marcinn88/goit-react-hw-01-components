// import React from "react";
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title!==undefined&&<h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={css.item}
              key={id}
              style={{
                backgroundColor: randomHexColor()
              }}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>

            </li>
            
          ))}
        </ul>
      </section>
    );
  }

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };