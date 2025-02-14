const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src="https://www.marley-rus.ru/images/wifi_logo.png" alt="Logo" />
      </a>
      <div className="div1">
        <h1>↓↓↓↓↓ FREE Wi-Fi ↓↓↓↓↓</h1>
        <i>ЧТОБЫ ПОЛЬЗОВАТЬСЯ ХАЛЯВНЫМ ИНТЕРНЕТОМ, ЗАРЕГИСТРИРУЙТЕСЬ НА САЙТЕ</i>
      </div>
      <div className="div2">
        <a href="/register" className="btn">РЕГИСТРАЦИЯ</a>
      </div>
    </header>
  );
};

export default Header;
