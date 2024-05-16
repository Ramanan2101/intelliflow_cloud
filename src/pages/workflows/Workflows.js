import React, { useState } from 'react'
import './Workflows.css';
import SideBar from '../../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faEllipsisV, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom';

const Workflows = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isPlusBtnClicked, setIsPlusBtnClicked] = useState(false)
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false)
    const [isOptionsClicked, setIsOptionsClicked] = useState(false)

    const handleCreateWorkflowBox = () => {
      setIsPlusBtnClicked(!isPlusBtnClicked)
    };
    const handleDeleteoption = () => {
      setIsDeleteBtnClicked(!isDeleteBtnClicked)
    };
    const handleOptions = () => {
      setIsOptionsClicked(!isOptionsClicked)
    };

  return (
    <div className="workflowsection">
      <SideBar/>

      <div className="workflowRight">
        <p className="workflowRight-para">Workflows</p>
        <div className="workflowRight-searchAndFilter">
          <div className="inputWithIcon">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="faPlusCircle"
              onClick={handleCreateWorkflowBox}
            />
          </div>
          <div className={isPlusBtnClicked ? 'newWorkFlow-card' : 'hide'}>
            <form className="custom-form" >
              <div className="form-texts">
                <h1 className="form-texts-heading">
                  Create New Workflow
                </h1>
                <p className="form-texts-para">
                  Start by naming your workflow - each workflow may contain
                  multiple tasks that can be executed directly from your cloud instance or to your On-Premise infrastructure as well.
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder='My-Automatiomn-Workflow'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-input"
                  placeholder='This workflow is used to automate my regular tasks'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="submit" className="create-button">
                Create
              </button>
            </form>
          </div>
        
          <div className="inputWithIcon">
            <FontAwesomeIcon icon={faSearch} className="faSearch" />
            <input
              type="text"
              placeholder="Workflow Names"
              className="workflowNamesIp"
            />
          </div>

          <div className="inputWithIcon">
            <input
              type="text"
              placeholder="All tags"
              className="workflowNamesIp"
            />
            <FontAwesomeIcon icon={faAngleDown} className="faAngleDown" />
          </div>

          <div className="inputWithIcon">
            <input
              type="text"
              placeholder="Created"
              className="workflowNamesIp"
            />
            <FontAwesomeIcon icon={faAngleDown} className="faAngleDown" />
          </div>
        </div>

        
        <div className="workflowTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Last Run</th>
                <th>Next Run</th>
                <th>Deployed</th>
                <th>Activity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Workflow 1</td>
                <td>May 12, 2024</td>
                <td>May 15, 2024</td>
                <td><FontAwesomeIcon icon={faDotCircle} style={{ color: 'green' }} /></td>
                <td className="statusBarTableData">
                  <div className="statusBar">
                    <div className="statusProgress"></div>
                  </div>
                </td>
                <td>
                  <div className="options" onClick={handleOptions}>
                    <FontAwesomeIcon icon={faEllipsisV} className='optionIcon' />
                    <div className={isOptionsClicked ? "optionsContent" : "hide"}>
                      <p>Edit</p>
                      <p onClick={handleDeleteoption}>Delete</p>
                      <p>Run</p>
                    </div>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
          <div className={isDeleteBtnClicked ? "deleteOption" : "hide" }>
            <h4>Delete Workflow</h4>
            <p>Are you sure you want to delete?</p>
            <div className="deleteOptionBtn">
                <button type="button" className="btn btn-success">Yes</button>
                <button type="button" className="btn btn-danger">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflows