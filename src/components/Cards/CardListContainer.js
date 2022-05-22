import CardItem from "../Cards/CardItem.js";
import { Container, Grid } from "@mui/material";

const CardListcontainer = () => {
    return(
        <Container>
          <Grid container  margin={5}>
            <Grid item md={3} >
              <CardItem title="Calibre 1" price="$10.000"  image={"calibre-mecanico-con-dial.jpg"} />
            </Grid>
            <Grid item md={3} >
              <CardItem title="Calibre 2" price="$9.000" image={"Calibre-Pie-de-rey-500-171-30B.jpg"} />
            </Grid>
            <Grid item md={3} >
              <CardItem title="Calibre 3" price="$15.000" image={"Calibre-Serie-500-IP67.jpg"} />
            </Grid>
          </Grid>
        
        </Container>
          )

        }
        export default CardListcontainer