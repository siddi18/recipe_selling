'use client'; // Ensure client-side rendering

import Link from 'next/link'; // Import Link for navigation
import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <div><p className={classes.summary}>{summary}</p></div>
        <div className={classes.spaces}>
          <Link href={`/meals/${slug}`} className={classes.card__button}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
