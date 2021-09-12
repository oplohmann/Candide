package org.objectscape.candide

import java.util.concurrent.ConcurrentHashMap
import kotlin.reflect.KClass

class ClassBasedStore {

    private val versionStoreByClass: MutableMap<KClass<out Versionable>, ClassBasedVersionStore> = ConcurrentHashMap()

    fun get(javaClass: KClass<out Versionable>): ClassBasedVersionStore {
        val classBasedVersionStore = versionStoreByClass[javaClass]
        if(classBasedVersionStore == null) {
            val newStore = ClassBasedVersionStore()
            return versionStoreByClass.putIfAbsent(javaClass, newStore) ?: newStore
        }
        return classBasedVersionStore
    }

}