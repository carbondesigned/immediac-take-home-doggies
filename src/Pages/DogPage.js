import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

import { GoChevronLeft } from "react-icons/go";

const DogPage = ({ dogs }) => {
  const history = useHistory();
  const url = history.location.pathname;
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const currentDog = dogs.filter((dog) => "/" + dog.name === url);

    setDog(currentDog[0]);
  }, [dogs, url]);
  //   console.log(typeof dog.age);
  return (
    <>
      {dog && (
        <StyledPage img={dog.image}>
          <div className="header">
            <Link to="/" className="back">
              <GoChevronLeft /> See all Doggies
            </Link>
            <h1 className="name"> {dog.name} </h1>
          </div>
          <div className="info">
            <ul className="details">
              <li>
                {dog.name}'s age:
                <span>
                  {dog.age} Year{dog.age === 1 ? "" : "s"} old
                </span>
              </li>
              <li>
                {dog.name} is a: <span>{dog.breed}</span>
              </li>
              <li>
                {dog.name} weighs: <span>{dog.weight}</span>
              </li>
            </ul>
          </div>
        </StyledPage>
      )}
    </>
  );
};

const StyledPage = styled.div`
  width: 100%;

  .header {
    width: 100%;
    display: flex;
    height: 45vh;
    overflow: hidden;
    position: relative;
    background-image: url(${(p) => p.img});
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    color: white;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .back {
      position: absolute;
      top: 1.25em;
      left: 1em;
      z-index: 2;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .name {
      z-index: 1;
      font-size: clamp(1.525em, 5vw, 3.25em);
    }
  }

  .info {
    display: grid;
    place-items: center;
    padding: 5em 2em;
    width: 100%;

    .details {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2em;

      li {
        font-size: clamp(1.525em, 2vw, 1.95em);
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;
        padding: 2em 0;

        @media only screen and (min-width: 768px) {
          flex-direction: row;
        }

        span {
          font-weight: 700;
        }
      }
    }
  }
`;

export default DogPage;
