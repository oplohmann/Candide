package org.objectscape.candide

import org.junit.jupiter.api.Test
import org.objectscape.candide.model.ItemAllValuesNull
import org.objectscape.candide.model.ItemNoneNullable

class ItemsTest {

    @Test
    fun allValuesNull() {
        val itemA = ItemAllValuesNull(null, null, null, null, null, null)
        val snapshot = itemA.toSnapshot()
        itemA.fromSnapshot(snapshot)
        println(snapshot)

        val itemB = ItemAllValuesNull(null, null, 123L, null, null, null)
        val snapshotB = itemB.toSnapshot()

        val restoredItem = ItemAllValuesNull()
        restoredItem.fromSnapshot(snapshotB)
        println(restoredItem)
    }

    @Test
    fun itemNoneNullable() {
        val itemNoneNullable = ItemNoneNullable(123, 45.67f, 123.45,'v', "foo")
        val snapshot = itemNoneNullable.toSnapshot()
        println(snapshot)

        val itemNoneNullableFromSnapshot = ItemNoneNullable()
        itemNoneNullableFromSnapshot.fromSnapshot(snapshot)
        println(itemNoneNullableFromSnapshot)
    }

    @Test
    fun add() {
        val itemNoneNullable = ItemNoneNullable(123, 45.67f, 123.45,'v', "foo")
        val snapshot = itemNoneNullable.toSnapshot()
        println(snapshot)

        val itemNoneNullableFromSnapshot = ItemNoneNullable()
        itemNoneNullableFromSnapshot.fromSnapshot(snapshot)
        println(itemNoneNullableFromSnapshot)
    }

}