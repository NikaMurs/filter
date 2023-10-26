import './projectList.css'

export default function Toolbar(props) {
    const { projects } = props
    console.log(projects)
    return (
        <div className="projectList">
            {projects.map((project) => {
                if (project) {
                    return (<img alt="img" className='img' src={project.img}></img>)
                }
            })}
        </div>
    )
}