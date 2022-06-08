import React from 'react';
import classnames from 'classnames';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { useStyles } from './styles';
import { ItemType } from '../../types';
import { Verified } from '..';

const Mobile: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('wasm');
  const dateFormat = useRecoilValue(readDate);

  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`contract-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.flex}>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('verified')}
                  </Typography>
                  <Verified verified={x.verified} />
                </div>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('id')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {x.id}
                  </Typography>
                </div>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('contract')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.contract}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('hash')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.hash}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('creator')}
                </Typography>
                <AvatarName
                  name={getMiddleEllipsis(x.creator.address, {
                    beginning: 15, ending: 5,
                  })}
                  address={x.creator.address}
                  imageUrl={x.creator.imageUrl}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('version')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.version}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('instantiates')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.instantiates).format('0,0')}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('createdAt')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.createdAt), dateFormat)}
                </Typography>
              </div>
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
