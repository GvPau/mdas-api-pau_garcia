#!/usr/bin/env node
import yargs from 'yargs'
import GetPokemonTypeCommand from '../../contexts/pokedex/types/infra/commands/GetPokemonTypeCommand'
import container from './DependencyContainer'

const { argv } = yargs
  .scriptName('console')
  .usage('Usage: $0 -n name')
  .example('$0  -n pokemon', 'Returns pokemon types.')
  .option('n', {
    alias: 'name',
    describe: 'The name of the pokemon.',
    demandOption: 'The name is required.',
    type: 'string',
    nargs: 1
  })
  .describe('help', 'Show help.')
  .describe('version', 'Show version number.')

const { name } = argv as any

class Start {
  async run() {
    try {
      const getPokemonType: GetPokemonTypeCommand = container.get('Apps.PokedexConsole.command.GetPokemonType')
      const types = await getPokemonType.execute(name)
      console.log(types)
    } catch (error: any) {
      console.log(error.message)
    }
  }
}
new Start().run()
