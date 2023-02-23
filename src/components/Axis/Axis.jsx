import React from 'react';
import style from './Axis.module.css';

const Axis = () => {
  return (
    <div className={style.axis}>
      <h1>Allenaz srl</h1>
      <h2>Axis</h2>
      <div className={style.axis_item}>
        <ul className={style.axis_list}>
          <li className={style.axis_list_item}>
            <p>Axis 1</p>
          </li>
          <li className={style.axis_list_item}>
            <p>Axis 2</p>
          </li>
          <li className={style.axis_list_item}>
            <p>Axis 3</p>
          </li>
          <li className={style.axis_list_item}>
            <p>Axis 4</p>
          </li>
          <li className={style.axis_list_item}>
            <p>Axis 5</p>
          </li>
        </ul>
        <table className={style.table}>
          <tbody>
            <tr className={style.table_col}>
              <th className={style.table_col_item}>1</th>
              <th className={style.table_col_item}>2</th>
              <th className={style.table_col_item}>3</th>
            </tr>
            <tr className={style.table_col}>
              <th className={style.table_col_item}>1</th>
              <th className={style.table_col_item}>2</th>
              <th className={style.table_col_item}>3</th>
            </tr>
            <tr className={style.table_col}>
              <th className={style.table_col_item}>1</th>
              <th className={style.table_col_item}>2</th>
              <th className={style.table_col_item}>3</th>
            </tr>
            <tr className={style.table_col}>
              <th className={style.table_col_item}>1</th>
              <th className={style.table_col_item}>2</th>
              <th className={style.table_col_item}>3</th>
            </tr>
            <tr className={style.table_col}>
              <th className={style.table_col_item}>1</th>
              <th className={style.table_col_item}>2</th>
              <th className={style.table_col_item}>3</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Axis;
