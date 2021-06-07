import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: <h2 className="title">Upload stats</h2>,
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.string.isRequired,
};

export default Statistics;