function CurseCard({ img, tags, title, startPrice, types }) {
  return (
    <div className="CourseCard">
      <div className="cover">
        <img alt="" src={img} />
      </div>
      <div className="info">
        <ul className="tags">
          {tags.map((item, i) => (
            <li key={i} className="tag">
              {item}
            </li>
          ))}
        </ul>
        <h4 className="name">{title}</h4>
        <div className="prices">
          <span className="sale-percent">60%↓</span>
          <span className="monthly-price">
            월 {startPrice.toLocaleString()}원
          </span>
          <span className="installment-month">/ 12개월</span>
        </div>
      </div>
    </div>
  );
}

export default CurseCard;
