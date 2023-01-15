import React, { useEffect, useState } from "react";
import { useLicenseApi } from "../services/licenseApi";

const MyComponent = () => {
  const [users, setUsers] = useState([]);

  const newData = useLicenseApi();

  const promise1 = newData.getOrganizationProducts;
  
  const getData = () => {
    promise1().then((value) => {
      setUsers(value);
      return value;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {users &&
          users.map((user) => {
            return <li key={user.key}>{user.productName}</li>;
          })}
      </ul>
    </div>
  );
};

export default MyComponent;
