import propTypes from  'prop-types';
import React from 'react';
import { Username } from './Username';
import { UserFavoritefoods } from './UserFavoriteFoods';

export function UserProfile() {
  return (
    <div>
      <Username username="Timothy" />
      <div>
        <span>Email:</span>
        <span>Timothykhalayi96@gmail.com</span>
      </div>
      <UserFavoritefoods />
    </div>
  );
}
UserProfile.propTypes = {

}
