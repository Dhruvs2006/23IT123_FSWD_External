import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">📚 About Us</h1>
        <p className="text-lg italic">
          Welcome to Clg-Events – your cozy corner for discovering, enjoying,
          and collecting great books! At BookStore, we believe that every story
          has the power to inspire, teach, and transport us to another world.
          Whether you're a lifelong bookworm or just starting your reading
          journey, our goal is to make books more accessible, enjoyable, and
          tailored to your taste.
        </p>
        <br />
        <h1 className="text-2xl font-bold text-center">🛍️ What We Organize</h1>
        <p className="text-lg">
          We organzize the multiple type of events!!,we organize Evetns in Large
          places and also in small places,Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum, veritatis est consectetur reiciendis fuga
          ducimus? Ex, labore rem. Illo maiores non quisquam voluptate eius
          placeat ipsam sed maxime temporibus unde?
        </p>
        <br />
        <h1 className="text-2xl font-bold text-center">💡 Our Mission</h1>
        <p className="text-lg">
          To ignite a love for reading by connecting people with stories that
          matter. We aim to build a community of visiters who explore, share,
          and grow through events.
        </p>
        <br />
        <h1 className="text-2xl font-bold text-center">🧡 Why Clg-Events?</h1>
        <p className="text-lg">
          We're more than just a Clg-Events – we're a space where book lovers
          feel at home. With a modern design, thoughtful features, and a passion
          for storytelling, Clg-Events makes reading simple, personal, and
          magical.
        </p>
        <br />
        <br />
        <h2 className="text-xl text-center">
          Discover your next Events with Clg-Events today!
        </h2>
        <br />
        <div className="flex justify-center">
          <Link to="/">
            <button className="btn btn-soft btn-sm btn-primary ">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
