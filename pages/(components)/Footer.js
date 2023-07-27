import React from "react";
import { trust } from "../../data";

import VerifiedIcon from "@mui/icons-material/Verified";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SecurityIcon from "@mui/icons-material/Security";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { CardContent, CardMedia, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  FooterDiv: {
    width: "80vw",
    margin: "auto",
    marginTop: "4rem",

    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },

  FooterDivh4: {
    color: "#474747",
    fontSize: "24px",
    fontWeight: "600",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },

  FooterDivChild: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1.25rem",

    [theme.breakpoints.down("md")]: {
      //    border: '2px solid black',
      display: "block",
      width: "80vw",
      marginTop: "1rem",
    },
  },

  FooterCard: {
    width: "20rem",
    border: "1px solid #D6D6D6",
    marginBottom: "2rem",
    marginRight: "0.5rem",

    [theme.breakpoints.down("md")]: {
      width: "80vw",
      display: "flex",
      alignItems: "center",
    },
  },

  FooterCardMedia: {
    marginLeft: "1rem",
    marginTop: ".5rem",

    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
      marginTop: 0,
    },
  },

  FooterType1: {
    color: "#474747",
    fontWeight: "600",
    fontSize: "16px",
  },

  FooterType2: {
    color: "#474747",
    width: "74%",
    fontWeight: "400",
    fontSize: "16px",

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      width: "75vw",
    },
  },

  FooterEnd: {
    backgroundColor: "black",
    height: "30vh",
    marginTop: "1.25rem",
  },

  FooterEndText: {
    color: "white",
    width: "90vw",
    margin: "auto",
    paddingTop: "2.25rem",
    paddingBottom: "2.25rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      width: "80vw",
      margin: "auto",
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
  },

  FooterEndDiv: {
    borderTop: "1px solid white",
    width: "90vw",
    margin: "auto",
    marginTop: "1rem",

    [theme.breakpoints.down("md")]: {
      border: "none",
    },
  },

  FooterEndDivChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1.25rem",
  },

  FooterEndUl: {
    color: "white",
    width: "27vw",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "disc",

    [theme.breakpoints.down("md")]: {
      // border: '2px solid',
      width: "90vw",
      margin: "auto",
      marginTop: "1rem",
    },
  },

  footerEndList: {
    fontWeight: "400",
    fontSize: "16px",

    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginLeft: "1rem",
      textDecoration: "underline",
    },
  },

  FooterEndDivChildCopy: {
    display: "flex",
    justifyContent: "space-between",
    width: "5rem",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  FooterEndDivChildCopy2: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
      width: "30vw",
      margin: "auto",
      marginLeft: "2.1rem",
    },
  },
}));

const Footer = () => {
  const getIconComponent = (iconName, color) => {
    switch (iconName) {
      case "VerifiedIcon":
        return <VerifiedIcon style={{ color }} />;

      case "MessageIcon":
        return <MessageIcon style={{ color }} />;

      case "CalendarTodayIcon":
        return <CalendarTodayIcon style={{ color }} />;

      case "SecurityIcon":
        return <SecurityIcon style={{ color }} />;

      default:
        return null;
    }
  };

  const classes = useStyles();

  return (
    <>
      {/*=========================== POLICY SECTION FOR BIG AND SMALL SCREENS ================================= */}
      <div className={classes.FooterDiv}>
        <h4 className={classes.FooterDivh4}>The Tickete promise</h4>
        <div className={classes.FooterDivChild}>
          {trust.map((item, index) => (
            <Card key={index} className={classes.FooterCard}>
              <CardMedia className={classes.FooterCardMedia}>
                {getIconComponent(item.img, item.color)}
              </CardMedia>
              <CardContent>
                <Typography className={classes.FooterType1} variant="h6">
                  {item.title}
                </Typography>
                <Typography className={classes.FooterType2} variant="body2">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/*=========================== FOOTER END SECTION FOR BIG AND SMALL SCREENS ================================= */}
      <div className={classes.FooterEnd}>
        <Typography className={classes.FooterEndText} variant="h3">
          tickete
        </Typography>

        {/*=========================== FOOTER END SECTION FOR SMALL SCREENS ================================= */}
        <div className={classes.FooterEndDivChildCopy2}>
          <InstagramIcon style={{ color: "white" }} />
          <FacebookIcon style={{ color: "white" }} />
          <TwitterIcon style={{ color: "white" }} />
        </div>

        <div className={classes.FooterEndDiv}>
          <div className={classes.FooterDivChild}>
            <div>
              <ul className={classes.FooterEndUl}>
                <li
                  className={classes.footerEndList}
                  style={{ listStyle: "none" }}
                >
                  © Tickete Inc.
                </li>
                <li className={classes.footerEndList}>Privacy</li>
                <li className={classes.footerEndList}>Terms</li>
                <li className={classes.footerEndList}>Cancellation policy</li>
              </ul>
            </div>
            <div className={classes.FooterEndDivChildCopy}>
              <InstagramIcon style={{ color: "white" }} />
              <FacebookIcon style={{ color: "white" }} />
              <TwitterIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
