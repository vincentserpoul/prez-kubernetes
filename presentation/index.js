// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
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
  kubernetesName: require("../assets/kubernetes-name.svg"),
  GKELogo: require("../assets/gke-logo.png"),
  nginxLogo: require("../assets/nginxLogo.svg"),
  golangLogo: require("../assets/golangLogo.svg"),
  phpLogo: require("../assets/phpLogo.svg"),
  redisLogo: require("../assets/redisLogo.svg"),
  grafanaLogo: require("../assets/grafanaLogo.svg"),
  influxdbLogo: require("../assets/influxdbLogo.svg"),
  mysqlLogo: require("../assets/mysqlLogo.svg"),
  dockerLogo: require("../assets/dockerLogo.svg"),
  step1: require("../assets/1-createcluster.png"),
  step2: require("../assets/2-uploadyourimages.png"),
  monitoring: require("../assets/monitoringpods.png"),
  monitoringbg: require("../assets/monitoring.jpg"),
  logging: require("../assets/logging.png"),
  loggingbg: require("../assets/loggingbg.png"),
  mobilealerting: require("../assets/mobilealert.png"),
  mobilephone: require("../assets/mobilephone.jpg"),
  googlecl: require("../assets/google-cloud-platform.png"),
  kubestack1: require("../assets/kubeStack1.png"),
  kubestack2: require("../assets/kubeStack2.png"),
  brokenheart: require("../assets/Broken_heart.svg"),
  kubend: require("../assets/kubernetesend.png")
};

preloader(images);

const theme = createTheme({
  primary: "#5A6464",
  secondary: "#ccddff"
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
            <Heading size={3} fill textColor="secondary">
              with <Image width="8%" margin="0" src={images.GKELogo} />
            </Heading>
          </Slide>
          <Slide transition={["zoom", "slide", "fade"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              the stack
            </Heading>
            <Appear fid="1">
              <Image height="150px" margin="15px 15px 0 0" src={images.nginxLogo} />
            </Appear>
            <Appear fid="2">
              <Image height="150px" margin="15px 15px 0 0" src={images.golangLogo} />
            </Appear>
            <Appear fid="3">
              <Image height="150px" margin="15px 15px 0 0" src={images.phpLogo} />
            </Appear>
            <Appear fid="4">
              <Image height="150px" margin="15px 15px 0 0" src={images.grafanaLogo} />
            </Appear>
            <Appear fid="5">
              <Image height="150px" margin="15px 15px 0 0" src={images.influxdbLogo} />
            </Appear>
            <Appear fid="6">
              <Image height="150px" margin="15px 15px 0 0" src={images.redisLogo} />
            </Appear>
            <Appear fid="7">
              <Image height="150px" margin="15px 15px 0 0" src={images.mysqlLogo} />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.step1} bgDarken={0.5}>
            <Heading size={1} fit caps textColor="white">
              Step1 - create the cluster
            </Heading>
            <Appear fid="1">
              <Heading fit textColor="secondary">
                Minimum size (no cheap setup)
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading fit textColor="tertiary">
                Logging and monitoring can be disabled
              </Heading>
            </Appear>
            <Appear fid="3">
              <CodePane>
                gcloud config set compute/zone asia-east1-c
              </CodePane>
            </Appear>
            <Appear fid="4">
              <CodePane>
                gcloud container clusters get-credentials yourcluster
              </CodePane>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.step2} bgDarken={0.5}>
            <Heading size={1} fit caps textColor="white">
              Step2 - upload your custom docker images
            </Heading>
            <Appear fid="1">
              <CodePane textSize={20} textColor="quaternary" textColor="black">
                gcloud docker -- push eu.gcr.io/yourproject/yourimage:vX
              </CodePane>
            </Appear>
            <Appear fid="2">
              <Heading fit textColor="secondary">
                Free docker container registry
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading fit textColor="tertiary">
                Location is important
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.redisLogo} bgDarken={0.5} bgColor="primary">
            <Heading size={1} fit caps textColor="secondary">
              Step3 - Create your services
            </Heading>
            <Heading textSize="50" fill textColor="tertiary">
              example: redis
            </Heading>
            <Appear fid="1">
              <CodePane
                lang="yaml"
                source={require("raw!../assets/redis-go.yaml")}
                margin="20px auto"
              />
            </Appear>
            <Appear fid="3">
              <CodePane textSize={20} textColor="quaternary" textColor="black">
                kubectl apply -f redis-go.yaml
              </CodePane>
            </Appear>
          </Slide>
          <Slide transition={["fade", "zoom"]} bgImage={images.redisLogo} bgDarken={0.5} bgColor="secondary" align="flex-start">
            <Heading size={1} fit caps textColor="secondary">
              Step4 - Create your deployment
            </Heading>
            <Heading textSize="50" fill textColor="tertiary">
              example: still redis
            </Heading>
            <Appear fid="1">
              <CodePane
                lang="yaml"
                source={require("raw!../assets/redis-go-d.yaml")}
                margin="20px auto"
              />
            </Appear>
            <Appear fid="2">
              <CodePane textSize={20} textColor="quaternary" textColor="black">
                gcloud compute disks create redis-go-disk --size 10GB
              </CodePane>
            </Appear>
            <Appear fid="3">
              <CodePane textSize={20} textColor="quaternary" textColor="black">
                kubectl apply -f redis-go_d.yaml
              </CodePane>
            </Appear>
            <Appear fid="3">
              <Heading textSize="50" fit textColor="tertiary">
                Access from other pods through the simple "redis-go" tag
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.kubernetes} bgDarken={0.75} bgColor="primary">
            <Heading size={1} fit caps textColor="secondary">
              Services running
            </Heading>
            <Appear fid="1">
              <CodePane
                lang="shell"
                source={require("raw!../assets/runningservices.cm")}
                margin="20px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.dockerLogo} bgDarken={0.75} bgColor="secondary">
            <Heading size={1} fit caps textColor="tertiary">
              Pods running
            </Heading>
            <Appear fid="2">
              <CodePane
                lang="shell"
                source={require("raw!../assets/runningpods.cm")}
                margin="20px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.monitoringbg} bgDarken={0.75} align="flex-start">
            <Heading size={1} fill caps textColor="secondary">
              Monitoring
            </Heading>
            <Image width="100%" margin="15px 15px 0 0" src={images.monitoring} />
          </Slide>
          <Slide transition={["fade", "zoom"]} bgImage={images.loggingbg} bgDarken={0.75}>
            <Heading size={1} fill caps textColor="secondary">
              Logging
            </Heading>
            <Image width="100%" margin="15px 15px 0 0" src={images.logging} />
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.mobilephone} bgDarken={0.75} align="flex-start">
            <Heading size={1} fill caps textColor="secondary">
              Alerting
            </Heading>
            <Image width="100%" margin="15px 15px 0 0" src={images.mobilealerting} />
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.googlecl} bgDarken={0.5} bgColor="black">
            <BlockQuote>
              <Quote>Don't worry, Google always makes it right!</Quote>
              <Cite>Vincent Serpoul, December 2015</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin"]} align="flex-start" bgColor="#4d79ff">
            <BlockQuote>
              <Quote textColor="black">Maybe not always :)</Quote>
              <Cite>Vincent Serpoul, June 2015</Cite>
            </BlockQuote>
            <Image width="80%" margin="15px 15px 0 0" src={images.kubestack1} />
            <Image width="80%" margin="15px 15px 0 0" src={images.kubestack2} />
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.brokenheart} bgDarken={0.5}>
            <Heading size={1} fill caps textColor="secondary">
              Issues
            </Heading>
            <List>
              <Appear><ListItem>Firewall/Networking not synced with the rest</ListItem></Appear>
              <Appear><ListItem>Price for a small setup</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.kubend} bgDarken={0.3}>
            <Heading size={1} fill caps textColor="secondary">Questions?</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
