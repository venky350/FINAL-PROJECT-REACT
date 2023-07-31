import React, { useEffect, useState } from "react";
import styles from "./AccData.module.css";

const AccData = (props) => {
  const [aname, setAccname] = useState("");
  const [apwd, setAccpwd] = useState("");
  const [acpwd, setAcccpwd] = useState("");
  const [aemail, setAccemail] = useState("");
  const [aphone, setAccPhone] = useState("");
  const [apic, setAccpic] = useState("");
  const [objs, setObj] = useState({});
  const [update, isUpdate] = useState(false);

  const [model, setModel] = useState(false);

  let actUser = props;

  let localData = JSON.parse(localStorage.getItem("accountsPage"));
  let selectedDatatoShow = localData[`${props.actUser}`];
  const updateProfileHandler = () => {
    setObj({
      email: aemail === "" ? localData[`${props.actUser}`].email : aemail,
      name: aname === "" ? localData[`${props.actUser}`].name : aname,
      password: apwd === "" ? localData[`${props.actUser}`].password : apwd,
      phone: aphone === "" ? localData[`${props.actUser}`].phone : aphone,
      profilePic: apic === "" ? localData[`${props.actUser}`].profilePic : apic,
    });
    isUpdate(true);
    setModel(true);
  };

  const deletephotoHandler = () => {
    console.log("delete clicked");

    setObj({
      email: localData[`${props.actUser}`].email,
      name: localData[`${props.actUser}`].name,
      password: localData[`${props.actUser}`].password,
      phone: localData[`${props.actUser}`].phone,
      profilePic: "",
    });
    console.log(objs);
  };
  console.log(objs);

  useEffect(() => {
    if (update) {
      console.log(objs);
      let obj1 = JSON.parse(localStorage.getItem("accountsPage"));
      console.log("before addding product:", obj1);
      console.log(obj1);
      obj1 = {
        ...obj1,
        [`${JSON.stringify(actUser).slice(
          15,
          JSON.stringify(actUser).length - 2
        )}`]: objs,
      };
      console.log(obj1);
      localStorage.setItem("accountsPage", JSON.stringify(obj1));
    }
    setAccname("");
    setAccpwd("");
    setAccemail("");
    setAccPhone("");
    setAccpic("");
  }, [objs, update]);

  return (
    <>
      <div className={styles.con}>
        <div className={styles.adatacontainer}>
          <div className={styles.imgcontainer}>
            <p>Change Avtar</p>
            <img
              src={
                apic.length > 0
                  ? apic
                  : selectedDatatoShow !== undefined
                  ? selectedDatatoShow.profilePic
                  : ""
              }
              alt={
                selectedDatatoShow !== undefined ? selectedDatatoShow.name : ""
              }
            />
            <div className={styles.imgoverlayout}>
              <i className="fa fa-trash-o" onClick={deletephotoHandler}></i>
            </div>
          </div>
          <input className="imginput" type="file" accept="image/*" />
        </div>
        <div className={styles.adatacontainer}>
          <div className={styles.right}>
            <h2>Account Settings</h2>
            <form >
              <div className={styles.inpcontainer}>
                <div className={styles.inpfields}>
                  <label>Account Name</label>
                  <input
                    type="text"
                    onChange={(e) => setAccname(e.target.value)}
                    value={
                      aname.length > 0
                        ? aname
                        : selectedDatatoShow !== undefined
                        ? selectedDatatoShow.name
                        : ""
                    }
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setAccpwd(e.target.value)}
                    value={
                      apwd.length > 0
                        ? apwd
                        : selectedDatatoShow !== undefined
                        ? selectedDatatoShow.password
                        : ""
                    }
                  />
                  <label>Phone</label>
                  <input
                    type="tel"
                    onChange={(e) => setAccPhone(e.target.value)}
                    value={
                      aphone.length > 0
                        ? aphone
                        : selectedDatatoShow !== undefined
                        ? selectedDatatoShow.phone
                        : ""
                    }
                  />
                </div>
                <div className={styles.inpfields}>
                  <label>Account Email</label>
                  <input
                    type="email"
                    onChange={(e) => setAccemail(e.target.value)}
                    value={
                      aemail.length > 0
                        ? aemail
                        : selectedDatatoShow !== undefined
                        ? selectedDatatoShow.email
                        : ""
                    }
                  />
                  <label>Re-enter Password</label>
                  <input
                    type="password"
                    onChange={(e) => setAcccpwd(e.target.value)}
                    value={
                      acpwd.length > 0
                        ? apwd
                        : selectedDatatoShow !== undefined
                        ? selectedDatatoShow.password
                        : ""
                    }
                  />
                  <div className={styles.btn}>
                    <button className="btn" onClick={updateProfileHandler}>
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {model && (
        <div className={styles.modelouter}>
          <div className={styles.model}>
            <i onClick={() => setModel(false)}></i>
            <h1>Profile Updated</h1>
          </div>
        
        </div>
      )}
    </>
  );
};

export default AccData;