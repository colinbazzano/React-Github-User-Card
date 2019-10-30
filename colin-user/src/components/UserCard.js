import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Avatar, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from '@material-ui/icons/Email';

const styles = theme => ({
    card: {
      maxWidth: "600px",
      margin: "30px auto"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    titleText: {
      fontSize: "30px",
      fontWeight: "bold",
      marginLeft: "10px"
    },
    subTitleText: {
      fontSize: "24px",
      marginLeft: "10px"
    },
    bioText: {
      fontSize: "18px",
      marginBottom: "10px"
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      width: "100px",
      height: "100px"
    },
    iconAndText: {
      display: "flex",
      margin: "15px 0"
    },
    icon: {
      marginRight: "10px",
      color: "grey"
    }
  });

  const UserCard = props => {
      const classes = withStyles();


    return (
        <div className="container">
            <Card className={classes.card}>
            <CardContent>
                    <Typography>{props.user.name}</Typography>
                    <img top width="200px" src={props.user.avatar_url} alt="avatar photo" />
                    <Typography>{props.user.location}</Typography>
                    <Typography>Number of Repos: {props.user.public_repos}</Typography>
                </CardContent>
            </Card>

            <div className="followers">
            {props.followers.map(follower => (
                <Card className="card" >
                <img top width="200px" src={follower.avatar_url} alt="avatar pic" />
                <CardContent>
                    <CardHeader>{follower.name}</CardHeader>
                </CardContent>
            </Card>
            ))}
            </div>
        </div>
    )
}

export default withStyles(styles)(UserCard);
