export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES,
}

const estebUser: User = {
  username: 'estebansant',
  role: ROLES.ADMIN
}
