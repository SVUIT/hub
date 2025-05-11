import React from 'react';
import styles from './styles.module.css';
import Card1 from '@site/src/data/card1.md';
import Card2 from '@site/src/data/card2.md';
import Card3 from '@site/src/data/card3.md';  

const CardComponents = [Card1, Card2, Card3];  

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CardComponents.map((Card, idx) => (
            <div key={idx} className="col col--4">
              <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card__body">
                  <Card />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
