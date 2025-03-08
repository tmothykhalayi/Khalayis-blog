import { createElement } from "react";
import styles from './User.modules.scss';
 
 export function UserFavoritefoods(){
    return  createElement('div' , null ,<section>
        <span className= {styles.foodTitle}>Favorite foods:</span>
        <br />
        <ul>
            <li>Chapati</li>
            <li>Homelet Eggs</li>
            <li>Bread</li>
        </ul>
    </section>);

}
