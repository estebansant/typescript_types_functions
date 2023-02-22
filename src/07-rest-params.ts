import { ROLES, User } from './01-enums';

const currentUser: User = {
  username: 'estebansant',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN){
    return true;
  } else {
    return false;
  }
}

const answer = checkAdminRole();
console.log('checkAdminRole', answer);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1){
    return true;
  }
  if (currentUser.role === role2){
    return true;
  }
  return false;
}

const answer2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', answer2);

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const answer3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', answer3);

// Rest params
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const answer4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', answer4);
