import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Dog from "../components/Dog";
import { Spinner } from "react-bootstrap";

const Home = ({ dogs, loading }) => {
  return (
    <>
      <>
        <StyledHeader className="header">
          <h1>List of Doggies</h1>
        </StyledHeader>
        {loading ? (
          <StyledDogList className="dogs">
            {dogs.map((dog, key) => (
              <div key={key}>
                <Link to={`/${dog.name}`}>
                  <Dog dog={dog} />
                </Link>
              </div>
            ))}
          </StyledDogList>
        ) : (
          <StyledWrapper>
            <Spinner className="spinner" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </StyledWrapper>
        )}
      </>
    </>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  margin: auto;
  display: grid;
  place-items: center;
`;

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
