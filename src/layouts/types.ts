export interface IClickCounterEmits {
  (e: 'decrement', count: number): void
}
export interface IClickCounterProps {
   title?: string
}
export interface IIsDark {
  type?: boolean
}
// export interface IIsDark {
//      isDark?: boolean
// }
export interface IHeaderCompositionEmit {
    (e: 'theme-switch'):void
}

export interface IProduct {
    name: string,
    label: string,
    cost: number,
    img: string
}

export interface IProductCard {
    product?: IProduct
}