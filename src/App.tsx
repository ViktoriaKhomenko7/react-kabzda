import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/rating/Rating";
import {OnnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnnOff} from "./components/OnOff/UncontrolledOnnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>

            {/*<OnnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<OnOff on={true} onChange={(on:boolean)=>{alert(on)}}/>*/}

            <UncontrolledOnnOff onChange={setSwitchOn }/> {switchOn.toString()}

            {/*//     <UncontrolledOnnOff on={false}/>*/}
            {/*//     <UncontrolledOnnOff on={true}/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*<UnControlledRating/>*/}

            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}/>*/}

            {/*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={()=> {setAccordionCollapsed(!accordionCollapsed)}}/>*/}



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
