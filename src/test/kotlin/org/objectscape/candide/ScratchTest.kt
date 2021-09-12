package org.objectscape.candide

import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.objectscape.candide.scratch.MyMap

class ScratchTest {

    @Test
    fun foo() {
        val foo: Comparable<*>? = "foo"
        val bar: Comparable<*>? = "bar"

        val map : Map<String, Comparable<*>?> = mapOf("foo" to foo, "bar" to bar)
        println(map)
    }

    @Test
    fun myMap() {
        val s: Short = 789
        val ch = 'S'
        val b: Byte = 3
        val myMap = MyMap()
        myMap.put("a", 123)
        myMap.put("b", 123.456f)
        myMap.put("c", 123.456)
        myMap.put("d", s)
        myMap.put("e", ch)
        myMap.put("f", "hello")
        myMap.put("g", 789L)
        myMap.put("h", b)
        // myMap.put("i", ItemA()) does not compile as required
        println(myMap)

        val myMap2 = MyMap()
        myMap2.put("a", 123)
        myMap2.put("b", 123.456f)

        myMap.put("map", myMap2)
        println(myMap)

        var exceptionOccurred = false

        try {
            myMap.put("map", myMap)
        } catch (e: Exception) {
            exceptionOccurred = true
        }

        assertTrue(exceptionOccurred)
    }

}