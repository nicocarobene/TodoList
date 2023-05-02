import { FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  //   filterSelected: 'active' | 'completed' | 'all'
  onFilterChange: (filter: FilterValue) => void
}

const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = key === filterSelected
              const className = isSelected ? 'selected' : ''
              return (
                    <li key={key}>
                        <a className={className} href={href} onClick={(e) => {
                          e.preventDefault()
                          onFilterChange(key as FilterValue)
                        }}
                        >{literal}</a>
                    </li>
              )
            })}
        </ul>
  )
}

export default Filter
