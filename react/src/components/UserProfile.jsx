import React from 'react';
import { Username } from './Username';
import { UserFavoritefoods } from './UserFavoritefoods';

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
