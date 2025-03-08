import { createElement } from "react";
import styles from './User.modules.scss';
 
 export function UserFavoriteFoods(){
    return  createElement('div' , null ,<section>
        <span>Favorite foods:</span>
        <br />
        <ul>
            <li>Chapati</li>
            <li>Homelet Eggs</li>
            <li>Bread</li>
        </ul>
    </section>);

}
