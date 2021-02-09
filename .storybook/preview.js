import GlobalStyle from '../src/styles/GlobalStyle'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
