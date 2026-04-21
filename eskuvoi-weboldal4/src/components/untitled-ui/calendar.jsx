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
import { CalendarCell } from './cell'

export function Calendar({ highlightedDates }) {
  return (
    <AriaCalendar className="dp-calendar">
      {() => (
        <>
          <header className="dp-header">
            <AriaButton slot="previous" className="dp-nav" aria-label="Előző hónap">
              <ChevronLeft className="dp-nav__icon" />
            </AriaButton>
            <AriaHeading className="dp-heading" />
            <AriaButton slot="next" className="dp-nav" aria-label="Következő hónap">
              <ChevronRight className="dp-nav__icon" />
            </AriaButton>
          </header>

          <AriaCalendarGrid weekdayStyle="short" className="dp-grid">
            <AriaCalendarGridHeader>
              {(day) => (
                <AriaCalendarHeaderCell className="dp-weekday-cell">
                  <div className="dp-weekday">{day.slice(0, 2)}</div>
                </AriaCalendarHeaderCell>
              )}
            </AriaCalendarGridHeader>
            <AriaCalendarGridBody>
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
