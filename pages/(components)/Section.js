import { Accordion, AccordionDetails, AccordionSummary, Button, Paper,Typography } from "@mui/material";
import React from "react";
import { data } from "../../data";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import { useStyles } from "./style"

const Section = () => {
  const classes = useStyles();

  return (
    <div className={classes.SectionDiv}>
      {/*==================== SECTION OF FAQ FOR BIG AND SAMLL SCREENS ========================= */}
      <div className={classes.SectionDivChild}>
        <h4 className={classes.SectionDivh4}>Frequently asked questions</h4>
        <div className={classes.sectionHeight}>
          {data.map((item, index) => (
            <Accordion className={classes.Accordion} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.type1}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.type2}>{item.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      {/*==================== HELP AND CHAT SECTION FOR BIG AND SAMLL SCREENS ========================= */}
      <div className={classes.chatDiv}>
        <Paper className={classes.chatPaper}>
          <div className={classes.chatPaperDiv}>
            <div className="mt-5">
              <h6 className={classes.chath6}>Need help?</h6>
              <p className={classes.chatpara}>We're here to help, 24*7</p>
            </div>
            <div>
              <QuickreplyIcon />
            </div>
          </div>
          <Button className={classes.chatButton} variant="outlined">
            Chat with us
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Section;
