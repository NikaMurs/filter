import './toolbar.css'
export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    return (
        <div className="toolbar">
            {filters.map((filter) => {
                return (
                    <button
                        className={filter === selected ? "toolbarButton toolbarButtonSelect" : "toolbarButton"}
                        key={filter}
                        onClick={() => { onSelectFilter(filter) }}>
                        {filter}</button>
                )
            })}
        </div>
    )
}