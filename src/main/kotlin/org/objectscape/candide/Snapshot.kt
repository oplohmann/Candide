package org.objectscape.candide

import kotlin.reflect.KMutableProperty0

class Snapshot {

    private val values = HashMap<String, Any>()
    private val valuesOrNull = HashMap<String, Any?>()

    constructor()

    constructor(snapshot: Snapshot) {
        values.putAll(snapshot.values)
        valuesOrNull.putAll(snapshot.valuesOrNull)
    }

    fun put(key: String, value: Number): Snapshot {
        values[key] = value
        return this
    }

    fun putNullable(key: String, value: Number?): Snapshot {
        valuesOrNull[key] = value
        return this
    }

    fun put(key: String, value: Char): Snapshot {
        values[key] = value
        return this
    }

    fun putNullable(key: String, value: Char?): Snapshot {
        valuesOrNull[key] = value
        return this
    }

    fun put(key: String, value: String): Snapshot {
        values[key] = value
        return this
    }

    fun putNullable(key: String, value: String?): Snapshot {
        valuesOrNull[key] = value
        return this
    }

    @JvmName("addNumber")
    fun <T> add(value: KMutableProperty0<T>): Snapshot where T : Number {
        values[value.name] = value.get()
        return this
    }

    @JvmName("addNumberNullable")
    fun <T> addNullable(value: KMutableProperty0<T?>): Snapshot where T : Number? {
        valuesOrNull[value.name] = value.get()
        return this
    }

    @JvmName("addChar")
    fun <T> add(value: KMutableProperty0<T>): Snapshot where T : Char {
        values[value.name] = value.get()
        return this
    }

    @JvmName("addCharNullable")
    fun <T> addNullable(value: KMutableProperty0<T?>): Snapshot where T : Char? {
        valuesOrNull[value.name] = value.get()
        return this
    }

    @JvmName("addString")
    fun <T> add(value: KMutableProperty0<T>): Snapshot where T : String {
        values[value.name] = value.get()
        return this
    }

    @JvmName("addStringNullable")
    fun <T> addNullable(value: KMutableProperty0<T?>): Snapshot where T : String? {
        valuesOrNull[value.name] = value.get()
        return this
    }

    @JvmName("fillNumber")
    fun <T> fill(value: KMutableProperty0<T>): Snapshot where T : Number {
        value.set(values[value.name] as T)
        return this
    }

    @JvmName("fillNumberNullable")
    fun <T> fillNullable(value: KMutableProperty0<T?>): Snapshot where T : Number? {
        value.set(valuesOrNull[value.name] as T)
        return this
    }

    @JvmName("fillChar")
    fun <T> fill(value: KMutableProperty0<T>): Snapshot where T : Char {
        value.set(values[value.name] as T)
        return this
    }

    @JvmName("fillCharNullable")
    fun <T> fillNullable(value: KMutableProperty0<T?>): Snapshot where T : Char {
        value.set(valuesOrNull[value.name] as T)
        return this
    }

    @JvmName("fillString")
    fun <T> fill(value: KMutableProperty0<T>): Snapshot where T : String {
        value.set(values[value.name] as T)
        return this
    }


    @JvmName("fillStringNullable")
    fun <T> fillNullable(value: KMutableProperty0<T?>): Snapshot where T : String? {
        value.set(valuesOrNull[value.name] as T)
        return this
    }

    fun <T> get(key: String) : T {
        val value = values[key]
        if(value == null) {
            throw SnapshotException("Value for variable $key is null. Make sure the value was added to the Snapshot.")
        }
        return value as T
    }

    fun <T> getNullable(key: String) : T? {
        return valuesOrNull[key] as T?
    }

}