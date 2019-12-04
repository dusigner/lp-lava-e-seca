import React from 'react'

export default props => {

    const clearClassAttributes = (classNameList,elementInstance) => classNameList.forEach(classAttr => elementInstance.classList.remove(classAttr) )
    const addClassAttributeToElement = (elementInstance,classAttr) =>  elementInstance.classList.add(classAttr) 

    const callToAction = event => {
        const parentElementPage = document.querySelector('.lava-e-seca')      
        const labelAction = props.label.toLowerCase().replace(/\s/, '')
         
        const action_list = [{
            compare: {
                label: "compare",
                classAttr: "is-compare"
            }
        },{
            saibamais: {
                label: "saibamais",
                classAttr: "is-see-more" 
            }
        }]

        const toApply = () => {

            const modal = (actionsObjectList,classAttributeName) => {
                const modalFooElement = document.querySelector('.modal-foo')
                const modalBarElement = document.querySelector('.modal-bar')

                const overlayContainerElement = document.querySelector('.container-overlay')
                const action_storage = []
                const getActionList = actionObjectListSetup => actionObjectListSetup.forEach((actionName,ind) => action_storage.push( Object.keys(actionName).toString() ))  
                const getClassNameList = actionObjectListSetup => actionObjectListSetup.map((el,ind) => el[ action_storage[ind] ]['classAttr'] )
                    
                getActionList(actionsObjectList)
                const classNameList = action_storage ? getClassNameList(actionsObjectList) : null

                clearClassAttributes(classNameList, overlayContainerElement)
                addClassAttributeToElement(overlayContainerElement, classAttributeName)
                overlayContainerElement.classList.remove('invisible')

                console.log(modalFooElement)
                console.log(modalBarElement)
                console.log( classAttributeName )
            } 

            return {
                modal
             }
        }

        const compareActionNames = actionList => actionList.find((action,ind) => action[labelAction])      
        const action =  compareActionNames(action_list)

        const init = toApply()

        action ? init.modal(action_list, action[labelAction].classAttr) : null    

    }
    return (
        <div className="btn" onClick={callToAction}>
            <div className="btn__icon">
                <i className="btn__icon_type">
                    <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M6 0H8V14H6z"/><path transform="rotate(90 14 6)" fill="#fff" d="M14 6H16V20H14z"/></svg></i>
            </div>
            <span className="btn__label">{props.label}</span>
        </div>    
    )
}  
