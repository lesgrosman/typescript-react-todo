import React from 'react'

interface FilterBlockProps {
    updateFilter:(filter: string) => void,
    filter: string
}

export const FilterBlock: React.FC<FilterBlockProps> = ({ updateFilter, filter }) => {

    const buttons: {label: string}[] = [
        {label: 'all'},
        {label: 'active'},    
        {label: 'done'},      
    ]

    return (
        <div className="filter">
            {buttons.map((btn, i) => {
                const classes: string[] = ["waves-effect", "waves-light", "btn"]
                if (btn.label === filter) {
                    classes.push('btn-active')
                }
                return (
                    <button 
                        key={Date.now() + i} 
                        onClick={() => updateFilter(btn.label)} 
                        className={classes.join(' ')}>{btn.label}
                    </button>
                )
            })}
        </div>
    )
}