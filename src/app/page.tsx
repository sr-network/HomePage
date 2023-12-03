import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md" className="my-4">
      <Card>
        <CardMedia
          sx={{ height: 480 }}
          image="https://library.restent.win/images/introBanner.webp"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            className="text-center"
          >
            "il Mols Ene end ol Skie Nouche Sai Vell Elay"
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="text-center"
          >
            Introduction of the owner of Restent Ou (gxres042) and SliverRiver
            (slivermoe).
          </Typography>
          <hr className="my-3" />
          <Grid container className="px-5 py-4">
            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                Who am I
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                Just like you see, I am a normal student who comes from Guangxi, China.
              </Typography>
              <Typography variant="body1" gutterBottom>
                In the angle of others, I have a lot of skills, but actually I am not that much. That is why I set myself as always a noob.
              </Typography>
              <Typography variant="body1" gutterBottom>
                And the important thing: Restent Ou and SliverRiver are just a same person in reality, that is me.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className="px-5 py-4">
            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                Where I work for
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                <Link href="https://github.com/s-complex" underline="hover">Sliver Complex</Link> · Work for myself
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Link href="https://github.com/LittleSkinCommspt" underline="hover">LittleSkin Community</Link> · Member
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Link href="https://go.14cloud.cn" underline="hover">14Cloud</Link> · Contributor
              </Typography>
            </Grid>
          </Grid>
          <Grid container className="px-5 py-4">
            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                My favorite
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                Listen to music: rhythm music (include artcore, hardcore and even speedcore), Chinese songs, traditional English songs and more.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Watching videos: IT, Minecraft, cooking, net literature and more.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Playing games: Minecraft, rhythm games (include Arcaea and Phigros).
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
