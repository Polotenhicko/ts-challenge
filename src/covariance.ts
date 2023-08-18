class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

// Admin - is subtype User
// Admin <: User
class Admin extends User {
  isSuperAdmin: boolean;

  constructor(username: string, isSuperAdmin: boolean) {
    super(username);
    this.isSuperAdmin = isSuperAdmin;
  }
}

// Moderator - is subtype Admin
// Moderator <: Admin <: User
class Moderator extends Admin {
  isSuperModerator: boolean;

  constructor(username: string) {
    super(username, true);
    this.isSuperModerator = false;
  }
}

type IsSubtypeOf<S, P> = S extends P ? true : false;

type a = IsSubtypeOf<Admin, User>; // true
type b = IsSubtypeOf<Moderator, User>; // true
type c = IsSubtypeOf<User, Admin>; // false

// linear

type TObjAdmins = Record<string, Admin>;
type TObjUsers = Record<string, User>;

const admins: TObjAdmins = {
  John: new Admin('John', false),
  Smith: new Moderator('Smith'),
};

const users: TObjUsers = {
  Abob: new User('Aboba'),
  Leli: new Admin('Leli', false),
};

// Promises
type T21 = IsSubtypeOf<Promise<Admin>, Promise<User>>; // true
type T22 = IsSubtypeOf<Promise<Moderator>, Promise<User>>; // true

// reverse

// func arg - contrvariance
type FuncUser = (p: User) => void;
type FuncAdmin = (p: Admin) => void;

type T31 = IsSubtypeOf<Admin, User>; // true

type T32 = IsSubtypeOf<FuncUser, FuncAdmin>; // true

// func return value - covariance

type SubtypeFunc = (p: User) => '1' | '2';
type BaseFunc = (p: Admin) => string;

type T41 = IsSubtypeOf<SubtypeFunc, BaseFunc>; // true

const adminsArr: Admin[] = [
  new Admin('john.smith', false),
  new Admin('jane.doe', true),
  new Admin('joker', false),
];

const superAdmins = adminsArr.filter((admin: Admin): boolean => {
  return admin.isSuperAdmin;
});

const jokers = adminsArr.filter((user: User): boolean => {
  return user.username.startsWith('joker');
});
