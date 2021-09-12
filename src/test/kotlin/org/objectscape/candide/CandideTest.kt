package org.objectscape.candide

import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.objectscape.candide.model.ItemAllValuesNull
import org.objectscape.candide.model.KeyedItem


class CandideTest {

    @BeforeEach
    fun init() {
        println("init")
    }

    @Test
    fun load() {
        val candide = Candide()
        val trx = candide.startTransaction()

        val item : ItemAllValuesNull = trx.load(ItemAllValuesNull::class)
        println(item.varA)

        item.varA = "foo"
        item.varB = 12
        item.varC = 0

        trx.save(item)
        trx.commit()
    }

    @Test
    fun loadWithKeys() {
        val candide = Candide()
        val trx = candide.startTransaction()

        val item = KeyedItem("foo")

        val loadedItem : ItemAllValuesNull = trx.load(KeyedItem::class)
        println(item.varA)

        loadedItem.varA = "foo"
        loadedItem.varB = 12
        loadedItem.varC = 0

        trx.save(item)
        trx.commit()
    }

}