package org.objectscape.candide.scratch

class MyMap {

    private val values = HashMap<String, Any>()

    fun put(key: String, value: Number) {
        values[key] = value
    }

    fun put(key: String, value: Char) {
        values[key] = value
    }

    fun put(key: String, value: String) {
        values[key] = value
    }

    fun put(key: String, value: MyMap) {
        if(values === value.values) {
            throw RuntimeException("Parameter map same reference as this map")
        }
        values[key] = value
    }

    override fun toString(): String = super.toString() + values.toString()

}