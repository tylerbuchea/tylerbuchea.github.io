import React from "react";
import Page from "../components/Home";
import Helmet from "react-helmet";

export default () => (
  <>
    <Helmet>
      <title>Tyler Buchea | Software Engineer</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://tylerbuchea.com/" />
      <link rel="shortcut icon" href="https://tylerbuchea.com/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossorigin="anonymous"
      />
    </Helmet>
    <Page />
  </>
);