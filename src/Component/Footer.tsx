import { type FilterValue } from '../types'
import Filter from './Filter'
interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, onClearCompleted, filterSelected, handleFilterChange }) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> item left
            </span>
            <Filter
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {completedCount > 0 && <button className="clear-completed" onClick={onClearCompleted}>Borrar Completadas</button>}
        </footer>
  )
}

export default Footer
