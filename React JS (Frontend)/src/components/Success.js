import { useLocation } from 'react-router-dom';
function Success() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let statusMessage;
    if (queryParams.get('data')){
      statusMessage = queryParams.get('data');
    }
    //console.log(statusMessage);
      return(
        <div>
           <h2> Payment {statusMessage ? statusMessage : null} !!!</h2>;
        </div>
      );
  }
  
  export default Success;
  
