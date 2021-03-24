import Daemon from '../js/Daemon';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Ivan', 'Daemon')).toEqual(expectedObject);
});
