import { contrastRatio } from '@/assets/contrast.js'

let white, black, red
beforeEach(() => {
  white = {
    rgba: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
  }
  black = {
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    },
  }
  red = {
    rgba: {
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    },
  }
})

describe('Ratio', () => {
  test('of black and white', () => {
    const result = contrastRatio(white, black).contrast
    expect(result).toBeCloseTo(21)
  })
  test('of white and red', () => {
    const result = contrastRatio(white, red).contrast
    expect(result).toBeCloseTo(4)
  })
  test('with semi-transperent foreground', () => {
    black.rgba.a = 0.5
    const result = contrastRatio(white, black).contrast
    expect(result).toBeCloseTo(3.9766)
  })
  test('with semi-transperent background', () => {
    white.rgba.a = 0.5
    const result = contrastRatio(white, black).contrast
    expect(result).toBeCloseTo(13.14)
  })
  test('with semi-transperent foreground AND background', () => {
    white.rgba.a = 0.5
    black.rgba.a = 0.5
    const result = contrastRatio(white, black)
    expect(result.variance).toBeCloseTo(0.67)
    expect(result.contrast).toBeCloseTo(3.29)
  })
  test('has correct variance (both transperent)', () => {
    red.rgba.a = 0.25
    black.rgba.a = 0.1
    const result = contrastRatio(red, black)
    expect(result.variance).toBeCloseTo(0.27)
  })
  test('has correct variance (one transperent)', () => {
    red.rgba.a = 0.25
    const result = contrastRatio(red, black)
    expect(result.variance).toBeCloseTo(0.27)
  })
})
