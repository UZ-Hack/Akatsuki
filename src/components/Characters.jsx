import { data } from '../akstuki'

const Characters = () => {
  return (
    <div className='max-w-6xl mx-auto py-10 flex flex-wrap justify-between gap-y-10'>
        {
            data.map((character, index) => {
                return (
                    <div key={index} className='max-w-xs border rounded-lg'>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Characters