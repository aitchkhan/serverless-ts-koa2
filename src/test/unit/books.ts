import { getBooks } from '../../components/books/service';

describe('Get All User Service', () => {
  test('get users service should return a user list ', () => {
    const users = [
      'ava',
      'boyd',
      'raylan',
      'winona',
    ];
    expect(getBooks()).toEqual(users);
  });
});
