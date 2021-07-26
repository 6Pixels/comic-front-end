import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "react-bootstrap";

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/material-kit-react/views/profilePage";
import classNames from "classnames";
import NavPills from "../assets/material-kit-react/components/NavPills";

import Characters from '@material-ui/icons/Stars';
import Comics from '@material-ui/icons/ImportContacts';
import Movies from '@material-ui/icons/LocalMovies';

const useStyles = makeStyles(styles);



const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid)

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={user.picture} alt="..." className={imageClasses} />
              </div>
              <div className={classes.name}>
                <h3 className={classes.title}>{user.name}</h3>
                <h6>DESIGNER</h6>
                <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Characters",
                      tabIcon: Characters,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Comics",
                      tabIcon: Comics,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Movies",
                      tabIcon: Movies,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>








      </>
    )
  );
};

export default Profile;





// <Card style={{ width: "18rem" }}>
      //   <Card.Img variant="top" src={user.picture} alt={user.name} />
      //   <Card.Body>
      //     <Card.Title>{user.name}</Card.Title>
      //     <Card.Text>{user.email}</Card.Text>
      //   </Card.Body>
      // </Card>