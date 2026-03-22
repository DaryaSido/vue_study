<template>
  <div class="auth-main">
    <div class="form-cont">
      <form action="submit" method="post">
        <div class="auth-inf">Авторизуйтесь на сайте</div>
        <label for="name">Логин:</label>
        <input type="text" id="name" name="name" placeholder="Введите логин" required />
        <label for="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Введите пароль"
          required
        />
        <button class="form-btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.form-cont {
  width: 100%;
  max-width: 500px;
  margin: 0 20px;
}
form {
  background-color: white;
  border-radius: 30px;
  margin: 10%;
  padding: 70px;
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  align-content: center;
  flex-direction: column;
  box-sizing: border-box;
}
form input {
  height: auto;
  width: 70%;
  padding: 10px 0;
  border: 1px solid blueviolet;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
  line-height: 1;
}
form input::placeholder {
  line-height: normal;
  height: 100%;
  font-size: 8px;
  color: grey;
  align-items: center;
  transform: translateY(-2px);
  display: block;
}
input:focus {
  outline: none;
  border: 2px solid blueviolet;
}
.auth-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(blueviolet, black);
  /* background-color: aqua; */
}
.form-btn {
  padding: 10px;
  color: white;
  background-color: blueviolet;
  border-radius: 15px;
  outline: none;
  border: 1px transparent;
}
.auth-inf {
  color: blueviolet;
  font-size: 20px;
  font-weight: 600;
}
</style>
