import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts';
import PanelHeader from '../PanelHeader';
import styles from './index.scss';

const StatisticsBlock = (props) => {
  const { type, result, } = props;
  return (
    <div>
      <div className={styles.statistics_type}>
        {type}
      </div>
      <div className={styles.statistics_content}>
        <span className={styles.statistics_result}>
          {result}
        </span>
        <span className={styles.statistics_unit}>
          /TOMTO
        </span>
      </div>
    </div>
  );
};

StatisticsBlock.propTypes = {
  type: PropTypes.string,
  result: PropTypes.number,
};

StatisticsBlock.defaultProps = {
  type: '',
  result: 0,
};

const data = [
  { name: '7/1', TOMATO: 8, },
  { name: '7/2', TOMATO: 11, },
  { name: '7/3', TOMATO: 6, },
  { name: '7/4', TOMATO: 12, },
  { name: '7/5', TOMATO: 23, },
  { name: '7/6', TOMATO: 2, },
  { name: '7/7', TOMATO: 24, }
];

const Chart = (props) => {
  const { } = props;

  const getSize = (type) => {
    switch (type) {
      case 'width': {
        const newWidth = (window.innerWidth / 3) - 30;
        return newWidth < 304 ? 450 : newWidth;
      }
      case 'height': {
        const newHeight = window.innerHeight / 3;
        return newHeight < 304 ? 250 : window.innerHeight / 3;
      }
      default:
        throw new Error(`Can not get size with type : ${type}`);
    }
  };

  const [chartWidth, setChartWidth] = useState(getSize('width'));
  const [chartHeight, setChartHeight] = useState(getSize('height'));

  useEffect(() => {
    window.onresize = () => {
      setChartWidth(getSize('width'));
      setChartHeight(getSize('height'));
    };
  }, []);

  return (
    <div className={styles.chart_block}>
      <PanelHeader title="FOCUS TIME" />
      <div className={styles.statistics_data}>
        <StatisticsBlock type="TODAY" result={20} />
        <StatisticsBlock type="WEEK" result={108} />
      </div>
      <div className={styles.row_height}>
        <PanelHeader title="CHART" />
      </div>
      <div className={styles.statistics_chart}>
        <BarChart
          width={chartWidth}
          height={chartHeight}
          data={data}
          margin={{
            top: 30, right: 30, left: -10, bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF" />
          <Tooltip />
          <Bar dataKey="TOMATO" fill="#FF4384" barSize={30}>
            {
              data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === data.length - 1 ? '#FF4384' : '#FFFFFF'} key={`cell-${index}`} />
              ))
            }
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;
