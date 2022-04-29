

import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import{useAuthState} from 'react-firebase-hooks/auth';
import auth from'../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';



const Checkout = () => {
    const{serviceId}=useParams();
    const[service]=useServiceDetail(serviceId);
    const[user]=useAuthState(auth);
   

    const handlePlaceOrder =event =>{
        event.preventDefault();
        const order={
            email:user.email,
            service:serviceId,
            address:event.target.address.value,
            phoneNumber:event.target.phoneNumber.value,
           
           
        }
        axios.post('http://localhost:5000/order',order)
        .then(response=>{
            const {data}=response;
            if(data.insertedId){
                toast('Your order is booked!!');
                event.target.reset();
            }
        })
    }
   
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order:{service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name"  value={user?.displayName} placeholder='name' required disabled readOnly>
                </input><br/>
                <input className='w-100 mb-2' type='email'  name="email" value={user?.email} placeholder="email"required disabled readOnly >
                </input><br/>
                <input className='w-100 mb-2' type='text'value={service.name} name="service" placeholder='service' required>
                </input><br/>
                <input className='w-100 mb-2' type='text' name="address" placeholder='address' required>
                </input><br/>
                <input className='w-100 mb-2' type='text' name="phoneNumber" placeholder='phoneNumber' required>
                </input><br/>
                <input className='btn btn-primary' type="submit"  value="placeOrder" />     
             </form>
        </div>
    );
};
 
export default Checkout;