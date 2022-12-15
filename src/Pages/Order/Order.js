import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import './Order.css';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://car-service-sserver.onrender.com/order?email=${email}`;
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
    <div>
    <h2 className='mb-4 order-h1'>Your Orders</h2>
    
    <div className="w-50 mx-auto mt-3 p-3">
      <h2>Orders : {orders.length}</h2>
      {orders.map((order) => (
        <div className="p-3" key={order._id}>
          <p>Email : {order.email}</p>
          <p>Item name : {order.service}</p>
          <p>Address : {order.address}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Order;
