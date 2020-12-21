import React from 'react'
import Rows from './Rows'

const Tables = ({ getAllPokemons, allPokemons }) => {

  return (
    <React.Fragment>
      <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex  lg:justify-between flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                  <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
ID
                  </th>
                  <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stats
                  </th>
                  <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Abilities
                  </th>
                  <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Generation
                  </th>
                  <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                  </th>

                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {
                  allPokemons.length > 0 &&
                  allPokemons.map((pokemon, index) =>
                    <Rows
                      key={index}
                      name={pokemon.name}
                      id={pokemon.id}
                      _id={pokemon._id}
                      stats={pokemon.stats}
                      types={pokemon.types ? pokemon.types : []}
                      sprites={pokemon.sprites}
                      abilities={pokemon.abilities}
                      generation={pokemon.generation}
                    />
                  )
                }
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tables

