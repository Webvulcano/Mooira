import { getLocalTimeZone, today } from '@internationalized/date'
import { useControlledState } from '@react-stately/utils'
import { Calendar as CalendarIcon } from '@untitledui/icons'
import { useDateFormatter, I18nProvider } from 'react-aria'
import {
  DatePicker as AriaDatePicker,
  Dialog as AriaDialog,
  Group as AriaGroup,
  Popover as AriaPopover,
  Button as AriaButton,
} from 'react-aria-components'
import { Calendar } from './calendar'

const highlightedDates = [today(getLocalTimeZone())]

function DatePickerInner({ value: valueProp, defaultValue, onChange, onApply, onCancel }) {
  const formatter = useDateFormatter({ month: 'long', day: 'numeric', year: 'numeric' })
  const [value, setValue] = useControlledState(valueProp, defaultValue || null, onChange)
  const hasValue = Boolean(value)
  const formattedDate = hasValue
    ? formatter.format(value.toDate(getLocalTimeZone()))
    : 'Válassz dátumot'

  return (
    <AriaDatePicker
      aria-label="Esküvő dátuma"
      shouldCloseOnSelect={false}
      value={value}
      onChange={setValue}
      minValue={today(getLocalTimeZone())}
      className="dp"
    >
      <AriaGroup className="dp-group">
        <AriaButton className={`dp-trigger${hasValue ? '' : ' dp-trigger--empty'}`}>
          <span className="dp-trigger__label">{formattedDate}</span>
          <CalendarIcon className="dp-trigger__icon" aria-hidden="true" />
        </AriaButton>
      </AriaGroup>

      <AriaPopover offset={8} placement="bottom start" className="dp-popover">
        <AriaDialog aria-label="Dátumválasztó" className="dp-dialog">
          {({ close }) => (
            <>
              <div className="dp-body">
                <Calendar highlightedDates={highlightedDates} />
              </div>
              <div className="dp-footer">
                <AriaButton
                  className="dp-btn dp-btn--ghost"
                  onPress={() => { onCancel?.(); close() }}
                >
                  Mégse
                </AriaButton>
                <AriaButton
                  className="dp-btn dp-btn--solid"
                  onPress={() => { onApply?.(); close() }}
                >
                  Alkalmaz
                </AriaButton>
              </div>
            </>
          )}
        </AriaDialog>
      </AriaPopover>

      {value && <input type="hidden" name="eskuvo_datum" value={value.toString()} />}
    </AriaDatePicker>
  )
}

export function DatePicker(props) {
  return (
    <I18nProvider locale="hu-HU">
      <DatePickerInner {...props} />
    </I18nProvider>
  )
}
