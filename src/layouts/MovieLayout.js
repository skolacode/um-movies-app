import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Icon } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieLayout = () => {
  const params = useParams();

  return (
    <Box>
      <Box
        display="flex"
        bgcolor="rgb(25, 118, 210)"
        padding={2}
        alignItems="center"
      >
        <Box paddingRight={4}>
          <Link to="/">
            <Icon>
              <ArrowBack fontSize="24px" style={{ color: '#ffffff' }} />
            </Icon>
          </Link>
        </Box>
        <Box paddingRight={4}>
          <Link to={`/movies/${params.id}`} replace>
            <Button style={{ color: '#ffffff' }}>
              Details
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to={`/movies/${params.id}/images`}>
            <Button style={{ color: '#ffffff' }}>
              Images
            </Button>
          </Link>
        </Box>
      </Box>

      <Outlet />
    </Box>
  )
}

export default MovieLayout;
