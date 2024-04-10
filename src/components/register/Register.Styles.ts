const registerPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    background: "hsl(180, 20%, 95%)",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    background: "#ffffff",
    borderRadius: "22px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    py: "70px",
    px: { xs: "8px", sm: "30px" },
    position: "absolute",
    top: { xs: "49%", lg: "50%" },
    left: { xs: "48%", lg: "50%" },
    transform: { xs: "translate(-48%, -48%)", lg: "translate(-50%, -50%)" },
    width: { xs: "95%", sm: "88%", md: "51%", lg: "43%", xl: "33%" },
  },

  signUpText: {
    fontSize: { xs: "40px", md: "52px" },
    color: "#000000",
    fontFamily: "Poppins",
    fontWeight: "500",
    mt: "-50px",
    cursor: "pointer",
    textAlign: "center",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  labelInputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  labelText: {
    fontSize: "15px",
    color: "#000000",
    fontFamily: "Poppins",
    fontWeight: "500",
  },

  textFieldStyle: {
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "44px",
    },
    input: {
      "&::placeholder": {
        color: "#808080",
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: "300",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #ADADAD",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ADADAD",
      },
      "&:hover fieldset": {
        borderColor: "#ADADAD",
      },
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },

  errorText: {
    fontSize: "13px",
    color: "#AD3113",
    fontFamily: "Poppins",
    fontWeight: "400",
    alignSelf: "flex-start",
  },

  usernameContactContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  SignupButton: {
    background: "#E48700",
    height: "44px",
    textTransform: "capitalize",
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: "500",
    borderRadius: "10px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      background: "#E48700",
    },
  },

  passwordIcon: {
    cursor: "pointer",
  },

  successfulMsg: {
    fontSize: "14px",
    color: "green",
    fontFamily: "Poppins",
    mt: "-20px",
  },
};

export default registerPageStyles;
