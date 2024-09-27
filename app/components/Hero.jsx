import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section id="hero" role="banner" aria-label="Hero section showcasing energy and attraction">
      <div className="row">
        <h1 className="hero__heading">
          BE THE <span className="hero__heading--italicise">ENERGY</span>
          <br />
          YOU WANT TO <span className="hero__heading--italicise">ATTRACT</span>
        </h1>
          <Link href="/" className="hero__cta" aria-label="Shop our range of products">
            Shop the range
          </Link>
      </div>
    </section>
  );
}

export default Hero;
