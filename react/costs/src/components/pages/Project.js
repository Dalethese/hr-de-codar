import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { parse, v4 as uuidv4 } from "uuid";

import Loading from "../layout/Loading";
import Container from "../layout/Container";
import { Btn, ProjectDetails } from "../styles";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../services/ServiceForm";
import ServiceCard from "../services/ServiceCard";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        headers: { "Content-type": "applications/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [id]);

  const editPost = async (project) => {
    // budget validation
    setMessage("");
    setType("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/projects/${project.id}`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(project),
        }
      );

      const data = await response.json();
      setProject(data);
      setShowProjectForm(false);
      setMessage("Projeto atualizado!");
      setType("success");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const createService = () => {
    setMessage("");

    //last service
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    //add service cost to project total cost
    project.cost = newCost;

    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        // exibir os serviços
        setMessage("Serviço adicionado!");
        setType("success");
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  };

  const removeService = (id, cost) => {
    setMessage("");

    const serviceUpdate = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = serviceUpdate;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(projectUpdated),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(serviceUpdate);
        setMessage("Serviço removido com sucesso");
        setType("success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {project.name ? (
        <ProjectDetails>
          <Container className="column">
            {message && <Message type={type} msg={message} />}
            <div className="details_container">
              <h1>Projeto: {project.name}</h1>
              <Btn onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </Btn>
              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="project_info">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className="service_form_container">
              <h2>Acione um serviço:</h2>
              <Btn onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </Btn>
              <div className="project_info">
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </ProjectDetails>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Project;
