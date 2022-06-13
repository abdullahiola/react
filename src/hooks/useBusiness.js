import { useSelector } from 'react-redux';


export const useActivity = () => {
 
  //const dispatch = useDispatch();
  const state = useSelector((state) => state.business);


  return {
    state,
    
  };
};


