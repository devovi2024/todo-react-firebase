import React, { useState } from 'react';
import AddNewProjects from './AddNewProjects';
import Project from './Project';
import { CaretUp, CaretDown, Palette, PencilFill } from 'react-bootstrap-icons';
import '../style.css';

const Projects = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencil = edit ? '#1EC94C' : '#000000';

  const projects = [
    { id: 1, name: 'Personal', numOfTodos: 3 },
    { id: 2, name: 'Work', numOfTodos: 5 },
    { id: 3, name: 'Other', numOfTodos: 2 },
  ];

  return (
    <div className="projects-container">
      <div className="sidebar">
        <div className="header">
          <div className="title">
            <Palette className="icon" />
            <p>Projects</p>
          </div>

          <div className="btns">
            {showMenu && projects.length > 0 && (
              <span onClick={() => setEdit((prevEdit) => !prevEdit)} className="edit">
                <PencilFill size="15" color={pencil} />
              </span>
            )}

            <span>
              <AddNewProjects />
            </span>
            <span
              className="arrow"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {showMenu ? <CaretUp /> : <CaretDown />}
            </span>
          </div>
        </div>

        {showMenu && (
          <div className="items">
            {projects.map((project) => (
              <Project project={project} key={project.id} edit={edit} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
