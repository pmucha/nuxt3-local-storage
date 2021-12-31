# Nuxt3 `useState()` with `localStorage`

`useLocalState()` is a composable which wraps up the default [Nuxt3](https://v3.nuxtjs.org/)
[useState()](https://v3.nuxtjs.org/docs/usage/state) and makes it able for the state to be
saved in the browser's `localStorage`.

Here is the list of files created and modified in this tutorial:
```
src/
  composables/
    use-local-state.ts
  pages/
    index.vue
    about.vue
```

## Usage

Go to the [Nuxt 3 website](https://v3.nuxtjs.org/getting-started/installation) to learn how to install Nuxt3.

Then place the files mentioned above inside the repo (you might need to remove `app.vue`).
Then run `npm run dev` and play around with the inputs. I encourage you to also take a look
at your browser's console and inspect `localStorage`.

## Code

`useLocalState()` is a [composable](https://v3.nuxtjs.org/docs/directory-structure/composables) so Nuxt will import it for you automatically. The API is exactly the same as in `useState()`.

In the `<script setup lang="ts">` write the following:

```ts
const state = useLocalState<string>("name", () => "Default name value")
// or just
const state = useLocalState<string>("name")
// then
state.value = "New value"
```

### Other abilities

You can switch between `useLocalState()` and `useState()` and the state will remain. However the `localStorage` might become outdated. To keep it up to date use:
```ts
// Remember the .value used in Vue 3
useLocalState("yourKeyName").value = useState("yourKeyName).value
```

If you only want to use `useState()` and occasionally save it to `localStorage`, use the line above.

To clear the `localStorage` and remove the state data use:

```ts
useLocalState("yourKeyName").value = undefined
```

Check out the `/composables/use-local-state.ts` file for documentation. IntelliSense will also help you.

## License

My files in this repository are [MIT-licensed](https://mit-license.org/). Feel free to fork, clone, open issues and comment this repo.