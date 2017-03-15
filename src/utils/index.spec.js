import { getPropTypes, fromDocgen, fromSource, fromReact } from './';


describe('fromSource', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    spy.mockReset();
    spy.mockRestore();
  });

  it('should not throw', () => {
    expect(() => {
      fromSource('');
    }).not.toThrow();
  });

  it('should lor the error', () => {
    fromSource('');

    expect(spy).toHaveBeenCalledWith(
      'Could not parse component from sources \n',
      expect.any(String)
    );
  });
});
