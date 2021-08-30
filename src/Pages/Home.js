import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Dog from "../components/Dog";

const Home = ({ dogs, loading }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <StyledHeader className="header">
            <h1>List of Doggies</h1>
          </StyledHeader>
          <StyledDogList className="dogs">
            {dogs.map((dog, key) => (
              <div key={key}>
                <Link to={`/${dog.name}`}>
                  <Dog dog={dog} />
                </Link>
              </div>
            ))}
          </StyledDogList>
        </>
      )}
    </>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em;
`;

const StyledDogList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 2em;

  @media only screen and (min-width: 530px) {
    padding: 5em;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default Home;
