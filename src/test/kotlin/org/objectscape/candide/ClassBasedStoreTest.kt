package org.objectscape.candide

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.objectscape.candide.model.ItemAllValuesNull


class ClassBasedStoreTest {

    @Test
    fun get() {
        val classBasedStore = ClassBasedStore()

        val classBasedVersionStore = classBasedStore.get(ItemAllValuesNull::class)
        val classBasedVersionStoreOther = classBasedStore.get(ItemAllValuesNull::class)

        Assertions.assertTrue(classBasedVersionStore === classBasedVersionStoreOther)
    }

}