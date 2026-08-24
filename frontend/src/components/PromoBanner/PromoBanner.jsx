import { promotions } from "@/constants";
import "./styles/PromoBanner.css";

const PromoBanner = () => {
  return (
    <section className="promo-section">
      <div className="max-container promo-scroller">
        {promotions.map((promotion) => (
          <div className="promo-card" key={promotion.title}>
            <img 
              src={promotion.image} 
              alt={promotion.alt} 
            />

            <div className="promo-card__content">              
              <div className="promo-card__shade" />
              <p className="promo-card__eyebrow">{promotion.eyebrow}</p>
              <h2>{promotion.title}</h2>
              <p>{promotion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromoBanner