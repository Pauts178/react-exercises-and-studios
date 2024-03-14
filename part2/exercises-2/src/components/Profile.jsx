import './styles.css';
import Button from './Button';
import oceans from './oceans.json'


function Profile()
{
   const listItem = oceans.map(oceans =>
         <div key={oceans.id} className={`${oceans.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
            <img src={oceans.image} alt={oceans.name} className='img'/>
            <h1>{oceans.name}</h1>
            <h2>Fun Facts</h2>
               <ol>
                  <li>{oceans.fact1}</li>
                  <li>{oceans.fact2}</li>  
                  <li>{oceans.fact3}</li>
               </ol>
            
            <Button />
         </div>
      );
   return(
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;