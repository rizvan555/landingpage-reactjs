const countSection = [
  {
    num: "127",
    contain: "Award Received",
  },
  {
    num: "1505",
    contain: "Cups of Coffee",
  },
  {
    num: "109",
    contain: "Projects Completed",
  },
  {
    num: "102",
    contain: "Happy Clients",
  },
];

const Header = () => {
  return (
    <header>
      <h2>Hello There</h2>
      <h1>WE Are Glint</h1>
      <p className="header-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
        voluptas? Cumque at dolorem delectus cum. Maxime magni laboriosam ullam
        dicta distinctio molestiae eveniet ducimus tempora magnam provident cum
        odit, sint cupiditate deserunt modi ipsum dolores repellendus
        reiciendis. Corporis, ullam ex.
      </p>
      <div className="count-section">
        {countSection.map((myCount) => {
          return (
            <div className="count-box">
              <p>{myCount.num}</p>
              <span>{myCount.contain}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
