// Import React
import React from "react";

import CodeSlide from 'spectacle-code-slide';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-yaml.min.js';
import 'prismjs/components/prism-powershell.min.js';

Prism.highlightAll();

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
  k8s: require("../assets/k8s.png"),
  GKELogo: require("../assets/gke-logo.png"),
  nginxLogo: require("../assets/nginxLogo.svg"),
  golangLogo: require("../assets/golangLogo.svg"),
  phpLogo: require("../assets/phpLogo.svg"),
  redisLogo: require("../assets/redisLogo.svg"),
  grafanaLogo: require("../assets/grafanaLogo.svg"),
  influxdbLogo: require("../assets/influxdbLogo.svg"),
  mysqlLogo: require("../assets/mysqlLogo.svg"),
  reactLogo: require("../assets/reactLogo.svg"),
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
  kubend: require("../assets/kubernetesend.png"),
  horrified: require("../assets/horrifiedcat.jpg"),
  magicat: require("../assets/space-cat.jpg"),
  calmcat: require("../assets/calmcat.jpg"),
  magic: require("../assets/magic.png")
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
              a tale of 4 months
            </Heading>
            <Heading size={3} fill textColor="secondary">
              IRL with <Image width="8%" margin="0" src={images.GKELogo} />
            </Heading>
          </Slide>
          <Slide
            transition={["fade", "zoom"]}
            bgImage={images.reactLogo}
            bgSize="20%"
            bgRepeat="no-repeat"
            bgPosition="50% 10%"
            bgColor="#ff4081"
          >
            <Heading size={2} fit caps textColor="black">
              warning
            </Heading>
            <Appear fid="1">
              <Heading size={2} fit caps textColor="primary">
                this presentation was entirely written in javascript
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={3} fit textColor="secondary">
                thanks to reactjs and spectacle (formidable)
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading textSize="1em" fill textColor="tertiary">
                ...there might be bugs (:
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "slide", "fade"]} bgColor="secondary">
            <Heading size={1} fill caps textColor="black">
              the stack
            </Heading>
            <Appear fid="1">
              <Image height="3em" margin="15px 15px 0 0" src={images.nginxLogo} />
            </Appear>
            <Appear fid="2">
              <Image height="3em" margin="15px 15px 0 0" src={images.golangLogo} />
            </Appear>
            <Appear fid="3">
              <Image height="3em" margin="15px 15px 0 0" src={images.phpLogo} />
            </Appear>
            <Appear fid="4">
              <Image height="3em" margin="15px 15px 0 0" src={images.grafanaLogo} />
            </Appear>
            <Appear fid="5">
              <Image height="3em" margin="15px 15px 0 0" src={images.influxdbLogo} />
            </Appear>
            <Appear fid="6">
              <Image height="3em" margin="15px 15px 0 0" src={images.redisLogo} />
            </Appear>
            <Appear fid="7">
              <Image height="3em" margin="15px 15px 0 0" src={images.mysqlLogo} />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.step1} bgPosition="0 0" bgRepeat="no-repeat" bgDarken={0.4}>
            <Heading fit caps textColor="white">
              Step 1 - create the cluster
            </Heading>
            <Appear fid="1">
              <Heading fit textColor="black">
                Minimum size (no cheap setup)
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading fit textColor="tertiary">
                Logging and monitoring can be disabled
              </Heading>
            </Appear>
            <Appear fid="3">
              <CodePane lang="powershell" textSize="0.6em" margin="5px 0 0 0">
                gcloud config set compute/zone asia-east1-c
              </CodePane>
            </Appear>
            <Appear fid="4">
              <CodePane lang="powershell" textSize="0.6em" margin="5px 0 0 0">
                gcloud container clusters get-credentials YOURCLUSTER
              </CodePane>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.step2} bgPosition="0 0" bgRepeat="no-repeat" bgDarken={0.4}>
            <Heading fit caps textColor="white">
              Step 2 - upload your custom docker images
            </Heading>
            <Appear fid="1">
              <CodePane lang="powershell" textSize="0.6em" margin="5px 0 0 0">
                gcloud docker -- push eu.gcr.io/yourproject/yourimage:vX
              </CodePane>
            </Appear>
            <Appear fid="2">
              <Heading fit textColor="black">
                Free docker container registry
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading fit textColor="tertiary">
                Location is important
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.kubernetes} bgDarken={0.5} bgColor="primary">
            <Image fit src={images.k8s} width="100%" />
          </Slide>
          <Slide transition={["spin"]} bgImage={images.redisLogo} bgDarken={0.5} bgColor="primary">
            <Heading size={1} fit caps textColor="secondary">
              Step3 - Create your services
            </Heading>
            <Text textColor="tertiary">
              a service defines a set of pods and a means by which to access them, such as single stable IP address and corresponding DNS name.
            </Text>
            <Heading textSize="50" fill textColor="secondary">
              an example: redis
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            align="top"
            lang="yaml"
            bgImage={images.redisLogo}
            bgDarken={0.8}
            bgColor="primary"
            code={require("raw!../assets/redis-go.yaml")}
            ranges={[
              { loc: [0, 15], title: "redis-go.yaml" },
              { loc: [0, 2]},
              { loc: [2, 5]},
              { loc: [5, 11]},
              { loc: [11, 14]},
              { loc: [14, 15], note: "kubectl apply -f redis-go.yaml" }
            ]}
          />
          <Slide transition={["spin", "zoom"]} bgDarken={0.5} bgColor="secondary">
            <Heading size={1} fit caps textColor="primary">
              Step4 - Create your deployment
            </Heading>
            <Text color="secondary">
              a deployment provides <b>declarative</b> updates for Pods and Replica Sets
            </Text>
          </Slide>
          <CodeSlide
            transition={["fade", "zoom"]}
            align="top"
            lang="yaml"
            bgImage={images.redisLogo}
            bgDarken={0.8}
            bgColor="primary"
            code={require("raw!../assets/redis-go-d.yaml")}
            ranges={[
              { loc: [0, 36], title: "redis-go-d.yaml" },
              { loc: [0, 3]},
              { loc: [3, 5]},
              { loc: [5, 11]},
              { loc: [11, 24]},
              { loc: [24, 27]},
              { loc: [21, 22], note: "Access from other pods through the simple `redis-go` name"},
              { loc: [35, 36], note: "gcloud compute disks create redis-go-disk --size 10GB"},
              { loc: [30, 35]},
              { loc: [27, 30]},
              { loc: [35, 36], note: "kubectl apply -f redis-go_d.yaml" }
            ]}
          />
          <Slide transition={["spin"]} bgImage={images.kubernetes} bgDarken={0.75} bgColor="primary">
            <Heading fit caps textColor="secondary">
              Services running
            </Heading>
            <Appear fid="1">
              <CodePane
                lang="powershell"
                source={require("raw!../assets/runningservices.cm")}
                textSize="0.5em"
              />
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.dockerLogo} bgDarken={0.75} bgColor="secondary">
            <Heading fit caps textColor="secondary">
              Pods running
            </Heading>
            <Appear fid="1">
              <CodePane
                lang="powershell"
                source={require("raw!../assets/runningpods.cm")}
                textSize="0.6em"
              />
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.calmcat} bgDarken={0.5}>
            <Heading fit caps textColor="tertiary">
              Scaling magic
            </Heading>
            <Appear fid="1">
              <CodePane
                lang="powershell"
                source={require("raw!../assets/scaling_1.cm")}
                textSize="0.45em"
              />
            </Appear>
          </Slide>

          <CodeSlide
            transition={["fade", "zoom"]}
            align="top"
            lang="yaml"
            bgImage={images.magic}
            bgDarken={0.7}
            bgColor="primary"
            code={require("raw!../assets/autoscaler.yaml")}
            ranges={[
              { loc: [0, 15], title: "autoscaler.yaml" },
              { loc: [0, 2]},
              { loc: [2, 5]},
              { loc: [5, 15]}
            ]}
          />
          <Slide transition={["spin"]} bgImage={images.magic} bgDarken={0.5}>
            <Appear fid="1">
              <CodePane
                lang="powershell"
                source={require("raw!../assets/scaling_1b.cm")}
                margin="5px auto"
                textSize="0.5em"
              />
            </Appear>
            <Appear fid="4">
              <CodePane lang="powershell" textSize="0.5em" margin="5px 0 0 0">
                $ siege -d10 -c50 https://XXX
              </CodePane>
            </Appear>
          </Slide>
          <Slide transition={["scale"]} bgImage={images.magicat} align="top" bgDarken={0.5}>
            <Appear fid="1">
              <CodePane
                textSize="0.6em"
                lang="powersheel"
                source={require("raw!../assets/scaling_2.cm")}
              />
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.monitoringbg} bgDarken={0.75} align="flex-start">
            <Heading size={1} fill caps textColor="secondary">
              Monitoring
            </Heading>
            <Image width="90%" margin="15px 15px 0 0" src={images.monitoring} />
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
              <Quote textColor="tertiary">Don't worry, Google always makes it right!</Quote>
              <Cite>Should nobody say, EVER (I did)</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin"]} align="flex-start" bgImage={images.horrified} bgDarken={0.5}>
            <Appear fid="1">
              <Image width="60%" margin="5px 5px" src={images.kubestack1} />
            </Appear>
            <Appear fid="2">
              <Image width="60%" margin="5px 5px" src={images.kubestack2} />
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.kubestack2} bgDarken={0.8} bgColor="black">
            <Appear fid="3">
              <BlockQuote>
                <Quote textColor="tertiary">Thanks for bringing this up</Quote>
                <Cite>Google Engineer on stackoverflow, Mar 2015</Cite>
              </BlockQuote>
            </Appear>
            <Appear fid="4">
               <BlockQuote>
                  <Quote textColor="tertiary">Thank you for patience</Quote>
                  <Cite>Google Engineer on stackoverflow, Mar 2015</Cite>
                </BlockQuote>
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.brokenheart} bgPosition="0 0" bgRepeat="no-repeat" bgDarken={0.5}>
            <Heading size={1} fill caps textColor="secondary">
              Issues (as of 1.2)
            </Heading>
            <List>
              <Appear><ListItem>Firewall/Networking (desync, security)</ListItem></Appear>
              <Appear><ListItem>Price for a small setup</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.kubend} bgDarken={0.3}>
            <Heading fit caps textColor="primary">the end</Heading>
            <Heading fit caps textColor="secondary">questions?</Heading>
            <Heading fit caps textColor="ternary">you can find the prez here: kuberneprez.surge.sh</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
