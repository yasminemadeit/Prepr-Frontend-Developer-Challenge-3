import './projectDetail.scss'
import React, { useState } from 'react';



function ProjectDetail() {

    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including the checkbox state (isChecked)
    console.log('Form submitted with checkbox state:', isChecked);
  };

    return(
        <div className="projects">
            <div className="page-header">
                <h2>CREATE PROJECT</h2>
            </div>
            <div className="overview-container">
            <h3>Project overview</h3>
                <form>
                
                <input type="text" name="title" id="" placeholder='title'/>
                <input type="text" name="name" id=""placeholder='project slug'/>
                <input type="text" name="name" id=""placeholder='description'/>
                <input type="text" name="name" id=""placeholder='active challenge'/>
                <input type="text" name="name" id="" placeholder='associated lab'/>
                <input type="text" name="name" id=""placeholder='recruiting status'/>
                <input type="text" name="name" id=""placeholder='required skills'/>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    Allow users outside your team to view your project
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    Allow users outside your team to download your project files
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    create project team chat
                </label>

                </form>
               


            </div>
            <div className="banner-container">
            <h3>Upload Project Banner</h3>
            <p>Please select png, jpg or jpeg image with minimum dimension of width: 625px, height: 355px</p>
            <button type='upload'>Upload Cover Image</button>
            </div>
     
            <button type="submit">Create Project</button>
        </div>
    );
}

export default ProjectDetail