console.log("user.js loading")

function User(id, nome, idade, email, password) {
  this.id = id;
  this.nome = nome;
  this.idade = idade;
  this.email = email;
  this.password = password;
}


function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


export function registerUser(nome, idade, email, password) {

  const id = generateUniqueId(); 

  const newUser = new User(id, nome, idade, email, password);

  let users = JSON.parse(localStorage.getItem('users')) || [];

  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users));

  return newUser;
}


export function getAllUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}


export function getUserById(id) {
  const users = getAllUsers();
  return users.find(user => user.id === id);
}