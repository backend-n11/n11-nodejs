import fooData from './foo.json' with { type: 'json' }

const { default: barData } =
  await import('./bar.json', { with: { type: 'json' } })