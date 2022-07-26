import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="w-50 mx-auto mt-3">
      <h2>Orders : {orders.length}</h2>
      {orders.map((order) => (
        <div className="d-flex p-2" key={order._id}>
          <p>{order.email}</p>
          <p>{order.service}</p>
          <p>{order.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Order;
