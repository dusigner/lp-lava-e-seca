import React from 'react'

export default props => {
    return (
        <section id={props.id} className={`${props.setClass} section-page`}>
            {props.children}
		</section>
    )
}