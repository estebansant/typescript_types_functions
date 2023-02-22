enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  username: string,
  role: ROLES,
}

const estebUser: User = {
  username: 'estebansant',
  role: ROLES.ADMIN
}
