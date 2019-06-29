import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Feature, withOutcome } from "@digitaloptgroup/cms-react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "600px",
    marginTop: "50px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  body: {
    textAlign: "left"
  }
}));

function ControlledExpansionPanels({ outcome }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = tracking => (event, isExpanded) => {
    if (isExpanded) {
      const outcomeName = "characterOpen";
      const metadata = [
        { key: "variationId", value: tracking.variationId },
        { key: "featureId", value: tracking.featureId }
      ];
      outcome(outcomeName, metadata);
    }

    setExpanded(isExpanded ? tracking.variationId : false);
  };

  return (
    <div className={classes.root}>
      <Feature queryName="starWarsList">
        {({
          variation: starWarsList,
          tracking: starWarsTracking,
          isLoading,
          error
        }) => {
          if (starWarsList) {
            return (
              <Feature.Track {...starWarsTracking}>
                {({ trackingRef }) => (
                  <div ref={trackingRef}>
                    {starWarsList.map(({ variation, tracking }, i) => {
                      return (
                        <Feature.Track {...tracking} key={tracking.variationId}>
                          {({ trackingRef }) => {
                            const { characterName, moreInfo } = variation;
                            return (
                              <ExpansionPanel
                                expanded={expanded === tracking.variationId}
                                onChange={handleChange(tracking)}
                                ref={trackingRef}
                              >
                                <ExpansionPanelSummary
                                  expandIcon={<ExpandMoreIcon />}
                                >
                                  <Typography className={classes.heading}>
                                    {characterName}
                                  </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                  <Feature.Track {...moreInfo.tracking}>
                                    {({ trackingRef }) => {
                                      if (moreInfo.variation) {
                                        return (
                                          <Typography
                                            className={classes.body}
                                            ref={trackingRef}
                                          >
                                            {moreInfo.variation.description}
                                          </Typography>
                                        );
                                      }
                                      return null;
                                    }}
                                  </Feature.Track>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                            );
                          }}
                        </Feature.Track>
                      );
                    })}
                  </div>
                )}
              </Feature.Track>
            );
          }
          return null;
        }}
      </Feature>
    </div>
  );
}

export default withOutcome(ControlledExpansionPanels);
