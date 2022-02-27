import request from 'supertest'
import { App } from '../../../src/apps/api/App'

let application: App

describe('Pokemon', () => {
  beforeAll(async () => {
    application = new App()
    await application.start()
  })

  describe('Scenario: Find a Pokemon', () => {
    describe('Given I have "1" as argument', () => {
      describe('When I send a request to Api', () => {
        it('Then I get a Pokemon', async () => {
          await request(application.express)
            .get('/pokemon/1')
            .set('Accept', 'application/json')
            .expect(200)
            .then((response) => {
              expect(response.body).toEqual({
                pokemon: {
                  id: 1,
                  name: 'Bulbasaur',
                  height: 7,
                  weight: 69
                }
              })
            })
        })
      })
    })
  })

  describe('Scenario: Find a Pokemon that does not exists', () => {
    describe('Given I have "1" as argument', () => {
      describe('When I send a request to Api', () => {
        it('Then I get an error message', async () => {
          await request(application.express)
            .get('/pokemon/2')
            .set('Accept', 'application/json')
            .expect(404)
            .then((response) => {
              expect(response.body.message).toBe('Pokemon 2 does not exists')
            })
        })
      })
    })
  })
})
