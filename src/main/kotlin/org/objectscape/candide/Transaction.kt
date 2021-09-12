package org.objectscape.candide

import java.util.concurrent.atomic.AtomicLong
import kotlin.reflect.KClass

class Transaction {

    private companion object {
        var LastCount = AtomicLong(0)
    }

    private val versionStore: VersionStore
    private val count = LastCount.getAndIncrement()

    constructor(versionStore: VersionStore) {
        this.versionStore = versionStore
    }

    fun <T : Versionable> load(clazz: KClass<out Versionable>): T {
        return versionStore.createNewVersion(clazz, count) as T
    }

    fun <T : Versionable> load(item: T): T {
        return versionStore.createNewVersion(item, count)
    }


    fun save(item: Versionable) {
        versionStore.save(item)
    }

    fun commit() {

    }

}