import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/material-kit-react/views/profilePage";
import classNames from "classnames";
import Parallax from "../assets/material-kit-react/Parallax";
const useStyles = makeStyles(styles);



const Comimage = (props) => {
  
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
    <Parallax image={require("../assets/img/comiccc.jpeg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 id='com' > Super Comics is almost here
</h1>
               
                
              </div>
            </GridItem>
          </GridContainer>
          </div>
      </Parallax>
    </>
  );
};

export default Comimage;