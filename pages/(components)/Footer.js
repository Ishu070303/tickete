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
import useStyles from "./style";

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
