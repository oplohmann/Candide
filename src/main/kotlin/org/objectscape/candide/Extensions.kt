package org.objectscape.candide

fun <T> MutableList<T>.getLast() :T {
    return get(size - 1)
}

fun <T> copyWhenGreater(list: List<T>, threshold: T): List<String> where T : CharSequence, T : Comparable<T>, T : Number {
    return list.filter { it > threshold }.map { it.toString() }
}