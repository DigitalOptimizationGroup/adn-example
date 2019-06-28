import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ListFeature,
  NestedFeature,
  trackers
} from "@digitaloptgroup/cms-react";

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

  const handleChange = _ab => (event, isExpanded) => {
    if (isExpanded) {
      const outcomeName = "characterOpen";
      const metadata = [
        { key: "variationId", value: _ab.variationId },
        { key: "featureId", value: _ab.featureId }
      ];
      outcome(outcomeName, metadata);
    }

    setExpanded(isExpanded ? _ab.variationId : false);
  };

  return (
    <div className={classes.root}>
      <ListFeature queryName="starWarsList" tagName={null}>
        {({ isLoading, error, feature, _ab, forwardedRef }) => {
          if (feature) {
            const { characterName, moreInfo } = feature;
            return (
              <ExpansionPanel
                expanded={expanded === _ab.variationId}
                onChange={handleChange(_ab)}
                ref={forwardedRef}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    {characterName}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <NestedFeature feature={moreInfo}>
                    {({ feature }) => (
                      <Typography className={classes.body}>
                        {feature.description}
                      </Typography>
                    )}
                  </NestedFeature>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          }
          if (error) {
            return (
              <div>
                {error.code} : {error.message}
              </div>
            );
          } else {
            return <div>Unknown Errorn</div>;
          }
        }}
      </ListFeature>
    </div>
  );
}

export default trackers(ControlledExpansionPanels);
