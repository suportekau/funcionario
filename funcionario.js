<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login - Sistema Funcionários</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .login-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px #aaa;
    width: 300px;
    text-align: center;
  }
  input {
    width: 90%;
    padding: 8px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-transform: uppercase;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
</head>
<body>
  <div class="login-container">
    <h2>Login</h2>
    <input type="text" id="usuario" placeholder="Usuário" autofocus />
    <input type="password" id="senha" placeholder="Senha" />
    <button onclick="login()">Entrar</button>
  </div>

  <script>
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');

    // foco no usuário e Enter muda de campo
    usuarioInput.focus();
    usuarioInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') senhaInput.focus();
    });
    senhaInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') login();
    });

    function login() {
      const user = usuarioInput.value.trim().toUpperCase();
      const pass = senhaInput.value.trim();
      if (user === 'ADMIN' && pass === '1234') {
        window.location.href = 'menu.html';
      } else {
        alert('Usuário ou senha incorretos!');
      }
    }
  </script>
</body>
</html>
