import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {projects.map((project) => {
          const { id, title, img, link } = project;
          return (
            <Grid item xs={12} sm={6} md={4} spacing={1} key={id}>
              <Card className="card">
                <a href={link} target="blank">
                  <CardImg
                    className="cardimage"
                    top
                    width="100%"
                    height="250px"
                    src={img}
                    alt={title}
                  />
                  <CardBody className="cardtitle">
                    <CardTitle>{title}</CardTitle>
                  </CardBody>
                </a>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ProjectList;
