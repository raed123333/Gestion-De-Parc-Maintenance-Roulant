// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from "../componentes/NavBarAdmin";

const DashboradDriver = () => {
  const [message, setMessage] = useState();
  let isUser = localStorage.getItem("token");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5555/admin/dashboardadmin")
      .then((res) => {
        if (res.data.valid) {
          setMessage(res.data.message);
        } else {
          navigate("/");
          setMessage(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!isUser) {
      navigate("/");
    }
  }, [isUser]);

  return (
    <div>
      {isUser ? (
        <>
          <NavBarAdmin />
          <p>{message}</p>
        </>
      ) : (
        <h1>not auth</h1>
      )}
    </div>
  );
};

export default DashboradDriver;
