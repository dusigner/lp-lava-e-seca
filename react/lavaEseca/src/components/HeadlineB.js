import React from 'react'

export default props => {

    const getNoticeParagraphList = list => list.map(typeStain => <p className="section-page__paragraph  paragraph-notice  some">{typeStain}</p>)

    const getParagraphNode = mobile => {
        const getClassStateValue = mobile ? "is-mobile" : "is-default"
        const getTypeContent = mobile ? props.paragraphMobile : props.paragraphDefault

        return <p className={`section-page__paragraph  ${getClassStateValue}`}>{getTypeContent}</p>
    }

    const paragraph_content = getParagraphNode(props.mobile)
    
    return (
        <div className="section-page__headline">
            <h4 className="title-default">
                <span>{props.title}</span>
                <br/>
                <span>{props.subtitle}</span>
            </h4>
            {paragraph_content}
            {getNoticeParagraphList(props.noticeParagraphList)}
            {/* <p className="section-page__paragraph  paragraph-notice">{props.notice}</p> */}
        </div>
    )
}