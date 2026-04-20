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
import { cx } from '../../utils/cx'
import { Calendar } from './calendar'

const highlightedDates = [today(getLocalTimeZone())]

function DatePickerInner({ value: valueProp, defaultValue, onChange, onApply, onCancel }) {
  const formatter = useDateFormatter({ month: 'long', day: 'numeric', year: 'numeric' })
  const [value, setValue] = useControlledState(valueProp, defaultValue || null, onChange)
  const formattedDate = value ? formatter.format(value.toDate(getLocalTimeZone())) : 'Válassz dátumot'

  return (
    <AriaDatePicker
      aria-label="Esküvő dátuma"
      shouldCloseOnSelect={false}
      value={value}
      onChange={setValue}
      minValue={today(getLocalTimeZone())}
    >
      <AriaGroup className="w-full">
        <AriaButton
          className={cx(
            'inline-flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold',
            'bg-primary text-secondary ring-1 ring-primary ring-inset',
            'hover:bg-primary_hover hover:text-secondary_hover',
            'transition duration-100 ease-linear',
            'focus-visible:outline-2 focus-visible:outline-offset-2 outline-brand',
            'cursor-pointer rounded-none',
            !value && 'text-quaternary',
          )}
        >
          <CalendarIcon className="size-4 shrink-0 text-fg-quaternary" />
          <span>{formattedDate}</span>
        </AriaButton>
      </AriaGroup>

      <AriaPopover
        offset={4}
        placement="bottom start"
        className={({ isEntering, isExiting }) =>
          cx(
            'z-300 will-change-transform',
            isEntering && 'duration-150 ease-out animate-in fade-in slide-in-from-top-1',
            isExiting && 'duration-100 ease-in animate-out fade-out slide-out-to-top-1',
          )
        }
      >
        <AriaDialog
          aria-label="Dátumválasztó"
          className="rounded-2xl bg-primary shadow-xl ring-1 ring-secondary_alt focus:outline-none"
        >
          {({ close }) => (
            <>
              <div className="flex px-6 py-5">
                <Calendar
                  highlightedDates={highlightedDates}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                <AriaButton
                  className="inline-flex cursor-pointer items-center justify-center border border-secondary px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-secondary transition-colors duration-150 hover:border-primary-solid hover:bg-primary_hover"
                  onPress={() => { onCancel?.(); close() }}
                >
                  Mégse
                </AriaButton>
                <AriaButton
                  className="inline-flex cursor-pointer items-center justify-center bg-primary-solid px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-colors duration-150 hover:bg-brand-solid"
                  onPress={() => { onApply?.(); close() }}
                >
                  Alkalmaz
                </AriaButton>
              </div>
            </>
          )}
        </AriaDialog>
      </AriaPopover>

      {value && (
        <input type="hidden" name="eskuvo_datum" value={value.toString()} />
      )}
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
