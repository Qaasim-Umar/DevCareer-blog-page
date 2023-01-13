import Link from 'next/link';
import React from 'react'
import CategoriesComponent from './CategoriesComponent'

const Index = (): JSX.Element => {

    const current = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    let day = days[current.getDay()];
    let month = months[current.getMonth()];
    const date = `${current.getDate()} ${month}, ${current.getFullYear()}`;

return (
    <section className='flex flex-wrap p-6 md:px-0 md:flex-row gap-3 justify-center items-center'>
        <div>
            <p className='font-bold'>{day}</p>
            <p>{date}</p>
        </div>
        <CategoriesComponent text={'All'} number={'112'}/>
        <CategoriesComponent text={'Design'} number={'3'}/>
        <CategoriesComponent text={'World'} number={'6'}/>
        <CategoriesComponent text={'Web'} number={'89'}/>
        <CategoriesComponent text={'Blockchain'} number={'56'}/>
        <CategoriesComponent text={'Happiness'} number={'12'}/>
        <CategoriesComponent text={'AI'} number={'34'}/>
        <p className='font-bold text-xs'>More...</p>
    </section>
)
}

export default Index
