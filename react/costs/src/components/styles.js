import styled from "styled-components";

export const ProjectDetails = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1em;

  h1 {
    background-color: #222;
    color: #fb3;
    padding: 0.4em;
  }

  span {
    font-weight: bold;
  }

  .details_container,
  .service_form_container {
    width: 100%;
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1.2em;
    padding-bottom: 1.2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .project_info {
    width: 100%;
  }
`;

export const Btn = styled.button`
  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: #fb3;
  }
`;

export const ProjectCard = styled.div`
  padding: 1em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 15rem;
  height: fit-content;
  margin: 0.5%;

  h4 {
    background-color: #222;
    color: #fb3;
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-style: 1.3em;
  }

  p {
    color: #7a7a7a;
    margin-bottom: 1em;

    span {
      font-weight: bold;
    }
  }

  .category_text {
    display: flex;
    align-items: center;
  }

  .category_text span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 5px;
  }

  .category_text .infra {
    background-color: #ffaebc;
  }

  .category_text .desenvolvimento {
    background-color: #a0e7e5;
  }

  .category_text .design {
    background-color: #b4f8c8;
  }

  .category_text .planejamento {
    background-color: #fbe7c6;
  }

  .project_card_actions {
    margin-top: 1.2em;
    display: flex;
    align-items: center;
  }

  .project_card_actions a,
  .project_card_actions button {
    text-decoration: none;
    border: none;
    background-color: #fff;
    color: #222;
    font-size: 0.9em;
    padding: 0.6em;
    cursor: pointer;
    margin-right: 1em;
    border: 1px solid #222;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }

  .project_card_actions a:hover,
  .project_card_actions button:hover {
    background-color: #222;
    color: #fb3;
  }
`;
