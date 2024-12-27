import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
  {  id: 0,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/project2.jpg",
  tags:["HTML","Node","TypeScript","CSS"]
  },
  {  id: 1,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/project2.jpg",
  tags:["HTML","Node","TypeScript","CSS"]
  },
  {  id: 2,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/project2.jpg",
  tags:["HTML","Node","TypeScript","CSS"]
  },
  {  id: 3,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/project2.jpg",
  tags:["HTML","Node","TypeScript","CSS"]
  }, 
  {  id: 4,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/project2.jpg",
  tags:["HTML","Node","TypeScript","CSS"]
  },
  {  id: 5,
    title:"Static Interactive Resume",
  desc:"A TpeScript-based interactive resume built with HTML and CSS",
  img:"/project2.jpg",
  tags:["HTML","Node","TypeScript","CSS"]
  }
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
