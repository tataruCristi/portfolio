import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Social = () => {
  const classes = {
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    link: {
      color: "hsl(0, 0%, 20%)",
      marginTop: "1rem",
      "&:hover": {
        color: "hsl(0, 0%, 0%)",
      },
      
    },
  };
  return (
    <Box sx={classes.box}>
      <Link
        sx={classes.link}
        href="https://www.linkedin.com/in/tataru-cristi/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </Link>
      <Link
        sx={classes.link}
        href="https://github.com/tataruCristi"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
};

export default Social;
