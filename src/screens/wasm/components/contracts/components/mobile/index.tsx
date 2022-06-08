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
import { WASM_DETAILS } from '@utils/go_to_page';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { useStyles } from './styles';
import { ItemType } from '../../types';

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
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('contractName')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.name}
                </Typography>
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
                  {t('contractAddress')}
                </Typography>
                <AvatarName
                  name={x.contractAddress}
                  address={x.contractAddress}
                  href={WASM_DETAILS}
                />
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
                  name={x.creator.name}
                  address={x.creator.address}
                  imageUrl={x.creator.imageUrl}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('executes')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.executes).format('0,0')}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('initiatedAt')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.createdAt), dateFormat)}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('lastExecuted')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.lastExectured), dateFormat)}
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
