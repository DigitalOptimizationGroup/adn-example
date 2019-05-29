import React from "react";
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
      const outcomeName = "openCharacter";
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
      <ListFeature queryName="starWarsList">
        {({ characterName, moreInfo, _ab }) => (
          <ExpansionPanel
            expanded={expanded === _ab.variationId}
            onChange={handleChange(_ab)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {characterName}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <NestedFeature feature={moreInfo}>
                {({ description }) => (
                  <Typography className={classes.body}>
                    {description}
                  </Typography>
                )}
              </NestedFeature>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
      </ListFeature>
    </div>
  );
}

export default trackers(ControlledExpansionPanels);
