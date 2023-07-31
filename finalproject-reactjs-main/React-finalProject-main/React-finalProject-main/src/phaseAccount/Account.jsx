import React, { useEffect, useState } from "react";
import AccData from "./AccData";
import AccoundList from "./AccountList";
import styles from './AccData.module.css'

const Account = () => {
  const [adata, setAccountdata] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    setAccountdata(JSON.parse(localStorage.getItem("accountsPage")));
  }, []);

  const selectedUser = (data) => {
    setUser(data);
  };

  return (
    <div>
      <AccoundList adata={adata} data={selectedUser} />
      <br />
      <br />
      <AccData activeUser={user} />
      <div className={styles.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
    </div>
  );
};

export default Account;