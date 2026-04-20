import { getLocalTimeZone, isToday } from '@internationalized/date'
import { CalendarCell as AriaCalendarCell } from 'react-aria-components'
import { cx } from '../../utils/cx'

export function CalendarCell({ date, isHighlighted, ...props }) {
  const isTodayDate = isToday(date, getLocalTimeZone())

  return (
    <AriaCalendarCell
      {...props}
      date={date}
      className={({ isDisabled, isFocusVisible, isOutsideMonth }) =>
        cx(
          'relative size-10 focus:outline-hidden',
          isDisabled ? 'pointer-events-none' : 'cursor-pointer',
          isFocusVisible ? 'z-10' : 'z-0',
          isOutsideMonth && 'opacity-50',
        )
      }
    >
      {({ isDisabled, isFocusVisible, isSelected, formattedDate }) => (
        <div
          className={cx(
            'relative flex size-full items-center justify-center rounded-full text-sm text-secondary',
            isDisabled && 'text-secondary/50',
            isFocusVisible && 'outline-2 outline-offset-2 outline-focus-ring',
            isSelected && 'bg-brand-solid font-medium text-white hover:bg-brand-solid_hover hover:text-white',
            !isSelected && !isDisabled && 'hover:bg-primary_hover hover:font-medium',
            !isSelected && isTodayDate && 'bg-secondary font-medium hover:bg-secondary_hover',
          )}
        >
          {formattedDate}
          {(isHighlighted || isTodayDate) && (
            <div
              className={cx(
                'absolute bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full',
                isSelected ? 'bg-fg-white' : 'bg-fg-brand-primary',
                isDisabled && 'opacity-50',
              )}
            />
          )}
        </div>
      )}
    </AriaCalendarCell>
  )
}
