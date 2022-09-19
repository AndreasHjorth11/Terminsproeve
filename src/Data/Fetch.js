import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  fetch("http://localhost:4000/auth/token", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "body": "username=user1&password=1234"
})
.then(response => console.log(response))
.catch(err => console.error(err))};

export default Fetch;
