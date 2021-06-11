import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function NotFoundView(props) {
    const { classes } = props;
    return (
        <div className={classes.notFoundBlock}>
            <p className={classes.notFoundText}>404 - Page Not Found</p>
        </div>
    );
}

NotFoundView.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NotFoundView);
