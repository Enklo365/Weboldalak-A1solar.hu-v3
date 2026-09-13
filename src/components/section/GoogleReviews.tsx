"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export type GoogleReview = {
  author: string;
  text: string;
  date?: string;
};

export type GoogleReviewsProps = {
  reviews?: GoogleReview[];
};

const PLACEHOLDERS: GoogleReview[] = Array.from({ length: 6 }, (_, index) => ({
  author: `Kiválasztott Google-vélemény ${String(index + 1).padStart(2, "0")}`,
  date: "Helykitöltő",
  text: "Ide kerül a jóváhagyott ügyfélvélemény változtatás nélküli szövege.",
}));

export const GoogleReviews = ({ reviews = PLACEHOLDERS }: GoogleReviewsProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.86, 430), behavior: "smooth" });
  };

  return (
    <section className="google-reviews" aria-labelledby="google-reviews-title">
      <div className="container">
        <div className="google-reviews__header">
          <div>
            <span className="google-reviews__eyebrow">Google értékelések</span>
            <h2 id="google-reviews-title">Rólunk mondták</h2>
          </div>
          <div className="google-reviews__controls" aria-label="Vélemények lapozása">
            <button type="button" aria-label="Előző vélemények" onClick={() => move(-1)}><ArrowLeft size={20} /></button>
            <button type="button" aria-label="Következő vélemények" onClick={() => move(1)}><ArrowRight size={20} /></button>
          </div>
        </div>
        <div className="google-reviews__track" ref={trackRef} tabIndex={0}>
          {reviews.map((review, index) => (
            <article className="google-reviews__card" key={`${review.author}-${index}`}>
              <div className="google-reviews__author">
                <span className="google-reviews__avatar" aria-hidden="true">{review.author.charAt(0)}</span>
                <div><strong>{review.author}</strong>{review.date ? <span>{review.date}</span> : null}</div>
                <span className="google-reviews__google" aria-label="Google">G</span>
              </div>
              <div className="google-reviews__stars" aria-label="5 csillagos értékelés">
                {Array.from({ length: 5 }, (_, star) => <Star key={star} size={19} fill="currentColor" strokeWidth={1.5} />)}
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
