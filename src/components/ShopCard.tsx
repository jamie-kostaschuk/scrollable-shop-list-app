import { array } from 'prop-types';
import styles from './ShopCard.module.css'


interface ShopCardProps {
  backgroundImageURL: string;
  linkURL: string;
  title: string;
  secondaryTitle?: string;
  description: string;
  numberOfCards: number;
  locationOfCard: number;
}


export function ShopCard({backgroundImageURL, title, secondaryTitle, description, linkURL, numberOfCards, locationOfCard}: ShopCardProps) {
    return(
        <div className={styles.card} style={{ backgroundImage: `url('${backgroundImageURL}')`, backgroundPosition: "center"}}>
            <div className={styles.cardContent}>
                <div className={styles.cardDisplayLocation}>
                    {Array.from(Array(numberOfCards), (e, i) => {
                        const currentCard = locationOfCard === i+1;
                        return <div key={i} className={styles.cardLocationItem} style={currentCard ? { backgroundColor: "#FFFFFF" } : {}}></div>
                    })}
                </div>
                <div className={styles.cardBottomContent}>
                    <div className={styles.cardText}>
                        <h2 className={styles.h2Heading}>{title}</h2>
                        {secondaryTitle && <p className={styles.cardSecondaryHeader}>{secondaryTitle}</p>}
                        <p>{description}</p>
                    </div>
                    <a className={styles.cardLink} href={linkURL} target="_blank">もっとみる</a>
                </div>
            </div>
        </div>
    )
}