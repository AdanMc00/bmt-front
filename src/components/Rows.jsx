import React from 'react'

const Rows = ({ name, id, stats, sprites, abilities, types, generation }) => {
  console.log({ name, id, stats, sprites, abilities, types, generation })

  return (
    <tr>
      <td>
        <div className="flex-shrink-0 h-10 w-10">
          <div className="flex items-center text-sm text-black">
            {id}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">

        <div className="flex items-center">

          <div className="ml-4">
            <img className="150 w-150 rounded-full"
                 src={sprites.length > 0 ? sprites[0].front_default : 'Error'}
                 alt=""/>
            <div className="text-lg font-medium text-black">
              {name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {
          stats.length > 0 &&
          stats.map(stat => <div key={stats._id}
                                 className="text-lg text-gray-900">{stat.stat.name}: {stat.base_stat}</div>
          )
        }
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {abilities.length > 0 &&
        abilities.map(ability => <span
          key={ability._id}
          className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   {ability.ability.name}
                </span>)
        }
      </td>
      <td className="px-6 py-4 center whitespace-nowrap text-sm text-gray-500">
        {generation}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {
          types.length > 0 &&
          types.map(item => <span key={item._id}>
               {/*{item.types.name}*/}
              </span>
          )
        }
      </td>
    </tr>

  )
}
export default Rows




