const RegisterForm = () => {
  return (
    <main>
      <div className="register">
        <h3>РЕГИСТРАЦИЯ</h3>
        <label>ЭЛЕКТРОННАЯ ПОЧТА</label>
        <input type="email" placeholder="Введите эл. почту" />
        <label>ПАРОЛЬ</label>
        <input type="password" placeholder="Введите пароль" />
        <label>ТРИ ЦИФРЫ С ОБРАТНОЙ СТОРОНЫ КАРТЫ</label>
        <input type="number" placeholder="*Обязательно*" />
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">ЗАРЕГИСТРИРОВАТЬСЯ</a>
      </div>
    </main>
  );
};

export default RegisterForm;
