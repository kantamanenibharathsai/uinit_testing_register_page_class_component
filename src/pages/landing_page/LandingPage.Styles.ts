const landingPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    pb: 5,
    pt: 2,
  },

  navContainer: {
    height: "7vh",
    width: { xs: "99%", sm: "90%", md: "80%", lg: "70%", xl: "70%" },
    margin: "auto",
    boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
    borderRadius: "12px",
    display: "flex",

    alignItems: "center",
    px: 2,
    mb: 4,
  },

  navChildContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  userName: {
    font: "700 18px Poppins",
    color: "#000",
  },

  logoutBtn: {
    background: "green",
    textTransform: "capitalize",
    width: "110px",
    height: "37px",
    color: "#fff",
    "&:hover": {
      background: "green",
      textTransform: "capitalize",
      width: "110px",
      height: "37px",
      color: "#fff",
    },
  },

  tableContainer: {
    // border: "3px solid red",
    width: { xs: "99%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
    margin: "auto",
    height: "85vh",
    overflowY: "scroll",
  },

  tableHeading: {
    font: "700 20px Poppins",
    color: "#000",
  },

  imageBox: {
    height: "50px",
    position: "relative",
    width: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  image: {
    borderRadius: "50%",
  },
  InputLabel: {
    position: "absolute",
    bottom: "-15px",
    right: "-15px",
    zIndex: "1",
  },
  addPhotoIcon: {
    color: "black",
    width: "19px",
    height: "19px",
  },
};

export default landingPageStyles;
