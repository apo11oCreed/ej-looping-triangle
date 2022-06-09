module.exports = {
  mode: "jit",
	content: ["./**/*.{html,js}"],
	prefix: "tw-",
	theme: {
    extend: {},
  },
  variants: {
    extend: {
      border: ['first'],
      margin: ['first']
    }
  },
  plugins: [],
}
