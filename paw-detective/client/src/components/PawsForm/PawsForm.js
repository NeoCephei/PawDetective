import "./../../styles/PawsForm.css";
import { useContext } from "react";
// dont need anymore useState or ApiService as you have everything in App component
import { FaHome } from "react-icons/fa";
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import PicturesUpload from "../Pictures/Pictures";

import globalContext from "../../services/globalContext";

const PawsForm = () => {
  const { customProps } = useContext(globalContext);
  const { animalForm, formHandler, handleSubmit } = customProps;
  const { lostOrFound, animal, description, location } = animalForm

  return (
    <div>
      <header className="form-header">
        <h1 className="title-header"> LOST or FOUND PAWS </h1>
        <div className="login-logo">
          <Link to="/">
            <FaHome size={30} />
          </Link>
        </div>
      </header>

      <div className="form-container">
        <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
          {/* choose if you lost a pet or found a lost one */}
          <div className="form-control">
            <div>
              <h4>What happened?</h4>
            </div>
            <label>Lost or Found?</label>
            <select
              name="lostOrFound"
              value={lostOrFound ? "Lost" : "Found"}
              onChange={(e) => formHandler(e)}
            >
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          {/* add a picture */}
          <div className="form-control">
            <label>Picture</label>
            <PicturesUpload />
          </div>

          {/* choose what kind of animal it is */}
          <div className="form-control">
            <label>Animal</label>
            <select 
              name="animal"
              value={animal} 
              onChange={(e) => formHandler(e)}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bunny">Bunny</option>
              <option value="Bird">Bird</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* add a description of the animal and any other details */}
          <div className="form-control">
            <label>Description</label>
            <input
              name="description"
              type="text"
              placeholder="more details..."
              value={description}
              onChange={(e) => formHandler(e)}
            />
          </div>
          {/* choose the location you lost or found the pet */}
          <div className="form-control">
            <label>Location</label>
            <input
              name="location"
              type="text"
              placeholder="where?"
              value={location}
              onChange={(e) => formHandler(e)}
            />
          </div>

          <div>
            <Map />
          </div>
          
          <button className="upload-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PawsForm;
