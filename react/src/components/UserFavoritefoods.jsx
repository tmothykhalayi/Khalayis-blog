import { createElement } from "react";
 
 export function UserFavoritefoods(){
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
