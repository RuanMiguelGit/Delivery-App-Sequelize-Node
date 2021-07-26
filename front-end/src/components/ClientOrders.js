import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getData } from '../../services/apiService';

export default function ClientOrders() {
  const [userSales, setUserSales] = useState([]);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  useEffect(() => {
    setLoading(true);
    getData('http://localhost:3001/customer/orders/')
      .then((data) => {
        setUserSales([...data]);
      });
    setLoading(false);
  }, []);
};

