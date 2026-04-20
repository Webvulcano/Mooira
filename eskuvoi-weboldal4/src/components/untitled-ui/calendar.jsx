import { ChevronLeft, ChevronRight } from '@untitledui/icons'
import {
  Calendar as AriaCalendar,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  Heading as AriaHeading,
  Button as AriaButton,
} from 'react-aria-components'
import { cx } from '../../utils/cx'
import { CalendarCell } from './cell'

export function Calendar({ highlightedDates, className, ...props }) {
  return (
    <AriaCalendar
      {...props}
      className={(state) =>
        cx('flex flex-col gap-3', typeof className === 'function' ? className(state) : className)
      }
    >
      {() => (
        <>
          <header className="flex items-center justify-between">
            <AriaButton
              slot="previous"
              className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-tertiary transition-colors hover:bg-primary_hover disabled:cursor-default disabled:opacity-40"
            >
              <ChevronLeft className="size-4" />
            </AriaButton>
            <AriaHeading className="text-sm font-semibold text-fg-secondary" />
            <AriaButton
              slot="next"
              className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-tertiary transition-colors hover:bg-primary_hover disabled:cursor-default disabled:opacity-40"
            >
              <ChevronRight className="size-4" />
            </AriaButton>
          </header>

          <AriaCalendarGrid weekdayStyle="short" className="w-max">
            <AriaCalendarGridHeader className="border-b-4 border-transparent">
              {(day) => (
                <AriaCalendarHeaderCell className="p-0">
                  <div className="flex size-10 items-center justify-center text-sm font-medium text-secondary">
                    {day.slice(0, 2)}
                  </div>
                </AriaCalendarHeaderCell>
              )}
            </AriaCalendarGridHeader>
            <AriaCalendarGridBody className="[&_td]:p-0 [&_tr]:border-b-4 [&_tr]:border-transparent [&_tr:last-of-type]:border-none">
              {(date) => (
                <CalendarCell
                  date={date}
                  isHighlighted={highlightedDates?.some((h) => date.compare(h) === 0)}
                />
              )}
            </AriaCalendarGridBody>
          </AriaCalendarGrid>
        </>
      )}
    </AriaCalendar>
  )
}
