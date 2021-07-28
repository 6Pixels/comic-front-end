import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// import Button from "../CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/material-kit-react/views/profilePage";
import classNames from "classnames";
// import NavPills from "../assets/material-kit-react/components/NavPills";
// import Characters from '@material-ui/icons/Stars';
// import Comics from '@material-ui/icons/ImportContacts';
// import Movies from '@material-ui/icons/LocalMovies';
import Parallax from "../assets/material-kit-react/Parallax";
// import Background from '../assets/img/bg4.jpg'
const useStyles = makeStyles(styles);



const Laith = (props) => {
  
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid)

  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery);

  console.log("dataaaaaaaaaaaaaaa", props);

  return (
    <>
    <Parallax image={require("../assets/img/19681.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>It's Time To Be Hero.</h1>
               
                
              </div>
            </GridItem>
          </GridContainer>
          </div>
      </Parallax>
    </>
  );
};

export default Laith;