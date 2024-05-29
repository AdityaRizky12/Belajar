import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setdata] = useState (null);
    const [loading, setloading] = useState (true);
    const [erorr, seterorr] = useState (false);
    

    useEffect(() => { 
        const fetchData = async () => {
          try {
             const Response = await axios.get (url);
               
              setdata(Response.data);
              setloading(false);
              seterorr(false);
          } catch (error) {
         
           seterorr(true);
           setloading(false);
          }
        };
        setTimeout(() => {
          fetchData();
        }, 2000);
       }, [url]);
    return { data, loading, erorr };
}
 
export default useFetch;