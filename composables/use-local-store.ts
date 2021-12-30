import { useState } from "#app"


class LocalState<T> {
  private state: any
  private useLocalStorage: boolean
  private key: string


  constructor(key: string, defaultValue?: T, useLocalStorage = true) {
    this.key = key
    this.state = () => useState<T>(key)
    this.useLocalStorage = useLocalStorage && typeof localStorage === "object"

    if (this.useLocalStorage) {
      try {
        this.state.value = JSON.parse(localStorage.getItem(key)) as T || defaultValue
      } catch (e) { }
    } else {
      this.state.value = defaultValue
    }
  }


  /**
   * @returns The current store value
   */
  get(): T {
    return this.state.value
  }


  /**
   * Set the store to a new value. If local storage
   * is turned on, the value will also be set in the `localStorage`.
   *
   * @param val A new value of the store
   */
  set(val: T) {
    this.state.value = val

    if (this.useLocalStorage) {
      try {
        localStorage.setItem(this.key, JSON.stringify(val))
      } catch (e) { }
    }
  }


  /**
   * Sets the state to `null`. If local storage is used
   * it also removes the proper key.
   */
  clear() {
    this.state.value = null

    if (this.useLocalStorage) {
      localStorage.removeItem(this.key)
    }
  }


  /**
   * Turns the local storage on or off.
   *
   * @param on
   */
  setLocalStorage(on: boolean = true) {
    this.useLocalStorage = on && typeof localStorage === "object"
  }


  /**
   * Update the `localStorage` value to the current store value.
   * Useful when the local storage was manually turned on.
   */
  updateLocalStorage() {
    if (this.useLocalStorage) {
      try {
        localStorage.setItem(this.key, JSON.stringify(this.get()))
      } catch (e) { }
    }
  }
}


/**
 * A generic state management composable for Nuxt 3.
 * Uses Nuxt's `useState` under the hood and allows to save
 * the data in browser's `localStorage`.
 *
 * @param key A string key for `useState`
 * @param defaultValue Optional default value of the key
 * @param useLocalStorage Optionally save to browser's `localStorage`; `true` by default
 */
export default function <T>(key: string, defaultValue?: T, useLocalStorage = true): LocalState<T> {
  return new LocalState<T>(key, defaultValue, useLocalStorage)
}