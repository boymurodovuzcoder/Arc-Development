import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import { CallToAction } from "./UI/CallToAction";
import { sections } from "./sections.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

import visionIcon from "../assets/vision.svg";
import techAnimation from "../animations/technologyAnimation/data.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: techAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    paddingTop: "1rem",
    paddingBottom: "10rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
}));

export const Revolution = function () {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container direction="column">
        <Grid item className={classes.mainContainer}>
          <Typography
            variant="h2"
            color="primary"
            align={matchesMD ? "center" : "inherit"}
            style={{
              fontFamily: "Pacifico",
            }}
          >
            The Revolution
          </Typography>
        </Grid>
        <Grid
          className={classes.mainContainer}
          item
          container
          alignItems="center"
          direction={matchesMD ? "column" : "row"}
        >
          <Grid item lg>
            <LazyLoadImage
              src={visionIcon}
              alt="visionIcon"
              style={{
                maxWidth: matchesSM ? 300 : "40rem",
                marginRight: matchesMD ? 0 : "5rem",
                marginBottom: matchesMD ? "5rem" : 0,
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{
              textAlign: !matchesMD ? "right" : "center",
              maxWidth: "40rem",
            }}
            lg
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Vision
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                The rise of computers, and subsequently the Internet, has
                completely altered every aspect of human life. This has
                increased our comfort, broadened our connections, and reshaped
                how we view the world.
              </Typography>
              <Typography variant="body2" paragraph>
                What once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
              <Typography variant="body2" paragraph>
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
              <Typography variant="body2" paragraph>
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to
                thrive in this new frontier.
              </Typography>
              <Typography variant="body2" paragraph>
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests,
                helping them overcome life’s obstacles. Each project is a step
                towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.mainContainer}
          item
          container
          alignItems="center"
          direction={matchesMD ? "column" : "row"}
        >
          <Grid
            item
            container
            direction="column"
            style={{
              textAlign: !matchesMD ? "left" : "center",
              maxWidth: "40rem",
            }}
            lg
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Technology
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development.
              </Typography>
              <Typography variant="body2" paragraph>
                Instead of chaining together long individual pages, like
                traditional websites, React websites are built with little
                chunks of code called components. These components are faster,
                easier to maintain, and are easily reused and customized, each
                serving a singular purpose.
              </Typography>
              <Typography variant="body2" paragraph>
                Two years later they shocked the world by releasing a similar
                system, React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development
                platforms, you can leverage the knowledge you already possessed
                from building websites and reapply it directly! This was a huge
                leap forward.
              </Typography>
              <Typography variant="body2" paragraph>
                This technology is now being used by companies like AirBnB,
                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                Facebook purchased Instagram large portions of it were even
                rebuilt using React.
              </Typography>
              <Typography variant="body2" paragraph>
                Developers have since built on top of these systems by
                automating project setup and deployment, allowing creators to
                focus as much as possible on their work itself.
              </Typography>
              <Typography variant="body2" paragraph>
                These technical advancements translate into savings by
                significantly reducing the workload and streamlining the
                workflow for developing new pieces of software, while also
                lowering the barrier to entry for mobile app development.
              </Typography>
              <Typography variant="body2" paragraph>
                This puts personalization in your pocket — faster, better, and
                more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
            <Lottie
              options={defaultOptions}
              style={{
                maxWidth: "40rem",
                margin: 0,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            marginBottom: "0.75rem",
          }}
          justify="center"
        >
          <Grid item>
            <Typography variant="h4" color="primary">
              Process
            </Typography>
          </Grid>
        </Grid>
        {/* Consulation Section starts here */}

        {sections.map((section, index) => (
          <Grid
            key={index}
            className={classes.mainContainer}
            item
            container
            justify={matchesMD ? "center" : undefined}
            style={{
              backgroundColor:
                section.backgroundColor.length > 8
                  ? eval(section.backgroundColor)
                  : section.backgroundColor,
              height: "90rem",
            }}
          >
            <Grid
              item
              container
              direction="column"
              lg
              style={{
                maxWidth: "20rem",
                textAlign: matchesMD ? "center" : "inherit",
              }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  style={{
                    color: "#000",
                    marginTop: "5rem",
                  }}
                >
                  {section.title}
                </Typography>
              </Grid>
              <Grid item>
                {section.paragraphs.map((paragraph, index) => (
                  <Typography
                    variant="body2"
                    key={index}
                    paragraph
                    style={{ color: "#fff" }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Grid>
            </Grid>
            <Grid item lg container alignItems="center" justify="center">
              <LazyLoadImage
                threshold={750}
                src={section.icon}
                alt={section.iconAlt}
                width="100%"
                style={{
                  maxWidth: section.iconMaxWidth,
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>

      <CallToAction />
    </>
  );
};
