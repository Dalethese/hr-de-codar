import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import { useEffect, useState } from "react"
import ProjectCard from "../project/ProjectCard"
import Loading from "../layout/Loading"


function Projects () {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectsMessage, setProjectsMessage] = useState('')
  
  const location = useLocation()
  console.log(location)
  let message = ''

  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
      headers: {
        'Content-type' : 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch(err => console.log(err))
    }, 300)
  }, [])
  
  const removeProject = id => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        setProjects(projects.filter(project => project.id !== id))
        setProjectsMessage('Projeto removido com sucesso')
      })
      .catch(err =>  console.log(err))
  }
  
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to={'/newproject'} text='Novo projeto' />
      </div>
      { message && <Message type="success" msg={message} /> }
      { projectsMessage && <Message type="success" msg={projectsMessage} /> }
      <Container customClass='start'>
        {projects.length > 0 &&
          projects.map(project => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        }
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )
          
        }
      </Container>
    </div>
  )
}
export default Projects