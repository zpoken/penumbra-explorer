import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        title: {
          marginBottom: theme.spacing(2),
        },
        paginate: {
          marginTop: theme.spacing(3),
        },
        mobile: {
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
        },
        desktop: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
          },
        },
      });
    },
  )();

  return styles;
};
