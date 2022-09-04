import { getAgeByDate } from "./formatDate";

describe('format date', () => {
  it('should return age', () => {
    expect(getAgeByDate('12-28-1986')).toBe('35 ans.');
  })
})
