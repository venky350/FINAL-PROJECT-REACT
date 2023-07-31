import React from "react";
import styles from "./AccountList.module.css";

const AList = (props) => {
  const data = Object.keys(props.adata);

  return (
    <div className={styles.alistcontainer}>
      <h2>List of Accounts</h2>
      <label>Accounts</label>
      <br />
      <select id={styles.accounts} onChange={(e) => props.data(e.target.value)}>
        <option value="select account">Select Account</option>
        {data.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AList;