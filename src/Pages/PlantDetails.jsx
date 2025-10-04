
import { Link, useLoaderData,  } from 'react-router';

const PlantDetails = () => {
    // const {id} = useParams()
    // const [plant , setPlant ] = useState({});
    // console.log(plant)
    // useEffect(() => {
    //     // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    //     // .then(res =>res.json())
    //     // .then(data => setPlant(data?.plants))

    //     axios(`https://openapi.programming-hero.com/api/plant/${id}`)
        
    //     .then(data => setPlant(data?.data?.plants))
    // } , [id])
    const data = useLoaderData();
    
    const {name ,description , image , price} = data.data.plants
    return (
        
        <div className="card bg-base-100 shadow-sm border-2 border-green-600 max-w-5xl mx-auto">
                <figure>
                    <img className='w-full h-160 '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>price : {price}</p>
                    <div className="card-actions justify-end">
                        <Link   className="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>
            </div>
    );
};

export default PlantDetails;