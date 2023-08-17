import React, { ReactNode } from 'react';

import interpolateStringWithComponents from '.';

jest.mock('crypto', () => ({
  randomUUID: () => 'key',
}));

describe('InterpolateStringWithComponents', () => {
  it('string is interpolated', () => {
    const stringToInterpolate = 'text <0>foo bar</0> text';
    function Component({ children }: { children?: ReactNode }) {
      return `<interpolated>${children}</interpolated>`;
    }
    const components = [{ Component }];
    const interpolatedOutput = interpolateStringWithComponents(stringToInterpolate, components);

    expect(interpolatedOutput).toEqual(['text ', <Component key="key">foo bar</Component>, ' text']);
  });
  it('string is interpolated with multiple components of same type', () => {
    const stringToInterpolate = 'text <0>foo bar</0> then <0>another</0>.';
    function Component({ children }: { children?: ReactNode }) {
      return `<interpolated>${children}</interpolated>`;
    }
    const components = [{ Component }];

    const interpolatedOutput = interpolateStringWithComponents(stringToInterpolate, components);
    expect(interpolatedOutput).toEqual([
      'text ',
      <Component key="key">foo bar</Component>,
      ' then ',
      <Component key="key">another</Component>,
      '.',
    ]);
  });
  it('string is interpolated with multiple components of different type', () => {
    const stringToInterpolate = 'text <0>foo bar</0> then <1>another</1>.';
    function FirstComponent({ children }: { children?: ReactNode }) {
      return `<interpolated>${children}</interpolated>`;
    }
    function SecondComponent({ children }: { children?: ReactNode }) {
      return `<interpolated-second>${children}</interpolated-second>`;
    }
    const components = [{ Component: FirstComponent }, { Component: SecondComponent }];

    const interpolatedOutput = interpolateStringWithComponents(stringToInterpolate, components);
    expect(interpolatedOutput).toEqual([
      'text ',
      <FirstComponent key="key">foo bar</FirstComponent>,
      ' then ',
      <SecondComponent key="key">another</SecondComponent>,
      '.',
    ]);
  });
  it('string is interpolated with props', () => {
    function Component({ children, foo, bar }: { children?: ReactNode; foo?: string; bar?: string }) {
      return `<interpolated foo='${foo}' bar='${bar}'>${children}</interpolated>`;
    }

    const FirstComponent = {
      Component,
      props: { foo: 'bar', bar: 'foo' },
    };
    const components = [FirstComponent];

    const stringToInterpolate = 'text <0>foo bar</0> text';
    const interpolatedOutput = interpolateStringWithComponents(stringToInterpolate, components);

    expect(interpolatedOutput).toEqual([
      'text ',
      <Component key="key" foo="bar" bar="foo">
        foo bar
      </Component>,
      ' text',
    ]);
  });
  it('should return initial string when not interpolated component is present ', () => {
    const interpolateCall = interpolateStringWithComponents('text without interpolation');
    expect(interpolateCall).toEqual('text without interpolation');
  });
});
