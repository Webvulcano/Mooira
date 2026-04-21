import { getLocalTimeZone, isToday } from '@internationalized/date'
import { CalendarCell as AriaCalendarCell } from 'react-aria-components'
import { cx } from '../../utils/cx'

export function CalendarCell({ date, isHighlighted }) {
  const isTodayDate = isToday(date, getLocalTimeZone())

  return (
    <AriaCalendarCell
      date={date}
      className={({ isDisabled, isOutsideMonth }) =>
        cx(
          'dp-cell',
          isDisabled && 'dp-cell--disabled',
          isOutsideMonth && 'dp-cell--outside',
        )
      }
    >
      {({ isDisabled, isFocusVisible, isSelected, formattedDate }) => (
        <div
          className={cx(
            'dp-cell__inner',
            isSelected && 'dp-cell__inner--selected',
            !isSelected && isTodayDate && 'dp-cell__inner--today',
            isFocusVisible && 'dp-cell__inner--focus',
            isDisabled && 'dp-cell__inner--disabled',
          )}
        >
          <span className="dp-cell__number">{formattedDate}</span>
          {(isHighlighted || isTodayDate) && !isSelected && (
            <span className="dp-cell__dot" aria-hidden="true" />
          )}
        </div>
      )}
    </AriaCalendarCell>
  )
}
