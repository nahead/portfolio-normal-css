import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
  {  id: 0,
    title:"E-Commerce Website",
  desc:"This is my e-commerce website using HTML CSS  & Reactjs ",
  img:"/project2.jpg",
  tags:["HTML","CSS","TypwScript","NextJs"]
  },
  {  id: 1,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/resume.png",
  tags:["HTML","Node","TypeScript","CSS"]
  },
  {  id: 2,
    title:" Responsive Portfolio",
  desc:" HTML CSS with TypeScript",
  img:"/p.png",
  tags:["HTML","Node","TypeScript","CSS"]
  },

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-2'>
      <Heading title='My Projects'/>
     
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el)=>(
         <Card
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
         />
      ))}
      </div>
    </div>
  )
}

export default Projects
