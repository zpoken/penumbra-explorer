import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import { useGrid } from '@hooks';
import {
  AvatarName, SortArrows,
} from '@components';
import { useStyles } from './styles';
import { useValidatorsContext } from '../../contexts/validators';
import { fetchColumns } from './utils';
import {
  SkipRate, Condition,
} from '..';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const columns = fetchColumns(t);

  const {
    items,
    sortDirection,
    sortKey,
    handleSort,
  } = useValidatorsContext();
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const formatItems = items.map((x, i) => {
    return ({
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.identity}
          imageUrl={x.validator.image}
          name={x.validator.moniker}
        />
      ),
      stake: `${x.stake} (${x.stakePercent}%)`,
      fee: x.fee,
      lastVote: x.lastVote,
      skipRate: (
        <SkipRate
          percentage={x.skipPercent}
          content={`${x.skipRate} / ${x.skipTotal}`}
        />
      ),
      condition: (
        <Condition />
      ),
    });
  });

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer onResize={onResize}>
        {({
          height, width,
        }) => {
          return (
            <>
              {/* ======================================= */}
              {/* Table Header */}
              {/* ======================================= */}
              <Grid
                ref={columnRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={50}
                rowCount={1}
                rowHeight={() => 50}
                width={width}
              >
                {({
                  columnIndex, style,
                }) => {
                  const {
                    key,
                    align,
                    component,
                    sort,
                  } = columns[columnIndex];

                  return (
                    <div
                      style={style}
                      className={classnames(
                        classes.cell,
                        {
                          [classes.flexCells]: component || sort,
                          [align]: sort || component,
                        },
                      )}
                      onClick={() => (sort ? handleSort(key) : null)}
                      role="button"
                    >
                      {component || (
                      <Typography
                        variant="h4"
                        align={align}
                      >
                        {t(key)}
                        {!!sort && (
                        <SortArrows
                          sort={sortKey === key
                            ? sortDirection
                            : undefined}
                        />
                        )}
                      </Typography>
                      )}
                    </div>
                  );
                }}
              </Grid>
              {/* ======================================= */}
              {/* Table Body */}
              {/* ======================================= */}
              <Grid
                ref={gridRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={formatItems.length}
                rowHeight={getRowHeight}
                width={width}
              >
                {({
                  columnIndex, rowIndex, style,
                }) => {
                  const {
                    key, align,
                  } = columns[columnIndex];
                  const item = formatItems[rowIndex][key];
                  return (
                    <div
                      style={style}
                      className={classnames(classes.cell, classes.body, {
                        odd: !(rowIndex % 2),
                      })}
                    >
                      <Typography
                        variant="body1"
                        align={align}
                        component="div"
                      >
                        {item}
                      </Typography>
                    </div>
                  );
                }}
              </Grid>
            </>
          );
        }}
      </AutoSizer>
    </div>

  );
};

export default Desktop;