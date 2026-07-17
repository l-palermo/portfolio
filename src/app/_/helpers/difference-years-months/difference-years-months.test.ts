import { differenceYearsMonths } from './difference-years-months';

describe('differenceYearsMonths', () => {
  it('returns 0 years and 0 months for the same date', () => {
    expect(differenceYearsMonths('2023-06-01', '2023-06-01')).toEqual({
      years: 0,
      months: 0,
    });
  });

  it("returns correct years and months when months don't wrap", () => {
    expect(differenceYearsMonths('2020-03-01', '2023-06-01')).toEqual({
      years: 3,
      months: 3,
    });
  });

  it('returns correct years and months when months wrap (borrow from years)', () => {
    expect(differenceYearsMonths('2020-08-01', '2023-03-01')).toEqual({
      years: 2,
      months: 7,
    });
  });

  it('returns 0 years and correct months for same year', () => {
    expect(differenceYearsMonths('2023-01-01', '2023-09-01')).toEqual({
      years: 0,
      months: 8,
    });
  });

  it('returns correct result spanning exactly one year', () => {
    expect(differenceYearsMonths('2022-04-01', '2023-04-01')).toEqual({
      years: 1,
      months: 0,
    });
  });

  it('returns 0 years and 11 months for an 11-month span', () => {
    expect(differenceYearsMonths('2023-01-01', '2023-12-01')).toEqual({
      years: 0,
      months: 11,
    });
  });
});
