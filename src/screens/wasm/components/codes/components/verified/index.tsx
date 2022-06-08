import React from 'react';
import classnames from 'classnames';
import VerifiedIcon from '@assets/icon-verified.svg';
import { useStyles } from './styles';

const Verified: React.FC<{verified: boolean} & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <VerifiedIcon
      className={classnames(classes.root, props.className, {
        verified: props.verified,
      })}
    />
  );
};

export default Verified;
