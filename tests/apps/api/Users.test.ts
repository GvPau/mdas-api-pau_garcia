import request from 'supertest'
import { App } from '../../../src/apps/api/App'

let application: App

describe('Users Feature', () => {
  beforeAll(async () => {
    application = new App()
    await application.start()
  })

  describe('Scenario: Create user', () => {
    describe('Given I have name and a id', () => {
      describe('When I send a request to Api', () => {
        it('Then I get a success status code', async () => {
          await request(application.express)
            .post('/users')
            .send({
              userName: 'UserDemo',
              userId: 'a8628cc3-62c1-4199-9af6-901d394bb663'
            })
            .set('Accept', 'application/json')
            .expect(201)
        })
      })
    })
  })

  describe('Scenario: Create existing user', () => {
    describe('Given I have created user', () => {
      describe('When I send a request to Api', () => {
        it('Then I get a error status code', async () => {
          const data = {
            userName: 'UserDemo',
            userId: 'a8628cc3-62c1-4199-9af6-901d394bb663'
          }
          await request(application.express).post('/users').send(data).set('Accept', 'application/json')
          await request(application.express).post('/users').send(data).set('Accept', 'application/json').expect(409)
        })
      })
    })
  })

  describe('Scenario: Add favorite pokemon to logged user', () => {
    describe('Given I have a pokemon id and a logged user', () => {
      describe('When I send a request to Api ', () => {
        it('Then I get a success status code', async () => {
          const data = {
            userName: 'UserDemo2',
            userId: '98bebe1d-98a7-4662-90d6-4a470e0ef633'
          }
          await request(application.express).post('/users').send(data).set('Accept', 'application/json')

          await request(application.express)
            .post('/users/favorite-pokemon/6cfa6b7e-81bf-400f-ba14-1aa69fb15fa8')
            .set({ user_id: data.userId, Accept: 'application/json' })
            .expect(200)
        })
      })
    })
  })

  describe('Scenario: Add existing favorite pokemon to logged user', () => {
    describe('Given I have a pokemon id and a logged user', () => {
      describe('When I send a request to Api ', () => {
        it('Then I get a error status code', async () => {
          const data = {
            userName: 'UserDemo3',
            userId: '804c10b2-9b32-4894-9082-df92640a0118'
          }
          await request(application.express).post('/users').send(data).set('Accept', 'application/json')

          await request(application.express)
            .post('/users/favorite-pokemon/1')
            .set({ user_id: data.userId, Accept: 'application/json' })
            .expect(200)

          await request(application.express)
            .post('/users/favorite-pokemon/1')
            .set({ user_id: data.userId, Accept: 'application/json' })
            .expect(409)
        })
      })
    })
  })
})
