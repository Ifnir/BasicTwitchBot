/**
 * A Map with additional utility methods for an ID, for significantly improved performance and ease-of-use.
 * @extends {Map}
 */
class Collection extends Map {
  constructor (iterable) {
    /**
     * Used to access and call functions on an object's parent @extends {Map}
     */
    super(iterable)

    /**
     * Cached array for the `array()` method - will be reset to `null` whenever `set()` or `delete()` are called
     * @name Collection#_array
     * @type {?Array}
     * @private
     */
    Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true })

    /**
     * Cached array for the `keyArray()` method - will be reset to `null` whenever `set()` or `delete()` are called
     * @name Collection#_keyArray
     * @type {?Array}
     * @private
     */
    Object.defineProperty(this, '_keyArray', { value: null, writable: true, configurable: true })
  }

  set (key, val) {
    this._array = null
    this._keyArray = null
    return super.set(key, val)
  }

  delete (key) {
    this._array = null
    this._keyArray = null
    return super.delete(key)
  }

  /**
   * Creates an ordered array of the values of this collection, and caches it internally. The array will only be
   * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
   * itself. If you don't want this caching behaviour, use `Array.from(collection.values())` instead.
   * @returns {Array}
   */
  array () {
    if (!this._array || this._array.length !== this.size) this._array = Array.from(this.values())
    return this._array
  }

  /**
   * Creates an ordered array of the keys of this collection, and caches it internally. The array will only be
   * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
   * itself. If you don't want this caching behaviour, use `Array.from(collection.keys())` instead.
   * @returns {Array}
   */
  keyArray () {
    if (!this._keyArray || this._keyArray.length !== this.size) this._keyArray = Array.from(this.keys())
    return this._keyArray
  }
}

module.exports = new Collection()
