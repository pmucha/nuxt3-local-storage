# Nuxt3 `useStore()` with `localStorage`

[Nuxt3](https://v3.nuxtjs.org/) developers decided to stop using Vuex for the state management.
Now we need to deal with their own composable called [useState](https://v3.nuxtjs.org/docs/usage/state).
It claims to be SSR friendly, but it doesn't utilize `localStorage`. A composable introduced
in this repo creates a wrapper around `useStore` which is able to save the data to the browser's local storage.

Here is the list of files created and modified in this tutorial:
```
src/
  composables/
    use-local-store.ts
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

It's a [composable](https://v3.nuxtjs.org/docs/directory-structure/composables) so Nuxt will import it for you.

In the `<script setup lang="ts">` write the following:

```ts
const state = useLocalStore<string>("name", "Default name value", true)
// or just
const state = useLocalStore<string>("name")
```

Now you can use `state.get()`, `state.set("Some other name")` and more. If you do the same in some other page, the state should be preserved. Since the state is saved to `localStorage` by default, it will be
there when you reload the page. All the data is kept ther as `JSON`.

Check out the `/composables/use-local-store.ts` file for documentation. IntelliSense will also help you.

## License

My files in this repository are [MIT-licensed](https://mit-license.org/). Feel free to fork, clone, open issues and comment this repo.