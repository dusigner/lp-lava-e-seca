import React from 'react'

export default props => {

    const getStainList = list => list.map(typeStain => <li className="stain-list__item">{typeStain}</li>)

    const colOne = props.columOne

    return (
        <React.Fragment>
            <header className="modal__header  header-list-stain">
            <h2 className="modal__title">{props.title}</h2>
            </header>
            <div className="modal-list-stain">
                <ul className="stain-list  list-one">{getStainList(props.columOne)}</ul>
                <ul className="stain-list  list-two">{getStainList(props.columTwo)}</ul>
                <ul className="stain-list  list-three">{getStainList(props.columThree)}</ul>
                <ul className="stain-list  list-four">{getStainList(props.columFour)}</ul>
                <ul className="stain-list  list-five">{getStainList(props.columFive)}</ul>
            </div>
        </React.Fragment>
    )
}