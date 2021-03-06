import 'mocha'

import expect from './expect'

import { xstep } from 'mocha-steps'

import { APIKEY, ENDPOINT } from './env'
import { Command } from '../src/Models/Command'
import { SonarrClient } from '../src/SonarrClient'

describe('when using CommandResource', () => {
  const sut = new SonarrClient({ apikey: APIKEY, host: ENDPOINT })

  let backup: Command

  xstep('should perform backup', async () => {
    backup = await sut.command.backup()
    expect(backup.name).to.equal('Backup')
  })

  xstep('should get single command', async () => {
    const result = await sut.command.command(backup.id)
    expect(backup.name).to.equal(result.name)
  })
})
