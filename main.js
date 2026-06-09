document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      window.location.href = 'docs.html';
    });
  }
});
