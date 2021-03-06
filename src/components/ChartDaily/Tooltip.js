import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { formatComma, formatUnix } from '../../utils/formatters';
import TooltipWrapper from './TooltipWrapper';

const Tooltip = ({
  active, payload, label, chartType,
}) => {
  const formattedLabel = formatUnix(label);
  if (active) {
    return (
      <TooltipWrapper label={formattedLabel}>
        <div className="chart-daily-tooltip__numbers">
          Daily
          {' '}
          {chartType}
          {': '}
          <strong>{formatComma(payload[0].value)}</strong>
        </div>
        {payload[1] && (
          <div className="chart-daily-tooltip__numbers">
            7-day average:
            {' '}
            <strong>{formatComma(payload[1].value)}</strong>
          </div>
        )}
      </TooltipWrapper>
    );
  }
  return null;
};

Tooltip.defaultProps = {
  label: null,
  chartType: '',
};

Tooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(dayjs),
  ]),
  chartType: PropTypes.string,
};

export default Tooltip;
