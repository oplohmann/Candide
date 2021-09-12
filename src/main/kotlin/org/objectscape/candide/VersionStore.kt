package org.objectscape.candide

import kotlin.reflect.KClass

class VersionStore {

    private val classBasedStore = ClassBasedStore()

    fun save(item: Versionable) {
        classBasedStore.get(item::class)
    }

    fun <T: Versionable> createNewVersion(clazz: KClass<out Versionable>, trxCount: Long): T {
        val newSnapshot = classBasedStore.get(clazz).createNewVersion(trxCount)
        val versionable: T = clazz.java.newInstance() as T
        versionable.fromSnapshot(newSnapshot)
        return versionable
    }

    fun <T: Versionable> createNewVersion(item: T, trxCount: Long): T {
        val keys = item.keys()
        if(keys == null || keys.isEmpty()) {
            // TODO:not yet implemented
        }
        // TODO:not yet implemented
        // val newSnapshot = classBasedStore.get(item.javaClass).createNewVersion(trxCount)
        return item
    }

}