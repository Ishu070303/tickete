import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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

    //========================= HEADER SECTION =======================================
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80vw',
        margin: 'auto',
        marginTop: '1rem',
        [theme.breakpoints.down('md')]:{
          display: 'none'
        }
      },
  
      head: {
        fontWeight: 'bold',
        fontSize: '20px'
      },
  
      containerDiv: {
        color: '#474747',
        fontSize: '16px'
      },
  
      icon: {
        cursor: 'pointer',
        color: '#474747',
        marginRight: '.2rem'
      },
  
      leftIcon: {
           margin: 'auto'
      },
  
      iconDiv: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
          display: 'block',
          marginTop: '1rem',
          width: '7vw',
          height: '4vh',
          backgroundColor : '#474747',
          color: 'white',
          borderRadius: '100%',
          alignItems: 'center',
          marginLeft: '2rem'
        }
      },

      //================================ MAIN SECTION ============================================
      PayText: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '3rem',
  
        [theme.breakpoints.down('md')]: {
          display: 'none',
        }
      },
  
      detailsSection : {
        color: '#474747',
        fontWeight: '600',
        fontSize: '1.5rem',
        marginTop: '2.5rem',
  
        [theme.breakpoints.down('md')]: {
          fontSize: '18px',
          width: '80vw',
          margin: 'auto',
          marginTop: '2rem'
        }
      },
  
      detailsSectionpara: {
        color: '#595959',
        marginTop: '0.25rem',
        fontSize: '16px',
  
        [theme.breakpoints.down('md')]: {
          fontSize: '14px',
          width: '80vw',
          margin: 'auto'
        }
      }, 
  
      inputSection: {
        width: '50vw',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '1.25rem',
  
        [theme.breakpoints.down('md')]:{
          display: 'block',
          // border: '2px solid black',
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem'
        },
      },
  
      TextField: {
        width: '23vw', 
        color: '#D6D6D6', 
        marginTop: '0.75rem', 
        marginBottom: '0.75rem', 
        marginRight: '0.75rem',
  
        [theme.breakpoints.down('md')]:{
          width: '80vw'
        }
      },
  
      mainPaper: {
        width: '47vw', 
        marginTop: '1rem', 
        padding: '5px',
  
        [theme.breakpoints.down('md')]: {
          // border: '2px solid black',
          width: '80vw',
          margin: 'auto',
          marginTop: '.5rem'
        }
      }, 
  
      mainPaperDiv: {
        color: "#474747",
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: '600',
        fontSize: '16px',
      },
  
      mainPaperIconDiv: {
        width: '11rem',
        marginLeft: '0.25rem',
        display: 'flex',
        justifyContent: 'space-between',
      },
  
      paperInputDiv: {
        width: '47vw',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '1.25rem',
  
        [theme.breakpoints.down('md')]: {
          // border: '2px solid black',
          width: '80vw'
  
        }
      }, 
  
      paperTextField: {
        width: '22.7vw', 
        color: '#D6D6D6',
        marginTop: '0.75rem',
        marginBottom: '0.75rem',
        marginRight: '0.5',
        marginLeft: '.25rem',
  
        [theme.breakpoints.down('md')]: {
          // border: '2px solid black',
          marginTop: 0,
          width: '75vw'
  
        }
      },
  
      klarnaDiv: {
        width: '47vw', 
        marginTop: '2rem', 
        padding: '5px',
        
        [theme.breakpoints.down('md')]: {
          width: '80vw',
          margin: 'auto', 
          marginTop: '2rem'
        }
      },
  
      klarnaPaperDiv: {
        width: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '0.25rem' 
      },
  
      totalSectionh4 : {
        color: '#474747',
        fontWeight: '600',
        fontSize: "24px",
        marginTop: '2rem',
  
        [theme.breakpoints.down("md")]: {
          width: "80vw",
          margin: 'auto',
          marginTop: '2rem',
          fontSize: '18px'
        }
      },
  
      totalSectionpara: {
        color: '#474747', 
        fontSize: '12px',
        fontWeight: '400',
        textDecoration: 'underline',
  
        [theme.breakpoints.down("md")]: {
          width: "80vw",
          margin: 'auto',
        }
      },
  
      mainOfferSection : {
        backgroundColor: '#F5F5F5', 
        width: '47vw', 
        marginTop: '2rem', 
        padding: '.6rem',
  
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
      },
  
      mainOfferSectionDiv: {
        display: 'flex',
        alignItems: 'center'
      },
  
      mainOfferSectionPara: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '14px',
      },
  
  
      mainEndpara: {
        fontWeight: '400', 
        fontSize: '12px', 
        marginTop: '2rem',
  
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
      },
  
      mainEndButton: {
        color: 'white', 
        backgroundColor: 'black', 
        marginTop: '1rem', 
  
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
      },
  
      smallscreen: {
        display: 'none',
  
        [theme.breakpoints.down('md')]: {
          display: 'block'
        }
      },
  
      totalSectionh4Copy : {
        color: '#474747',
        fontWeight: '600',
        fontSize: "24px",
        marginTop: '2rem',
  
        [theme.breakpoints.down("md")]: {
          width: "80vw",
          margin: 'auto',
          marginTop: '2rem',
          fontSize: '18px'
        }
      },
  
      totalSectionparaCopy: {
        color: '#474747', 
        fontSize: '12px',
        fontWeight: '400',
        textDecoration: 'underline',
  
        [theme.breakpoints.down("md")]: {
          width: "80vw",
          margin: 'auto',
        }
      },
  
      mainOfferSectionCopy : {
        backgroundColor: '#F5F5F5', 
        width: '47vw', 
        marginTop: '2rem', 
        padding: '.6rem',
  
        [theme.breakpoints.down('md')]: {
          width: '80vw', 
          margin: 'auto',
          marginTop: '2rem'
        }
      },
  
      mainOfferSectionDivCopy: {
        display: 'flex',
        alignItems: 'center'
      },
  
      mainOfferSectionParaCopy: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '14px',
      },
  
  
      mainEndparaCopy: {
        fontWeight: '400', 
        fontSize: '12px', 
        marginTop: '2rem',
  
        [theme.breakpoints.down('md')]: {
          width: '80vw', 
          margin: 'auto',
          marginTop: '2rem'
        }
      },
  
      mainEndButtonCopy: {
        color: 'white', 
        backgroundColor: 'black', 
        marginTop: '1rem', 
  
        [theme.breakpoints.down('md')]: {
          width: '80vw', 
          marginLeft: '2.5rem',
          marginTop: '1rem',
        }
      },
  
      CancelDiv: {
        width: '23vw', 
        margin: 'auto', 
        marginTop: '2rem', 
        marginLeft : '4rem',
        display: 'none',
        // border: '1px solid black',
        [theme.breakpoints.down('md')]: {
          display: 'block',
          width: '80vw',
          marginTop: '1rem',
          margin: 'auto',
          paddingBottom: '2rem',
          borderBottom: '1px solid gray',
        }
      },
    
      CancelDivCopy: {
        width: '23vw', 
        margin: 'auto', 
        marginTop: '2rem', 
        marginLeft : '4rem',
        display: 'none',
        // border: '1px solid black',
        [theme.breakpoints.down('md')]: {
          display: 'block',
          width: '100vw',
          marginTop: '1rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid gray',
          marginLeft : 0
        }
      },
  
      cancelpaperDiv: {
        backgroundColor: '#F5F5F5', 
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem',
        }
    
      },
    
      cancelpaperDivh4: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '14px',
      },
    
      cancelpaperDivpara: {
        color: '#595959',
        fontWeight: '400',
        fontSize: '14px',
      },

      //=============================== SECTION PART ============================================
      SectionDiv: {
        width: "80vw",
        margin: "auto",
        borderBottom: "1px solid #D6D6D6",
        paddingBottom: "3rem",
        display: "flex",
    
        [theme.breakpoints.down("md")]: {
          display: "block",
          width: "80vw",
          margin: "auto",
        },
      },
    
      SectionDivChild: {
        flex: "1 1 auto",
        width: "50vw",
    
        [theme.breakpoints.down("md")]: {
          //   border: '2px solid black',
          width: "80vw",
          margin: "auto",
        },
      },
    
      SectionDivh4: {
        color: "#474747",
        marginTop: "4rem",
        fontWeight: "600",
        fontSize: "24px",
    
        [theme.breakpoints.down("md")]: {
          // border: '2px solid black',
          width: "80vw",
          margin: "auto",
          marginTop: "2rem",
          fontSize: "18px",
        },
      },
    
      Accordion: {
        width: "50vw",
        marginTop: ".25rem",
    
        [theme.breakpoints.down("md")]: {
          // border: '2px solid black',
          width: "80vw",
          margin: "auto",
          marginTop: ".25rem",
        },
      },
    
      sectionHeight: {
        marginTop: "2rem",
      },
    
      type1: {
        color: "#474747",
        fontSize: "18px",
        fontWeight: "600",
    
        [theme.breakpoints.down("md")]: {
          fontSize: "14px",
        },
      },
    
      type2: {
        color: "#595959",
        fontSize: "16px",
        fontWeight: "400",
      },
    
      chatPaper: {
        marginTop: "4rem",
        backgroundColor: "#FFF7ED",
        color: "#7F2D0F",
        height: "10vw",
    
        [theme.breakpoints.down("md")]: {
          // border: '2px solid black',
          marginTop: 0,
          height: "40vw",
        },
      },
    
      chatPaperDiv: {
        width: "14vw",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    
        [theme.breakpoints.down("md")]: {
          // border: '2px solid black',
          width: "70vw",
          margin: "auto",
        },
      },
    
      chatDiv: {
        flex: "1 1 auto",
        width: "3rem",
    
        [theme.breakpoints.down("md")]: {
          // border: '2px solid black',
          width: "80vw",
          margin: "auto",
          marginTop: "2rem",
        },
      },
    
      chath6: {
        fontWeight: "600",
        fontSize: "18px",
      },
    
      chatpara: {
        fontWeight: "400",
        fontSize: "16px",
      },
    
      chatButton: {
        border: "1px solid #7F2D0F",
        color: "#7F2D0F",
        marginLeft: "1.7rem",
        marginTop: "2rem",
        fontWeight: "600",
        fontSize: "16px",
    
        [theme.breakpoints.down("md")]: {
          // border: '2px solid black',
          marginLeft: "1rem",
          marginBottom: "1rem",
        },
      },

      // =================================== SIDEBAR SECTION =====================================
      SideDiv: {
        margin: 'auto',
        borderBottom: '1px solid gray', 
        width: '23vw', 
        marginLeft : '4rem',
    
        [theme.breakpoints.down('md')]: {
          // border :"2px solid black",
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem'
        }
      },
    
      sideCard: {
        marginBottom : '2rem',
    
        [theme.breakpoints.down('md')]: {
          // border :"2px solid black",
        }
      },
    
      sideTypo: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '18px',
      },
    
      contentDiv: {
        marginTop: '1rem',
        alignItems: 'center',
      },
    
      contentDivChild: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '.5rem'
      },
    
      contentDivIcon: {
        color: '#474747'
      },
    
      contentDivPara: {
        fontWeight : '600',
        fontSize: '16px',
        color : '#474747',
        marginLeft: '0.75rem',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px'
        }
      },
    
      TicketsDiv: {
        width: '23vw', 
        borderBottom : '1px solid gray', 
        marginLeft : '4rem',
        margin : 'auto', 
        marginTop : '3rem',
    
        [theme.breakpoints.down('md')]: {
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem'
        }
      },
    
      TicketsDivh6: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '18px' 
      },
    
      TicketsDivChild: {
        marginTop : '.75rem'
      },
    
      TicketsDivs: {
        color: '#474747',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: '400',
        marginBottom: '.5rem'
      },
    
      promoDiv: {
        width: '23vw', 
        margin: 'auto', 
        marginTop: '2rem', 
        marginLeft : '4rem',
        display: 'flex',
    
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
      },
    
      promoDivCopy: {
         display: 'none',
    
         [theme.breakpoints.down('md')]: {
          display: 'flex',
          justifyContent: 'space-between',
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem'
         }
      },
    
      promoDivChild: {
        display: 'flex'
      },
    
      promoDivChildp: {
        textDecoration: 'underline',
        cursor: 'pointer'
      },
    
      promoIcon: {
        color :'#006642'
      },
    
      promoPara: {
        color :'#006642',
        fontWeight: '600',
        fontSize: '14px',
      },
    
      totalSection: {
        width: '23vw', 
        margin: 'auto', 
        marginTop: '2rem', 
        borderTop: '1px solid gray', 
        marginLeft : '4rem',
    
        [theme.breakpoints.down('md')]: {
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem',
        }
      },
    
      totalDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '3rem',
      },
    
      totalDivh4: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '16px',
      },
    
      totalDivPara: {
        color: '#595959',
        fontSize: '12px',
        fontWeight: '400',
      },
    
      CancelDiv: {
        width: '23vw', 
        margin: 'auto', 
        marginTop: '2rem', 
        marginLeft : '4rem',
        // border: '1px solid black',
        [theme.breakpoints.down('md')]: {
          width: '100vw',
          marginTop: '1rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid gray',
          marginLeft: 0
        }
      },
    
      cancelpaperDiv: {
        backgroundColor: '#F5F5F5', 
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
          width: '80vw',
          margin: 'auto',
          marginTop: '1rem',
        }
    
      },
    
      cancelpaperDivh4: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '14px',
      },
    
      cancelpaperDivpara: {
        color: '#595959',
        fontWeight: '400',
        fontSize: '14px',
      },
    
      type3: {
        display: 'none',
    
        [theme.breakpoints.down("md")]: {
            display: 'block',
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '2rem',
            color: '#474747',
            width: '80vw',
            margin: 'auto',
            marginTop: '2rem'
        }
       },
}));