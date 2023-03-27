import React from 'react'
import {Link} from 'react-router-dom'
import sty from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={sty.sum}>
    
        <nav className={sty.item}>
        <ul className={sty.ul}>
        <li className={sty.li}>
            <Link to='/'>Home</Link>
        </li>

        <li className={sty.li}>
            <Link to='/About'>About us</Link>
        </li>

        <li className={sty.li}>
            <Link to='/Login'>Login</Link>
        </li>

        <li className={sty.li}>
            <Link to='/Register'>Register</Link>
        </li>

        </ul>

        </nav>
       
      </div>
      <br/>
      <br/>
      
      <p className={sty.p}>Nature refers to the interaction between the physical surroundings around us and the life within it like atmosphere, climate, natural resources, ecosystem, flora, fauna, and humans. Nature is indeed God’s precious gift to Earth. It is the primary source of all the necessities for the nourishment of all living beings on Earth. Right from the food we eat, the clothes we wear, and the house we live in is provided by nature. Nature is called ‘Mother Nature’ because just like our mother, she is always nurturing us with all our needs. 


Whatever we see around us, right from the moment we step out of our house is part of nature. The trees, flowers, landscapes, insects, sunlight, breeze, everything that makes our environment so beautiful and mesmerizing are part of Nature. In short, our environment is nature. Nature has been there even before the evolution of human beings.
Importance of Nature
If not for nature then we wouldn’t be alive. The health benefits of nature for humans are incredible. The most important thing for survival given by nature is oxygen. The entire cycle of respiration is regulated by nature. The oxygen that we inhale is given by trees and the carbon dioxide we exhale is getting absorbed by trees. 


The ecosystem of nature is a community in which producers (plants), consumers, and decomposers work together in their environment for survival. The natural fundamental processes like soil creation, photosynthesis, nutrient cycling, and water cycling, allow Earth to sustain life. We are dependent on these ecosystem services daily whether or not we are aware.


Nature provides us services round the clock: provisional services, regulating services, and non-material services. Provisional services include benefits extracted from nature such as food, water, natural fuels and fibres, and medicinal plants. Regulating services include regulation of natural processes that include decomposition, water purification, pollution, erosion and flood control, and also, climate regulation. Non-material services are the non-material benefits that improve the cultural development of humans such as recreation, creative inspiration from interaction with nature like art, music, architecture, and the influence of ecosystems on local and global cultures. 


The interaction between humans and animals, which are a part of nature, alleviates stress, lessens pain and worries. Nature provides company and gives people a sense of purpose. 


Studies and research have shown that children especially have a natural affinity with nature. Regular interaction with nature has boosted health development in children. Nature supports their physical and mental health and instills abilities to access risks as they grow.
Nature provides us services round the clock: provisional services, regulating services, and non-material services. Provisional services include benefits extracted from nature such as food, water, natural fuels and fibres, and medicinal plants. Regulating services include regulation of natural processes that include decomposition, water purification, pollution, erosion and flood control, and also, climate regulation. Non-material services are the non-material benefits that improve the cultural development of humans such as recreation, creative inspiration from interaction with nature like art, music, architecture, and the influence of ecosystems on local and global cultures.   </p>
   
   </>
  )
}

export default Navbar

