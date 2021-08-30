import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dog = ({ dog }) => {
  return (
    <StyledDogCard>
      <div className="main">
        <div className="doggy">
          <img src={dog.image} alt={dog.name + " picture"} />
        </div>
        <div className="info">
          <div>
            <h4>
              {dog.age} Year{dog.age === 1 ? "" : "s"} old
            </h4>
            <h2> {dog.name} </h2>
          </div>
          <div>
            <h3> {dog.breed} </h3>
            <h4>Weighs {dog.weight}</h4>
          </div>
        </div>
      </div>
      <Link className="cta" to={`/${dog.name}`}>
        See more about {dog.name}
      </Link>
    </StyledDogCard>
  );
};

const StyledDogCard = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  text-align: center;
  align-items: center;
  padding: 2em;
  border-radius: 0.5em;
  background-color: #fff;
  color: #565254;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.014),
    0 6.7px 5.3px rgba(0, 0, 0, 0.02), 0 12.5px 10px rgba(0, 0, 0, 0.025),
    0 22.3px 17.9px rgba(0, 0, 0, 0.03), 0 41.8px 33.4px rgba(0, 0, 0, 0.036),
    0 100px 80px rgba(0, 0, 0, 0.05);
  transition: 300ms;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    .doggy {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      overflow: hidden;

      img {
        max-width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  }

  .cta {
    background-color: #4d6cfa;
    color: white;
    padding: 1em 2em;
    text-align: center;
    border-radius: 0.25em;
    transition: 300ms;

    &:hover,
    &:focus {
      background-color: #3a54c7;
    }
  }

  &:hover,
  &:focus {
    transform: translateX(0.25em);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;

    .main {
      flex-direction: row;
      text-align: left;

      .doggy {
        margin-right: 2em;
      }
    }
  }
`;

export default Dog;
