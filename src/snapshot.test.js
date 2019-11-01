/**
 * snapshots are made to test some behaviors
 * who change most of the times there is 2 kind:
 * 1- snapshot with toMatchSnapshot() method
 * 2- inline snapshot using toMatchInlineSnapshot()
 * Best practice:
 *  - Treat snapshot as code, this mean review of snapshot like code review
 *  - Tests should be deterministic, use mock function for more consistancy 
 *  about return values who keep changing every time like dates, timers, responses ..
 *  - Use descriptive snapshot names
 */
describe('Snapshots', () => {
  let user;
  beforeEach( done => {
    user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'Sven bender',
    };
    done();
  })

  it('will fail every time', () => {
    expect(user).toMatchSnapshot();
  });

  it('should use matcher prop to expect the object props', () => {
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
      name: expect.any(String)
    })
  })

})
