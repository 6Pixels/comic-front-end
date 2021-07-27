import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
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



const Profile = (props) => {
  const { user, } = useAuth0();
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
                    {props.profileData.characters.map(val => {
                      return (<GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={val.img}
                          className={navImageClasses}
                        />
                        <p>{val.name}</p>
                        <Button variant="outline-danger" onClick={() => props.delete(val._id, 'character')}>Delete Character</Button>
                        <Button variant="outline-warning" onClick={() => props.updateModel(val._id, 'character')}>Update Character</Button>
                      </GridItem>
                      )
                    })}
                  </GridContainer>
                ),
              },
              {
                tabButton: "Comics",
                tabIcon: Comics,
                tabContent: (
                  <GridContainer justify="center">

                    {props.profileData.comic.map(val => {
                      return (<GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={val.img}
                          className={navImageClasses}
                        />
                        <p>{val.name}</p>
                        <Button variant="outline-danger" onClick={() => props.delete(val._id, 'comic')}>Delete Comic</Button>
                        <Button variant="outline-warning" onClick={() => props.updateModel(val._id, 'comic')}>Update Comic</Button>
                      </GridItem>
                      )
                    })}
                  </GridContainer>
                ),
              },
              {
                tabButton: "Movies",
                tabIcon: Movies,
                tabContent: (
                  <GridContainer justify="center">
                    {props.profileData.movies.map(val => {
                      return (<GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={val.img}
                          className={navImageClasses}
                        />
                        <p>{val.name}</p>

                        <Button variant="outline-danger" onClick={() => props.delete(val._id, 'movie')}>Delete Movie</Button>
                        <Button variant="outline-warning" onClick={() => props.updateModel(val._id, 'movie')}>Update Movie</Button>
                      </GridItem>
                      )
                    })}
                  </GridContainer>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Profile;