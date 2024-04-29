import Header from "../components/Header";

import { Box, Typography, Button, styled } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

const Component = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  margin: '0 110px',
//   accessing child -> Box with help of Parent
  '& > div ': {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > p ': {
        fontSize: '2.5rem',
        lineHeight: 1.25,
        letterSpacing: -1,
      },
      '& > button': {
        height: 60,
        width: 220,
        background: '#A0C1D1',
        color: '#000000',
        textTransform: 'none',
        fontSize: 20,
        fontWeigth: 800,
        marginTop: 36
      }
  }
});

const Home = () => {
    
  const navigate = useNavigate();

  const heroImage =
    "https://cdn.dribbble.com/users/3300348/screenshots/14499799/media/a5e015a20732d38d8078b752624abb8a.png?resize=1000x750&vertical=center";

  return (
    <div>
      <Header />
      <Component>
        {/* Left Portion */}
        <Box>
          <Typography>
            Connect Your Career Path and Explore Opportunities
          </Typography>
          <Button variant="contained" onClick={() => navigate(routePath.create)}>Post a Job</Button>
        </Box>
        {/* Rigth Portion */}
        <Box>
          <img src={heroImage} alt="hero" style={{width: 490,height: 300}} />
        </Box>
      </Component>
    </div>
  );
};

export default Home;
