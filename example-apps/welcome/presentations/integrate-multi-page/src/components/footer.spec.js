import { footer } from './footer.js';

describe('footer: renders the children for a footer element', () => {
  const actual = footer();

  it('renders a DIV', () => {
    expect(actual.nodeName).toEqual('DIV');
  });
  it('has className "footer"', () => {
    expect(actual.className).toEqual('footer');
  });
  it('has innerHTML "bottom!"', () => {
    expect(actual.innerHTML).toEqual('bottom!');
  });
});
