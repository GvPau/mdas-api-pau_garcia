import request from 'supertest'
import { App } from '../../../src/apps/api/App'

let application: App

describe('Pokemon Types', () => {
  beforeAll(async () => {
    application = new App()
    await application.start()
  })

  describe('Scenario: Find Pokemon Types', () => {
    describe('Given I have "charizard" as argument', () => {
      describe('When I send a request to Api', () => {
        it('Then I get types "fire, flying"', async () => {
          await request(application.express)
            .get('/pokemon-type?name=charizard')
            .set('Accept', 'application/json')
            .expect(200)
            .then((response) => {
              expect(Array.isArray(response.body)).toBeTruthy()
              expect(response.body).toEqual(['fire', 'flying'])
              expect(response.body.length).toEqual(2)
            })
        })
      })
    })
  })

  describe('Scenario: Find unknown Pokemon', () => {
    describe('Given I have "charizardxxxx" as argument', () => {
      describe('When I send a request to Api', () => {
        it('Then I get an error message', async () => {
          await request(application.express)
            .get('/pokemon-type?name=charizardxxxx')
            .set('Accept', 'application/json')
            .expect(404)
            .then((response) => {
              expect(response.body.message).toBe('Pokemon charizardxxxx does not have types')
            })
        })
      })
    })
  })
})
