import { navbar } from './navbar.js';

describe('footer: renders the children for a footer element', () => {
  const actual = navbar();

  it('renders a DIV', () => {
    expect(actual.nodeName).toEqual('DIV');
  });
  it('has className "navbar"', () => {
    expect(actual.className).toEqual('navbar');
  });
  it('has 3 children', () => {
    expect(actual.childElementCount).toEqual(3);
  });

  describe('first child', () => {
    const firstChild = actual.children[0];
    it('first child is an A', () => {
      expect(firstChild.nodeName).toEqual('A');
    });
    it('first child has innerHTML "home"', () => {
      expect(firstChild.innerHTML).toEqual('home');
    });
    it('first child href ends with "/index.html"', () => {
      expect(firstChild.href.endsWith('/index.html')).toEqual(true);
    });
  });

  describe('second child', () => {
    const secondChild = actual.children[1];
    it('second child is an A', () => {
      expect(secondChild.nodeName).toEqual('A');
    });
    it('second child has innerHTML "greeting"', () => {
      expect(secondChild.innerHTML).toEqual('greeting');
    });
    it('second child href ends with "/edit-greeting.html"', () => {
      expect(secondChild.href.endsWith('/edit-greeting.html')).toEqual(true);
    });
  });

  describe('third child', () => {
    const thirdChild = actual.children[2];
    it('third child is an A', () => {
      expect(thirdChild.nodeName).toEqual('A');
    });
    it('third child has innerHTML "message"', () => {
      expect(thirdChild.innerHTML).toEqual('message');
    });
    it('third child href ends with "/edit-message.html"', () => {
      expect(thirdChild.href.endsWith('/edit-message.html')).toEqual(true);
    });
  });
});
