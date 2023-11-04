import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {

    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
    }
};

type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3>--{props.title}--</h3>
    )
}

export const AccordionBody = () => {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}