import { useLocation } from 'react-router-dom';

function Fail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let statusMessage;
  if (queryParams.get('data')){
    statusMessage = queryParams.get('data');
  }
  //console.log(statusMessage);
    return(
      <div>
        <h1>Payment Failed !!!</h1>
         <h2>{statusMessage ? statusMessage : null}</h2>;
      </div>
    );

  }
  
  export default Fail;
  
