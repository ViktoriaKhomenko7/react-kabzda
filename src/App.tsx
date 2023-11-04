import React from 'react';
import './App.css';
// import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";
// import {UnControlledRating} from "./components/rating/UnControlledRating";
//import {OnnOff} from "./components/OnOff/OnnOff";
import {UncontrolledAccordion} from "./components/SelfcontrolledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/SelfControlledRating/UnControlledRating";
import {OnnOff} from "./components/OnOff/OnnOff";
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

function App() {
    return (
        <div className={"App"}>
            <OnnOff/>
            {/*//     <OnnOff on={false}/>*/}
            {/*//     <OnnOff on={true}/>*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            <UnControlledRating/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>



        </div>

        // <div>
        //     <UnControlledRating value={1}/>
        //     <UnControlledRating value={2}/>
        //     <UnControlledRating value={3}/>
        //     <UnControlledRating value={4}/>
        //     <UnControlledRating value={5}/>
        // </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// const PageTitle = (props: PageTitleProposType) => {
//     return (
//         <h1>--{props.title}--</h1>
//     )
// }

export default App;
