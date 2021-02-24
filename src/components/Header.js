import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "auto",
    marginTop: "40px",
  },
  media: {
    height: 450,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media-exp1.licdn.com/dms/image/C4D03AQFYUqBlSyAkEQ/profile-displayphoto-shrink_400_400/0/1613588354028?e=1619654400&v=beta&t=nMCkd0iW9fpvpHWis58iG_DwRu7GgvNC7rYP9JjlbW4"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Yazan Almatar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Full-Stack Developer, NYC
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Resume
        </Button>
        <Button size="small" color="primary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}
