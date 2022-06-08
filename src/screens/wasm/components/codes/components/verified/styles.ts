import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '&.verified .icon-verified_svg__background': {
            fill: theme.palette.custom.primaryData.three,
          },
        },
      });
    },
  )();

  return styles;
};
