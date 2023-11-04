import React, {useState} from 'react';

type RatingPropsType = {

}

export const UnControlledRating = (props: RatingPropsType) => {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
            {/*<Star selected={value > 0} setValue={setValue}/>*/}
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    //setValue: (value: number)=>void
}

export const Star = (props: StarPropsType) => {

    //return props.selected ? <span onClick={()=>{props.setValue(1)}}><b>star</b></span> : <span>star</span>
    //return <span>{props.selected ? <b>star</b> : "star"}</span>

    if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }
}

//1. Убрать кнопки, кликать надо по звездочке (спан)
//2. Условный рендеринг переписать с помощью тернарного оператора
//3. кликаем по спан -> вызываем ф-цию, кот. приходит в пропсы (StarPropsType)
// эта ф-ция будет попадать в пропсы отсюда(откуда?) и менять стейт




// import React, {useState,MouseEvent} from 'react';
//
// type StarType = 0 | 1 | 2 | 3 | 4 | 5
//
// type RatingPropsType = {
//     value?: StarType
// }
//
// export const UnControlledRating = (props: RatingPropsType) => {
//
//     let [star, setStar] = useState<StarType>(props.value ?? 0)
//
//
//     const click = (e: MouseEvent<HTMLButtonElement>) => {
//         setStar(+e.currentTarget.name as StarType)
//     }
//
//     return (
//         <div>
//             <Star selected={star > 0}/><button name={'1'} onClick={click}>1</button>
//             <Star selected={star > 1}/><button name={'2'} onClick={click}>2</button>
//             <Star selected={star > 2}/><button name={'3'} onClick={click}>3</button>
//             <Star selected={star > 3}/><button name={'4'} onClick={click}>4</button>
//             <Star selected={star > 4}/><button name={'5'} onClick={click}>5</button>
//         </div>
//     );
// };
//
// type StarPropsType = {
//     selected: boolean
// }
//
// export const Star = (props: StarPropsType) => {
//
//     if (props.selected) {
//         return <span><b>star</b></span>
//     } else {
//         return <span>star</span>
//     }
// }