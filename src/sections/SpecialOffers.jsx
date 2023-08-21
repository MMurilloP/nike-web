import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
          <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span> Offer 
        </h2>
        <p className="mt-4 info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis
          optio placeat totam itaque similique fugit earum natus praesentium.
        </p>
        <p className="mt-6 info-text">
          Lorem ipsum enim voluptates minus! Amet sit dolorem consectetur maxime
          facilis, ipsam nihil.
        </p>
        <div className="mt-11 flex gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>


    </section>
  )
}

export default SpecialOffers