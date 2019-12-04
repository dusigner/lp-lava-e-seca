import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default props => {
    return (
            <AnchorLink offset={() => 55} href={props.link} className="see-more">
                <span className='the-arrow -down'>
                    <span className='shaft'></span>
                </span>
                {props.label}
            </AnchorLink>
    )
}