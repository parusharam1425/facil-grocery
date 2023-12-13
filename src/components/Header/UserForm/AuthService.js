
export const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      alert('Successfully logged in!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };
  