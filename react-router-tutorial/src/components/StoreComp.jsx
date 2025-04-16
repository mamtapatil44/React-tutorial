import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/counter.slice'
import useFetchData from '../customHooks/useFetchData';
import { getUsers } from '../store/user.slice';

const StoreComp = () => {
    const count = useSelector(state=>state.counter.value);
    const dispatch = useDispatch()
    const userDta = useFetchData()
    const handleIncrement =()=>{
        dispatch(increment())

    }
    const handleDecrement =()=>{
        dispatch(decrement())
    }
    useEffect(()=>{
        if(userDta){
            dispatch(getUsers(userDta))
        }
      
    },[userDta])
    const users = useSelector(state=>state.user.users);
    console.log("users==== ",users)
  return (
    <div >
        <button className='bg-amber-300 rounded-lg p-2' onClick={handleIncrement}> Increment</button>
        <span>Count from store : {count}</span>
        <button className='bg-amber-700 rounded-lg p-2' onClick={handleDecrement}> Decrement</button>

        <div>
            <ul>
             {users && users.map((userD)=><li key={userD?.id}>{userD?.firstName}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default StoreComp