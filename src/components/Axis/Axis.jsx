import React from 'react';
import style from './Axis.module.css';

const Axis = () => {
  return (
    <div className={style.axis}>
      <h1>Allenaz srl</h1>
      <h2>Axis</h2>
      <div className={style.axis_item}>
        <table className={style.table}>
          <thead className={style.table_head}>
            <tr className={style.table_head_col}>
              <td className={style.table_head_col_item}>Axis</td>
              <td className={style.table_head_col_item}>Byte</td>
              <td className={style.table_head_col_item}>Position</td>
              <td className={style.table_head_col_item}>Status</td>
            </tr>
          </thead>
          <tbody className={style.table_body}>
            <tr className={style.table_body_col}>
              <td className={style.table_body_col_item}>Axis 1</td>
              <td className={style.table_body_col_item}>2 </td>
              <td className={style.table_body_col_item}>3 </td>
              <td className={style.table_body_col_item}>3 </td>
            </tr>
            <tr className={style.table_body_col}>
              <td className={style.table_body_col_item}>Axis 2</td>
              <td className={style.table_body_col_item}>2 </td>
              <td className={style.table_body_col_item}>3 </td>
              <td className={style.table_body_col_item}>3 </td>
            </tr>
            <tr className={style.table_body_col}>
              <td className={style.table_body_col_item}>Axis 3</td>
              <td className={style.table_body_col_item}>2 </td>
              <td className={style.table_body_col_item}>3 </td>
              <td className={style.table_body_col_item}>3 </td>
            </tr>
            <tr className={style.table_body_col}>
              <td className={style.table_body_col_item}>Axis 4</td>
              <td className={style.table_body_col_item}>2 </td>
              <td className={style.table_body_col_item}>3 </td>
              <td className={style.table_body_col_item}>3 </td>
            </tr>
            <tr className={style.table_body_col}>
              <td className={style.table_body_col_item}>Axis 5</td>
              <td className={style.table_body_col_item}>2 </td>
              <td className={style.table_body_col_item}>3 </td>
              <td className={style.table_body_col_item}>3 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Axis;
