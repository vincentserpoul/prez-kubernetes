// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  kubernetes: require("../assets/kubernetes.svg"),
  kubernetesName: require("../assets/kubernetes-name.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#5A6464"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Image width="20%" src={images.kubernetes} /><br />
            <Image width="50%" src={images.kubernetesName} />
            <Heading size={2} fill caps textColor="black">
              irl
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
