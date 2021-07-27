import classes from './TastyItems.module.css';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import img9 from '../Images/img9.jpg';


const TastyItems=()=>{
    return (
     <main className={classes.items}>
         <div><img src={img1} alt="tasty items"/></div>
         <div><img src={img2} alt="" />Street food</div>
         <div><img src={img3} alt="paneer items"/>Paneer Items</div>
         <div><img src={img4} alt="pizza items"/>Pizza Items</div>
         <div><img src={img5} alt="pan asian delicious"/>Pan Asian Delicacies</div>
         <div><img src={img7} alt="paneer items"/>Jumbo Packs</div>
         <div><img src={img8} alt="paneer items"/>Lip-Smacking Biryanies</div>
         <div><img src={img9} alt="paneer items"/>Veggie Friendly Eateries</div>
      </main>
    )
};

export default TastyItems;




