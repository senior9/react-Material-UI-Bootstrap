import React from "react";
// import Button from "react-bootstrap"
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
// import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const News = (props) => {
  console.log(props.news);
  const {title,content,urlToImage} =props.news

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Box textAlign="center">
          <Button variant="contained" color="success">
            Success
          </Button>
        </Box>
      </Card.Body>
    </Card>
  );
};

export default News;
