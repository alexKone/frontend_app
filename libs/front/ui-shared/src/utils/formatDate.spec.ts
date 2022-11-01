import { getAgeByDate } from "./formatDate";

const date = '12-28-1986';
describe('format date', () => {
  it('should return 35', () => {
    expect(getAgeByDate(date)).toBe('35 ans.');
  })

})
