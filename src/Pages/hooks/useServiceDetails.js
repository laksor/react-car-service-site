import { useEffect, useState } from "react";

const useServiceDetails = serviceId =>{
    const [service, setService] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId]);
    
    return [service]

}
export default useServiceDetails;