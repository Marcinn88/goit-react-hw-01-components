// import React from "react";
import css from "./Statistics.css";
import PropTypes from "prop-types";

const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Statistics = ({ title = 'Upload stats', stats }) => {
    randomHexColor()
    return (
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li
              className="item"
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
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